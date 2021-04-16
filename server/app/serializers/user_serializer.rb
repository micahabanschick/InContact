class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :password, :email
  has_many :works
  has_many :projects
end
