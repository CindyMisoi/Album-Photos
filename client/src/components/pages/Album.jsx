import React, {useEffect,useState} from 'react'
import TopNavBarAlbum from '../NavigationBar/TopNavBarAlbum';
import { useParams } from "react-router-dom";
import apiServer from "../api/apiServer";
import { Link } from 'react-router-dom';

const Album = () => {
  const { id } = useParams(); // Extract user id from URL params
  const [albumData, setAlbumData] = useState(null);

  useEffect(() => {
    const fetchAlbumData = async () => {
      try {
        const response = await apiServer.get(`/api/albums/${id}`);
        const albumData = response.data;
        console.log(albumData);
        setAlbumData(albumData);
      } catch (error) {
        console.error("Error fetching album data:", error);
      }
    };

    fetchAlbumData();
  }, [id]); // Fetch user data when id changes

  return (
    <div className="bg-gray-100 min-h-screen">
      <TopNavBarAlbum />
      <div className="container mx-auto px-4 py-8">
        {albumData ? (
          <div>
            {/* Display album's photos*/}
            <h2 className="text-xl font-bold mb-4 text-gray-800">All Photos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {albumData.api_photos.map(photo => (
                <Link to={`/photos/${photo.id}`}>
                <div key={photo.id} className="bg-white rounded-lg shadow-md p-2 transition duration-300 ease-in-out transform hover:scale-110">
                  <p className="text-md font-semibold">{photo.photo_title}</p>
                  <p className="text-xs text-gray-500">
                    Created At: {photo.created_at}
                  </p>
                  <div className="aspect-w-1 aspect-h-1">
                    <img
                      src={photo.image_url}
                      alt={photo.photo_title}
                      className="object-cover rounded"
                    />
                  </div>
                </div>
                </Link>
              ))}
            </div>
          </div>   
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
    </div>
  );
};
export default Album