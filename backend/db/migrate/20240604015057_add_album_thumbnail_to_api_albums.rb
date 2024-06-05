class AddAlbumThumbnailToApiAlbums < ActiveRecord::Migration[7.0]
  def change
    add_column :api_albums, :album_thumbnail, :string
  end
end
