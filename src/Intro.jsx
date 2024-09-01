import React from 'react'
import './Intro.css';
import { useMediaQuery } from 'react-responsive';
export default function Intro() {

  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

  return (
    <div>
      <h1 className={isMobile? 'welcome-heading' : 'desktop-welcome-heading'}>Welcome</h1>
      <p className='intro-para'>
        Tired of the hassle of saving phone numbers just to send a quick WhatsApp message?
        Chat Bridge is here to streamline your experience. With Chat Bridge, you can bypass the unnecessary step of saving contacts to your phone and start chatting on WhatsApp instantly. Just enter the phone number, and let Chat Bridge do the rest.
        Start bridging the gap between you and your WhatsApp conversations with Chat Bridge – the quickest way to connect!

      </p>
      

    </div>
  )
}
