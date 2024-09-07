import React, { useState } from 'react'
import './GetStarted.css' // Import the CSS file for styling
import { useMediaQuery } from 'react-responsive'
import logo from './images/logo.jpeg'
import darklogo from './images/darklogo.png'
import { FaArrowLeft } from 'react-icons/fa';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function GetStarted({ handleBackEvent, theme }) {

    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

    const [countryCode, setCountryCode] = useState('+92')
    const [phone, setPhone] = useState('')

    const [error, setError] = useState('');

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    }

    const handleWhatsappConnectEvent = (event) => {
        event.preventDefault();

        const startingText = '';
        const url = `https://wa.me/${countryCode}${phone}?text=${startingText}`;

        try {
            let response = window.open(url, '_blank');
            if (response.window === response) {
                console.log('valid user')
            } else {
                console.log('invalid user')
            }
        } catch (error) {
            setError(`${error}`);
        }


    }


    return (
        <>
            <div className='icon-connect'>
                <button className='arrow-btn' onClick={() => {
                    window.close();
                }}>
                    {theme ? <FaArrowLeft className='ico-style-dark-theme' /> : <FaArrowLeft className='ico-style' />}
                </button>


                <h2 className={`connectHeading-style ${theme ? 'dark-text-style' : ''}`}>Connect Whatsapp </h2>


            </div>
            <img className='logo-style' src={theme ? darklogo : logo} alt="" /> <br /><br />
            <div className={`${isMobile ? 'mobile-form-container' : 'form-container'} ${theme ? 'dark-form-bg' : ''}`}>

                <h2 className={`heading ${theme ? 'dark-text-style' : ''}`}>Enter Phone Number</h2>
                <form className="get-started-form" onSubmit={(e) => handleWhatsappConnectEvent(e)}>
                    <div className="form-group">
                        <label className={`form-group-label ${theme ? 'dark-text-style' : ''}`} htmlFor="country-code">Country Code:</label>
                        <PhoneInput inputStyle={{
                            
                          width:'100%',
                            fontSize: '16px', // Font size
                            border: '1px solid #ccc', // Light grey border
                            borderRadius: '5px', // Rounded corners
                            boxSizing: 'border-box',
                            backgroundColor: 'transparent',
                            color: 'green' // Ensure padding is included in width
                        }}
                            country={'pk'}
                            value={countryCode}
                            onChange={(countryCode) => setCountryCode(countryCode)}
                        />
                    </div>
                    <div className="form-group">
                        <label className={`form-group-label ${theme ? 'dark-text-style' : ''}`} htmlFor="contact">Contact Number:</label>
                        <input className={`form-group-input ${theme ? 'dark-input' : ''}`} type="text" id="contact" name="contact" placeholder="3010000000" value={phone} onChange={(e) => handlePhoneChange(e)} required />
                    </div>
                    <button type="submit" className={`btn ${theme ? 'dark-btn' : ''}`}>Connect Whatsapp</button> <br />
                    <button onClick={handleBackEvent} className={`back-btn ${theme ? 'dark-back-btn' : ''}`}>Back Home</button> <br />
                </form>
                {error && <p className="error">{error}</p>}
            </div>
        </>

    )
}
