import React, { useState, useEffect } from 'react';
import no_internet from '../../images/no_internet.svg';
import './no_internet.css';
import Nav from '../../components/nav/nav_profile';

function No_internet() {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch('http://localhost:3000/static/media/no_internet.ff44840277d9df6ef9202f60f9a13d4c.svg'); // Replace 'YOUR_IMAGE_URL' with the actual URL of your image
        if (response.ok) {
          const blob = await response.blob();
          const url = URL.createObjectURL(blob);
          setImageUrl(url);
        }
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, []);

  return (
    <>
      <section className='No_internet_page'>
        <Nav />
        <div className='NoInternet_img_container'>
          {imageUrl ? (
            <img src={imageUrl} alt='No Internet' />
          ) : (
            <img src={no_internet} alt='No Internet' />
          )}
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