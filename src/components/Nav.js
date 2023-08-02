import React from 'react'
import './Nav.css'

const navLogoPath = '/images/lemon-yellow.png'

function Nav() {
  return (
    <nav className='navbar'>
      <div className='super-container flex-container navbar-container'>
        <img src={navLogoPath} alt='Little Lemon Logo' className='navbar-logo'/>
        <a href='#' className='navbar-toggle'>
            <i class="fa-solid fa-bars"></i>
        </a>
        <ul className='flex-container navbar-list'>
          <li><a href='#'>HOME</a></li>
          <li><a href='#'>MENU</a></li>
          <li><a href='#'>OUR STORY</a></li>
          <li><a href='#'>CONTACT US</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
