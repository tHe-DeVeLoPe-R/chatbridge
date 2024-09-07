import React from 'react'
import './Footer.css'

export default function Footer({theme}) {
  return (
    <div>
      <p className={`footer-para1 ${theme ? 'dark-theme-text' : ''}`}
      >Saad Zafar | codewithsaadzafar@gmail.com</p>
      
    </div>
  )
}
