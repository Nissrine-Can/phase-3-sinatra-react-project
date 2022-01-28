class TypesController < ApplicationController
    # Index route (display a list of types)
    get '/types' do
        types = Type.all
        types.to_json(include: [:tasks])
      end

    # Types show route (display a specific type)
     get '/types/:id' do
         type = Type.find_by(id: params[:id])
         type.to_json(include: :tasks)
       end

end