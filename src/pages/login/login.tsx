import React, { useState } from 'react';
import './login.css'
import '../../App.css'
import Logo_img from '../../images/logo.png'
import facebook from '../../images/face_icon.png'
import Gmail from '../../images/gmail_icon.png'
import Apple from '../../images/apple_icon.png'
import Back_button from '../../images/back_b.png'
import { Link } from 'react-router-dom';


function Login_page() {
  const [aberto, setAberto] = useState(false);
  
  return(
      <>
        <section className='login_or_signUp_page'>
          <div className='slogan_container'>
            <img src={Logo_img} alt="Logo slogan" />
          </div>
          <div className='subtitle_container'>
            <h2>Hey,<br/>have we met?</h2>
            <div className='text_container'>
            <p>Sign up to start or log in to your account.</p>
          </div>
          </div>  
          <div className='button_container'>
            <Link className='sign_in_b' to="/SignUp"><button>Sign up</button></Link>
            <button onClick={() => setAberto(true)}>Log in</button>
          </div>
        </section>


        {aberto ? (
            <section className="login_page">
              <div className="go-back" onClick={() => setAberto(false)}>
                  <img src={Back_button} alt="Back button" />
              </div>
              <div className='slogan_container'>
                <img src={Logo_img} alt="Logo slogan" />
              </div>
              <div className='subtitle_container'>
                <h2>Log in </h2>
              </div>
              <div className='info_container'>
                <input className='info_input' type="text" placeholder='E-mail'/>
                <input className='info_input' type="password" placeholder='Password'/>
              </div>
              <div className='button_container'>
                <button>Login</button>
              </div>
              <div className='social_info'>
                <p>or login using:</p>
                <div className='social_media'>
                  <img className='facebook_icon'src={facebook} alt="Facebook" />
                  <img className='gmail_icon' src={Gmail} alt="Gmail" />
                  <img className='apple_icon' src={Apple} alt="Apple" />
                </div>
              </div>
            </section>
      ) : null}
      </>
  )
}

export default Login_page;