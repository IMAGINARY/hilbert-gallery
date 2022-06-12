class CreateTimelines < ActiveRecord::Migration[6.1]
  def change
    create_table :timelines do |t|
      t.string :title
      t.text :script

      t.timestamps
    end
  end
end
