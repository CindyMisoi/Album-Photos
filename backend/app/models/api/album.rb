class Api::Album < ApplicationRecord
  belongs_to :api_user, class_name: 'Api::User', foreign_key: 'api_user_id'
  has_many :api_photos, class_name: 'Api::Photo', foreign_key: 'api_album_id', dependent: :destroy
end
