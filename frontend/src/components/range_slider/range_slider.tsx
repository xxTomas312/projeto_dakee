import React, { useState } from 'react';
import './range_slider.css';

interface RangeSliderProps {
  value: number;
  onChange: (value: number) => void;
}

const RangeSlider: React.FC<RangeSliderProps> = ({ value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    onChange(newValue);
  };

  return (
    <div className="range-slider">
      <input
        type="range"
        min={20}
        max={60}
        value={value}
        onChange={handleChange}
        style={{ '--value': value } as React.CSSProperties}
      />
      <div className="range-value">
        {value}
      </div>
    </div>
  );
};

export default RangeSlider;