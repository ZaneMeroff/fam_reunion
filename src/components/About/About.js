import React from "react";
import profilePic from "../../images/profile_pic.jpg";
import { resumeData } from "../../resumeData";
import "./About.css";

export const About = () => {
  const scrollToTechSkillsSection = () => {
    document
      .querySelector("#skills-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  const printBio = () => {
    const bio1 = resumeData.bioDescription1.split("<skillsLink>");
    const bio2 = resumeData.bioDescription2;
    return (
      <div>
        <p className="about-text">
          {bio1[0]}
          <span
            onClick={scrollToTechSkillsSection}
            className="tech-skills-link"
          >
            see complete list
          </span>
          {bio1[1]}
        </p>
        <p className="about-text about-text-2">{bio2}</p>
      </div>
    );
  };

  return (
    <div className="about-wrapper">
      <section id="about-section" className="about-outer-container">
        {/* <div className="profile-pic-container">
          <img
            alt="zacharys profile"
            src={profilePic}
            className="profile-pic"
          />
        </div> */}
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
            <h2 className="about-text">Hilton Phoenix Resort at the Peak</h2>
            <p className="about-text"></p>
            <a
              rel="noopener noreferrer"
              aria-label="venue address"
              href="http://maps.google.com/?q=Hilton Phoenix Resort at the Peak"
              target="_blank"
            >
              <p className="about-text email-text">7677 N 16th St, Phoenix, AZ 85020</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
