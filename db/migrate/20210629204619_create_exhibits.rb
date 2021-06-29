class CreateExhibits < ActiveRecord::Migration[6.1]
  def change
    create_table :exhibits do |t|
      t.text :caption
      t.text :credits
      t.integer :year
      t.string :city
      t.string :region
      t.string :country
      t.text :notes
      t.string :submitter_name
      t.string :submitter_email

      t.timestamps
    end
  end
end
