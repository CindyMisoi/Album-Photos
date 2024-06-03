Rails.application.routes.draw do
  namespace :api do
    resources :users do
      collection do
        # Google signin
        post 'google', to: 'users#google'
      end
    end

    resources :sessions, only: [:create, :destroy]
    resources :albums
    resources :photos
  end
end
