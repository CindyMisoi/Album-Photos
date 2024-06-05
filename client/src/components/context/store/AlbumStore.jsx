import { createContext, useReducer } from "react";
import Reducer from "../reducer/AlbumReducer";
import PropTypes from 'prop-types';


const initialState = {
  api_albums: [],
};

const AlbumStore = ({ children }) => {
  const [albumState, albumdispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[albumState, albumdispatch]}>
      {children}
    </Context.Provider>
  );
};
AlbumStore.propTypes = {
  children: PropTypes.node.isRequired,
};

export const Context = createContext(initialState);
export default AlbumStore;