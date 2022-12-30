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

      def playlist
        @timeline = Timeline.find(params[:id])
        if @timeline.script
          script = JSON.parse(@timeline.script)
          exhibits = Timeline.all_exhibits_h(script)

          playlist = script['sequences'].transform_values do |stationSeq|
            stationSeq['sequence'].map do |exhibit|
              exhibit_as_playlist_item(exhibits[exhibit['id']])
            end
          end
        else
          playlist = {}
        end

        render json: playlist, status: :ok
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

      def exhibit_as_playlist_item(exhibit)
        {
          action: 'show',
          args: {
            mimetype: exhibit.media_file.content_type,
            url: url_for(exhibit.media_file),
            fit: 'contain',
            color: 'black',
            transition: {
              type: 'cross-fade',
              options: {
                duration: 1,
                color: 'black',
              },
            },
            animation: {
              type: 'none',
              options: {},
            },
            duration: exhibit.video? ? 20 : 10,
          }
        }
      end
    end
  end
end
