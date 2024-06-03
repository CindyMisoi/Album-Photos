class Api::SessionsController < ApplicationController
  # Skip CSRF protection for session creation
  skip_before_action :verify_authenticity_token, only: [:create, :destroy]

# POST /api/sessions (login)
def create
  email = params[:email]
  user = Api::User.find_by(email: email)

  if user
    session[:api_user_id] = user.id
    render json: { user: user, message: 'Logged in successfully' }, status: :ok
  else
    render json: { error: 'User not found' }, status: :not_found
  end
end

  # DELETE /logout
  def destroy
    session[:api_user_id] = nil
    render json: { message: 'Logged out successfully' }, status: :ok
  end

end

