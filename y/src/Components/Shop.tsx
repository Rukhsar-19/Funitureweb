import React from "react";
import "../Styles/Shop.scss";
import Ourproduct from "./Ourproduct";
import trophy from "../assets/trophy.webp";
import guarantee from"../assets/guarantee.webp";
import user from "../assets/user.webp"
import ship from "../assets/ship.webp"

const Shop = () => {
  return (
    <>
     
     
      {/* filters */}
      <section className="filters">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="filters-pic">
                <div className="filters-equal">
                  <i className="ri-equalizer-fill"></i>
                  <div className="filter-head">Filter</div>
                </div>
                <div className="filter-screen">
                  <i className="ri-apps-2-fill"></i>
                  <i className="ri-stacked-view"></i>
                </div>

                <div className="show-data">
                  <div className="line"></div>
                  <div className="result">Showing 1–16 of 32 results</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="show-number">
                <div className="show-head">
                  <div className="title">Show</div>
                  <div className="number">16</div>
                </div>

                <div className="show-head">
                  <div className="title">Short by</div>
                  <div className="number def-w">Default</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* filters */}
      {/* products */}
      <Ourproduct />

      {/* products */}

      {/* topmaterials */}
      <section className="quality">
        <div className="custom-container">
          <div className="allitems">
            <div className="items-include">
              <div className="trophy">
                <img src={trophy} />
              </div>
              <div className="trophy-txt">
                <div className="head">High Quality</div>
                <div className="para">crafted from top materials</div>
              </div>
            </div>
            <div className="items-include">
              <div className="trophy">
                <img src={guarantee} />
              </div>
              <div className="trophy-txt">
                <div className="head">Warranty Protection</div>
                <div className="para">Over 2 years</div>
              </div>
            </div>
            <div className="items-include">
              <div className="trophy">
                <img src={ship} />
              </div>
              <div className="trophy-txt">
                <div className="head">Free Shipping</div>
                <div className="para">Order over 150 $</div>
              </div>
            </div>
            <div className="items-include">
              <div className="trophy">
                <img src={user} />
              </div>
              <div className="trophy-txt">
                <div className="head">24 / 7 Support</div>
                <div className="para">Dedicated support</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* topmaterials */}
    </>
  );
};

export default Shop;
