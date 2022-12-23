class AddRevisionFieldsToTimeline < ActiveRecord::Migration[6.1]
  def change
    add_column :timelines, :revision, :integer, default: 0
    add_column :timelines, :client_version, :integer, default: 0
  end
end
