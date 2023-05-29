import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Star from '../../images/star.png'
import Profile_pic from '../../images/profile_pic.png'
import RatingStars from '../../images/rating_stars.png'
import back_btt_white from '../../images/back_button_f.png'
import './my_profile.css'
import Nav from '../../components/nav/nav_profile'

function My_profile() {
    const [aberto, setAberto] = useState(false);
    
    return(
        <>
        <section className='My_profile_body'>
            <div className='Profile_back-button'>
                <Nav></Nav>
                <Link className='profile_back_button' to="/Home">
                    <img src={back_btt_white} alt="" />
                </Link>
            </div>
            <div className='profile_subtitle_container'>
                <h2>My profile</h2>
            </div>
            <div className='img_container'>
                <img className="ProfilePic" src={Profile_pic} alt="Profile Pic" />
                <h2>Jane</h2>
                <img className="ratingstars" src={RatingStars} alt="Rating stars" />
                <div className='rating_value_container'>
                    <p>174</p>
                    <img src={Star} alt="Star icon" />
                </div>
                <div className='buttons_container'>
                    <Link to="/Rewards"><button>Get rewards</button></Link>
                    <button>Saved rewards</button>
                    <button>Edit profile</button>
                    <button>Log out</button>
                </div>
            </div>
        </section>
        </>
    )
}

export default My_profile;