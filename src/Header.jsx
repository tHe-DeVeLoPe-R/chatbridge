import React from 'react'
import { useMediaQuery } from 'react-responsive';
import { FaArrowLeft } from 'react-icons/fa';
import './Header.css'
import logo from './images/logo.jpeg'

export default function Header() {
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
    return (
        isMobile ? <>

            <div className='icon-intro'>
                <button className='arrow-btn' onClick={()=>{
                    window.close();
                }}>
                    <FaArrowLeft className='ico-style' />
                </button>


                <h2 className='introHeading-style'>Introduction </h2>


            </div> <br />
            <div className='logo-div'>
                <img className='logo-style' src={logo} alt="" />
                <h2 className='introHeading-style'>Chat Bridge</h2>
            </div>


        </> : <>

            <div className='icon-intro'>

            <button className='arrow-btn' onClick={()=>{
                    window.close();
                }}>
                    <FaArrowLeft className='ico-style' />
                </button>
                <h1 className='desktop-introHeading-style'>Hello I am ChatBridge </h1>


            </div><br />
            <div className='logo-div'>
                <img className='logo-style' src={logo} alt="" />
            </div>

        </>

    )
}
