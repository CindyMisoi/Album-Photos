class Api::PhotosController < ApplicationController
     # show all photos
     def index
        @photos = Api::Photo.all
        render json: @photos, status: :ok
    end
end
