import React from "react";
import "./footer.css"


function Footer  () {
  return (
    <section className="f-wrapper">
    <div className="div paddings innerWidth flexCenter f-container">
      {/*left side */}
      <div className="div flexColStart f-left">
        <img src="./logo3.jpg"  width={120} alt="Girl in a jacket"/>
        <span className="span secondaryText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum qui reprehenderit</span>
      </div>

    <div className="div flexColStart f-right">
      <span className="primaryText">information</span>
      <span className="secondaryText">nairobiCBD, Luthuli street</span>

      <div className="flexCenter f-menu">
             <span>property</span>
             <span>services</span>
             <span>products</span>
             <span>about us</span>
      </div>
    </div>
    </div>

    </section>
  )
}

export default Footer;
