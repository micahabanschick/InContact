require 'rails_helper'

RSpec.describe Work, type: :model do
  
  let(:user) {User.create(name: "user", password: "user_password")}
  
  context 'validation test' do
    it 'ensures title is presence' do
      work = Work.new(organization: "Some company", length: "1999-09-09", user_id: user.id).save
      expect(work).to eq(false)
    end
  end

end
