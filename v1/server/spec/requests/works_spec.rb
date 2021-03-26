require 'rails_helper'

RSpec.describe "Works", type: :request do
  
  let(:user) {User.create(name: "user", password: "user_password")}
  
  describe "GET works#index" do
    it "should get index" do
      get "/api/v1/users/#{user.id}/works"
      expect(response).to have_http_status(200)
    end
  end

end
