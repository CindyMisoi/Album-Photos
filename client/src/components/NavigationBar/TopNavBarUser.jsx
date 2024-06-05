import { useContext, useState } from "react";
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

  const [anchorEle, setAnchorEle] = useState(null);
  const navigate = useNavigate();

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
    <div className="flex justify-between h-16 bg-white shadow-md">
    <div className="flex flex-col ml-4">
      <h2 className="text-xl md:text-xl sm:text-lg font-bold mb-4 text-gray-800">{userName}'s Albums</h2>
    </div>
    <div className="flex justify-center w-full"></div>
    <div className="flex justify-end mr-4">
      <div className="flex items-center">
        <div className="mr-2">
          <Search />
        </div>
        <div className="mr-2">
          <Alert />
        </div>
      </div>
      <div className="flex items-center">
        <div className="mr-2">
          <UserAvatar id={sessionStorage.getItem("userId")} />
        </div>
        <div className="mr-2 mt-1 text-xs">{userState.user.name}</div>
        <div className="cursor-pointer" onClick={handleProfClick}>
          <i className="arrow"></i>
        </div>
      </div>
      <Menu
        className="mt-10"
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
