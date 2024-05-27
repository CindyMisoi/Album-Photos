class Api::UsersController < ApplicationController
    # show all users
    def index
        @users = Api::User.all
        render json: @users, status: :ok
    end
end
