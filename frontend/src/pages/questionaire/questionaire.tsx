import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swiper_Questionaire from '../../components/swiper/Swiper_questionaire'
import Female from '../../images/female.svg'
import Male from '../../images/male.png'
import Horse from '../../images/horse.png'
import X from '../../images/x.png'
import './questionaire.css'
import '../../App.css'
import Party from '../../images/party.png'
import Sightseeing from '../../images/sightseeing.png'
import Art from '../../images/art.png'
import History from '../../images/history.png'
import Music from '../../images/music.png'
import Sports from '../../images/sports.png'
import Adventure from '../../images/adventure.png'
import Spiritual from '../../images/spiritual.png'
import Nature from '../../images/nature.png'
import Food from '../../images/food.png'
import MeuComponente from '../../components/add_place/add_place';



const createUser = () => {
  // Retrieve the questionnaire responses from the component state or any other source
  const questionnaireResponses = {
    // Add your questionnaire responses here based on the user's selections
  };

const items = [
    //PAGE 1
    <div className='questionaire_page_1' key="1">
        <h1>1/4</h1>
        <h3>Age:</h3>
        <div className="grid">
          <div  className="item">&lt;20</div>
          <div className="item">22-39</div>
          <div className="item">40-59</div>
          <div className="item">60+</div>
        </div>
        
    </div>,
    //PAGE 2
    <div className='questionaire_page_2' key="2">
        <h1>2/4</h1>
        <h3>Gender:</h3>
        <div className="grid">
          <div className="item">
            <img src={Female} alt="Female icon" />
            Female
          </div>
          <div className="item">
            <img src={Male} alt="Male icon" />
            Male
          </div>
          <div className="item">
            <img src={Horse} alt="Horse icon" />
            Complex
          </div>
          <div className="item">
            <img src={X} alt="X icon" />
            Prefer not to say
          </div>
        </div> 
    </div>,
    //PAGE 3 
    <div className='questionaire_page_3' key="3">
        <h1>3/4</h1>
        <h3>I currently live in:</h3>
        <div className='info_container'>
          <input type="text" placeholder='City, Country'/>
          <br />
          <h3>I can give advices for:</h3>
          <input type="text" placeholder='City, Country'/>
        </div>
        <div>
          <MeuComponente texto="Meu Componente" />
        </div>
    </div>,
    //PAGE 4
    <div className='questionaire_page_4' key="4">
        <h1>4/4</h1>
        <h3>Travel experience preferences:</h3>
        <div className="grid">
          <div className="item">
            <img src={Party} alt="" />
            <p>Party</p>
          </div>
          <div className="item">
            <img src={Sightseeing} alt="" />
            <p>Sightseeing</p>
          </div>
          <div className="item">
            <img src={Art} alt="" />
            <p>Art</p>
          </div>
          <div className="item">
            <img src={History} alt="" />
            <p>History</p>
          </div>
          <div className="item">
            <img src={Music} alt="" />
            <p>Music</p>
          </div>
          <div className="item">
            <img src={Sports} alt="" />
            <p>Sports</p>
          </div>
          <div className="item">
            <img src={Adventure} alt="" />
            <p>Adventure</p>
          </div>
          <div className="item">
            <img src={Spiritual} alt="" />
            <p>Spiritual</p>
          </div>
          <div className="item">
            <img src={Nature} alt="" />
            <p>Nature</p>
          </div>
          <div className="item">
            <img src={Food} alt="" />
            <p>Food</p>
          </div>
        </div>
    </div>,
    //PAGE 5
    <div className='questionaire_page_5' key='5'>
    <div className='subtitle_container'>
      <h1>Perfect!</h1>
      <h1>Let's start!</h1>
    </div>
    <div className='button_container'>
      <Link to='/Home'>
        <button onClick={createUser}>Ok</button>
      </Link>
    </div>
  </div>,
];



  // Make a POST request to your API endpoint to create a user with the questionnaire responses
  fetch('http://localhost:3000/database/routers/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(questionnaireResponses),
  })
    .then(response => response.json())
    .then(data => {
      // Handle the response data, such as displaying a success message or redirecting the user
      console.log('User created:', data);
    })
    .catch(error => {
      // Handle any errors that occur during the request
      console.error('Error creating user:', error);
    });
};
  

  


  const App: React.FC = () => {
    return (
      <>
        <div>
          <Swiper_Questionaire items={items} />
        </div>
      </>
    );
  };
  
  export default App;