class Api::UsersController < ApplicationController
    skip_before_action :verify_authenticity_token
    require 'googleauth/id_tokens'
  
    def google
      token = params[:token]
    
      begin
        # Verify JWT token
        payload = Google::Auth::IDTokens.verify_oidc(token, aud: ENV['GOOGLE_CLIENT_ID'])
    
        # Check audience claim
        if payload['aud'] != ENV['GOOGLE_CLIENT_ID']
          render json: { error: 'Invalid audience' }, status: :unauthorized
          return
        end
    
        # Check issuer claim
        if payload['iss'] != 'https://accounts.google.com'
          render json: { error: 'Invalid issuer' }, status: :unauthorized
          return
        end
    
        # Extract user data from token
        email = payload['email']
        name = payload['name']
        username = payload['given_name']
    
        # Find or create the user
        user = Api::User.find_or_initialize_by(email: email)
        user.name = name
        user.username = username
    
        if user.save
          # Generate JWT token for the user
          auth_token = generate_jwt_token(user)
          render json: { authToken: auth_token, user: user }, status: :ok
        else
          render json: { error: 'User could not be saved' }, status: :unprocessable_entity
        end
      rescue Google::Auth::IDTokens::VerificationError
        # Handle invalid token
        render json: { error: 'Invalid token' }, status: :unauthorized
      end
    end
  
    # show all users
    def index
      @users = Api::User.all
      render json: @users, status: :ok
    end

    # autologin
    def show
      if request.headers['Authorization']
        token = request.headers['Authorization']&.split(' ')&.last
        user = User.find_by(auth_token: token)
        
        if user
          render json: user, status: :ok
          return
        end
      end
    
      render json: { error: 'Unauthorized' }, status: :unauthorized
    end
    

  # delete user
    def destroy
        user = Api::User.find(params[:id])
    
        if user.nil?
        render json: { error: 'User not found' }, status: :not_found
        return
        end
    
        # Find and destroy associated albums and photos
        user.api_albums.each do |album|
        album.api_photos.destroy_all # Destroy associated photos
        album.destroy # Destroy the album
        end
    
        # Then, delete the user
        user.destroy
    
        head :no_content
    end
  
    
  
    private
    
    def generate_jwt_token(user)
      # Generate JWT token (example)
      JWT.encode({ api_user_id: user.id, exp: 1.hour.from_now.to_i }, Rails.application.secret_key_base)
    end  
  end
  