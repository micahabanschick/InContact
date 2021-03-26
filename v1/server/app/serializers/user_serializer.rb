class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :password, :email
  has_many :works
  has_many :projects
end
