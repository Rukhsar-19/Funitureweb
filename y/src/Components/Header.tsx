import React from "react";
import headerlogo from "../assets/headerlogo.webp";
import "../Styles/Header.scss";
import { Link } from "react-router-dom";
import useralert from "../assets/useralert.svg";
import { useState } from "react";
import side1 from "../assets/side1.webp";
const Header = () => {
  const [openCart, setOpenCart] = useState(false);

  return (
    <section className="header main-padding">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-4">
            <div className="header-logo">
              <img src={headerlogo} />
            </div>
          </div>
          <div className="col-lg-4">
            <ul className="navlist">
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/shop">Shop</Link>
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          {/* <div className="col-lg-4">
            <div className="nav-icons">
                <div className="useralert">
                    <img src={useralert} />

                </div>
                <i className="ri-search-line"></i>
                <i className="ri-heart-3-line"></i>
                <i className="ri-shopping-cart-2-line"></i>

            </div>

          </div> */}
          <div className="col-lg-4">
            <div className="nav-icons">
              <div className="useralert">
                <img src={useralert} alt="user" />
              </div>

              <i className="ri-search-line"></i>
              <i className="ri-heart-3-line"></i>

              {/* Cart Icon */}
              <i
                className="ri-shopping-cart-2-line"
                onClick={() => setOpenCart(true)}
              ></i>
            </div>
          </div>

          {/* Sidebar */}

          <div className={`cart-sidebar ${openCart ? "open" : ""}`}>
            <span className="close" onClick={() => setOpenCart(false)}>
              ✖
            </span>

            <h3>Shopping Cart</h3>

            <div className="counter">
              <img src={side1} height={69} />

              <div className="sidebar-content">
                <div className="title">Asgaard sofa</div>
                <div className="text">
                  1 X<span className="yellow-co">Rs. 250,000.00</span>
                </div>
              </div>

              <button>
                <i className="ri-close-circle-fill"></i>
              </button>
            </div>
            <div className="counter">
              <img src={side1} height={69} />

              <div className="sidebar-content">
                <div className="title">Asgaard sofa</div>
                <div className="text">
                  1 X<span className="yellow-co">Rs. 250,000.00</span>
                </div>
              </div>

              <button>
                <i className="ri-close-circle-fill"></i>
              </button>
            </div>

            {/* below text */}
            <div className="subtotal">
              <div className="total-price">Subtotal</div>
              <div className="price-color">Rs. 520,000.00</div>
            </div>
            {/* below text */}
            <div className="allbuttons">
                 <Link to="/cart">
                <button className="border-btn">Cart</button>
              </Link>
              <Link to="/checkout">
              <button className="border-btn">Checkout</button>
              </Link>

              <Link to="/comparison">
                <button className="border-btn">Comparison</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
