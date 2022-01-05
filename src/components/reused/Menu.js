import React from 'react'
import burger from '../../assests/images/bars.svg'
export default function Menu() {
 return (
  <div className='menu-container'>
    <input type="checkbox" id="check"/>
    <label for="check" className='checkbtn'>
     <img src={burger} alt="bars" />
    </label>
  <div className="menu-bar">
   <ul className="menu-link">
    <li><a href="#buy_an_orphan">buy an orphan</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#team">team</a></li>
   </ul>
  </div>
  </div>
 )
}
