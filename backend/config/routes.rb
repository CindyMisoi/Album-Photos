Rails.application.routes.draw do
  namespace :api do
    resources :users do
      collection do
        # Google signin
        post 'google', to: 'users#google'
      end
    end
    resources :sessions, only: [:create, :destroy]
    resources :albums do 
      collection do
        # get all albums for a user
        get '/user/:id', to: 'albums#get_ablbums_for_user'
      end
    end
    resources :photos
  end
end
