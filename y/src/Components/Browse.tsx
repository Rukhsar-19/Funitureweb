import React from "react";
import "../Styles/Browse.scss";
import browse1 from "../assets/browse1.webp";
import browse2 from "../assets/browse2.webp";
import browse3 from "../assets/browse3.webp";
const Browse = () => {
  return (
    <section className="browse main-padding">
       <div className="container"> 
        <div className="row">
          <div className="col-lg-12">
            <div className="main-heading">Browse The Range</div>
            <div className="main-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
       
            <div className="row align-items-center justify-content-center">
     
          <div className="col-lg-3">
            <div className="browse-card">
              <img src={browse1} />
              <div className="head">Dining</div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="browse-card">
              <img src={browse2} />
              <div className="head">Living</div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="browse-card">
              <img src={browse3} />
              <div className="head">Bedroom</div>
            </div>
          </div>
       
     
         </div>
        </div>
      </div>
    </section>
  );
};

export default Browse;
