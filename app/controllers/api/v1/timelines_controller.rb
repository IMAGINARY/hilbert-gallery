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
              exhibit_as_playlist_item(exhibits[exhibit['id']], script['options'] || {})
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

      def exhibit_as_playlist_item(exhibit, options = {})
        duration = options['duration'] || 10

        {
          action: 'show',
          args: {
            mimetype: exhibit.media_file.content_type,
            url: url_for(exhibit.media_file),
            fit: 'contain',
            color: playlist_item_color(options),
            transition: playlist_item_transition(options),
            animation: playlist_item_animation,
            duration: duration,
          }
        }
      end

      def playlist_item_color(options = {})
        if options['transition'] == 'fade-white'
          'white'
        else
          'black'
        end
      end

      def playlist_item_transition(options)
        transition = options['transition'] || 'cross-fade'

        case transition
          when 'crossfade'
            {
              type: 'cross-fade',
              options: {
                duration: 1,
                color: 'black',
              },
            }
          when 'fade'
            {
              type: 'fade',
              options: {
                duration: 2,
                color: 'black',
              },
            }
          when 'fade-white'
            {
              type: 'fade',
              options: {
                duration: 2,
                color: 'white',
              },
            }
          else
            {
              type: 'none',
            }
        end
      end

      def playlist_item_animation
        {
          type: 'none',
          options: {},
        }
      end
    end
  end
end
