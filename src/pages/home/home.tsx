import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Filter_icon from '../../images/filters_icon.png'
import logoSmall from '../../images/logoSmall.png'
import Luoa_icon from '../../images/lupa.png'
import './home.css'
import '../../App.css'

enum CurrentPage {
    A = 'A',
    B = 'B',
  }
  
  const Home_page: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<CurrentPage | null>(null);
  
    const handleButtonClick = (page: CurrentPage) => {
      setCurrentPage(page);
    };
  
    const renderPage = () => {
      switch (currentPage) {
        case CurrentPage.A:
          return <h1>Página A</h1>;
        case CurrentPage.B:
          return <h1>Página B</h1>;
        default:
          return null;
      }
    };
    
    return(
        <>
        <section className='home_page'>
            <div className='menu_button_container'>
                <img src={logoSmall} alt="" onClick={() => handleButtonClick(CurrentPage.A)} />
            </div>
            <div className='subtitle_container'>
                <h1>Find the Local!</h1>
            </div>
            <div className='search_container'>
                Nav Bar component
            </div>
            <div className='home_button_container'>
                <button className='home_filter_btt' onClick={() => handleButtonClick(CurrentPage.B)}>
                    <img src={Filter_icon} alt="Filter icon" />
                    <p>Filters</p>
                </button>
                <button className='search_btt'>Search&gt;</button> 
            </div>
            <div className='image_container'>
                <img src={Luoa_icon} alt="" />
                <p>Choose a city <br/>to search for the Locals!</p>
            </div>
        </section>
        <div className="slide_page">{renderPage()}</div>
        </>
    
    )
    
}

export default Home_page;