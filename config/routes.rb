Rails.application.routes.draw do
  root 'home#index'
  get 'home/index'

  resources :exhibits

  get 'control_panel', to: 'control_panel#index'

  get 'stations/demo', to: 'stations#demo'
  get 'stations/:id', to: 'stations#view'
  patch 'stations/:id/update', to: 'stations#update'

  get 'timelines/:id', to: 'timelines#view'

  namespace :api, defaults: { format: 'json' } do
    namespace :v1 do
      get 'exhibits/tags', to: 'exhibits#tags'
      resources :exhibits, only: [:index, :show]
    end
  end

end
