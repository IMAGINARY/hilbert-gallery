# frozen_string_literal: true

class HilbertGallerySequencer
  def initialize(server, key)
    @server = server
    @key = key
  end

  def status
    get(URI.join(@server, '/status'))
  end

  def start(timeline_id)
    post(URI.join(@server, "/start/#{timeline_id}"))
  end

  def stop
    post(URI.join(@server, '/stop'))
  end

  def display(station_id, exhibit)
    post(URI.join(@server, "/display/#{station_id}/update"), exhibit)
  end

  private

  def get(uri)
    http = Net::HTTP.new(uri.host, uri.port)
    http.open_timeout = 2
    http.read_timeout = 3
    res = http.get(uri, {
                     'x-api-key' => @key
                   })
    res.is_a?(Net::HTTPSuccess) ? JSON.parse(res.body) : nil
  end

  def post(uri, body = nil)
    http = Net::HTTP.new(uri.host, uri.port)
    http.open_timeout = 2
    http.read_timeout = 3
    req = Net::HTTP::Post.new(uri.request_uri, {
                                'x-api-key' => @key,
                                'Content-Type' => 'application/json'
                              })
    req.body = body.to_json unless body.nil?
    # req.body = {a: 'juan', b: 'pedro'}.to_json
    res = http.request(req)
    res.is_a?(Net::HTTPSuccess) ? JSON.parse(res.body) : nil
  end
end
