Rails.application.routes.draw do
  root 'home#index'
  get 'home/index'

  resources :exhibits

  get 'control_panel', to: 'control_panel#index'

  resources :stations
  get 'display/:id', to: 'stations#display'
  patch 'display/:id/update', to: 'stations#display_update'

  get 'timelines/:id', to: 'timelines#view'

  namespace :api, defaults: { format: 'json' } do
    namespace :v1 do
      get 'exhibits/tags', to: 'exhibits#tags'
      resources :exhibits, only: [:index, :show]
      patch 'display/:id/update', to: 'stations#display_update'
      resources :stations, only: [:index]
    end
  end

end
