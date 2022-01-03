import React from 'react'
import { Link } from 'react-router-dom'
import mainVideo from '../assests/videos/club-landing.mp4'
import logo from '../assests/images/logo.png'
import Footer from './reused/Footer';
import Socials from './reused/Socials'

export default function Main() {
  return (
    <>
      <div className='main-container'>
        <div className='main-section-01'>
          <video className='video' loop>
            <source src={mainVideo} type='video/mp4' />
          </video>
          <Link to='/'>
            <img className='logo' src={logo} alt='logo' />
          </Link>
          <Socials/>
          <div className='welcome-container'>
            <div className='welcome-heading'>
              <h1>Welcome to The Sonic Orphans’ Society</h1>
              <Link to='/home' className='enter-btn'>Enter</Link>
            </div>
            <p className='welcome-text'>← SCROLL DOWN</p>
          </div>
        </div>

        <div className='main-bottom-text'>
        A 1 of 1 NFT Collection with two musical albums and a storyline that ties into the NFT characters, helping orphans around the world.
        </div>
      </div>

      <Footer />
    </>
  )
}
