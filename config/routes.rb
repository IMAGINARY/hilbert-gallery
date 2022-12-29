Rails.application.routes.draw do
  root 'home#index'
  get 'home/index'

  resources :exhibits

  get 'control_panel', to: 'control_panel#index'

  resources :stations
  get 'display', to: 'stations#display_all'
  get 'display/:id', to: 'stations#display'
  patch 'display/:id/update', to: 'stations#display_update'

  resources :timelines
  # get 'timelines', to: 'timelines#index'
  # get 'timelines/:id', to: 'timelines#view'

  namespace :api, defaults: { format: 'json' } do
    namespace :v1 do
      get 'exhibits/tags', to: 'exhibits#tags'
      resources :exhibits, only: [:index, :show]

      resources :timelines

      patch 'display/:id/update', to: 'stations#display_update'
      resources :stations, only: [:index]

      get 'sequencer/status', to: 'sequencer#status'
      post 'sequencer/stop', to: 'sequencer#stop'
      post 'sequencer/start', to: 'sequencer#start'
      post 'sequencer/display/:id/update', to: 'sequencer#display'
    end
  end

end
