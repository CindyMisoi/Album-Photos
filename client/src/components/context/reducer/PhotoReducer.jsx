const Reducer = (state, action) => {
    switch (action.type) {
      case "get_album_photos":
        return { ...state, api_photos: action.payload };
      case "update_photo":
        return { ...state, api_photos: action.payload };
      case "get_selected_photo":
        return { ...state, selectedPhoto: action.payload };
      default:
        return state;
    }
  };
  
  export default Reducer;