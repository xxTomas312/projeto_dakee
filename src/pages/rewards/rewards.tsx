import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Star from '../../images/star.png'
import Profile_pic from '../../images/profile_pic.png'
import RatingStars from '../../images/rating_stars.png'
import back_btt_white from '../../images/back_button_f.png'
import backButton from '../../images/back_button_f.png'
import star_icon from '../../images/star.png'
import vans_logo from '../../images/vans_logo.png'
import ryanair_logo from '../../images/ryanair_logo.png'
import thaya_logo from '../../images/thaya_logo.png'
import './rewards.css'
import '../../App.css'
import Nav from '../../components/nav/nav_profile'


function Rewards_page() {
    const [aberto, setAberto] = useState(false);
    
    return(
        <>
        <section className="rewards_page">
        <Nav></Nav>
        <Link to="/My_profile"><button className="back-button">
            <img src={backButton} alt="Back Button" />
        </button></Link>
        <div className='subtitle_container'>
            <h2>Rewards</h2>
            <div className='rating_container'>
                <p>174</p>
                <img src={star_icon} alt="star icon" />
            </div>
            <div className='grid_container'>
                <div className="grid-item">
                    <div className='rating_reward'>
                        <p>30</p>
                        <img src={star_icon} alt="star" />
                    </div>
                    <div className='brand'>
                        <h4>Vans</h4>
                    </div>
                    <div className='advertising_container'>
                        <h2>-25%</h2>
                    </div>
                    <div className='img_container'>
                        <img src={vans_logo} alt="Vans logo" />
                    </div>
                    <div className='button_more'>
                        <button className='more_button'>More&gt;</button>
                    </div>
                </div>
            
            <div className="grid-item">
                <div className='rating_reward'>
                    <p>70</p>
                    <img src={star_icon} alt="star" />
                </div>
                <div className='brand'>
                    <h4>RYANAIR</h4>
                </div>
                <div className='advertising_container'>
                    <h2>FREE LUGGAGE</h2>
                </div>
                <div className='img_container'>
                    <img className='ryanair_logo' src={ryanair_logo} alt="Ryanair logo" />
                </div>
                <div className='button_more'>
                    <button className='more_button'>More&gt;</button>
                </div>
            </div>

            <div className="grid-item">
                <div className='rating_reward'>
                    <p>200</p>
                    <img src={star_icon} alt="star" />
                </div>
                <div className='brand'>
                    <h4>QUARTEIRA HOTEL&SPA</h4>
                </div>
                <div className='advertising_container'>
                    <h2>1 SPA NIGHT </h2>
                </div>
                <div className='img_container'>
                    <img className='thaya_logo' src={thaya_logo} alt="Thaya logo" />
                </div>
                <div className='thaya_button_more'>
                    <button className='more_button'>More&gt;</button>
                </div>
            </div>  
        </div>
        </div>
    </section>
    </>
)}
export default Rewards_page;