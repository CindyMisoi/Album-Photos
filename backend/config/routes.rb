Rails.application.routes.draw do
  namespace :api do
    resources :users, only: [:index, :show, :destroy] do
      collection do
        # Google signin
        post 'google', to: 'users#google'
        root to: 'users#index'
      end
    end
    resources :sessions, only: [:create, :destroy]
    resources :albums, only: [:index, :show] do
      root to: 'albums#index'
      get 'get_albums_for_user', on: :collection
    end
    resources :photos, only: [:index, :show, :update]
    root to: 'photos#index'
  end
end
