import React from 'react';
import './App.css';
import { BrowserRouter as Router , Route } from 'react-router-dom'
import { Navbar } from './Components/Navbar/Navbar.js'
import { FavoriteImagesPage } from './Components/FavoriteImagesPage/FavoriteImagesPage.js'
import { RegistrationPage } from './Components/LoginAndRegistration/RegistrationPage.js'
import { LoginPage } from './Components/LoginAndRegistration/LoginPage'
import { Homepage } from './Components/Homepage/Homepage.js'
import Modal from 'react-modal';
Modal.setAppElement('#root')

function App() {
  return (

  <Router>

      <div className="App-maindiv">
        <Navbar />
        <Route exact path="/" component={Homepage} />
        <Route path="/FavoriteImages" component={FavoriteImagesPage} />
        <Route path="/RegistrationPage" component={RegistrationPage} />
        <Route path="/LoginPage" component={LoginPage} />

      </div>
   

    </Router>

  ); 
}

export default App;
