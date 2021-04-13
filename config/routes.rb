Rails.application.routes.draw do
  root 'home#index'

  get 'home/index'

  get 'control_panel', to: 'control_panel#index'

  get 'stations/:id', to: 'stations#view'
  patch 'stations/:id/update', to: 'stations#update'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
