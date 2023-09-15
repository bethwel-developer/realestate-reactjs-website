import React from "react";
import "./contact.css";
import {MdCall} from "react-icons/md"
import {BsFillChatDotsFill} from "react-icons/bs"

import{HiChatBubbleBottomCenter} from "react-icons/hi2"




function Contact () {
  return(
  <section className="c-wrapper">

    <div className="paddings innerWidth flexCenter c-container moded">
        {/*---left side-----*/}
        <div className="flexColStart c-left">
              <p className="orangeText">Our contacts</p>
              <p className="primaryText">Easy to contact us</p>
              <p className="secondaryText">we are alwavelit ips </p>
           
              

              <div className="flexColStart contactMode">
                {/*FIRST ROW */}
                <div className="flexStart  box">
                  <div className="flexColCenter mode">
                    <div className="flexStart">
                    <div className="flexCenter icons">
                      <MdCall size={20}/>
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">call</span>
                      <span className="secondaryText">07000000000</span>
                    </div>
                  </div>
                  <div className="flexCenter button callNowButton">callnow</div>
                  
                  </div> 

                  {/*2nd  */}
                  <div className="flexColCenter mode">
                    <div className="flexStart">
                    <div className="flexCenter icons">
                      <BsFillChatDotsFill size={20}/>
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">chat</span>
                      <span className="secondaryText">07000000000</span>
                    </div>
                  </div>
                  <div className="flexCenter button callNowButton">cahat now</div>
                  </div>
             </div>


             {/*2nd ROW */}
             <div className="flexStart box">
                  <div className="flexColCenter mode">
                    <div className="flexStart">
                    <div className="flexCenter icons">
                      <BsFillChatDotsFill size={20}/>
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Video call</span>
                      <span className="secondaryText">07000000000</span>
                    </div>
                  </div>
                  <div className="flexCenter button callNowButton">video callnow</div>
                  </div> 

                  {/*2nd side  */}
                  <div className="flexColCenter mode">
                    <div className="flexStart">
                    <div className="flexCenter icons">
                      <HiChatBubbleBottomCenter size={20}/>
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">message</span>
                      <span className="secondaryText">07000000000</span>
                    </div>
                  </div>
                  <div className="flexCenter button callNowButton">message now</div>
                  </div>
             </div>
            
            </div>
        </div>
        
         


    











        {/*---right side-----*/}

        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt=""/>
          </div>
        </div>

      </div>

      
  </section>
  )
}

export default Contact;