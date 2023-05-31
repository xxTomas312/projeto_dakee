import React, {useState } from 'react';
import './no_internet.css';
import Nav from '../../components/nav/nav_profile';
import dan_pic from '../../images/dan_pic.png'
import dakee_pic from '../../images/dakee_pic.png'

function Chat() {
  const [aberto, setAberto] = useState(false);
  return (
    <>
      <section className='messages_page'>
      </section>
    
      {aberto ? (
      <section className='see_details_page'>
        </section>
        ) : null}</>
  );
}

export default Chat;