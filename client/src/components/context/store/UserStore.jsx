import { createContext, useReducer } from "react";
import Reducer from "../reducer/UserReducer";
import PropTypes from 'prop-types';


const initialState = {
  user: [],
};

const UserStore = ({ children }) => {
  const [userState, userdispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[userState, userdispatch]}>
      {children}
    </Context.Provider>
  );
};
UserStore.propTypes = {
  children: PropTypes.node.isRequired,
};


export const Context = createContext(initialState);
export default UserStore;