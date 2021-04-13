class MediaChannel < ApplicationCable::Channel
  def subscribed
    stream_for params[:category_id]
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def update

  end
end
