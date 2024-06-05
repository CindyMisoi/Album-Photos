import { createContext, useReducer } from "react";
import Reducer from "../reducer/AlbumReducer";

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

export const Context = createContext(initialState);
export default AlbumStore;