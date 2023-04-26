import React, { useRef, useState } from 'react';
import { getRefValue, useSatateRef } from '../../lib/hooks';
import { SwiperItemType } from '../types';
import './Swiper.css'
import './SwiperItem.css'
import SwiperItem from './SwiperItem';
import { getTouchEventData } from '../../lib/dom';

export interface Props {
  items: SwiperItemType[];
}

const MIN_SWIPE_REQUIRED = 40;

function Swiper({ items }: Props) {
  const containerRef = useRef<HTMLUListElement>(null);
  const containerWidthRef = useRef(0);
  const minOffsetXRef = useRef(0);
  const currentOffsetXRef = useRef(0);
  const startXRef = useRef(0);

  const [isSwiping, setIsSwiping] = useState(false);
  const [offsetX, setOffsetX, offsetXRef] = useSatateRef(0);

  const onTouchMove = (e: TouchEvent | MouseEvent) => {
    const currentX = getTouchEventData(e).clientX;
    const diff = getRefValue(startXRef) - currentX;
    let newOffsetX = getRefValue(currentOffsetXRef) - diff;

    const maxOffsetX = 0;
    const minOffsetX = getRefValue(minOffsetXRef);

    if (newOffsetX > maxOffsetX) {
      newOffsetX = 0;
    }

    if (newOffsetX < minOffsetX) {
      newOffsetX = minOffsetX;
    }

    setOffsetX(newOffsetX);
  };

  const onTouchEnd = () => {
    const containerWidth = getRefValue(containerWidthRef);
    const currentOffsetX = getRefValue(currentOffsetXRef);
    let newOffsetX = getRefValue(offsetXRef);

    const diff = currentOffsetX - newOffsetX;

      //Math.abs para obter sempre um numero positivo

    if (Math.abs(diff) > MIN_SWIPE_REQUIRED) {
      // Swipe para direita se diff for positivo
      if (diff > 0) {
        newOffsetX = Math.floor(newOffsetX / containerWidth) * containerWidth;
      }
      // Swipe para a esquerda se diff for negativo
      else {
        newOffsetX = Math.ceil(newOffsetX / containerWidth) * containerWidth;
      }
    } else {
      newOffsetX = Math.round(newOffsetX / containerWidth) * containerWidth;
    }


      //Formula to Swipe

    newOffsetX = Math.round(newOffsetX / containerWidth) * containerWidth;

    setIsSwiping(false);
    setOffsetX(newOffsetX);

    window.removeEventListener('touchmove', onTouchMove);
    window.removeEventListener('touchend', onTouchEnd);
    window.removeEventListener('mousemove', onTouchMove);
    window.removeEventListener('mouseup', onTouchEnd);
  };

  const onTouchStart = (
    e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
  ) => {
    setIsSwiping(true);

    currentOffsetXRef.current = getRefValue(offsetXRef);
    startXRef.current = getTouchEventData(e).clientX;

    const containerEl = getRefValue(containerRef);
    const containerWidth = containerEl.offsetWidth;

    containerWidthRef.current = containerWidth;

    minOffsetXRef.current = containerWidth - containerEl.scrollWidth;

    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onTouchEnd);
    window.addEventListener('mousemove', onTouchMove);
    window.addEventListener('mouseup', onTouchEnd);
  };

  return (
    <div
      className="swiper-container"
      onTouchStart={onTouchStart}
      onMouseDown={onTouchStart}
    >
      <ul
        ref={containerRef}
        className={`swiper-list ${isSwiping ? 'swiping' : ''}`}
        style={{ transform: `translate3d(${offsetX}px , 0, 0)` }}
      >
        {items.map((item, idx) => (
          <SwiperItem key={idx} {...item} />
        ))}
      </ul>
    </div>
  );
}

export default Swiper;
