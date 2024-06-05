import { useEffect, useState } from "react";
import TopNavBarPhotos from "../NavigationBar/TopNavBarPhotos";
import apiServer from "../api/api"; // Import your api server
import { Link } from "react-router-dom";

const Albums = () => {
  const [photosData, setPhotosData] = useState([]);

  useEffect(() => {
    const fetchPhotosData = async () => {
      try {
        const response = await apiServer.get(`/api/photos`);
        const photosData = response.data;
        console.log(photosData);
        // Sort albums by creation date (assuming the API response contains a 'createdAt' field)
        photosData.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        setPhotosData(photosData);
      } catch (error) {
        console.error('Error fetching photos data:', error);
      }
    };

    fetchPhotosData();
  }, []); // Fetch photos data when component mounts

  return (
    <div className="bg-gray-100 min-h-screen">
      <TopNavBarPhotos/>
      <div className="container mx-auto px-4 py-8">
      {photosData? (
          <div>
            {/* Display user's albums */}
            {photosData.length > 0? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {photosData.map(photo => (
                  <Link
                    key={photo.id}
                    to={`/albums/${photo.id}`}
                    className="bg-white rounded-lg shadow-md p-2 transition duration-300 ease-in-out transform hover:scale-110"
                  >
                    <p className="text-md font-semibold">{photo.photo_title}</p>
                    <p className="text-xs text-gray-500">Created At: {photo.created_at}</p>
                    <div className="aspect-w-1 aspect-h-1">
                      <img
                        src={photo.image_url}
                        alt={photo.photo_title}
                        className="object-cover rounded"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p>No photos.</p>
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
