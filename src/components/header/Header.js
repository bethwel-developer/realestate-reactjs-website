import React from "react";
import "./Header.css"

function Header  () {
return (
<section className="h-wrapper">
  <div className="flexCenter paddings
  innerWidth   h-container">
    <img src="./logo3.jpg" alt="logo" width={100}  />
    

    <div className="flexCenter h-menu">

      <a href="." >Residences</a>
      <a href="." >Our values</a>
      <a href=".">Contact us</a>
      <a href=".">Get started</a>
      <button className="button">
      <a href=".">contacts</a>
      </button>
    </div>
  </div>

</section>

);
};


export default Header ;