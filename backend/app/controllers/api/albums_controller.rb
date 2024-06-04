class Api::AlbumsController < ApplicationController
    # show all albums
    def index
        @albums = Api::Album.all
        render json: @albums, status: :ok
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
