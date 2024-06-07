Rails.application.routes.draw do
  root 'welcome#index', via: [:get, :head] # handle both GET and HEAD requests
  namespace :api do
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
