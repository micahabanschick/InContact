class User < ApplicationRecord
    has_many :works 
    has_many :projects 
end
