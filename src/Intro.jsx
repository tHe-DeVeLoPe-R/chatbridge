import React from 'react'
import './Intro.css';

import logoimage from './images/logo.jpeg'
export default function Intro() {
  return (
    <div>
      <h1 className='heading'>ChatBridge - What this  product is?</h1>
      <img className='logo' src={logoimage} alt="" />
      <p className='intro-para'>
        Introducing our innovative whatsapp messaging solution &nbsp;<b>Chat Bridge</b>. With our product, you can send messages to unsaved numbers effortlessly, eliminating the need to save contacts for quick, one-time communications. Whether you need to reach out to a local print shop, a service provider, or anyone else for a brief exchange, our tool streamlines the process, saving you time and effort while keeping your contact list uncluttered. Embrace convenience and efficiency with direct messaging capabilities that simplify your communication needs.

      </p>

    </div>
  )
}
