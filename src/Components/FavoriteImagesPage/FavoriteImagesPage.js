import { React, useContext } from "react";
import { GlobalDataHolder } from "../../GlobalData/Context.js";
import { ImgContainer } from "../ImgContainerAndModal/ImgContainer";

export const FavoriteImagesPage = () => {
  const { state, dispatch, favoriteImgs } = useContext(GlobalDataHolder);

  console.log(state);

  return (
    <div>
      <ul id="homepage-ul-wrapper">
        {state.favoriteImgs.length > 0 ? (
          state.favoriteImgs.map((passing) => {
            return (
              <ImgContainer
                imgObjectPassed={passing}
                key={passing.id}
                type="TheImgIsNotOnFavorites"
              />
              //  <img src={passing} />
            );
          })
        ) : (
          <h2 className="no-movies">Please Add Images To Your Collection!</h2>
        )}
      </ul>
    </div>
  );
};
