class WorkSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :title, :organization, :length
  belongs_to :user
end
