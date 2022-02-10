class BooksController < ApplicationController
    get '/books' do
        @books = Book.all 
        @books.to_json(include: [:author])
      end
    
    post '/books' do 
      errors = []
       @author =Author. find_or_create_by(name: params[:author][:name])

       unless @author.id
         errors = errors.concat(@author.errors.full_messages)
       end
       #associated build
       @book = @author.books.build(params[:book])

       if @author.id && @book.save
        @book.to_json(include: [:author])
       elsif !@author.id && !@book.valid?
         { errors: errors.concat(@book.errors.full_messages )}.to_json
         elsif !@author.id && @book.valid?
            { errors: errors }.to_json
       else
        { errors: @book.errors.full_messages }.to_json
       end

    end

       delete '/books/:id' do
        find_book
        if @book
        @book.destroy
        @book.to_json
        else
            {errors: ["Book doesn't exist"]}.to_json
        end
       end
       

      private
         def find_book
            @book = Book.find_by_id(params[:id])
         end
end