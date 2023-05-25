import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Star from '../../images/star.png'
import Profile_pic from '../../images/profile_pic.png'
import RatingStars from '../../images/rating_stars.png'
import back_btt_white from '../../images/back_button_f.png'
import './my_profile.css'
import Nav from '../../components/nav/nav'

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
                    <button onClick={() => setAberto(true)}>Get rewards</button>
                    <button>Saved rewards</button>
                    <button>Edit profile</button>
                    <button>Log out</button>
                </div>
            </div>
        </section>


        {aberto ? (
            <section className="rewards_page">
            <Nav></Nav>
             <div className='subtitle_container'>
                <h2>Rewards</h2>
                <div className='rating_container'>
                    <p></p>
                    <img src="" alt="" />
                </div>
                <div className='grid_container'>
                    <div className="grid-item">
                        <div className='rating_reward'>
                            <p>30</p>
                            <img src="" alt="star" />
                        </div>
                        <div className='brand'>
                            <h4>Vans</h4>
                        </div>
                        <div className='advertising_container'>
                            <h2>-25%</h2>
                        </div>
                        <div className='img_container'>
                            <img src="" alt="Vans logo" />
                        </div>
                        <div className='button_more'>
                            <button className='more_button'>More&gt;</button>
                        </div>
                    </div>
                    <div className="grid-item">

                    </div>
                    <div className="grid-item">

                    </div> 
                </div>
             </div>
            </section>
      ) : null}

        </>
    )
}

export default My_profile;