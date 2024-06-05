import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TopNavBarUser from '../NavigationBar/TopNavBarUser';
import apiServer from '../api/apiServer';
import { Link } from 'react-router-dom';

const User = () => {
  const { id } = useParams(); // Extract user id from URL params
  const [userData, setUserData] = useState(null);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await apiServer.get(`/api/users/${id}`);
        const userData = response.data;
        console.log(userData);
        setUserData(userData);
        setUserName(userData ? userData.username : '');
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [id]); // Fetch user data when id changes

  return (
    <div className="bg-gray-100 min-h-screen">
      <TopNavBarUser userName={userName} />
      <div className="container mx-auto px-4 py-8">
        {userData ? (
          <div>
            {/* Display user's albums */}
            {userData.api_albums.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {userData.api_albums.map(album => (
                  <Link to={`/albums/${album.id}`} key={album.id}>
                    <div className="bg-white rounded-lg shadow-md p-2 transition duration-300 ease-in-out transform hover:scale-110">
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
                  </Link>
                ))}
              </div>
            ) : (
              <p>No albums for this user.</p>
            )}
          </div>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
    </div>
  );
};

export default User;
