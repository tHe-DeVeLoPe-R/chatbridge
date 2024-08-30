import React, { useState } from 'react'
import './Nav.css'
import Footer from './Footer.jsx';
import Intro from './Intro.jsx';
import GetStarted from './GetStarted.jsx';
export default function NavBar() {


    const [activeClass, setActiveClass] = useState('Home')


    return (
        <>
            {activeClass === 'Start' ? (<>

                <GetStarted />
                <Footer />
            </>) : (<>
                <div className='nav-main'>
                    <ul className='nav-ul'>
                        <a onClick={() => setActiveClass('Home')} className='nav-a' href="
        #">
                            <li className={`nav-li ${activeClass === 'Home' ? 'active' : ''}`}>
                                Home
                            </li>
                        </a>

                        <a onClick={(event) => {
                            event.preventDefault();
                            setActiveClass('Start')
                        }} className='nav-a' href="
        ">
                            <li className={`nav-li ${activeClass === 'Start' ? 'active' : ''}`}>
                                Get Started
                            </li>
                        </a>

                        <a onClick={() => setActiveClass('Developer')} className='nav-a' href="
        https://www.linkedin.com/in/saad-zafar-12777621a/">
                            <li className={`nav-li ${activeClass === 'Developer' ? 'active' : ''}`}>
                                Thanks Developer
                            </li>
                        </a>
                    </ul>

                </div>

                <Intro />
                <Footer />
            </>)}
        </>



    );

}

