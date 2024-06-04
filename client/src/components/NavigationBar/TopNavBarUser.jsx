import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import "../../css/Navbar.css";
import UserAvatar from "./UserAvatar";
import { Menu, MenuItem } from "@material-ui/core";
import Search from "../../assets/search";
import Alert from "../../assets/alert";
import { Context as UserContext } from "../context/store/UserStore";
import { useNavigate } from "react-router";

const TopNavBarUser = ({userName}) => {
  const { logout } = useContext(AuthContext);
  const [userState, userdispatch] = useContext(UserContext);

  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEle, setAnchorEle] = useState(null);
  const [openProject, setOpenProject] = useState(false);
  const [openTask, setOpenTask] = useState(false);
  const username = sessionStorage.getItem("username");
  const navigate = useNavigate();

  // useEffect(()=>{
  //   (async()=>{
  //     const user = await apiServer.get("/user")
  //   })();
  // },[])

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
  <div className="top-nav-bar-left" style={{}}>
  <h2 className="text-xl font-bold mb-4 text-gray-800">{userName}'s Albums</h2>
  </div>
  <div className="top-nav-bar-middle"></div>
  <div className="top-nav-bar-right" style={{}}>
    <div
      className="top-nav-icons"
      style={{ display: "flex", alignItems: "center" }}
    >
       <div>
        <Search />
      </div>
      <div>
        <Alert />
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
      <div>
        <p style={{ fontWeight: 500 }}>{userState.user.username}</p>
      </div>
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
      <MenuItem onClick={handleProfCloseAndLogout}>Logout</MenuItem>
    </Menu>
  </div>
</div>

  );
};

export default TopNavBarUser;
