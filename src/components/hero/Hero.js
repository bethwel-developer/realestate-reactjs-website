import React from "react";
import  "./Hero.css";
import {HiLocationMarker} from "react-icons/hi";
import CountUp from "react-countup";

function Hero ()  {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">

           {/*left-side*/}
        <div className="flexColStart hero-left">
          <div className="hero-title">
           <div className="orange-circle"/>
              <h1>
                Discover <br/> most suitable<br/> property
              </h1>
            </div>

            <div className="flexColStart hero-des">
              
              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, eos </span>
              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, eos </span>
            </div>

            <div className="flexCenter search-bar">

              <HiLocationMarker color="red" size={25}/>
              <input type="text" placeholder="enter locaction name"/>
              <button className="button s-button">search</button>
           
            </div>


            <div className="flexCenter stats">

              <div className="flexColCenter stat">
                <span className="counts">
                  <CountUp start={200} end={1200}/>
                  <span>++</span>
                </span>
                <span  className="line4"> monthly sales</span>
              </div>

              <div className="flexColCenter stat">
                <span className="counts2" >
                  <CountUp start={50} end={237}/>
                  <span>++</span>
                </span>
                <span className="line3">
                  happy customers</span>
              </div>



            </div>
         </div>

           
           
            {/*right-side*/}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./heroimage.jpg" alt=""/>
          </div>
        </div>









      </div>
    </section>
    


  )  
}

export default Hero;