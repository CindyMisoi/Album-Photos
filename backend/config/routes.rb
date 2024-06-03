Rails.application.routes.draw do
  namespace :api do
    resources :users do
      collection do
        post 'google', to: 'users#google'
      end
    end
    resources :albums
    resources :photos
  end
end
