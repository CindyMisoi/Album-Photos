class Api::Photo < ApplicationRecord
  belongs_to :api_album, class_name: 'Api::Album'
end
