import React from "react";
import "../Styles/Hero.scss";
const Hero = () => {
  return (
    <section className="hero main-padding">
      <div className="hero-back">
        <div className="hero-card">
          <div className="head">New Arrival</div>
          <div className="text">Discover Our New Collection</div>
          <div className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            omnis deserunt dolorum incidunt error, nam a 
          </div>
          <button className="buynow">BUY NOW</button>

        </div>
      </div>
    </section>
  );
};

export default Hero;
