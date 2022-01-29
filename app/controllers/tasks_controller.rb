class TasksController < ApplicationController
    # Index route (display a list of tasks)
    get '/tasks' do
        tasks =Task.all 
        tasks.to_json(include: [:type])
      end
    # Create a new task
    post '/tasks' do 
      type = Type.find_or_create_by(name: params[:type][:name])
      task = type.tasks.build(params[:task])

     if task.save
      task.to_json(include: [:type])
     else
      { errors: task.errors.full_messages }.to_json
     end
end

# Destroy a specific task
delete '/tasks/:id' do
  task = Task.find_by_id(params[:id])
  if task
    task.destroy
    task.to_json
  else
    {errors: ["Task doesn't exist"]}
end
end

end