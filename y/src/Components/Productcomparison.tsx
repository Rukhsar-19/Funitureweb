import React from "react";
import "../Styles/Productcomparison.scss";
import nail1 from "../assets/nail1.webp";
import trophy from "../assets/trophy.webp";
import guarantee from"../assets/guarantee.webp";
import user from "../assets/user.webp"
import ship from "../assets/ship.webp"

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
const Productcomparison = () => {
  return (
    <>
      <section className="shopbannner">
        <div className="shopback">
          <div className="shop-pos">
            <div className="title">Product Comparison</div>
            <div className="shop-align">
              <div className="para">Home</div>
              <i className="ri-arrow-right-s-line"></i>
              <div className="para">Comparison</div>
            </div>
          </div>
        </div>
      </section>
      {/* comparepage */}
      <section className="comparepage main-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <div className="product-compare">
                <div className="text">Go to Product page for more Products</div>
                <button className="viewmore">View More</button>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="comparefun">
                <div className="img-pro">
                  <img src={nail1} />
                </div>
                <div className="prod-info">
                  <div className="text">Asgaard Sofa</div>
                  <div className="para">Rs. 250,000.00</div>
                  <div className="fav-icons">
                    <div className="number">4.7</div>
                    <i className="ri-star-s-fill color-yellow"></i>
                    <i className="ri-star-s-fill color-yellow"></i>
                    <i className="ri-star-s-fill color-yellow"></i>
                    <i className="ri-star-s-fill color-yellow"></i>
                    <div className="reviews">204 Review</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="comparefun">
                <div className="img-pro">
                  <img src={nail1} />
                </div>
                <div className="prod-info">
                  <div className="text">Asgaard Sofa</div>
                  <div className="para">Rs. 250,000.00</div>
                  <div className="fav-icons">
                    <div className="number">4.7</div>
                    <i className="ri-star-s-fill color-yellow"></i>
                    <i className="ri-star-s-fill color-yellow"></i>
                    <i className="ri-star-s-fill color-yellow"></i>
                    <i className="ri-star-s-fill color-yellow"></i>
                    <div className="reviews">204 Review</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="Addproduct">
                <div className="text">Add A Product</div>
                <DropdownButton
                  id="dropdown-item-button"
                  title="Choose a Product"
                >
                  <Dropdown.ItemText>Choose a Product</Dropdown.ItemText>
                  <Dropdown.Item as="button">Action</Dropdown.Item>
                  <Dropdown.Item as="button">Another action</Dropdown.Item>
                  <Dropdown.Item as="button">Something else</Dropdown.Item>
                </DropdownButton>
              </div>
            </div>
          </div>

          <table className="spec-table">
            <thead>
              <tr>
                <th>General</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sales Package</td>
                <td>1 sectional sofa</td>
                <td>1 Three Seater, 2 Single Seater</td>
              </tr>
              <tr>
                <td>Model Number</td>
                <td>TFCBLGRBL6SRHS</td>
                <td>DTUBLGRBL568</td>
              </tr>
              <tr>
                <td>Secondary Material</td>
                <td>Solid Wood</td>
                <td>Solid Wood</td>
              </tr>
              <tr>
                <td>Configuration</td>
                <td>L-shaped</td>
                <td>L-shaped</td>
              </tr>
              <tr>
                <td>Upholstery Material</td>
                <td>Fabric + Cotton</td>
                <td>Fabric + Cotton</td>
              </tr>
              <tr>
                <td>Upholstery Color</td>
                <td>Bright Grey & Lion</td>
                <td>Bright Grey & Lion</td>
              </tr>
            </tbody>
          </table>

          {/* product */}
          <table className="spec-table">
            <thead>
              <tr>
                <th>Product</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Filling Material</td>
                <td>Finish Type</td>
                <td>1 Three Seater, 2 Single Seater</td>
              </tr>
              <tr>
                <td>Model Number</td>
                <td>TFCBLGRBL6SRHS</td>
                <td>DTUBLGRBL568</td>
              </tr>
              <tr>
                <td>Secondary Material</td>
                <td>Solid Wood</td>
                <td>Solid Wood</td>
              </tr>
              <tr>
                <td>Configuration</td>
                <td>L-shaped</td>
                <td>L-shaped</td>
              </tr>
              <tr>
                <td>Upholstery Material</td>
                <td>Fabric + Cotton</td>
                <td>Fabric + Cotton</td>
              </tr>
              <tr>
                <td>Upholstery Color</td>
                <td>Bright Grey & Lion</td>
                <td>Bright Grey & Lion</td>
              </tr>
            </tbody>
          </table>
          {/* product */}
          {/* Dimensions */}
          <table className="spec-table">
            <thead>
              <tr>
                <th>Dimensions</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Filling Material</td>
                <td>Finish Type</td>
                <td>1 Three Seater, 2 Single Seater</td>
              </tr>
              <tr>
                <td>Model Number</td>
                <td>TFCBLGRBL6SRHS</td>
                <td>DTUBLGRBL568</td>
              </tr>
              <tr>
                <td>Secondary Material</td>
                <td>Solid Wood</td>
                <td>Solid Wood</td>
              </tr>
              <tr>
                <td>Configuration</td>
                <td>L-shaped</td>
                <td>L-shaped</td>
              </tr>
              <tr>
                <td>Upholstery Material</td>
                <td>Fabric + Cotton</td>
                <td>Fabric + Cotton</td>
              </tr>
              <tr>
                <td>Upholstery Color</td>
                <td>Bright Grey & Lion</td>
                <td>Bright Grey & Lion</td>
              </tr>
            </tbody>
          </table>
          {/* Dimensions */}

          {/* warrrenty */}
          <table className="spec-table">
            <thead>
              <tr>
                <th>Warranty</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Warranty Summary</td>
                <td>1 Year Manufacturing Warranty</td>
                <td>1.2 Year Manufacturing Warranty</td>
              </tr>
              <tr>
                <td>Warranty Service Type</td>
                <td>
                  For Warranty Claims or Any Product Related Issues Please Email
                  at operations@trevifurniture.com
                </td>
                <td>
                  For Warranty Claims or Any Product Related Issues Please Email
                  at support@xyz.com
                </td>
              </tr>
              <tr>
                <td>Covered in Warranty</td>
                <td>Warranty Against Manufacturing Defect</td>
                <td>
                  Warranty of the product is limited to manufacturing defects
                  only.
                </td>
              </tr>
              <tr>
                <td>Not Covered in Warranty</td>
                <td>
                  The Warranty Does Not Cover Damages Due To Usage Of The
                  Product Beyond Its Intended Use And Wear & Tear In The Natural
                  Course Of Product Usage.
                </td>
                <td>
                  The Warranty Does Not Cover Damages Due To Usage Of The
                  Product Beyond Its Intended Use And Wear & Tear In The Natural
                  Course Of Product Usage.
                </td>
              </tr>
              <tr>
                <td>Upholstery Material</td>
                <td>Fabric + Cotton</td>
                <td>Fabric + Cotton</td>
              </tr>
              <tr>
                <td>Upholstery Color</td>
                <td>Bright Grey & Lion</td>
                <td>Bright Grey & Lion</td>
              </tr>
            </tbody>
          </table>
          {/* warrrenty */}
          {/* addcart button */}
          <table className="spec-table">
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>
                  <button className="add-comp-btn">Add To Cart</button>
                </td>
                <td>
                  <button className="add-comp-btn">Add To Cart</button>
                </td>
              </tr>
            </tbody>
          </table>
          {/*  */}
        </div>
      </section>

      {/* comparepage */}
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

export default Productcomparison;
