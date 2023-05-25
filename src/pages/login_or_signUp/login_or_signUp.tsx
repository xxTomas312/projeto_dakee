import React from 'react';
import './login_or_signUp.css'
import '../../App.css'
import Logo_img from '../../images/logo.png'
import { Link } from 'react-router-dom';


function Login_or_signUp() {
  
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
            <Link className='sign_in_b' to="/Login"><button>Log in</button></Link>
          </div>
        </section>
      </>
  )
}

export default Login_or_signUp;