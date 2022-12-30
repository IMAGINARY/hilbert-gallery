class HilbertGallerySequencer
  def initialize(server, key)
    @server = server
    @key = key
  end

  def status
    get(URI.join(@server, '/status'))
  end

  def start(timelineId)
    post(URI.join(@server, "/start/#{timelineId}"))
  end

  def stop
    post(URI.join(@server, '/stop'))
  end

  def display(stationId, exhibit)
    post(URI.join(@server, "/display/#{stationId}/update"), exhibit)
  end

  private

  def get(uri)
    http = Net::HTTP.new(uri.host, uri.port)
    http.open_timeout = 2
    http.read_timeout = 3
    res = http.get(uri, {
      'x-api-key': @key
    })
    return res.is_a?(Net::HTTPSuccess) ? JSON.parse(res.body) : nil
  end

  def post(uri, body = nil)
    http = Net::HTTP.new(uri.host, uri.port)
    http.open_timeout = 2
    http.read_timeout = 3
    req = Net::HTTP::Post.new(uri.request_uri, {
      'x-api-key': @key,
      'Content-Type': 'application/json'
    })
    if body != nil
      req.body = body.to_json
    end
    # req.body = {a: 'juan', b: 'pedro'}.to_json
    res = http.request(req)
    return res.is_a?(Net::HTTPSuccess) ? JSON.parse(res.body) : nil
  end
end
