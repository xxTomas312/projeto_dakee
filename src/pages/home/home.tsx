import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Filter_icon from '../../images/filters_icon.png'
import logoSmall from '../../images/logoSmall.png'
import Luoa_icon from '../../images/lupa.png'
import './home.css'
import '../../App.css'
import SearchBar from '../../components/search_bar/search_bar'

const Home_page: React.FC = () => {
  enum CurrentPage {
    Buttons = 'Buttons',
    A = 'A',
    B = 'B',
  }

  const handleSearch = (searchTerm: string) => {
    console.log('Search term:', searchTerm);
    // Perform your search logic here
  };

  const [currentPage, setCurrentPage] = useState<CurrentPage>(CurrentPage.Buttons);

  const handleButtonClick = (page: CurrentPage) => {
    setCurrentPage(page);
  };

  const handleBackButtonClick = () => {
    setCurrentPage(CurrentPage.Buttons);
  };

  const renderPage = () => {
    switch (currentPage) {
      case CurrentPage.Buttons:
        return (
          <section className='home_page'>
            <div className='menu_button_container'>
                <img src={logoSmall} alt="" onClick={() => handleButtonClick(CurrentPage.A)} />
            </div>
            <div className='subtitle_container'>
                <h1>Find the Local!</h1>
            </div>
            <div className='search_container'>
              <SearchBar onSearch={handleSearch} />
            </div>
            <div className='home_button_container'>
                <button className={`home_filter_btt ${currentPage !== CurrentPage.Buttons ? 'page-slide-leave' : ''}`}onClick={() => handleButtonClick(CurrentPage.B)} >
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
        );
      case CurrentPage.A:
        return (
          <div className={`menu_page ${currentPage ? 'page-slide-enter' : ''}`}>
            <h2>Menu</h2>
            <button className="back-button" onClick={handleBackButtonClick}>
              <img src="" alt="" />
            </button>
          </div>
        );
      case CurrentPage.B:
        return (
          <div className={`filters_page ${currentPage ? 'page-slide-enter' : ''}`}>
            <h1>Página B</h1>
            <button className="back-button" onClick={handleBackButtonClick}>
              <img src="" alt="" />
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`slide_page ${currentPage ? 'page-slide-enter' : ''}`}>
      {renderPage()}
    </div>
  );
};

export default Home_page;












        