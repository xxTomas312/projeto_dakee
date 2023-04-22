import React  from 'react';
import { Link } from 'react-router-dom';
import './login.css'
import '../../App.css'
import Logo_img from '../../images/logo.png'


function Login_page() {
  
  return(
      <>
      <body>
        <section className='login_page'>
          <div className='slogan_container'>
            <img src={Logo_img} alt="Logo slogan" />
          </div>
          <div className='subtitle_container'>
            <h2>Hey,<br/>have we met?</h2>
          </div>  
          <div className='text_container'>
            <p>Sign up to start or log in to your account.</p>
          </div>
          <div className='button_container'>
            <button>Sign up</button>
            <button>Log in</button>
          </div>
        </section>
      </body>
      </>
  )
}

export default Login_page;