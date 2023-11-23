import React, { useEffect, useState } from "react";
import profilePic from "../../images/profile_pic.jpg";
import "./About.css";

export const About = () => {

  const [count, setCount] = useState('');

  useEffect(() => {
    countdownTimer();
  });

  // const scrollToTechSkillsSection = () => {    is this used?
  //   document
  //     .querySelector("#skills-section")
  //     .scrollIntoView({ behavior: "smooth" });
  // };

  const countdownTimer = () => {
    // Set the date we're counting down to
    var countDownDate = new Date("April 12, 2024 00:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(x);
        setCount('LET THE FESTIVITIES BEGIN!')
      } else {
        setCount(days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ')
      }
    }, 1000);
  }

  return (
    <div className="about-wrapper">
      <div className="title-wrapper">
        <h1 className='title-name'>Nemoff Reunion</h1>
        <h1 className='title-date'>April 12 - 14, 2024</h1>
        <h1 className='title-date' style={{ marginTop: '8px' }}>{ count }</h1>
      </div>
      <section id="about-section" className="about-outer-container">
        <div className="about-info-container">
          <h2 className="about-text">Welcome family!</h2>
          <p className="about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <div className="contact-info-container">
            <h2 className="about-text">How do I reserve my spot?</h2>
            <p className="about-text">call the resort at <span><a href="tel:XXXXXXXXXX" style={{ textDecorationColor: '#FFF', color: '#FFF' }}>XXX.XXX.XXXX</a></span> and say you're with the "Nemoff Family Reunion" April 12 - 14, 2024</p>
            <p className="about-text">rates listed below</p>
          </div>

          <div className="contact-info-container">
            <h2 className="about-text">Location</h2>
            <a
              rel="noopener noreferrer"
              aria-label="venue address"
              href="https://www.hiltonphoenixresortatthepeak.com"
              target="_blank"
            >
              <p className="about-text email-text" style={{ fontWeight: 'bold' }}>Hilton Phoenix Resort at the Peak</p>
            </a>
            <a
              rel="noopener noreferrer"
              aria-label="venue address"
              href="http://maps.google.com/?q=Hilton Phoenix Resort at the Peak"
              target="_blank"
            >
              <p className="about-text email-text" style={{ fontWeight: 'bold' }}>7677 N 16th St, Phoenix, AZ 85020</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
