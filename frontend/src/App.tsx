import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login_or_signUp from './pages/login_or_signUp/login_or_signUp';
import Logo from './pages/logo/logo';
import Tutorial from './pages/tutorial/tutorial';
import Questionaire from './pages/questionaire/questionaire';
import Home from './pages/home/home';
import SignUp from './pages/signUp/signUp';
import MyProfile from './pages/my_profile/my_profile';
import Rewards from './pages/rewards/rewards';
import No_internet from './pages/no_internet/no_internet';
import Login from './pages/login/login';
import Rewards_second_page from './pages/rewards_second_page/rewards_second_page'
import Chat from './pages/chat/chat'
import Messages_page from './pages/chat/messages/messages'

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOnlineStatus);

    return () => {
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOnlineStatus);
    };
  }, []);

  return (
    <>
      {!isOnline ? (
        <>
          <No_internet />
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Logo />} />
          <Route path="/Login_or_signUp" element={<Login_or_signUp />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Tutorial" element={<Tutorial />} />
          <Route path="/Questionaire" element={<Questionaire />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/My_profile" element={<MyProfile />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Rewards_second_page" element={<Rewards_second_page />} />
          <Route path="/Rewards" element={<Rewards />} />
          <Route path="/Chat" element={<Chat />} />
          
          
        </Routes>
      )}
    </>
  );
}

export default App;