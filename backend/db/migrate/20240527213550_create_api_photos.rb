class CreateApiPhotos < ActiveRecord::Migration[7.0]
  def change
    create_table :api_photos do |t|
      t.references :api_album, null: false, foreign_key: true
      t.string :photo_title
      t.string :image_url

      t.timestamps
    end
  end
end
