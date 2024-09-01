import React from 'react'
import './BottomNav.css'
import { useMediaQuery } from 'react-responsive';

export default function BottomNav({handleClick}) {
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

  return (
    <>
    <div className={isMobile? 'mobile-bottom-nav': 'bottom-nav'}>
    <button onClick={handleClick} className={isMobile? 'mobile-start-btn': 'start-btn'}>Get Started</button> <br /> <br />
    <a href="https://www.linkedin.com/in/saad-zafar-12777621a/"><button className={isMobile? 'mobile-touch-btn': 'touch-btn'}>Get in touch | Linkedin</button></a>
    
    </div>
    </>
    
  )
}
