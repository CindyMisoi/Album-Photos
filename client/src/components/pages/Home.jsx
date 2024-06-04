import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import TopNavBarHome from "../NavigationBar/TopNavBarHome";
import apiServer from "../api/apiServer";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users when the component mounts
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      // Fetch users from the API
      const response = await apiServer.get("/api/users");
      const usersData = response.data;
      console.log(usersData);

      // Update the state with the fetched users
      setUsers(usersData);

      // // Fetch albums for each user
      // await Promise.all(usersData.map(fetchUserAlbums));
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <>
      <TopNavBarHome />
      <div className="container mx-auto px-4 py-8 bg-gray-100">
        <h1 className="text-xl font-bold mb-4 text-gray-800">All Users</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user) => (
            <li
              key={user.id}
              className="bg-white rounded-lg shadow-md p-4"
            >
              {/* Make the user name a clickable link */}
              <Link to={`/users/${user.id}`} className="text-md font-semibold text-gray-800 hover:text-slate-500 no-underline">{user.name}</Link>
              <p className="text-xs font-light text-#454138">Total Number of Albums: {user.api_albums.length}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                {user.api_albums.map((album, index) => (
                  <div key={index} className="border rounded overflow-hidden">
                    <img
                      src={album.album_thumbnail}
                      alt={album.album_title}
                      className="w-full h-auto rounded"
                    />
                    <div className="p-2">
                      <p className="font-semibold text-gray-800">{album.album_title}</p>
                      <p className="text-xs text-gray-500">
                        Created At: {album.created_at}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
