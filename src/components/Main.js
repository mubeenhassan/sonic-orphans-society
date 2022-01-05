import React from 'react'
import { Link } from 'react-router-dom'
import bg from '../assests/images/bg.jpeg'
import Footer from './reused/Footer';
import Socials from './reused/Socials'

export default function Main() {
  return (
    <>
      <div className='main-container'>
        <div className='main-section-01'>
          <img src={bg} className='video' alt="" />          
          <Link to='/'>
            <div className="logo">TSOS</div>
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
