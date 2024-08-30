import React, { useState } from 'react'
import './GetStarted.css' // Import the CSS file for styling


export default function GetStarted() {

    const [countryCode, setCountryCode] = useState('')
    const [phone, setPhone] = useState('')

    const [error, setError] = useState('');

    const handleCountryChange = (event) => {
        setCountryCode(event.target.value);
    }

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    }

    const handleWhatsappConnectEvent =  (event) => {
        event.preventDefault();
        const startingText = 'Hello';
        const url = `https://wa.me/${countryCode}${phone}?text=${startingText}`;

        try {
            window.open(url, '_blank');
        } catch (error) {
            setError(`Invalid phone number or unable to open WhatsApp ${error}`);
        }


    }
    return (
        <>

            <div className="form-container">
                <h1>Let's Have it!</h1>
                <form className="get-started-form" onSubmit={(e)=> handleWhatsappConnectEvent(e)}>
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
                    <button onClick={() => {
                        window.location.reload();


                    }} className="back-btn">Back Home</button> <br />
                </form>
                {error && <p className="error">{error}</p>}
            </div>
        </>

    )
}
