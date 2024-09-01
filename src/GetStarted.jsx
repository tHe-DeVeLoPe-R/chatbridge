import React, { useState } from 'react'
import './GetStarted.css' // Import the CSS file for styling
import { useMediaQuery } from 'react-responsive'
import logo from './images/logo.jpeg'
import { FaArrowLeft } from 'react-icons/fa';

export default function GetStarted({ handleBackEvent }) {

    const isMobile = useMediaQuery({query: '(max-width: 600px)'});

    const [countryCode, setCountryCode] = useState('')
    const [phone, setPhone] = useState('')

    const [error, setError] = useState('');

    const handleCountryChange = (event) => {
        setCountryCode(event.target.value);
    }

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    }

    const handleWhatsappConnectEvent = (event) => {
        event.preventDefault();
        const startingText = 'Hello';
        const url = `https://wa.me/${countryCode}${phone}?text=${startingText}`;

        try {
            window.open(url, '_blank');
        } catch (error) {
            setError(`${error}`);
        }


    }
    return (
        <>
          <div className='icon-connect'>
                <button className='arrow-btn' onClick={()=>{
                    window.close();
                }}>
                    <FaArrowLeft className='ico-style' />
                </button>


                <h2 className='connectHeading-style'>Connect Whatsapp </h2>


            </div>
          <img className='logo-style' src={logo} alt="" /> <br /><br />
            <div className= {isMobile? 'mobile-form-container' : 'form-container'}>
                
                <h2 className='heading'>Enter Phone Number</h2>
                <form className="get-started-form" onSubmit={(e) => handleWhatsappConnectEvent(e)}>
                    <div className="form-group">
                        <label htmlFor="country-code">Country Code:</label>
                        <input type="text" id="country-code" name="countryCode" placeholder="+92" value={countryCode}
                            onChange={(e) => handleCountryChange(e)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact">Contact Number:</label>
                        <input type="text" id="contact" name="contact" placeholder="3010000000" value={phone} onChange={(e) => handlePhoneChange(e)} required />
                    </div>
                    <button type="submit" className="btn">Connect Whatsapp</button> <br />
                    <button onClick={handleBackEvent} className="back-btn">Back Home</button> <br />
                </form>
                {error && <p className="error">{error}</p>}
            </div>
        </>

    )
}
