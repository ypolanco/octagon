Rails.application.routes.draw do
  resources :venues
  resources :events
  resources :users

  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
end
