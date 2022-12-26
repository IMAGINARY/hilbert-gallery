module Api
  module V1
    class StationsController < ActionController::API
      def index
        render json: {
          stations: Station.all.map do |station|
            station_to_json(station)
          end
        }.to_json, status: :ok
      end

      def display_update
        @station = Station.find(params[:id])
        @message = params[:message]

        MediaChannel.broadcast_to(@station.id, @message)
        render json: { result: 'OK' }.to_json, status: :ok
      end

      private

      def station_to_json(station)
        {
          id: station.id,
          name: station.name,
          width: station.width,
          height: station.height
        }
      end
    end
  end
end
