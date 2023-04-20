import React  from 'react';
import Swiper from '../../components/swiper/Swiper';
import { SwiperItemType } from '../../components/types'
import { Link } from 'react-router-dom';
import '../../App.css'


const Login_page = () => {
  /* Desktop Version */
  const items: SwiperItemType[] = [
    {
      elements: (
        <>
          <body>
            <section className='first_page'>
              <div className='title_container'>
                <h1>dakee.</h1>
                <br/>
                <p>Live it like the Locals</p>
              </div>
              <div className='text'>
                <p>Tap anywhere to contiue</p>
              </div>
            </section>
          </body>
        </>
      ),
    },
    {
      elements: (
        <>
          <body>
            <section className='second_page'>
              <div className='title_container'>
                <h1>dakee.</h1>
              </div>
              <div className='subtitle'>
                <h2>Hey, <br/> have we met?</h2>
              </div>
              <div className='text'>
                <p>Sign up to start or log in to your account.</p>
              </div>
              <div className='button_container'>
                <button>Sign up</button>
                <button>Log in</button>
              </div>
            </section>
          </body>
        </>
      ),
    }   
  ]  
      return (
        <>
          <section className="home_body">
            <div className="container_mobile">
              <Swiper items={items} />
            </div>
          </section>
        </>
      );
    };
    export default Login_page;