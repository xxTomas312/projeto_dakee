import { Link } from 'react-router-dom';
import React from 'react';
import Swiper from '../../components/swiper/Swiper';
import Ellipse1 from '../../images/Ellipse1.png'
import Ellipse2 from '../../images/Ellipse2.png'
import Ellipse3 from '../../images/Ellipse3.png'
import Ellipse4 from '../../images/Ellipse4.png'
import IMG_1 from '../../images/tutorialIMG1.png'
import IMG_2 from '../../images/tutorialIMG2.png'
import IMG_3 from '../../images/tutorialIMG3.png'
import IMG_4 from '../../images/tutorialIMG4.png'

import '../../App.css'
import './tutorial.css'

const items = [
  //PAGE 1
  <div className='tutorial_page_1' key="1">
    <div className='subtitle_container'>
      <h2>Hi, Jane! <br/> Here's a short <br/> tutorial for you: </h2>
    </div>
    <div className='img_container'>
      <img src={IMG_1} alt="People Img" />
    </div>
    <div className='text_container'>
      <p>Dakee was created to give the real, <br />
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

  //PAGE 2
  <div className='tutorial_page_2' key="2">
    <div className='subtitle_container'>
      <h2>Who is <br/>a Traveller?  </h2>
    </div>
    <div className='img_container'>
      <img src={IMG_2} alt="Plane Img" />
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

  //PAGE 3
  <div className='tutorial_page_3' key="3">
    <div className='subtitle_container'>
      <h2>Who is <br/>a Local?</h2>
    </div>
    <div className='img_container'>
      <img src={IMG_3} alt="House Img" />
    </div>
    <div className='text_container'>
    <p>A Local is a person who lives in a city
      and wants to give some tips to visitors.</p>

    <p>He or she recieves later avaliations from
      the Travellers. Each avaliation has a point 
      value that can be exchanges for many 
      rewards and discounts from our Partners.</p>

    </div>
    <div className='ellipse_container'>
      <img src={Ellipse3} alt="Ellipse 1" />
    </div>
  </div>,

  //PAGE 4
  <div className='tutorial_page_4' key="4">
  <div className='subtitle_container'>
    <h2>Congrats,<br/> you’re both!</h2>
  </div>
  <div className='img_container'>
    <img src={IMG_4} alt="Smile Img" />
  </div>
  <div className='text_container'>
    <p>As a Dakee user, you are both a Traveller and a Local.</p>
    <p>Gain discounts by giving advices to visitors and get the unforgettable local experience while travelling!</p>
  </div>
  <div className='Swipe_container'>
    
  </div>
  <div className='ellipse_container'>
    <img src={Ellipse4} alt="Ellipse 1" />
  </div>
  </div>,

  //PAGE 5
  <div className='tutorial_page_5' key="5">
    <div className='subtitle_container'>
      <h2>Done!</h2>
      <br />
      <h2>Let us ask five quick questions before we start.</h2>
    </div>
    <div className='text_container'>
      <p>You can edit your anwsers later.</p>
    </div>
    <div className='button_container'>
      <Link to="/Questionaire"><button>OK</button></Link>
    </div>
  </div>,
];

const tutorial_page: React.FC = () => {
  return (
    <div>
      <Swiper items={items} />
    </div>
  );
};

export default tutorial_page;


