import  { createContext, useState } from "react";
import PropTypes from 'prop-types';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(sessionStorage.getItem("Jwt_token") || "");
 
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);

  // Use the `showSidebar` function to toggle the sidebar
  <button onClick={showSidebar}>Toggle Sidebar</button>
  
  const logout = () => {
    sessionStorage.removeItem("Jwt_token");
    setAuth(null); // Set the token value to an empty string
  };

  const context = {
    auth,
    setAuth,
    logout,
  };

  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
