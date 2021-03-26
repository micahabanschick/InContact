class WorkSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :organization, :length
  belongs_to :user
end
