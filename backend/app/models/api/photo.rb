class Api::Photo < ApplicationRecord
  belongs_to :api_album, class_name: 'Api::Album', foreign_key: 'api_album_id'end
