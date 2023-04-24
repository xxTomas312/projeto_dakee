import React, { useState } from 'react';
import './login.css'
import '../../App.css'
import Logo_img from '../../images/logo.png'
import facebook from '../../images/face_icon.png'
import Gmail from '../../images/gmail_icon.png'
import Apple from '../../images/apple_icon.png'


function Login_page() {
  const [aberto, setAberto] = useState(false);
  
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
            <button onClick={() => setAberto(true)}>Sign up</button>
            <button>Log in</button>
          </div>
        </section>
      </body>

      {aberto ? (
        <body>
          <section className="signUp_page">
            <button className="go-back" onClick={() => setAberto(false)}>
                Aqui
            </button>
            <div className='slogan_container'>
              <img src={Logo_img} alt="Logo slogan" />
            </div>
            <div className='subtitle_container'>
              <h2>Sign up <br/>with e-mail</h2>
            </div>
            <div className='info_container'>
              <input className='info_input' type="text" placeholder='Name' />
              <input className='info_input' type="text" placeholder='E-mail'/>
              <input className='info_input' type="password" placeholder='Password'/>
            </div>
            <div className='button_container'>
              <button>Sign up</button>
            </div>
            <div className='social_info'>
              <p>or sign up using:</p>
              <div className='social_media'>
                <img src={facebook} alt="Facebook" />
                <img className='gmail_icon' src={Gmail} alt="Gmail" />
                <img className='apple_icon' src={Apple} alt="Apple" />
              </div>
            </div>
          </section>
        </body>
      ) : null}
      </>
  )
}

export default Login_page;