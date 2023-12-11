import React, { useEffect, useState } from "react";
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
        setCount('0D 0H 0M 0S')
      } else {
        setCount(days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ')
      }
    }, 1000);
  }
  
  const hiltonSiteEventLink = 'https://www.hilton.com/en/book/reservation/rooms/?ctyhocn=PHXSPPR&arrivalDate=2024-04-12&departureDate=2024-04-14&groupCode=NFR&room1NumAdults=1&cid=OM%2CWW%2CHILTONLINK%2CEN%2CDirectLink'

  return (
    <div className="about-wrapper">
      <div className="title-wrapper">
        <h1 className='title-name'>Nemoff Reunion</h1>
        <h1 className='title-date'>April 12 - 14, 2024</h1>
        <h1 className='title-date' style={{ marginTop: '8px' }}>{ count }</h1>
        { count === '0D 0H 0M 0S' ? <h1 className='title-date' style={{ marginTop: '8px' }}>LET THE FESTIVITIES BEGIN!</h1> : <div></div> }
      </div>
      <section id="about-section" className="about-outer-container">
        <div className="about-info-container">
          <h2 className="about-text">Greetings family!</h2>
          <p className="about-text">
            It's been far too long since our last family reunion, and we're thrilled to announce that the upcoming gathering will be hosted at the Hilton Phoenix Resort at the Peak. Get ready for a weekend brimming with excitement, laughter, and the retelling of cherished family stories. And don't forget to pack your swimsuit because this time there's a waterpark!
          </p>

          <div className="contact-info-container">
            <h2 className="about-text">How do I reserve my spot?</h2>

            <p className="about-text">
              Our discounted rate is good for up to three additional nights before and after April 12-14. There are a few families that plan to arrive one day early on Thur, April 11. Feel free to join us for an additional night of fun! See RATES section below for details. Deadline to book is Friday February 23, 2024.
            </p>
            
            <p className="about-text" style={{ marginTop: '8px' }}><strong>Book Online:</strong></p>
            <p className="about-text">Use our <span><a href={ hiltonSiteEventLink } style={{ textDecorationColor: '#5cfbf7' }} rel="noreferrer noopener" target="_blank" className="link-color">event link</a></span> and select your room preference. The discounted rate of $274/night (after resort fee) should automatically apply. Note, you can add more nights by changing the dates on the top banner and clicking the "Update" button.</p>
            
            <p className="about-text" style={{ marginTop: '8px' }}><strong>Book By Phone:</strong></p>
            <p className="about-text">Call <span><a href="tel:18004458667" style={{ textDecorationColor: '#5cfbf7' }} className="link-color">1-800-445-8667</a></span> and mention the group code "NFR" or mention the group "Nemoff Family Reunion April 12-14, 2024." You may also book by calling the hotel directly at <span><a href="tel:16029972626" style={{ textDecorationColor: '#5cfbf7' }} className="link-color">1-602-997-2626</a></span> and asking for reservations.</p>
          </div>

          <div style={{ marginTop: '5%', marginBottom: '1%' }}>
            <h2 className="about-text">Venue</h2>
            <a
              rel="noopener noreferrer"
              aria-label="venue address"
              href="https://www.hiltonphoenixresortatthepeak.com"
              target="_blank"
            >
              <p className="about-text email-text link-color" style={{ fontWeight: 'bold' }}>Hilton Phoenix Resort at the Peak</p>
            </a>
          </div>

          <div style={{ marginBottom: '3%' }}>
            <h2 className="about-text">Address</h2>
            <a
              rel="noopener noreferrer"
              aria-label="venue address"
              href="http://maps.google.com/?q=Hilton Phoenix Resort at the Peak"
              target="_blank"
            >
              <p className="about-text email-text link-color" style={{ fontWeight: 'bold' }}>7677 N 16th St, Phoenix, AZ 85020</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
