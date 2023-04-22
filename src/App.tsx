import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Login from './pages/login/login';
import Logo from './pages/logo/logo';
import Tutorial from './pages/tutorial/tutorial';
import Questionaire from './pages/questionaire/questionaire';
import Home from './pages/home/home';
import './App.css';

function App() {
  return (  
    <>
    <Routes>
      <Route path="/" element={<Logo />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Tutorial" element={<Tutorial />} />
      <Route path="/Questionaire" element={<Questionaire />} />
      <Route path="/Home" element={<Home />} />
    </Routes>
    </>
  );
}

export default App;
