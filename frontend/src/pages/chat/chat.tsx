import React, {useState } from 'react';
import Nav from '../../components/nav/nav_profile';
import dan_pic from '../../images/dan_pic.png'
import dakee_pic from '../../images/dakee_pic.png'
import backButton from '../../images/back_button_f.png'
import maggie_pic from '../../images/maggie_pic.png'
import { Link } from 'react-router-dom';
import '../rewards/rewards.css'
import './chat.css'
import '../../App.css'
function Chat() {
    const [aberto, setAberto] = useState(false);

  return (
    <>
      <section className='traveller_chat_page'>
        <Nav></Nav>
        <Link to="/Home"><button className="back-button">
              <img src={backButton} alt="Back Button" />
          </button></Link>
        <div className='subtitle_container'>
          <h2>Chat</h2>
        </div>
        <div>
          <div className='chat_button_container'>
            <button className='chat_button'>As Traveller</button>
            <button onClick={() => setAberto(true)} className='chat_button'>As Local</button>
          </div>
          <hr />
        </div>
        <div className='traveller_users_container'>
            <button className='users'>
            <img src={dan_pic} alt="profile_photo" />
                <div className='user_info'>
                    <div className='name_and_distance'>
                        <p className='user_name'>Dan</p>
                        <p>|</p>
                        <p className='user_distance'>2m</p>
                    </div>
                    <p>Hi! Do you know any good Mexcan res...</p>
                </div>
            </button>
            <button className='users'>
                <img src={dakee_pic} alt="profile_photo" />
                <div className='user_info'>
                    <div className='name_and_distance'>
                        <p className='user_name'>Dakee Team</p>
                        <p>|</p>
                        <p className='user_distance'>15m</p>
                    </div>
                    <p>Welcome, Jane! We hope that you...</p>
                </div>
            </button>
        </div>
      </section>
    
      {aberto ? (
      <section className='local_chat_page'>
      <Nav></Nav>
      <button onClick={() => setAberto(false)} className="back-button">
              <img src={backButton} alt="Back Button" />
          </button>
      <div className='subtitle_container'>
        <h2>Chat</h2>
      </div>
      <div>
        <div className='chat_button_container'>
          <button onClick={() => setAberto(false)} className='chat_button'>As Traveller</button>
          <button className='chat_button'>As Local</button>
        </div>
        <hr />
      </div>
      <div className='traveller_users_container'>
          <button className='users'>
              <img src={maggie_pic} alt="profile_photo" />
              <div className='user_info'>
                  <div className='name_and_distance'>
                      <p className='user_name'>Maggie</p>
                      <p>|</p>
                      <p className='user_distance'>11m</p>
                  </div>
                  <p>Hey, are there any discounts for stu...</p>
              </div>
          </button>
      </div>
    </section>
    ) : null}</>

  );
}

export default Chat;