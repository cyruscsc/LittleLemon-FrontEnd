import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <footer id='footer' className='bg-black text-white'>
      <div className='super-container'>
        <div className='grid-container footer-container'>
          <div className='footer-logo'>
            <img src='./images/frame-white.png' alt='Little Lemon' />
          </div>
          <div className='footer-contact'>
            <h3 className='footer-title'>CONTACT US</h3>
            <ul className='contact-list'>
              <li><i className="fa-solid fa-location-dot" /> 1699 Oak Avenue, Chicago, IL 60606</li>
              <li><i className="fa-solid fa-phone" /> (312) 528-5097</li>
              <li><i className="fa-solid fa-envelope" /> info@littlelemon.com</li>
            </ul>
          </div>
          <div className='footer-connect'>
            <h3 className='footer-title'>CONNECT WITH US</h3>
            <div className='footer-socials'>
              <a href='https://www.facebook.com/' target='_blank'><i className="fa-brands fa-facebook-f" /></a>
              <a href='https://www.instagram.com/' target='_blank'><i className="fa-brands fa-instagram" /></a>
              <a href='https://twitter.com/' target='_blank'><i className="fa-brands fa-x-twitter" /></a>
              <a href='https://www.linkedin.com/in/cyruscsc/' target='_blank'><i className="fa-brands fa-linkedin-in" /></a>
              <a href='https://github.com/cyruscsc/' target='_blank'><i className="fa-brands fa-github" /></a>
            </div>
          </div>
          <div className='footer-copyright'>
            <p><i className="fa-regular fa-copyright" /> 2023 by Little Lemon. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
