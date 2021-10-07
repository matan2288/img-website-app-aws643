import React, { useState, useContext } from "react";
import { GlobalDataHolder } from "../../GlobalData/Context.js";
import "./ImgContainerStyle/ImgContainer.css";
import Modal from "react-modal";
import Masonry from 'react-masonry-css'
Modal.setAppElement("#root");


export const ImgContainer = ({ imgObjectPassed, type }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [unabled, setDisabled] = useState(false);

  const [initialAddBtnValue, setAddBtnValue] = useState(
    "Add Image To Favorites"
  );

  const { state, dispatch } = useContext(GlobalDataHolder);


  
  return (


    <div id='img-container-ul-wrapper'>
          

    <li className="li-image-container">
    <img className="single-image-design img-class2" src={imgObjectPassed.urls.regular} />




      <div
        className="overlay-container"
        onClick={() => {
          setModalIsOpen(true);
        }}
      >
        <div className="overlay-content">
          <div> Hello World</div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setModalIsOpen(false);
        }}
        style={{ overlay: { background: "rgba(0,0,0,0.5)" } }}
        className="modal-mainstyle"
      >
        <div className="modal-content">
          <h1>Modal Title</h1>
          <p>Modal body</p>
          <img className="modal-image" src={imgObjectPassed.urls.regular} />
          <div className="modal-btns-container">
            {type === "TheImgIsNotOnFavorites" ? (
              <button
                onClick={() => {
                  dispatch({
                    type: "REMOVE_WALLPAPER_FROM_FAVORITES",
                    payload: imgObjectPassed.id,
                  });
                }}
              >
                Remove Image From Favorites
              </button>
            ) : (
              <button
                disabled={unabled}
                onClick={() => {
                  dispatch({
                    type: "ADD_WALLPAPER_TO_FAVORITES",
                    payload: imgObjectPassed,
                  });
                  setDisabled(true);
                  setAddBtnValue("Image Added To Favorites!");
                }}
              >
                {initialAddBtnValue}
              </button>
            )}

            <button
              onClick={() => {
                setModalIsOpen(false);
              }}
            >
              close
            </button>
          </div>
        </div>
      </Modal>
      
    </li>
  
    </div>

  );
};
