const Reducer = (state, action) => {
    switch (action.type) {
      case "get_user_albums":
        return { ...state, api_albums: action.payload };
      case "update_user_albums":
        return { ...state, api_albums: action.payload };
      case "get_album":
        return { ...state, userAlbum: action.payload };
      case "update_album":
        return { ...state, userAlbum: action.payload };
  
      default:
        return state;
    }
  };
  
  export default Reducer;