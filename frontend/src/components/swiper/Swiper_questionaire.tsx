import React, { useState } from "react";
import './Swiper.css';
import '../../pages/questionaire/questionaire.css'
import Back_button from '../../images/back_b.png'
import LogoSmall from '../../images/logoSmall.png'

interface SwiperProps {
  items: JSX.Element[];
}

export const Swiper_q: React.FC<SwiperProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex === items.length - 1) {
      return; // se for a última página, não faça nada
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  const NextButtonVisible = currentIndex === 4 || currentIndex === 3 ? false : true;
  const BackButtonVisible = currentIndex === 0 ? false : true;
  const DoneButtonVisible = currentIndex === 3 ?  true : false;

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {items.map((item, index) => (
          <div key={index} className={`swiper-slide slide-${index}`}>
            <div className='questionaire_nav'>
              <button className="swiper-to-prev" onClick={handlePrev} style={{ display: BackButtonVisible ? 'block' : 'none' }}>
                <img src={Back_button} alt="Back button" />
              </button>
              <div className="questionaire_img_container">
                <img src={LogoSmall} alt="" />
              </div>
            </div>
            {item}
          <div className='button_container'>
            <button className="swiper-to-next" onClick={handleNext} style={{ display: NextButtonVisible ? 'block' : 'none' }}>
              Next &gt;
            </button>
            <button className="swiper-done" onClick={handleNext} style={{ display: DoneButtonVisible ? 'block' : 'none' }}>
              Done
            </button>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Swiper_q;