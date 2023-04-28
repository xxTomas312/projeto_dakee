import React from 'react';
import Swiper from '../../components/swiper/Swiper';
import Ellipse1 from '../../images/Ellipse1.png'
import Ellipse2 from '../../images/Ellipse2.png'
import IMG_1 from '../../images/tutorialIMG1.png'
import IMG_2 from '../../images/tutorialIMG2.png'

import './tutorial.css'



const items = [
  <div className='tutorial_page_1' key="1">
    <div className='subtitle_container'>
      <h2>Hi, Jane! <br/> Here's a short <br/> tutorial for you: </h2>
    </div>
    <div className='img_container'>
      <img src={IMG_1} alt="" />
    </div>
    <div className='text_container'>
      <p>Dakee was created to give the real, 
        non-touristic experience in a visited city.</p>
        <p>Based on your interests, we connect 
        Travellers and Locals to exchange ideas
        and give tips on what is actually worth
        to do and see. No tourist cliché! </p>
    </div>
    <div className='ellipse_container'>
      <img src={Ellipse1} alt="Ellipse 1" />
    </div>
  </div>,
  
  <div className='tutorial_page_2' key="2">
    <div className='subtitle_container'>
      <h2>Who is <br/>a Traveller?  </h2>
    </div>
    <div className='img_container'>
      <img src={IMG_2} alt="" />
    </div>
    <div className='text_container'>
      <p>A Traveller looks for a matching Local 
        person to get tips via chat on what to see, 
        visit or do in a specific city.</p>

      <p>He or she can later give the avaliations for
        the tips given.</p>
    </div>
    <div className='ellipse_container'>
      <img src={Ellipse2} alt="Ellipse 1" />
    </div>
  </div>,

  <div className='tutorial_page_3' key="3">
    <div className='subtitle_container'>
      <h2>Hi, Jane! <br/> Here's a short <br/> tutorial for you: </h2>
    </div>
    <div className='img_container'>
      <img src="" alt="" />
    </div>
    <div className='text_container'>
      <p>Dakee was created to give the real, 
        non-touristic experience in a visited city.
        Based on your interests, we connect
        Travellers and Locals to exchange ideas
        and give tips on what is actually worth
        to do and see. No tourist cliché! </p>
    </div>
    <div className='Ellipse_container'>
      <img src={Ellipse1} alt="Ellipse 1" />
    </div>
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