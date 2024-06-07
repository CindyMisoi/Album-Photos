puts "Start seeding..."

# Define the data to be seeded for users
# api_users = [
#   # Add more user data as needed
# ]

# Create users within the Api namespace
# api_users.each do |user_attributes|
#   Api::User.create!(user_attributes)
# end

# Define the data to be seeded for albums
api_albums = [
  { api_user_id: 3, album_title: "Cindy's Photos", album_thumbnail: "https://images.unsplash.com/photo-1594737996820-af7654631790?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmxhY2slMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D" }
  # Add more album data as needed
]

# Create albums within the Api namespace
api_albums.each do |album_attributes|
  Api::Album.create!(album_attributes)
end

# Define the data to be seeded for photos
api_photos = [
  { api_album_id: Api::Album.find_by(album_title: "Cindy's Photos").id, photo_title: "Cindy's Photo-1", image_url: "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg" },
  # Add more photo data as needed
]

# Create photos within the Api namespace
api_photos.each do |photo_attributes|
  Api::Photo.create!(photo_attributes)
end

puts "Finish seeding..."
