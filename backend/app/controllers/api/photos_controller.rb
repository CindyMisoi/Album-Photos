class Api::PhotosController < ApplicationController
    skip_before_action :verify_authenticity_token
     # show all photos
     def index
        @photos = Api::Photo.all
        if @photos
        render json: @photos, status: :ok
        else
            render json: { error: 'not Found' }, status: :not_found 
        end
    end
    def show
        @photo = Api::Photo.find_by(id: params[:id])
        if @photo
          render json: @photo, status: :ok
        else
          render json: { error: 'not Found' }, status: :not_found 
        end
      end
    # PATCH /api/photos/:id
    def update
        @photo = Api::Photo.find_by(id: params[:id])
    
        if @photo
        if @photo.update(photo_params)
            render json: @photo, status: :ok
        else
            render json: { error: 'Unable to update photo' }, status: :unprocessable_entity
        end
        else
        render json: { error: 'Photo not found' }, status: :not_found
        end
    end

      private

        def photo_params
        params.require(:photo).permit(:photo_title)
        end

    
end
