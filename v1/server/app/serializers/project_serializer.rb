class ProjectSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :demo, :tools, :length
  belongs_to :user
end
