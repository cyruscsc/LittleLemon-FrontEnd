import React from 'react';
import './About.css';

const About = props => {
  return (
    <section id="about" className='bg-white'>
      <div className='super-container'>
        <div className='grid-container about-container'>
          <div className='flex-container about-images'>
            <img src='./images/mario-and-adrian-1.jpg' alt='Mario and Adrian' />
            <img src='./images/mario-and-adrian-2.jpg' alt='Mario and Adrian' />
          </div>
          <article className='about-content'>
            <div className='about-heading'>
              <h1 className='title text-yellow'>Little Lemon</h1>
              <h2 className='subtitle text-green'>Chicago</h2>
            </div>
            <div className='paragraph-text'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam pellentesque nec nam aliquam sem. Purus non enim praesent elementum. Et magnis dis parturient montes nascetur ridiculus mus. Integer quis auctor elit sed vulputate mi. Magna eget est lorem ipsum dolor sit amet consectetur. Hendrerit gravida rutrum quisque non tellus orci ac auctor. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Lectus sit amet est placerat in egestas erat imperdiet sed. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Aliquet bibendum enim facilisis gravida. Diam vel quam elementum pulvinar. Venenatis cras sed felis eget velit. Nec dui nunc mattis enim ut. Volutpat diam ut venenatis tellus. Aliquam sem fringilla ut morbi. Vehicula ipsum a arcu cursus vitae. Arcu non sodales neque sodales ut.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
