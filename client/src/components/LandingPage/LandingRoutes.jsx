import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from "./LoginPage";
import LandingPage from "./LandingPage";

const LandingRoutes = () => {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/login"  element={<LoginPage/>}/>
        <Route exact path="/" element={<LandingPage/>} />
        <Route
          path="/*"
          render={() => {
            return <Redirect to="/" />;
          }}
        />
      </Routes>
   </BrowserRouter>
  );
};

export default LandingRoutes;
