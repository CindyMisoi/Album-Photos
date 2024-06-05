import { useEffect, useState } from "react";
import TopNavBarAlbums from "../NavigationBar/TopNavBarAlbums";
import apiServer from "../api/api"; // Import your api server

const Albums = () => {
  const [albumsData, setAlbumsData] = useState([]);

  useEffect(() => {
    const fetchAlbumsData = async () => {
      try {
        const response = await apiServer.get(`/api/albums`);
        const albumsData = response.data;
        console.log(albumsData);
        // Sort albums by creation date (assuming the API response contains a 'createdAt' field)
        albumsData.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        setAlbumsData(albumsData);
      } catch (error) {
        console.error('Error fetching album data:', error);
      }
    };

    fetchAlbumsData();
  }, []); // Fetch album data when component mounts

  return (
    <div className="bg-gray-100 min-h-screen">
      <TopNavBarAlbums/>
      <div className="container mx-auto px-4 py-8">
        {albumsData ? (
          <div>
            {/* Display user's albums */}
            {albumsData.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {albumsData.map(album => (
                    <div key={album.id} className="bg-white rounded-lg shadow-md p-2 transition duration-300 ease-in-out transform hover:scale-110">
                      <p className="text-md font-semibold">{album.album_title}</p>
                      <p className="text-xs text-gray-500">Created At: {album.created_at}</p>
                      <div className="aspect-w-1 aspect-h-1">
                        <img
                          src={album.album_thumbnail}
                          alt={album.album_title}
                          className="object-cover rounded"
                        />
                      </div>
                    </div>
                ))}
              </div>
            ) : (
              <p>No albums.</p>
            )}
          </div>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
    </div>
  );
};
export default Albums;
