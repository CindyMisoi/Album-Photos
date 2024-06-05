import { createContext, useReducer } from "react";
import Reducer from "../reducer/PhotoReducer";
import PropTypes from 'prop-types';


const initialState = {
  api_photos: [],
};

const PhotoStore = ({ children }) => {
  const [photoState, photodispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[photoState, photodispatch]}>
      {children}
    </Context.Provider>
  );
};
PhotoStore.propTypes = {
  children: PropTypes.node.isRequired,
};


export const Context = createContext(initialState);
export default PhotoStore;