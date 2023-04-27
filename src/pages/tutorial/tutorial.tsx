import React from 'react';
import Swiper from '../../components/swiper/Swiper';

const items = [
  <div key="1">
    <h2>Item 1</h2>
    <p>This is the first item</p>
  </div>,
  <div key="2">
    <h2>Item 2</h2>
    <p>This is the second item</p>
  </div>,
  <div key="3">
    <h2>Item 3</h2>
    <p>This is the third item</p>
  </div>,
];

const App: React.FC = () => {
  return (
    <div>
      <Swiper items={items} />
    </div>
  );
};

export default App;