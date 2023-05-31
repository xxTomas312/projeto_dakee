import React from 'react';
import './no_internet.css';
import Nav from '../../components/nav/nav_profile';
import no_net from './no_net.png'

function No_internet() {

  return (
    <>
      <section className='No_internet_page'>
        <Nav />
        <div className='NoInternet_img_container'>
          <img src="http://localhost:3000/no_net.svg" alt="" />
        </div>
        <div className='subtitle_container'>
          <h2>Oops!</h2>
          <p>
            Looks like the Internet is on vacation.
            Check your connection and try again.
          </p>
        </div>
        <div className='button_container'>
          <button>Try Again</button>
        </div>
      </section>
    </>
  );
}

export default No_internet;