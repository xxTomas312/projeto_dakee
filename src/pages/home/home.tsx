import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/nav/nav'
import Filter_icon from '../../images/filter.png'
import Luoa_icon from '../../images/lupa.png'
import './home.css'
import '../../App.css'
import SearchBar from '../../components/search_bar/search_bar'
import RangeSlider from '../../components/range_slider/range_slider'
import backButton from '../../images/back_button_f.png'
import filter_icon from '../../images/filters_icon.png'
import Stars from '../../images/stars.png'
import art_icon from '../../images/art_f.png'
import food_icon from '../../images/food_f.png'
import music_icon from '../../images/music_f.png'





  const handleSearch = (searchTerm: string) => {
    console.log('Search term:', searchTerm);
    // Perform your search logic here
  };


  function Home_page() {
    const [aberto, setAberto] = useState(false);
    const [value, setValue] = useState(50);

    const handleSliderChange = (newValue: number) => {
      setValue(newValue);
    };
    
    return(
        <>
         <section className='home_page'>
              <Nav></Nav>
              <div className='subtitle_container'>
                  <h1>Find the Local!</h1>
              </div>
              <div className='search_container'>
                <SearchBar onSearch={handleSearch} />
              </div>
              <div className='home_button_container'>
                  <button className="home_filter_btt" onClick={() => setAberto(true)} >
                      <img src={filter_icon} alt="Filter icon" />
                      <p>Filters</p>
                  </button>
                  <button className='search_btt'>Search&gt;</button> 
              </div>
              <div className='image_container'>
                  <img src={Luoa_icon} alt="" />
                  <p>Choose a city <br/>to search for the Locals!</p>
              </div>
          </section>
  
          {aberto ? (
              <div className="filters_page">
                <button className="back-button" onClick={() => setAberto(false)}>
                  <img src={backButton} alt="Back Button" />
                </button>
                <div className='filter_main_container'>
                <div className='filters_subtitle_container'>
                  <img src={Filter_icon} alt="Filters Icon" />
                  <h3>Filters</h3>
                </div>
                <div className='gender_filter'>
                  <p className='filter_subtitle'>Gender</p>
                  <div className='filter_btt_container'>
                    <div className='gender_btt'>Male</div>
                    <div className='gender_btt'>Female</div>
                  </div>
                </div>
                <div className='age_filter'>
                  <p className='filter_subtitle'>Age</p>
                  <RangeSlider value={value} onChange={handleSliderChange}/>
                  <div className='slider_range_container'>
                    <p>20</p>
                    <p>60+</p>
                  </div>
                </div>
                <p className='filter_subtitle'>Advices in</p>
                <div className='advices_filter'>
                  <div className='advice_btt_container'>
                    <img src={art_icon} alt="Art icon"/>
                    <p>art</p>
                  </div>
                  <div className='advice_btt_container'>
                    <img src={food_icon} alt="Food icon"/>
                    <p>food</p>
                  </div>
                  <div className='advice_btt_container'>
                    <img src={music_icon} alt="Music icon"/>
                    <p>music</p>
                  </div>
                </div>
                <div className='rating_container'>
                  <p className='filter_subtitle'>Minimal rating</p>
                  <img src={Stars} alt="" />
                </div>
              </div>
            </div>
        ) : null}
        </>
    )
  }
  
  export default Home_page;

        