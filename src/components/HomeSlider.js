import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";

import slide1 from '../assets/images/slider-1.jpg';
import slide2 from '../assets/images/slider-2.jpg';
import slide3 from '../assets/images/slider-3.jpg';

function HomeSlider() {
  const sliderContent = [
    {
      name: 'slide-1',
      heading: 'No Pain, No pain',
      subText: 'Give your body the best form',
      buttonText: 'Get Started',
      imgUrl: slide1,
      imgType: 'dark'
    },
    {
      name: 'slide-1',
      heading: 'MAKE YOUR BODY HEALTHY & FIT',
      subText: 'Gymate an unknown printer took a galley of type and scrambled.It has survived nknown printercenturies.',
      buttonText: 'Get Started',
      imgUrl: slide2,
      imgType: 'light'
    },
    {
      name: 'slide-1',
      heading: 'We Can Give A Shape Of Your Body Here!',
      subText: 'Gymat an unknown printer took a galley of type and scraey aretea bled make a type specimen book. May has survived not onlyive centuries but also the leap electronic.',
      buttonText: 'Get Started',
      imgUrl: slide3,
      imgType: 'dark'
    }
  ];

  const [sliderData, setSliderData] = useState(sliderContent)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };
  return (
    <section className="slider-section mb-5">
      <div className="slider-container">
        <Slider {...settings}>
          {
            sliderData.map((slide, index) => {
              return <div className="slide-container" key={index}>
                <img src={slide.imgUrl} alt="" />
                <div className={slide.imgType === 'dark' ? "content" : "content dark"}>
                    <h2>{slide.heading}</h2>
                  <p>{slide.subText}</p>
                    <Link to='#' className="btn btn-primary btn-lg border-0 border-radius-0">{slide.buttonText}</Link>
                  </div>
                </div>
            })
          }
          {/* <div className="slide-container">
            <img src={slide2} alt="" />
            <div className="content">
              <h2>No Pain, No Gain</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, temporibus.</p>
              <Link to={slide2} className="btn btn-primary btn-lg border-0 border-radius-0">Button Text</Link>
            </div>
          </div>
          <div className="slide-container">
            <img src={slide3} alt="" />
            <div className="content">
              <h2>No Pain, No Gain</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, temporibus.</p>
              <Link to={slide2} className="btn btn-primary btn-lg border-0 border-radius-0">Button Text</Link>
            </div>
          </div> */}
        </Slider>
      </div>
    </section>
  )
}

export default HomeSlider