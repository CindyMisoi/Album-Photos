import React, {useContext, useState} from "react";
import { Context as UserContext } from "../context/store/UserStore";
import { Context as PhotoContext } from "../context/store/PhotoStore";
import { Context as AlbumContext } from "../context/store/AlbumStore";
// import TaskItemHome from "../tasks/TaskItemHome";
import TopNavBarAlbums from "../NavigationBar/TopNavBarHome";
// import ProjectTile from "../projects/ProjectTile";
// import NewProjectTile from "../projects/NewProjectTile";
import Add from "../../assets/Add";
import { Link } from "react-router-dom";
// import AddProjectPopOut from "../PopOutMenu/AddProjectPopOut";
// import AddTaskPopOutTaskPage from "../PopOutMenu/AddTaskPopOutTaskPage";
// import PopOutTaskDetailsHome from "../PopOutMenu/PopOutTaskDetailsHome";

const Albums = () => {
  // debugger;
  const [userState] = useContext(UserContext);
  const [photoState] = useContext(PhotoContext);
  const [albumState] = useContext(AlbumContext);
  const [sideTaskForm, setSideTaskForm] = useState(false);
  const [sideProjectForm, setSideProjectForm] = useState(false);
  const [sideTaskDetails, setSideTaskDetails] = useState(false);
  const showSideTaskForm = () => {
    setSideTaskDetails(false);
    setSideProjectForm(false);
    setSideTaskForm(!sideTaskForm);
  };

  const showSideProjectForm = () => {
    setSideTaskDetails(false);
    setSideTaskForm(false);
    setSideProjectForm(!sideProjectForm);
  };

  const showSideTaskDetails = () => {
    setSideTaskForm(false);
    setSideProjectForm(false);
    setSideTaskDetails(!sideTaskDetails);
  };


  

  return (
    <>
      <TopNavBarAlbums />
    </>
  );
};

export default Albums;
