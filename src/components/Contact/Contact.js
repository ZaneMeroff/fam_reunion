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
        {/* <i className='contact-message'>______________</i> */}
        <p className='about-text'>website created by</p>
        <p className='about-text'>Zachary Nemeroff</p>
        <a rel='noopener noreferrer' aria-label='send email' href='mailto: ZaNemeroff@gmail.com' target='_blank'><p className='about-text email-text'>ZaNemeroff@gmail.com</p></a>
        <p className='about-text'>© 2024</p>
        {/* <a rel='noopener noreferrer' tabIndex='-1' href={resumeData.resumeURL} target='_blank'><button aria-label='view resume as PDF' className='resume-button-footer'>resume.pdf</button></a> */}
        {/* <div className='social-icons-container'>
          <a rel='noopener noreferrer' aria-label='github profile' href={resumeData.gitHubURL} target='_blank'><img alt='Github icon' src={gitHubIcon} className='social-icon icon'/></a>
          <a rel='noopener noreferrer' aria-label='linkedin profile' href={resumeData.linkedInURL} target='_blank'><img alt='Linkedin icon' src={linkedInIcon} className='social-icon icon'/></a>
          <a rel='noopener noreferrer' aria-label='twitter profile' href={resumeData.twitterURL} target='_blank'><img alt='Twitter icon' src={twitterIcon} className='social-icon icon'/></a>
        </div> */}
      </section>
    </div>
  );

}
