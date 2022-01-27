puts "🌱 Seeding spices..."

# Seed your database here

## Create Types (categories)
t1 = Type.create(name: "School")

t2 = Type.create(name: "Home")

## Create Tasks
t1.tasks.create(title: "Attend a Zoom lecture")
t1.tasks.create(title: "Finish lab")
t1.tasks.create(title: "Work on projrct")

t2.tasks.create(title: "Laundry")
t2.tasks.create(title: "Dishes")

puts "✅ Done seeding!"
