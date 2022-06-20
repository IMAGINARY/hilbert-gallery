module Api
  module V1
    class ExhibitsController < ActionController::API
      include ExhibitThumbnails

      def index
        exhibits = if params[:tag].nil?
                     Exhibit.all
                   else
                     Exhibit.tagged_with(:names => params[:tag].split(','), :match => :all)
                   end
        render json: {
          exhibits: exhibits.map do |exhibit|
            exhibit_to_json_basic(exhibit)
          end
        }.to_json, status: :ok
      end

      def show
        exhibit = Exhibit.find(params[:id])
        render json: exhibit_to_json(exhibit), status: :ok
      end

      def tags
        render json: {
          tags: Gutentag::Tag.names_for_scope(Exhibit)
        }.to_json, status: :ok
      end

      def exhibit_to_json_basic(exhibit)
        {
          id: exhibit.id,
          caption: exhibit.caption,
          year: exhibit.year,
          city: exhibit.city,
          region: exhibit.region,
          country: exhibit.country,
          tags: exhibit.tag_names,
          is_video: exhibit.video?,
          created_at: exhibit.created_at,
          updated_at: exhibit.updated_at,
          thumbnail: url_for(thumbnail_s(exhibit)),
        }.reject { |i, v| v === '' || v.nil? }
      end

      def exhibit_to_json(exhibit)
        exhibit_to_json_basic(exhibit).merge(
        {
          credits: exhibit.credits,
          notes: exhibit.notes,
          file_type: exhibit.media_file.content_type,
          file_url: url_for(exhibit.media_file),
          submitter_name: exhibit.submitter_name,
          submitter_email: exhibit.submitter_email,
        }).reject { |i, v| v === '' || v.nil? }
      end
    end
  end
end