import React from "react";
import "../Styles/Ourproduct.scss";
import product1 from "../assets/product1.webp";
import product2 from "../assets/product2.webp";
import product3 from "../assets/product3.webp";
import product4 from "../assets/product4.webp";
import product5 from "../assets/product5.webp";
import producxt6 from "../assets/producxt6.webp";
import product7 from "../assets/product7.webp";
import product8 from "../assets/product8.webp";
import { Link } from "react-router-dom";
const Ourproduct = () => {
  return (
    <section className="ourproduct main-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-heading">Our Products</div>
          </div>
          <div className="col-lg-3">
             <Link to={`/product/`} className="product-link">
            <div className="product-card">
              <div className="product-pic">
                <div className="productall">
                  <img src={product1} />
                </div>
                <div className="discount">-30%</div>
              </div>
              <div className="product-info">
                <div className="head">Syltherine</div>
                <div className="text">Stylish cafe chair</div>
                <div className="product-price">
                  <div className="totalprice">Rp 2.500.000</div>
                  <div className="priceline">Rp 3.500.000</div>
                </div>
              </div>
              {/*  Hover Buttons */}
              <div className="product-hover">
                <button className="add-btn">Add To Cart</button>

                <div className="bottom-actions">
                  <span>
                    <i className="ri-share-fill"></i>Share
                  </span>
                  <span>
                    <i className="ri-arrow-left-right-line"></i>Compare
                  </span>
                  <span>
                    <i className="ri-heart-line"></i>Like
                  </span>
                </div>
              </div>
              {/* hover butttton */}
            </div>
            </Link>
          </div>
          {/* 2 */}
          <div className="col-lg-3">
            <div className="product-card">
              <div className="product-pic">
                <div className="productall">
                  <img src={product2} />
                </div>
                <div className="discount">-30%</div>
              </div>
              <div className="product-info">
                <div className="head">Leviosa</div>
                <div className="text">Stylish cafe chair</div>
                <div className="product-price">
                  <div className="totalprice">Rp 2.500.000</div>
                  {/* <div className="priceline">Rp 3.500.000</div> */}
                </div>
              </div>
              {/*  Hover Buttons */}
              <div className="product-hover">
                <button className="add-btn">Add To Cart</button>

                <div className="bottom-actions">
                  <span>
                    <i className="ri-share-fill"></i>Share
                  </span>
                  <span>
                    <i className="ri-arrow-left-right-line"></i>Compare
                  </span>
                  <span>
                    <i className="ri-heart-line"></i>Like
                  </span>
                </div>
              </div>
              {/* hover butttton */}
            </div>
          </div>
          {/* 2 */}
          {/* 3 */}
          <div className="col-lg-3">
            <div className="product-card">
              <div className="product-pic">
                <div className="productall">
                  <img src={product3} />
                </div>
                <div className="discount">-50%</div>
              </div>
              <div className="product-info">
                <div className="head">Lolito</div>
                <div className="text">Luxury big sofa</div>
                <div className="product-price">
                  <div className="totalprice">Rp 7.000.000</div>
                  <div className="priceline">Rp 14.000.000</div>
                </div>
              </div>
              {/*  Hover Buttons */}
              <div className="product-hover">
                <button className="add-btn">Add To Cart</button>

                <div className="bottom-actions">
                  <span>
                    <i className="ri-share-fill"></i>Share
                  </span>
                  <span>
                    <i className="ri-arrow-left-right-line"></i>Compare
                  </span>
                  <span>
                    <i className="ri-heart-line"></i>Like
                  </span>
                </div>
              </div>
              {/* hover butttton */}
            </div>
          </div>
          {/* 3 */}
          {/* 4 */}
          <div className="col-lg-3">
            <div className="product-card">
              <div className="product-pic">
                <div className="productall">
                  <img src={product4} />
                </div>
                <div className="discount greendiscount">New</div>
              </div>
              <div className="product-info">
                <div className="head">Respira</div>
                <div className="text">Outdoor bar table and stool</div>
                <div className="product-price">
                  <div className="totalprice">Rp 500.000</div>
                  {/* <div className="priceline">Rp 14.000.000</div> */}
                </div>
              </div>
              {/*  Hover Buttons */}
              <div className="product-hover">
                <button className="add-btn">Add To Cart</button>

                <div className="bottom-actions">
                  <span>
                    <i className="ri-share-fill"></i>Share
                  </span>
                  <span>
                    <i className="ri-arrow-left-right-line"></i>Compare
                  </span>
                  <span>
                    <i className="ri-heart-line"></i>Like
                  </span>
                </div>
              </div>
              {/* hover butttton */}
            </div>
          </div>
          {/* 4 */}
          {/* 5 */}
          <div className="col-lg-3">
            <div className="product-card">
              <div className="product-pic">
                <div className="productall">
                  <img src={product5} />
                </div>
                <div className="discount greendiscount">New</div>
              </div>
              <div className="product-info">
                <div className="head">Respira</div>
                <div className="text">Outdoor bar table and stool</div>
                <div className="product-price">
                  <div className="totalprice">Rp 500.000</div>
                  {/* <div className="priceline">Rp 14.000.000</div> */}
                </div>
              </div>
              {/*  Hover Buttons */}
              <div className="product-hover">
                <button className="add-btn">Add To Cart</button>

                <div className="bottom-actions">
                  <span>
                    <i className="ri-share-fill"></i>Share
                  </span>
                  <span>
                    <i className="ri-arrow-left-right-line"></i>Compare
                  </span>
                  <span>
                    <i className="ri-heart-line"></i>Like
                  </span>
                </div>
              </div>
              {/* hover butttton */}
            </div>
          </div>
          {/* 5 */}
          {/* 6 */}
          <div className="col-lg-3">
            <div className="product-card">
              <div className="product-pic">
                <div className="productall">
                  <img src={producxt6} />
                </div>
                <div className="discount greendiscount">New</div>
              </div>
              <div className="product-info">
                <div className="head">Muggo</div>
                <div className="text">Small mug</div>
                <div className="product-price">
                  <div className="totalprice">Rp 150.000</div>
                  {/* <div className="priceline">Rp 14.000.000</div> */}
                </div>
              </div>
              {/*  Hover Buttons */}
              <div className="product-hover">
                <button className="add-btn">Add To Cart</button>

                <div className="bottom-actions">
                  <span>
                    <i className="ri-share-fill"></i>Share
                  </span>
                  <span>
                    <i className="ri-arrow-left-right-line"></i>Compare
                  </span>
                  <span>
                    <i className="ri-heart-line"></i>Like
                  </span>
                </div>
              </div>
              {/* hover butttton */}
            </div>
          </div>
          {/* 6 */}
          {/* 7 */}
          <div className="col-lg-3">
            <div className="product-card">
              <div className="product-pic">
                <div className="productall">
                  <img src={product7} />
                </div>
                <div className="discount">-50%</div>
              </div>
              <div className="product-info">
                <div className="head">Pingky</div>
                <div className="text">Cute bed set</div>
                <div className="product-price">
                  <div className="totalprice">Rp 7.000.000</div>
                  <div className="priceline">Rp 14.000.000</div>
                </div>
              </div>
              {/*  Hover Buttons */}
              <div className="product-hover">
                <button className="add-btn">Add To Cart</button>

                <div className="bottom-actions">
                  <span>
                    <i className="ri-share-fill"></i>Share
                  </span>
                  <span>
                    <i className="ri-arrow-left-right-line"></i>Compare
                  </span>
                  <span>
                    <i className="ri-heart-line"></i>Like
                  </span>
                </div>
              </div>
              {/* hover butttton */}
            </div>
          </div>
          {/* 7 */}
          {/* 8 */}
          <div className="col-lg-3">
            <div className="product-card">
              <div className="product-pic">
                <div className="productall">
                  <img src={product8} />
                </div>
                <div className="discount greendiscount">New</div>
              </div>
              <div className="product-info">
                <div className="head">Potty</div>
                <div className="text">Minimalist flower pot</div>
                <div className="product-price">
                  <div className="totalprice">Rp 500.000</div>
                  {/* <div className="priceline">Rp 14.000.000</div> */}
                </div>
              </div>
              {/*  Hover Buttons */}
              <div className="product-hover">
                <button className="add-btn">Add To Cart</button>

                <div className="bottom-actions">
                  <span>
                    <i className="ri-share-fill"></i>Share
                  </span>
                  <span>
                    <i className="ri-arrow-left-right-line"></i>Compare
                  </span>
                  <span>
                    <i className="ri-heart-line"></i>Like
                  </span>
                </div>
              </div>
              {/* hover butttton */}
            </div>
          </div>
          {/* 8 */}
          <div className="col-lg-12">
            <div className="showmorebtn">
              <button className="borderbtn">Show More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourproduct;
