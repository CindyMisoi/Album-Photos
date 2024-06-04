import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContextt";
import { Context as UserContext } from "../context/store/UserStore";
import { Context as PhotoContext } from "../context/store/PhotoStore";
import "../../css/Navbar.css";
import UserAvatar from "./UserAvatar";
import { Menu, MenuItem } from "@material-ui/core";
import Search from "../../assets/search";
import Alert from "../../assets/alert";
import { useNavigate } from "react-router";

const TopNavBarPhotos = () => {
  const { logout } = useContext(AuthContext);
  const [userState, userdispatch] = useContext(UserContext);
  const { name } = userState.user;
  const [photoState, photodispatch] = useContext(PhotoContext);

  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEle, setAnchorEle] = useState(null);
  const [openProject, setOpenProject] = useState(false);
  const [openTask, setOpenTask] = useState(false);
  const navigate = useNavigate();

  const clickOpenTask = () => {
    setOpenTask(true);
    handleNewClose();
  };

  const clickCloseTask = () => {
    setOpenTask(false);
  };

  const clickOpenProject = () => {
    setOpenProject(true);
    handleNewClose();
  };
  const clickCloseProject = () => {
    setOpenProject(false);
  };

  const handleNewClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleNewClose = () => {
    setAnchorEl(null);
  };

  const handleProfClick = (event) => {
    setAnchorEle(event.currentTarget);
  };
  const handleProfClose = () => {
    setAnchorEle(null);
  };

  const handleProfCloseAndLogout = () => {
    handleProfClose();
    logout();
    navigate("/")
  }
  return (
    <div className="top-nav-bar-container" style={{}}>
      <div
        className="top-nav-bar-left"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div style={{ fontSize: "20px" }}>{name}'s Photos</div>
      </div>
      <div className="top-nav-bar-middle"></div>
      <div className="top-nav-bar-right" style={{}}>
        <div
          className="top-nav-icons"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div>
            <Alert />
          </div>
          <div>
            <Search />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ padding: "0" }}>
            <UserAvatar id={sessionStorage.getItem("userId")} />
          </div>
          <div>{userState.user.name}</div>
          <div
            onClick={handleProfClick}
            style={{ padding: "0", cursor: "pointer" }}
          >
            <i className="arrow"></i>
          </div>
        </div>

        <Menu
          style={{ marginTop: "40px" }}
          anchorEl={anchorEle}
          keepMounted
          open={Boolean(anchorEle)}
          onClose={handleProfClose}
        >
          <MenuItem onClick={handleProfCloseAndLogout} 
          >Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default TopNavBarPhotos;
