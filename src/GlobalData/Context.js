import { createContext, useState, useEffect, useReducer } from "react";
import { WallpaperReducer } from "./WallpaperReducer";
import { addAnotherPage, getData } from "../Api/Api.js";

export const GlobalDataHolder = createContext();

export const GlobalDataWrapper = ({ children }) => {
  //Wallpapers Array
  const [initialImgList, setImgList] = useState([]);

  //Wallpapers Reducer
  const [initialPage, setNewPage] = useState(1);

  const [defaultImagesInThePage, setMoreImagesToThePage] = useState(30);

  const [initialInputValue, setInputValue] = useState("gym");

  useEffect(async () => {
    await fetch(
      `https://api.unsplash.com/search/photos?page=${initialPage}&query=${initialInputValue}&per_page=${defaultImagesInThePage}&client_id=lQY1cfnpOaW7H2_HEGbl0Xv9V_9fsdQcK6xPtx8vLpA`
    )
      .then((response) => response.json())
      .then((dataAquiredFromApi) => {
        setImgList(dataAquiredFromApi.results);
      })

      .catch((err) => console.log(err));
  }, [initialInputValue, defaultImagesInThePage, initialPage]);

  const [state, dispatch] = useReducer(WallpaperReducer, { favoriteImgs: [] });

  return (
    <GlobalDataHolder.Provider
      value={{

        initialImgList,
        setImgList,
        initialInputValue,
        setInputValue,

        initialPage,
        setNewPage,
        defaultImagesInThePage,
        setMoreImagesToThePage,

        state,
        dispatch,
      }}
    >
      {children}
    </GlobalDataHolder.Provider>
  );
};
