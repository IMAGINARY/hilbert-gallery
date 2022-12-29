module Api
  module V1
    class TimelinesController < ActionController::API
      def index
        @timelines = Timeline.all
        render json: @timelines, status: :ok
      end

      def show
        @timeline = Timeline.find(params[:id])
        render json: @timeline, status: :ok
      rescue ActiveRecord::RecordNotFound
        content_not_found
      end

      def update
        @timeline = Timeline.find(params[:id])
        if @timeline.update(timeline_params)
          render json: @timeline, status: :ok
        else
          render json: { errors: @timeline.errors }, status: :unprocessable_entity
        end
      rescue ActiveRecord::RecordNotFound
        content_not_found
      end

      def content_not_found
        render json: { errors: ['Timeline not found'] }, :status => 404
      end

      private

      def timeline_params
        params.require(:timeline).permit(:id, :title, :script, :revision, :client_version)
      end
    end
  end
end
