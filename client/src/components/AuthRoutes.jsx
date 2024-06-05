import { useContext,useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../components/pages/Home";
import AlbumsPage from "../components/pages/Albums";
import AlbumPage from "../components/pages/Album";
import UserPage from "../components/pages/User";
import Photo from "./pages/Photo";
import Photos from "./pages/Photos";
import "../css/Navbar.css";
import LeftNavBar from "./NavigationBar/LeftNavBar";
import apiServer from "../components/api/apiServer";
import { Context as UserContext } from "../components/context/store/UserStore";


const AuthRoutes = () => {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);

  const [userState, userdispatch] = useContext(UserContext);

  // //Maybe grab all information here and state goes down to child components?
  const getUserInfo = async () => {
    const id = sessionStorage.getItem("userId");
    const res = await apiServer.get(`api/users/${id}`);
    await userdispatch({ type: "get_user_info", payload: res.data });
  };
  useEffect(() => {
    getUserInfo();
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
            <Route exact path="/" element={<HomePage/>}/>
            <Route exact path="/photos" element={<Photos/>} />
            <Route exact path="/albums" element={<AlbumsPage />} />
            <Route exact path="/photos/:id" element={<Photo/>} />
            <Route exact path="/users/:id" element={<UserPage/>} />
            <Route exact path="/albums/:id" element={<AlbumPage />} />
            <Route path = "*" element = {<h1>404 - Not Found</h1>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default AuthRoutes;