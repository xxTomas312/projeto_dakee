import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoSmall from '../../images/logo_small2.png'
import './nav.css'
import '../../App.css'
import backButton from '../../images/back_button_f.png'


function Nav_profile() {
  const [aberto, setAberto] = useState(false);
  
  return(
      <>
      <div className="nav_container">
        <img src={logoSmall} alt="Samll Logo" onClick={() => setAberto(true)} />
      </div>

        {aberto ? (
            <div className={`menu_page ${aberto ? 'slide-enter' : 'slide-exit'}`}>
              <div className='subtitle_container'>
                <h2>Menu</h2>
              </div>
              <button className="back-button " onClick={() => setAberto(false)}>
                <img src={backButton} alt="Back Button" />
              </button>
              <div className='link_container'>
                <Link to="/Home">Home</Link>
                <Link to="/Chat">Chat</Link>
                <Link to="/My_profile">My profile</Link>
                <Link to="/FAQ">FAQ</Link>
              </div>
          </div>
      ) : null}
      </>
  )
}

export default Nav_profile;
