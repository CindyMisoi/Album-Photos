class Api::User < ApplicationRecord#
    has_many :api_albums, class_name: 'Api::Album'
end
