class BooksController < ApplicationController
    get '/books' do
        @books = Book.all 
        @books.to_json(include: [:author])
      end
    
    post '/books' do 
       @author =Author. find_or_create_by(name: params[:author][:name])
       #associated build
       @book = @author.books.build(params[:book])

       if @book.save
        @book.to_json(include: [:author])
       else
        { errors: @book.errors.full_messages }.to_json
       end
    end


      private
         def find_book
            @book = Book.find_by_id(params[:id])
         end
end