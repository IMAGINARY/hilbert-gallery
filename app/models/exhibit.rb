class Exhibit < ApplicationRecord
  validates :year, numericality: { only_integer: true, less_than: 10000 }, allow_blank: true
  validates :city, length: { maximum: 50 }
  validates :region, length: { maximum: 50 }
  validates :country, length: { is: 2 }, allow_blank: true
  validates :country, presence: { message: 'You must specify a country if the city or region are entered.' }, if: ->(e) { e.city.present? || e.region.present? }
  validates :submitter_name, length: { maximum: 100 }
  validates :submitter_email, length: { maximum: 100 }

  has_one_attached :media_file
  validates :media_file,
            attached: { message: 'You must add a media file' },
            content_type: [:gif, :png, :jpg, :jpeg, :mp4],
            size: { less_than: 100.megabytes , message: 'must be less than 100MB in size' }

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
end
