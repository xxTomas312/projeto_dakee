import React, { useState, useRef } from 'react';
import './Swiper.css';

interface SwiperProps {
  items: JSX.Element[];
}

const Swiper: React.FC<SwiperProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const handleNext = () => {
    if (currentIndex === items.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(items.length - 1);
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

  return (
    <div className="swiper-container" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div className="swiper-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {items.map((item, index) => (
          <div key={index} className="swiper-slide">
            {item}
          </div>
        ))}
      </div>
      <button className="swiper-prev" onClick={handlePrev}>
        Prev
      </button>
      <button className="swiper-next" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Swiper;