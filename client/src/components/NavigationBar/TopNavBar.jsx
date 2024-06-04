import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import "../../css/Navbar.css";
import UserAvatar from "./UserAvatar";
import { Menu, MenuItem } from "@material-ui/core";
import Search from "../../assets/search";
import Alert from "../../assets/alert";
import { Context as UserContext } from "../context/store/UserStore";
import { useNavigate } from "react-router";

const TopNavBar = ({ name }) => {
  const { logout } = useContext(AuthContext);

  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEle, setAnchorEle] = useState(null);
  const [openProject, setOpenProject] = useState(false);
  const [openTask, setOpenTask] = useState(false);
  const [userState, userdispatch] = useContext(UserContext);
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
  return(
  <div class="flex justify-between h-16 bg-white shadow-md">
  <div class="flex flex-col ml-4">
    <h2 class="text-xl md:text-xl sm:text-lg font-bold mb-4 text-gray-800">Edit Photo </h2>
  </div>
  <div class="flex justify-center w-full"></div>
  <div class="flex justify-end mr-4">
    <div class="flex items-center">
      <div class="mr-2">
        <Search />
      </div>
      <div class="mr-2">
        <Alert />
      </div>
    </div>
    <div class="flex items-center">
      <div class="mr-2">
        <UserAvatar id={sessionStorage.getItem("userId")} />
      </div>
      <div class="mr-2">{userState.user.name}</div>
      <div class="cursor-pointer" onClick={handleProfClick}>
        <i class="arrow"></i>
      </div>
    </div>
    <Menu
      class="mt-10"
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
export default TopNavBar;
