import React from "react";
import { Slide } from "react-slideshow-image";
import "./SlideShowHeader.css";

import pic01 from '../../images/slideshow/fam_reunion_01.jpg'
import pic02 from '../../images/slideshow/fam_reunion_02.jpg'
import pic03 from '../../images/slideshow/fam_reunion_03.jpg'
import pic04 from '../../images/slideshow/fam_reunion_04.jpg'
import pic05 from '../../images/slideshow/fam_reunion_05.jpg'
import pic06 from '../../images/slideshow/fam_reunion_06.jpg'
import pic07 from '../../images/slideshow/fam_reunion_07.jpg'
import pic08 from '../../images/slideshow/fam_reunion_08.jpg'
import pic09 from '../../images/slideshow/fam_reunion_09.jpg'
import pic10 from '../../images/slideshow/fam_reunion_10.jpg'
import pic11 from '../../images/slideshow/fam_reunion_11.jpg'
import pic12 from '../../images/slideshow/fam_reunion_12.jpg'
import pic13 from '../../images/slideshow/fam_reunion_13.jpg'
import pic14 from '../../images/slideshow/fam_reunion_14.jpg'
import pic15 from '../../images/slideshow/fam_reunion_15.jpg'
import pic16 from '../../images/slideshow/fam_reunion_16.jpg'

const slideImages = [ pic01, pic02, pic03, pic04, pic05, pic06, pic07, pic08, pic09, pic10, pic11, pic12, pic13, pic14, pic15, pic16 ];

const properties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: false,
};

export const SlideShowHeader = () => {
  return (
    <div className="slideshow-container">
      <Slide {...properties} className="react-slideshow">
        {slideImages.map((img, index) => (
          <div className="slide-img-container">
            <img src={img} alt="img" key={index} className="slide-img" />
          </div>
        ))}
      </Slide>
    </div>
  );
};
