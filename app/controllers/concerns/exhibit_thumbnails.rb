module ExhibitThumbnails extend ActiveSupport::Concern
  included do
    helper_method :thumbnail_s
  end

  def thumbnail_s(exhibit)
    if exhibit.video?
      exhibit.media_file.preview(resize_to_limit: [300, 300])
    else
      exhibit.media_file.variant(resize_to_limit: [300, 300])
    end
  end
end
