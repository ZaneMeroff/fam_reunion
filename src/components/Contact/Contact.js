import React, { useEffect } from 'react';
import gitHubIcon from '../../images/github_icon.png';
import twitterIcon from '../../images/twitter_icon.png';
import linkedInIcon from '../../images/linkedin_icon.png';
import { resumeData } from '../../resumeData';
import './Contact.css';

export const Contact = () => {

  useEffect(() => {
    const socialIcons = document.querySelectorAll('.icon');
    socialIcons.forEach(icon => {
      icon.addEventListener('mouseleave', e => icon.classList.add('mouse-leave'));
    })
  })

  return (
    <div>
      {/* <div className="contact-clip-path-top"></div> */}
      <section id='contact-section' className='contact-outer-container'>
        <i className='contact-message'>for questions call or text</i>

        <p className='about-text'>Sara Wade</p>
        <a href="tel:2068904823" style={{ textDecorationColor: '#FFF' }}><p className='about-text'>206.890.4823</p></a>

        <p className='about-text' style={{ marginTop: '15px' }}>Zachary Nemeroff</p>
        <a href="tel:2603853176" style={{ textDecorationColor: '#FFF' }}><p className='about-text'>260.385.3176</p></a>
        
        <p className='about-text' style={{ marginTop: '100px' }}>website created by</p>
        <p className='about-text'>Zachary Nemeroff</p>
        <a rel='noopener noreferrer' aria-label='send email' href='mailto: ZaNemeroff@gmail.com' target='_blank'><p className='about-text email-text'>ZaNemeroff@gmail.com</p></a>
        <p className='about-text'>© 2024</p>
      </section>
    </div>
  );

}
