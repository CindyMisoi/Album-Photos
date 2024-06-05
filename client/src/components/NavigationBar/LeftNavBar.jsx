import { NavLink } from "react-router-dom";
import { RiMenuFoldLine, RiMenuFill } from "react-icons/ri";
import Logo from "../../assets/Logo";
import { Link } from "react-router-dom";
import { IoMdPhotos,IoIosAlbums, IoIosHome } from "react-icons/io";


const LeftNavBar = ({ showSidebar, sidebar }) => {
  return (
<div className={`left-nav-bar-container ${sidebar ? "bg-gray-200" : "bg-gray-100"} sm:w-48 md:w-64 lg:w-64 xl:w-64`}>
 <div className={sidebar? "nav-menu active" : "nav-menu collapsed"}>
      <div className="left-nav-menu-container flex flex-col w-64">
        <div className="left-nav-menu-top flex items-center justify-between px-4 py-3">
          <div className="logo flex items-center">
            <Link to="/">
              <Logo className="w-8 h-8 mr-2 text-white cursor-default" />
            </Link>
          </div>
          <div className="collapse-menu-icon-container">
            {sidebar? (
              <RiMenuFoldLine
                className="text-white text-xl cursor-pointer"
                onClick={showSidebar}
              />
            ) : (
              <RiMenuFill
                className="text-white text-xl cursor-pointer"
                onClick={showSidebar}
              />
            )}
          </div>
        </div>
  
        <div className="main-menu-items-container flex flex-col mt-4">
          <NavLink
            exact
            to="/"
            className={({ isActive }) =>
              isActive? 'left-nav-bar-main-link bg-gray-500 text-white' : 'left-nav-bar-main-link'
            }
          >
            <div className="left-nav-bar-link flex items-center">
              <IoIosHome className="w-6 h-6 mr-2" />
              <p className="left-nav-bar-link-title">Home</p>
            </div>
          </NavLink>
          {/* <NavLink
          to="/users"
          className={({ isActive }) =>
            isActive? 'left-nav-bar-main-link bg-gray-500 text-white' : 'left-nav-bar-main-link'
          }
        >
          <div className="left-nav-bar-link flex items-center">
            <IoIosAlbums className="w-6 h-6 mr-2" />
            <p className="left-nav-bar-link-title">Users</p>
          </div>
        </NavLink> */}
         <NavLink
          to="/photos"
          className={({ isActive }) =>
            isActive? 'left-nav-bar-main-link bg-gray-500 text-white' : 'left-nav-bar-main-link'
          }
        >
          <div className="left-nav-bar-link flex items-center">
            <IoMdPhotos className="w-6 h-6 mr-2" />
            <p className="left-nav-bar-link-title">Photos</p>
          </div>
        </NavLink>
        <NavLink
          to="/albums"
          className={({ isActive }) =>
            isActive? 'left-nav-bar-main-link bg-gray-500 text-white' : 'left-nav-bar-main-link'
          }
        >
          <div className="left-nav-bar-link flex items-center">
            <IoIosAlbums className="w-6 h-6 mr-2" />
            <p className="left-nav-bar-link-title">Albums</p>
          </div>
        </NavLink>
        </div>
      </div>
      </div>
      {sidebar? null : (
        <div
          className="menu-icon"
          style={{
            paddingTop: "25px",
            paddingLeft: "20px",
            paddingBottom: "22px",
            backgroundColor: "white",
          }}
        >
          <RiMenuFill
            style={{
              fontSize: "24px",
              cursor: "pointer",
            }}
            onClick={showSidebar}
          />
        </div>
      )}
  </div>
  );
};

export default LeftNavBar;
