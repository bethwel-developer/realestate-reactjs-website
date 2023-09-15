import React from "react";
import "./residences.css";
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import "swiper/css"
import "./residences.css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/slidersettings";


function Residences () {
  return (
  <section className="r-wrapper">
    <div className="paddings innerWidth r-container" >

      <div className="r-head flexColStart">
        <span className="orange-text">Best choices</span>
        <span className="primaryText">popular residences</span>
      </div>

      <Swiper {...sliderSettings}>
        <SliderButton/>
       {
       data.map((card, i)=>(
        <SwiperSlide key={i}>
          <div className="flexColStart r-card">
            <img src={card.image} alt="home" />

            <span className="secondaryText r-price">
              <span>Price:</span> <span>{card.price}</span>
            </span>
            <span className="PrimaryText">{card.name}</span>
            <span className="SecondaryText">{card.detail}</span>

          </div>
        </SwiperSlide>
         
        ))}
      </Swiper  >
  </div>
  </section>
  
);
};

export default Residences;


function SliderButton ()  {
  const swiper = useSwiper();

  return (
    <div className="flexCenter r-buttons">
    <button onClick={() => swiper.slidePrev()}>&lt;</button>
    <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  )
}



