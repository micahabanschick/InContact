Rails.application.routes.draw do
  
  namespace :api do
    namespace :v1 do
    end
  end
  namespace :api do
    namespace :v1 do
      resources :users do 
        resources :works
        resources :projects
      end
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
