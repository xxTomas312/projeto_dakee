import React from 'react';
import { Link } from 'react-router-dom';
import Swiper from '../../components/swiper/Swiper'
import Back_button from '../../images/back_b.png'
import './questionaire.css'
import '../../App.css'

const items = [
    //PAGE 1
    <div className='questionaire_page_1' key="1">
        <h1>Página 1</h1>
    </div>,
    //PAGE 2
    <div className='questionaire_page_2' key="2">
        <h1>Página 2</h1>
    </div>,
    //PAGE 3
    <div className='questionaire_page_3' key="3">
        <h1>Página 3</h1>
    </div>,
    //PAGE 4
    <div className='questionaire_page_4' key="4">
        <h1>Página 4</h1>
    </div>,
    //PAGE 5
    <div className='questionaire_page_5' key="5">
        <h1>Página 5</h1>
    </div>,
  ];
  
  const App: React.FC = () => {
    
    return (
      <div>
        <Swiper items={items} />
      </div>
    );
  };
  
  export default App;