import React from 'react';
import { Link } from 'react-router-dom';
import Swiper_Questionaire from '../../components/swiper/Swiper_q'
import Female from '../../images/female.svg'
import Male from '../../images/male.png'
import Horse from '../../images/horse.png'
import X from '../../images/x.png'
import './questionaire.css'
import '../../App.css'

import MeuComponente from '../../components/add_place/add_place';

const items = [
    //PAGE 1
    <div className='questionaire_page_1' key="1">
        <h1>1/4</h1>
        <h3>Age:</h3>
        <div className="grid">
          <div className="item">&lt;20</div>
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
        <h1>4 /4</h1>
        <h3>Travel experience preferences:</h3>
    </div>,
    //PAGE 5
    <div className='questionaire_page_5' key="5">
      <div className='subtitle_container'>
        <h1>Perfect!</h1>
        <h1>Let's start!</h1>
      </div>
      <div className='button_container'>
        <Link to="/Home"><button>Ok</button></Link>
      </div>
    </div>,
  ];
  
  const App: React.FC = () => {
    
    return (
      <div>
        <Swiper_Questionaire items={items} />
      </div>
    );
  };
  
  export default App;