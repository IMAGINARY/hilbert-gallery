class Exhibit < ApplicationRecord
  validates :year, numericality: { only_integer: true, less_than: 10000 }, allow_blank: true
  validates :city, length: { maximum: 50 }
  validates :region, length: { maximum: 50 }
  validates :country, length: { is: 2 }, allow_blank: true
  validates :country, presence: { message: 'must be specified if the city or region are entered.' }, if: ->(e) { e.city.present? || e.region.present? }
  validates :submitter_name, length: { maximum: 100 }
  validates :submitter_email, length: { maximum: 100 }

  has_one_attached :media_file
  validates :media_file,
            attached: { message: 'must be uploaded to save.' },
            content_type: [:gif, :png, :jpg, :jpeg, :mp4],
            size: { less_than: 100.megabytes , message: 'must be less than 100MB in size.' }

  Gutentag::ActiveRecord.call self

  def country_name
    ISO3166::Country[country]
  end

  def location
    parts = if city.present? && region.present?
              ["#{city} (#{region})"]
            else
              [city, region]
            end
    parts << country_name
    parts.filter { |v| v.present? }.join(', ')
  end

  def tags_as_string
    self.tag_names.join(', ')
  end

  # Split up the provided value by commas and (optional) spaces.
  def tags_as_string=(string)
    self.tag_names = string.split(/,\s*/)
  end

  def image?
    %w[jpg jpeg png].include? media_file.filename.extension.downcase
  end

  def video?
    %w[mp4 webm mov ogv ogg].include? media_file.filename.extension.downcase
  end
end
