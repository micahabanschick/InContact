require 'rails_helper'

RSpec.describe Project, type: :model do

  let(:user) {User.create(name: "user", password: "user_password")}
  
  context 'validation test' do
    it 'ensures title is presence' do
      project = Project.new(description: "will it succeed?", demo: "link", tools: "tools", length: "1999-09-09", user_id: user.id).save
      expect(project).to eq(false)
    end
  end

end
