import React  from 'react';
import Swiper from '../../components/swiper/Swiper';
import { SwiperItemType } from '../../components/types'
import './tutorial.css'

const tutorial_page = () => {
    /* Desktop Version */
    const items: SwiperItemType[] = [
      {
        elements: (
          <>
          <div className='tutorial_page_1'>
            <h1>pagina 1</h1>
          </div>
          </>
        ),
      },
      {
        elements: (
          <>
          <div className='tutorial_page_2'>
            <h1>pagina 2</h1>
          </div>
          </>
        ),
      },
      {
        elements: (
          <>
          <div className='tutorial_page_3'>
            <h1>pagina 3</h1>
          </div>
          </>
        ),
      },
      {
        elements: (
          <>
          <div className='tutorial_page_4'>
            <h1>pagina 4</h1>
          </div>
          </>
        ),
      },
      {
        elements: (
          <>
          <div className='tutorial_page_5'>
            <h1>pagina 5</h1>
          </div>
          </>
        ),
      },
    ];  
    return (
      <>
        <section className="home_body">
          <div className="container">
            <Swiper items={items} />
          </div>
        </section>
      </>
    );
  };
      export default tutorial_page;