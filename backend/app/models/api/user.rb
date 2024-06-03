class Api::User < ApplicationRecord#
    has_many :api_albums, class_name: 'Api::Album', foreign_key: 'api_user_id', dependent: :destroy
end
