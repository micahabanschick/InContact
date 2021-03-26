class ProjectSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :title, :description, :demo, :tools, :length
  belongs_to :user
end
