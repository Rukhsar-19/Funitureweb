import React from "react";
import "../Styles/Cart.scss";
import nail2 from "../assets/nail2.webp";
import trophy from "../assets/trophy.webp";
import guarantee from"../assets/guarantee.webp";
import user from "../assets/user.webp"
import ship from "../assets/ship.webp"
const Cart = () => {
  return (
    <>
      <section className="shopbannner">
        <div className="shopback">
          <div className="shop-pos">
            <div className="title">Cart</div>
            <div className="shop-align">
              <div className="para">Home</div>
              <i className="ri-arrow-right-s-line"></i>
              <div className="para">cart</div>
            </div>
          </div>
        </div>
      </section>
      <section className="cart main-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-7">
                  <div className="list-cart">
                    <div className="name">Product</div>
                    <div className="name">Price</div>
                    <div className="name">Quantity</div>
                    <div className="name">Subtotal</div>
                  </div>
                  <div className="sofa-list">
                    <div className="pic-fun-sofa">
                      <img src={nail2} />
                    </div>
                    <div className="cart-txt">Asgaard sofa</div>
                    <div className="cart-txt">Rs. 250,000.00</div>
                    <div className="cart-txt">1</div>
                    <div className="cart-txt">Rs. 250,000.00</div>
                    <div className="cart-txt">Asgaard sofa</div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="cart-block">
                    <h2 className="cart-head">Cart Totals</h2>
                    <div className="cart-price">
                      <div className="sub">Subtotal</div>
                      <div className="sub-price">Rs. 250,000.00</div>
                    </div>
                    <div className="cart-price">
                      <div className="sub">Total</div>
                      <div className="sub-price">Rs. 250,000.00</div>
                    </div>
                    <div className="check-btn"><button className="vart-btn">Check Out</button></div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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

export default Cart;
