import React, { useState } from 'react';
import '../../App.css'
import Logo_img from '../../images/logo.png'
import facebook from '../../images/face_icon.png'
import Gmail from '../../images/gmail_icon.png'
import Apple from '../../images/apple_icon.png'
import Back_button from '../../images/back_b.png'
import { Link } from 'react-router-dom';
import './login.css'


function login_page() {
    
    return(
        <>
        <section className="login_page">
            <div className="go-back">
                <Link to="/Login_or_signUp"><img src={Back_button} alt="Back button" /></Link>
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
    </section></>
    )
}
        
export default login_page;