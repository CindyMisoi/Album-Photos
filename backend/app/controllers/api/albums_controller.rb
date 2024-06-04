class Api::AlbumsController < ApplicationController
    # show all albums
    def index
        @albums = Api::Album.all
        if @albums
          render json: @albums.as_json(include: { api_photos: {} }), status: :ok
        else
          render json: { error: 'Albums Not Found' }, status: :not_found 
        end
    end

    #show an album
    def show
      @album = Api::Album.find_by(id: params[:id])
      if @album
        render json: @album.as_json(include: { api_photos: {} }), status: :ok
      else
        render json: { error: 'not Found' }, status: :not_found 
      end
    end

    #get all albums for user
    def get_ablbums_for_user
        user = Api::User.find_by(id: params[:id])
        if user
          albums = user.api_albums
          if albums.any?
            render json: albums, status: :ok
          else
            render json: { error: 'No albums found for this user' }, status: :not_found
          end
        else
          render json: { error: 'User not found' }, status: :not_found
        end
      end      
    
end
