import React, { useState, useRef } from 'react';
import './Swiper.css';
import '../../App.css'
import '../../pages/tutorial/tutorial.css'
import '../../pages/questionaire/questionaire.css'
import LogoSmall from '../../images/logoSmall.png'
import Back_button from '../../images/back_b.png'


interface SwiperProps {
  items: JSX.Element[];
}

const Swiper: React.FC<SwiperProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const swiperRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (currentIndex === items.length - 1) {
      return; // se for a última página, não faça nada
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex === 0) {
      return; // se for a primeira página, não faça nada
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = event.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const difference = touchStartX.current - touchEndX.current;
    const threshold = 100;
    if (difference > threshold) {
      handleNext();
    } else if (difference < -threshold) {
      handlePrev();
    }
  };

  const handleGoToLast = () => {
    setCurrentIndex(items.length - 1);
    if (swiperRef.current) {
      swiperRef.current.scrollLeft = swiperRef.current.scrollWidth;
    }
  };
  return (
    <div className="swiper-container" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div className='logo_container'>
        <img src={LogoSmall} alt="" />
      </div>
      <div className="swiper-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {items.map((item, index) => (
          <div key={index} className="swiper-slide">
            {item}
          </div>
        ))}
      </div>
      <div className='button_container'>
        <button className="swiper-prev" onClick={handlePrev}>
          <img src={Back_button} alt="Back button" />
        </button>
        <button className="swiper-next" onClick={handleNext}>
          Next
        </button>
        <p className="go-to-last" onClick={handleGoToLast}>
          Skip the tutorial
        </p>
      </div>
    </div>
  );
};

export default Swiper;