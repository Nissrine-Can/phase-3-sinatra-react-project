class Author < ActiveRecord::Base 
    has_many :books

    validates :name, presence: true, uniqueness: true
end
