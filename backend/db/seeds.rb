puts "Start seeding..."

# Check if the database is already seeded
if Api::User.count == 0
  # Define the data to be seeded for users
  api_users = [
    { id: 1, name: "Cynthia Misoi", username: "Cynthia", email: "crmisoi2k@gmail.com" },
    # Add more user data as needed
  ]

  # Create users within the Api namespace
  api_users.each do |user_attributes|
    Api::User.create!(user_attributes)
  end

  # Define the data to be seeded for albums
  api_albums = [
    { api_user_id: 1, album_title: "Cynthia's Photos", album_thumbnail: "https://images.unsplash.com/photo-1594737996820-af7654631790?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmxhY2slMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D" },
    { api_user_id: 1, album_title: "Cat Photos" , album_thumbnail: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0fGVufDB8fDB8fHww"},
    { api_user_id: 1, album_title: "Dog Photos", album_thumbnail: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nfGVufDB8fDB8fHww" },
    # Add more album data as needed
  ]

  # Create albums within the Api namespace
  api_albums.each do |album_attributes|
    Api::Album.create!(album_attributes)
  end

  # Define the data to be seeded for photos
  api_photos = [
    { api_album_id: Api::Album.find_by(album_title: "Cynthia's Photos").id, photo_title: "Cindy's Photo-1", image_url: "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg" },
    # Add more photo data as needed
  ]

  # Create photos within the Api namespace
  api_photos.each do |photo_attributes|
    Api::Photo.create!(photo_attributes)
  end
end

puts "Finish seeding..."