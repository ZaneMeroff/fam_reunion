import React from 'react';
import profilePic from '../../images/profile_pic.jpg';
import { resumeData } from '../../resumeData';
import './About.css';

export const About = () => {

  const scrollToTechSkillsSection = () => {
    document.querySelector('#skills-section').scrollIntoView({behavior: 'smooth'});
  }

  const printBio = () => {
    const bio1 = resumeData.bioDescription1.split('<skillsLink>')
    const bio2 = resumeData.bioDescription2
    return <div><p className='about-text'>{bio1[0]}<span onClick={scrollToTechSkillsSection} className='tech-skills-link'>see complete list</span>{bio1[1]}</p><p className='about-text about-text-2'>{bio2}</p></div>
  }

  return (
    <div className="about-wrapper">
      <div className="about-clip-path-top"></div>
      <section id='about-section' className='about-outer-container'>
        <div className='profile-pic-container'><img alt='zacharys profile' src={profilePic} className='profile-pic'/></div>
        <div className='about-info-container'>
          <h2 className='about-text'>Greetings!</h2>
          { printBio() }
          <div className='contact-info-container'>
            <h2 className='about-text'>Contact Details</h2>
            <p className='about-text'>Zachary Nemeroff</p>
            <p className='about-text'>Denver, CO</p>
            <a rel='noopener noreferrer' aria-label='send email' href='mailto: ZaNemeroff@gmail.com' target='_blank'><p className='about-text email-text'>ZaNemeroff@gmail.com</p></a>
            <a rel='noopener noreferrer' href={resumeData.resumeURL} target='_blank'><button tabIndex='-1' aria-label='view resume as PDF' className='resume-button'>resume.pdf</button></a>
          </div>
        </div>
      </section>
    </div>
  );
}
