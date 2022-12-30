class Timeline < ApplicationRecord
  validates :title, length: { maximum: 50 }
  validates :revision, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
  validates :client_version, numericality: { only_integer: true, greater_than_or_equal_to: 0 }

  def as_playlist
    script = JSON.parse(self.script)
    exhibits = all_exhibits_h(script)

    script['sequences'].transform_values do |stationSeq|
      stationSeq['sequence'].map do |exhibit|
        exhibit_as_playlist_item(exhibits[exhibit['id']])
      end
    end
  end

  def self.all_exhibits_h(script)
    Exhibit.where(id: all_exhibit_ids(script)).map { |e| [e.id.to_s, e] }.to_h
  end

  def self.all_exhibit_ids(script)
    script['sequences'].entries.map do |station, stationSeq|
      stationSeq['sequence'].map do |exhibit|
        exhibit['id']
      end
    end.flatten.uniq
  end
end
