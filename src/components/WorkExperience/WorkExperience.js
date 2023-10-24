import React from 'react';
import { resumeData } from '../../resumeData';
import './WorkExperience.css';

export const WorkExperience = () => {

  const buildExperienceHeading = title => {
    return (
      <div className='experience-heading-box'>
        <div className='experience-heading-border'>
          <h3 className='experience-heading'>{title}</h3>
        </div>
      </div>
    )
  }

  return (
    <section id='experience-section' className='work-experience-outer-container'>

      <div className='experience-container'>
        { buildExperienceHeading('Rates') }
        <div className='experience-right-container'>
          {resumeData.rates.map(item => {
            return (
              <div key={item.name} className='plan-container'>
                <p className='experience-title'>{item.name}</p>
                <i className='experience-position'>{item.location}</i>
                <i className='experience-time'>{item.time}</i>
                <ul className='description-list'>
                  {item.bullets.map(item => <li key={item} className='experience-item'>{item}</li>)}
                </ul>
              </div>)
          })}
        </div>
      </div>

      <div className='experience-container'>
        { buildExperienceHeading('Amenities') }
        <div className='experience-right-container'>
          {resumeData.amenities.map((item, index) => {
            return (
              <div key={item.index} className='plan-container'>
                <ul className='description-list'>
                  {item.list.map(item => <li key={item} className='experience-item'>{item}</li>)}
                </ul>
              </div>)
          })}
        </div>
      </div>

      <div className='experience-container'>
        { buildExperienceHeading('Itinerary') }
        <div className='experience-right-container'>
          {resumeData.plans.map(plan => {
            return (
              <div key={plan.name} className='plan-container'>
                <p className='experience-title'>{plan.name}</p>
                <i className='experience-position'>{plan.location}</i>
                <i className='experience-time'>{plan.time}</i>
                <ul className='description-list'>
                  {plan.description.map(item => <li key={item} className='experience-item'>{item}</li>)}
                </ul>
              </div>)
          })}
        </div>
      </div>

    </section>
  );
}
