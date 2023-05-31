import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo_img from '../../images/logo.svg'
import facebook from '../../images/face_icon.png'
import Gmail from '../../images/gmail_icon.png'
import Apple from '../../images/apple_icon.png'
import Back_button from '../../images/back_b.png'
import { GoogleLogin } from 'react-google-login';
import './signUp.css'
import '../../App.css'





function Sign_up() {

    function CreateAccount() {
        let response = fetch("http://localhost:8000/account",{method: "POST", body: JSON.stringify({foo: "bar"})})
        console.log(response)
        alert("call api")
    }

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    let handleSubmit = async (e) => {
      e.preventDefault();
      try {
        let res = await fetch("http://localhost:8000/account", {
          method: "POST",
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
          }),
        });
        let resJson = await res.json();
        
        if (res.status === 200) {
          setName("");
          setEmail("");
        } 
      } catch (err) {
        console.log(err);
      }
    };


    return(
        <>
        <section className="signUp_page">
            <Link className='go_back_container' to="/Login_or_signUp">
                <div className="go-back">
                    <img src={Back_button} alt="" />
                </div>
            </Link>
            <div className='slogan_container'>
            <img src={Logo_img} alt="Logo slogan" />
            </div>
            <div className='subtitle_container'>
            <h2>Sign up <br/>with e-mail</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div className='info_container'>
                  <input className='info_input' value={name} type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} />
                  <input className='info_input' value={email} type="text" placeholder='E-mail'  onChange={(e) => setEmail(e.target.value)}/>
                  <input className='info_input' value={password} type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <div className='button_container'>
                  <button type="submit" onClick={CreateAccount}>Sign up</button>
              </div>
            </form>
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