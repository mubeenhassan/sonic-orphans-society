import React from 'react'
import Socials from '../reused/Socials'
import footerLogo from '../../assests/images/logo.jpg'

export default function Footer() {
  return (
    <div className='footer'>
      <hr className='seprator' />
      <div className='footer-content'>
        <div className='get-in-touch'>
          <div className='git-title'>GET ON THE LIST</div>
          <div className='email-input'>
            <input type='email' placeholder='Email Address' />
            <button>→</button>
          </div>
        </div>

        <div className='footer-logo'>
          <img src={footerLogo} alt='' />
        </div>
        <div className='social footer-socials'>
          <Socials />
          <div className='footer-links-sec'>
            <p>© 2021 Yuga Labs LLC</p>
            <div className='footer-links'>
              <a href='/' className='tos'>
              TSOS Terms & Conditions
              </a>
              <a href='/' className='tos'>
              TSOS Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='footer-bottom'></div>
    </div>
  )
}
