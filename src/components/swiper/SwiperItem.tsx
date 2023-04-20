import React from 'react';
import { SwiperItemType } from '../types';
import '../swiper/Swiper.css'

function SwiperItem({ elements }: SwiperItemType) {
  return (
    <li className="swiper-item" draggable={false}>
      {elements}
    </li>
  );
}

export default SwiperItem;
