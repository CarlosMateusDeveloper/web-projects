import React, { useState } from "react";
import './carrossel.css'
import Slider from "react-slick";
import Slide from "./slide.jsx";

export default function Carousel() {
  const [display] = useState(true);
  const [width] = useState(600);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className="slider-container ms-5 ps-5 pt-5">

      <div
        style={{
          width: width + "px",
          display: display ? "block" : "none"
        }}
      >
        <Slider className="slider " {...settings}>
          <Slide icon={<i className="ri-building-line"></i>}
          title={'Housing Construction'}
          description={'We build with the best professionals and high-quality work for a safe and effective home.'} />
          <Slide icon={<i class="ri-home-office-line"></i>}
          title={'Construction Of Home Areas'}
          description={'We build with the best professionals and high-quality work for a safe and effective home.'} />
          <Slide icon={<i class="ri-tools-fill"></i>} 
          title={'Maintenance & Repair'}
          description={'We build with the best professionals and high-quality work for a safe and effective home.'}/>
           <Slide icon={<i class="ri-box-3-line"></i>} 
          title={'Installation Of Ceramics &  Others'}
          description={'We build with the best professionals and high-quality work for a safe and effective home.'}/>
           <Slide icon={<i class="ri-drop-line"></i>} 
          title={'Maintenance & Repair'}
          description={'We build with the best professionals and high-quality work for a safe and effective home.'}/>
        </Slider>
      </div>
    </div>
  );
}
