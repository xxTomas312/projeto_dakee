import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Login from './pages/login/login';
import Logo from './pages/logo/logo';
import Tutorial from './pages/tutorial/tutorial';
import Questionaire from './pages/questionaire/questionaire';
import Home from './pages/home/home';
import SignUp from './pages/signUp/signUp';
import MyProfile from './pages/my_profile/my_profile';


function App() {
  return (  
    <>
    <Routes>
      <Route path="/" element={<Logo />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp/>} />
      <Route path="/Tutorial" element={<Tutorial />} />
      <Route path="/Questionaire" element={<Questionaire />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/My_profile" element={<MyProfile />} />
    </Routes>
    </>
  );
}

export default App;
