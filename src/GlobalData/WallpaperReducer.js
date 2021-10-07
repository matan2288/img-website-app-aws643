export const WallpaperReducer = (state, action) => {
  switch (action.type) {
    // case 'ADD_WALLPAPER_TO_FAVORITES':
    case "ADD_WALLPAPER_TO_FAVORITES":
      return {
        ...state,
        //action.payload = the movie data we passed
        favoriteImgs: [action.payload, ...state.favoriteImgs],
      };

    case "REMOVE_WALLPAPER_FROM_FAVORITES":
      return {
        ...state,
        //? FILTER THE IMG ARRAY
        favoriteImgs: state.favoriteImgs.filter((img) => img.id !== action.payload)
      };

    default:
      return state;
  }
};
