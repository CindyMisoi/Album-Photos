# seeds.rb

puts "Start seeding..."

# Define the data to be seeded
api_users= [
  { name: "Cindy Misoi", username: "cindy", email: "crmisoi@gmail.com" },
  # Add more user data as needed
]

# Create users within the Api namespace
api_users.each do |user_attributes|
  Api::User.create!(user_attributes)
end

# albums
api_albums= [
  { api_user_id: 1, album_title: "Cindy\'s Photos"},
  # Add more user data as needed
]

# Create albums within the Api namespace
api_albums.each do |album_attributes|
  Api::Album.create!(album_attributes)
end

# photos
api_photos= [
  { api_album_id: 1, photo_title: "Cindy\'s Photo-1", image_url:"https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"},
  # Add more user data as needed
]

# Create photos within the Api namespace
api_photos.each do |photo_attributes|
  Api::Photo.create!(photo_attributes)
end

puts "Finish seeding..."