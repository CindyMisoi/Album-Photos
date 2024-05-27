class CreateApiAlbums < ActiveRecord::Migration[7.0]
  def change
    create_table :api_albums do |t|
      t.references :api_user, null: false, foreign_key: true
      t.string :album_title

      t.timestamps
    end
  end
end
