import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiServer from "../api/apiServer";
import TopNavBar from "../NavigationBar/TopNavBarAlbum";

const Photo = () => {
  const { id } = useParams();
  const [photoData, setPhotoData] = useState(null);
  const [newTitle, setNewTitle] = useState("");

  useEffect(() => {
    const fetchPhotoData = async () => {
      try {
        const response = await apiServer.get(`/api/photos/${id}`);
        const photoData = response.data;
        setPhotoData(photoData);
        setNewTitle(photoData.photo_title); // Set initial value for new title input
      } catch (error) {
        console.error("Error fetching photo data:", error);
      }
    };

    fetchPhotoData();
  }, [id]);

  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleTitleEdit = async () => {
    try {
      await apiServer.patch(`/api/photos/${id}`, { photo_title: newTitle });
      // Optionally, update the local state to reflect the changes
      setPhotoData({ ...photoData, photo_title: newTitle });
    } catch (error) {
      console.error("Error updating photo title:", error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <TopNavBar />
      <div className="container mx-auto px-4 py-8">
        {photoData ? (
          <div>
            <h2 className="text-xl font-bold mb-4 text-gray-800">Edit Photo Selected</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg shadow-md p-2 transition duration-300 ease-in-out transform hover:scale-110 relative">
                {/* Editable photo title */}
                <input
                  type="text"
                  value={newTitle}
                  onChange={handleTitleChange}
                  onBlur={handleTitleEdit} // Save changes when focus is lost
                  className="text-md font-semibold border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500 absolute bottom-0 left-0 w-full"
                  style={{ zIndex: 1 }} // Ensure input is above the image
                />
                <p className="text-xs text-gray-500 absolute top-0 right-0 p-2">Created At: {photoData.created_at}</p>
                <div className="aspect-w-1 aspect-h-1">
                  <img src={photoData.image_url} alt={photoData.photo_title} className="object-cover rounded" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading photo data...</p>
        )}
      </div>
    </div>
  );
};

export default Photo;
