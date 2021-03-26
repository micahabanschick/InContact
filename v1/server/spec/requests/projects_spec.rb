require 'rails_helper'

RSpec.describe "Projects", type: :request do

  let(:user) {User.create(name: "user", password: "user_password")}
  let(:project) {Project.create}
  
  
  describe "GET projects#index" do
    it "should get index" do
      get "/api/v1/users/#{user.id}/projects"
      expect(response).to have_http_status(200)
    end
  end
  
  describe "GET projects#show" do
    it "should get the show page" do
      get "/api/v1/users/#{user.id}/projects/#{project.id}"
      expect(response).to have_http_status(200)
    end
  end
  
end
