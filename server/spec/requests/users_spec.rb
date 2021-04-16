require 'rails_helper'

RSpec.describe "Users", type: :request do

  let(:user) {User.create(name: "user", password: "user_password")}
  
  describe "GET users#show" do
    it "should get the show page" do
      get "/api/v1/users/#{user.id}"
      expect(response).to have_http_status(200)
    end
  end

end
