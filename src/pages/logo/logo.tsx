import React  from 'react';
import './logo.css'
import '../../App.css'
import Logo_text from '../../images/logo+text.png'
import { Routes, Route, Link } from 'react-router-dom';


function Logo_page() {
 
  return(
      <>
        <body>
          <Link className='logo_page' to="/Login">
            <div className='title_container'>
              <img src={Logo_text} alt="Logo more Tap text" />
            </div>
            <div className='text'>
              <p>Tap anywhere to continue</p>
            </div>
          </Link>
        </body>
      </>
  )
}

export default Logo_page;