require 'rails_helper'

RSpec.describe User, type: :model do
  
  context 'validation test' do
    it 'ensures name is presence' do
      user = User.new(password: '123', email: 'sample@example.com').save
      expect(user).to eq(false)
    end
  end 

end
