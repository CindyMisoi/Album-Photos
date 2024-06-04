import React, { useState, useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../components/pages/Home";
import AlbumsPage from "../components/pages/Albums";
import AlbumPage from "../components/pages/Album";
import UserPage from "../components/pages/User";
import NewPhotosPage from "../components/pages/Photos";
import "../css/Navbar.css";
import LeftNavBar from "./NavigationBar/LeftNavBar";

import { Context as UserContext } from "./context/store/UserStore";
import { Context as PhotoContext } from "./context/store/PhotoStore";
import { Context as AlbumContext } from "./context/store/AlbumStore";

import apiServer from "../components/api/apiServer";

const AuthRoutes = () => {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);
  const [photoState, photodispatch] = useContext(PhotoContext);
  const [userState, userdispatch] = useContext(UserContext);
  const [albumState, albumdispatch] = useContext(AlbumContext);

  // //Maybe grab all information here and state goes down to child components?
  const getUserInfo = async () => {
    const id = sessionStorage.getItem("userId");
    const res = await apiServer.get(`api/users/${id}`);
    await userdispatch({ type: "get_user_info", payload: res.data });
  };

  // // come back to this
  // const getAlbumPhotos = async () => {
  //   const id = sessionStorage.getItem("albumId");
  //   const res = await apiServer.get(`/api/photos`);
  //   await photodispatch({ type: "get_user_photos", payload: res.data });
  // };

  // const getUserAlbums = async () => {
  //   const id = sessionStorage.getItem("userId");
  //   const res = await apiServer.get(`/api/albums`);
  //   await albumdispatch({
  //     type: "get_user_albums",
  //     payload: res.data,
  //   });
  // };

  useEffect(() => {
    getUserInfo();
    // getAlbumPhotos();
    // getUserAlbums();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="overlay">
      <BrowserRouter>
        <LeftNavBar showSidebar={showSidebar} sidebar={sidebar} />
        <div
          className={
            sidebar
              ? "overlay-right-container"
              : "overlay-right-container__short"
          }
        >
          <Routes>
            <Route exact path="/" element={<HomePage/>} />
            <Route exact path="/photos" element={<NewPhotosPage/>} />
            <Route exact path="/albums" element={<AlbumsPage />} />
            <Route exact path="/users/:userId" element={<UserPage/>} />
            <Route exact path="/albums/:albumId" element={<AlbumPage />} />
            <Route path = "*" element = {<h1>404 - Not Found</h1>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default AuthRoutes;