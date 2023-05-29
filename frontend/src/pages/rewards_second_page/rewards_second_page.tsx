import React, { ChangeEvent, useState } from 'react';
import './rewards_second_page.css';
import '../rewards/rewards.css'
import Search_btt from '../../images/search_btt.png';
import { Link } from 'react-router-dom';
import Nav from '../../components/nav/nav_profile'
import backButton from '../../images/back_button_f.png'
import star_icon from '../../images/star.png'
import vans_logo from '../../images/vans_logo.png'
import qr_code from '../../images/qr_code.png'


interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}


function Rewards_second_page() {
  const [aberto, setAberto] = useState(false);

  return (
    <>
    <section className="second_rewards_page">
        <Nav></Nav>
        <Link to="/Rewards">
            <button className="back-button">
                <img src={backButton} alt="Back Button" />
            </button>
        </Link>
        <div className='subtitle_container'>
            <h2>Rewards</h2>
        </div>
        <div>
          <div className='points_discount'>
            <h3>25%</h3>
            <div className='rating_reward'>
              <p>30</p>
              <img src={star_icon} alt="star" />
            </div>
          </div>
          <hr />
        </div>
        <div className='image_container'>
          <img src={vans_logo} alt="Vans Logo" />
          <p>25% discount to use on any purchase in any VANS authorised store, including online.</p>
        </div>
        <div className='button_container'>
          <button onClick={() => setAberto(true)}>
            Get for
            <div className='rating_reward'>
              <p>30</p>
              <img src={star_icon} alt="star" />
            </div>
          </button>
        </div>
    </section>

    {aberto ? (
      <section className='get_reward'>
        <Nav></Nav>
          <button onClick={() => setAberto(false)} className="back-button">
              <img src={backButton} alt="Back Button" />
          </button>
        <div className='subtitle_container'>
            <h2>Success!</h2>
        </div>
        <div className='image_container'>
          <img src={qr_code} alt="QR Code" />
        </div>
        <div className='text_container'>
          <p>Show the QR code at check-out or insert the promo code in online store. <br />
          <br />
          You can always find your coupons in Saved rewards section on your profile.</p>
        </div>
      </section>
    ) : null}</>
  );
};

export default Rewards_second_page;