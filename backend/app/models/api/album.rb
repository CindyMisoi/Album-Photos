class Api::Album < ApplicationRecord
  belongs_to :api_user, class_name: 'Api::User'
  has_many :photos, class_name: 'Api::Photo'
end
