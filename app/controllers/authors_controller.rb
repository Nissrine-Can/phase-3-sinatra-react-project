class AuthorsController < ApplicationController
    
    get '/authors' do 
        authors = Author.all 
        authors.to_json(include: [:books])
    end

    get '/authors/:id' do 
        find_author
        @author.to_json(include: [:books])
    end

 private
       def find_author
        @author = Author.find_by_id(params[:id])
       end
end