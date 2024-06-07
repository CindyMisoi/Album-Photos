Rails.application.routes.draw do
  namespace :api do
    root to: 'users#index', via: [:get, :head]
    resources :users, only: [:index, :show, :destroy] do
      collection do
        # Google signin
        post 'google', to: 'users#google'
      end
    end
    resources :sessions, only: [:create, :destroy]
    resources :albums, only: [:index, :show] do
      get 'get_albums_for_user', on: :collection
    end
    resources :photos, only: [:index, :show, :update]
  end
end
