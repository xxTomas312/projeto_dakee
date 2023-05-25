import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo_img from '../../images/logo.png'
import facebook from '../../images/face_icon.png'
import Gmail from '../../images/gmail_icon.png'
import Apple from '../../images/apple_icon.png'
import Back_button from '../../images/back_b.png'
import './signUp.css'
import '../../App.css'

import { GoogleLogin } from 'react-google-login';


function Sign_up() {
    return(
        <>
        <section className="signUp_page">
        <Link className='logo_page' to="/Login_or_signUp"></Link>
                <div className="go-back">
                    <img src={Back_button} alt="" />
                </div>

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
                    <img className='facebook_icon' src={facebook} alt="Facebook" />
                    <img className='gmail_icon' src={Gmail} alt="Gmail" />
                    <img className='apple_icon' src={Apple} alt="Apple" />
                </div>
                
            </div>
        </section>
        </>
    )
}

export default Sign_up;