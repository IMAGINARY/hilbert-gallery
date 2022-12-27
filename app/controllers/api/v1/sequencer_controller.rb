module Api
  module V1
    class SequencerController < ActionController::API
      def status
        render json: sequencer.status, status: :ok
      end

      def start
        render json: sequencer.start(JSON.parse(request.body.read)), status: :ok
      end

      def stop
        render json: sequencer.stop, status: :ok
      end

      def display
        render json: sequencer.display(params[:id], JSON.parse(request.body.read)), status: :ok
      end

      private

      def sequencer
        HilbertGallerySequencer.new(
          Rails.configuration.x.sequencer_api_url,
          HilbertGallery::Application.credentials.hilbert_sequencer_api_key
        )
      end
    end
  end
end
