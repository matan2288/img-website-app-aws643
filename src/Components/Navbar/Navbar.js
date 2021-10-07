import { useContext , useEffect , useRef , useState } from 'react'
import './NavbarStyle/NavbarStyle.css'
import { Link } from 'react-router-dom'
import { GlobalDataHolder } from '../../GlobalData/Context.js'
import { searchData  , getData} from '../../Api/Api.js'
import axios from 'axios'

export const Navbar = () => {

const { setImgList ,
   defaultImagesInThePage ,
    initialPage,
   initialInputValue,
   setInputValue
  } = useContext(GlobalDataHolder)



const inputReference = useRef();






const getDataFromApi = async () => {
 
//*PEXELS 
//  await fetch(`https://api.pexels.com/v1/search?query=${initialInputValue}`, {headers: {
//       Authorization:"563492ad6f9170000100000185593d04123c4ef7a739a2a30316216d"
//     }}).then(response => response.json())
//     .then(dataAquiredFromApi=>setImgList(dataAquiredFromApi.photos))
//     .catch(err => console.log(err))
    
//*UNSPLASH
// await axios.get(`https://api.unsplash.com/search/photos?query=${initialInputValue}&client_id=lQY1cfnpOaW7H2_HEGbl0Xv9V_9fsdQcK6xPtx8vLpA`)
// .then(dataAquiredFromApi=>setImgList(dataAquiredFromApi.data.results));
//  await fetch(`https://api.unsplash.com/search/photos?query=${initialInputValue}&client_id=lQY1cfnpOaW7H2_HEGbl0Xv9V_9fsdQcK6xPtx8vLpA`, 
//     ).then(response => response.json())
//     .then(dataAquiredFromApi=>setImgList(dataAquiredFromApi.results))
//     .catch(err => console.log(err))
    

};

const evokeSearchBtn = () =>{

  setInputValue(inputReference.current.value);



} 



    
     return (
          <div className='navbar-maindiv'>
             <div className="logo-title-searchbar">
                  <img src="https://www.pinclipart.com/picdir/big/51-511102_design-free-logo-srj-hd-logo-png-clipart.png" alt="" id="logo"/>
                  <p id="navbar-title">Title</p>
                  <input 
                  type="text" 
                  id="searchbar"
                  // onChange={inputOnChangeFunction}
                  defaultValue={initialInputValue}
                  // onChange={handleChange}
                  ref={inputReference}
                  />
                
            <button onClick={evokeSearchBtn}>search</button>

             </div>

               <div className="navlinks-container">
           <Link to="/" className="nav-links">
             Home
           </Link>
           <Link to="/FavoriteImages" className="nav-links">
             Favorites
           </Link>
           <Link to="/LoginPage" className="nav-links">
             Login
           </Link>

           <button>
             <Link to="/RegistrationPage" className="nav-links">
               Join
             </Link>
           </button>
         </div>


          </div>
     )
}



