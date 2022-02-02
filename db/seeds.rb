puts "🌱 Seeding spices..."

# Seed your database here

## Create Authors
A1 = Author.create(name: "Kenard Pak")

## Create books
A1.books.create(title: "Goodbye Autumn, Hello Winter", summary: "How do we know that winter is coming?" )
A1.books.create(title: "Goodbye Summer, Hello Autumn", summary: "How do we know that autumn is coming?" )
A1.books.create(title: "Goodbye Winter, Hello Spring", summary: "How do we know that spring is coming?" )

puts "✅ Done seeding!"
