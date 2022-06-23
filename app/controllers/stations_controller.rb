class StationsController < ApplicationController
  def view
    @id = params[:id]
  end

  def update
    @id = params[:id]
    @message = params[:message]

    MediaChannel.broadcast_to(@id, @message);
    render json: { result: "OK" }.to_json, status: :ok
  end
end
