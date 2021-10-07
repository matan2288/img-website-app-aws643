import React, { useContext } from "react";
import { GlobalDataHolder } from "../../GlobalData/Context.js";
import { ImgContainer } from "../ImgContainerAndModal/ImgContainer.js";
import "./HomepageStyle/HomepageStyle.css";
import Masonry from 'react-masonry-css'

export const Homepage = () => {
  const {
    initialImgList,
    defaultImagesInThePage,
    setMoreImagesToThePage,
    initialPage,
    setNewPage,
  } = useContext(GlobalDataHolder);

  const addMoreImages = () => {
    setMoreImagesToThePage(defaultImagesInThePage + 6);
  };

  const changePage = () => {
    setMoreImagesToThePage(12);
    setNewPage(initialPage + 1);
    window.scrollTo(0, 0);
  };



  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    500: 2,
    500: 1
  };

  return (
    <div>

  {      <div id="homepage-ul-wrapper">
  <Masonry
  breakpointCols={breakpointColumnsObj}
  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column"
>


  
        {initialImgList.length > 0 ? (
          initialImgList.map((passing) => {
            return (
              <ImgContainer
                imgObjectPassed={passing}
                key={passing.id}
                type="TheImgIsOnFavorites"
              />
            );
          })
        ) : (
          <h2 className="no-movies">Keyword not avaliable!</h2>
        )}
        </Masonry>
      </div>}





      {initialImgList.length == 30 ? (
        <button onClick={changePage}>Go To The Next Page</button>
      ) : (
        <button onClick={addMoreImages}>Load More Images</button>
      )}
    </div>
  );
};
