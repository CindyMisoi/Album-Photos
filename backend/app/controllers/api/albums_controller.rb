class Api::AlbumsController < ApplicationController
       # show all albums
       def index
        @albums = Api::Album.all
        render json: @albums, status: :ok
    end
end
