import React, { useEffect } from 'react';
import { SlideShowHeader } from '../SlideShowHeader/SlideShowHeader';

import './Header.css';

export const Header = () => {

  useEffect(() => {
    const socialIcons = document.querySelectorAll('.icon');
    socialIcons.forEach(icon => {
      icon.addEventListener('mouseleave', e => icon.classList.add('mouse-leave'));
    })
  })

  const performSmoothScroll = () => {
    document.querySelector('#about-section').scrollIntoView({behavior: 'smooth'});
  }

  return (
    <section id='home-section' className='header-outer-container'>
      <SlideShowHeader />
      {/* <h2 className='title-industry' style={{ color: '#e76f51' }} >April 12 - 14, 2024</h2> */}
      {/* <button aria-label='scroll down' onClick={performSmoothScroll} className='down-arrow icon'></button> */}
    </section>
  );
} 
