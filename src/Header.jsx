import React, { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive';
import { FaArrowLeft, FaSun, FaMoon } from 'react-icons/fa';
import './Header.css'
import logo from './images/logo.jpeg'
import darklogo from './images/darklogo.png'

export default function Header({ handleDarkTheme, theme }) {
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

    useEffect(() => {
        document.body.style.backgroundColor = theme ? '#01304A' : '#ffffff';

    }, [theme])
    return (
        isMobile ? <div>

            <div className='icon-intro'>
                <button className='arrow-btn' onClick={() => {
                    window.close();
                }}>
                   {theme ? <FaArrowLeft className='ico-style-dark-theme' /> : <FaArrowLeft className='ico-style' />}
                </button>
                <h1 className={`introHeading-style ${theme ? 'darktheme-introHeading-style' : ''}`}

                >Introduction </h1>
                <button className='moon-btn' onClick={
                    handleDarkTheme
                }>
                    {theme ? <FaSun className='ico-style-dark-theme' /> : <FaMoon className='ico-style' />}
                </button>
            </div> <br />

            <img className='logo-style' src={theme ? darklogo : logo} alt="" /> <br />
            <small className={`version ${theme ? 'dark-theme-color' : ''}`}>v 1.0.3</small>

            <h2 className={`introHeading-style ${theme ? 'darktheme-introHeading-style' : ''}`}>Chat Bridge</h2>

        </div> : <div>
            {/* desktop version */}
            <div className='icon-intro'>

                <button className='arrow-btn' onClick={() => {
                    window.close();
                }}>
                    {theme ? <FaArrowLeft className='ico-style-dark-theme' /> : <FaArrowLeft className='ico-style' />}
                </button>
                <h1 className={`desktop-introHeading-style ${theme ? 'darktheme-introHeading-style' : ''}`}

                >Hello I am ChatBridge </h1>

                <button className='moon-btn' onClick={
                    handleDarkTheme
                }>
                    {theme ? <FaSun className='ico-style-dark-theme' /> : <FaMoon className='ico-style' />}
                </button>

            </div><br />
            <div className='logo-div'>
                <img className='logo-style' src={theme ? darklogo : logo} alt="" />

            </div>
            <small className={`version ${theme ? 'dark-theme-color' : ''}`}>v 1.0.3</small>

        </div>

    )
}
