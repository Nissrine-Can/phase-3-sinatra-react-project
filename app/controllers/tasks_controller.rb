class TasksController < ApplicationController
    # Index route (display a list of tasks)
    get '/tasks' do
        tasks =Task.all 
        tasks.to_json(include: [:type])
      end
end