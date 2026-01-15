import React from "react";
import { useRef, useState } from "react";
// Import Swiper React components
import "../Styles/Singleproduct.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import nail1 from "../assets/nail1.webp";
import nail2 from "../assets/nail2.webp";
import nail3 from "../assets/nail3.webp";
import nail4 from "../assets/nail4.webp";
import sofapic from'../assets/sofa1.webp';
import lsofa from '../assets/lsofa.webp';
// Import Swiper styles
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
const Singleproduct = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      {/* filters */}
      <section className="filters">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="filters-pic">
                <div className="filters-equal">
                  <div className="hh">Home</div>
                  <i className="ri-arrow-right-s-line"></i>
                </div>
                <div className="filter-screen">
                  <div className="filter-head">Shop</div>
                  <i className="ri-arrow-right-s-line"></i>
                </div>

                <div className="show-data">
                  <div className="line"></div>
                  <div className="result">Asgaard sofa</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* filters */}

      {/* thumbnailswiper old*/}
      {/* <section className="swiper-pictures">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="swiper-allparent">
                <div className="swiper-main">
                  <Swiper
              
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Thumbs]}
                    className="mySwiper2"
                  >
                    <SwiperSlide>
                      <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="swiper-nails">
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={4}
                    
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* thumbnailswiper*/}
      <section className="swiper-pictures">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="swiper-allparent">
                {/* Thumbnail swiper on left - vertical */}
                <div className="swiper-nails">
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={4}
                    direction="vertical"
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="thumbnail-img">
                        <img src={nail1} alt="Nature 1" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="thumbnail-img">
                        <img src={nail2} alt="Nature 2" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="thumbnail-img">
                        <img src={nail3} alt="Nature 3" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="thumbnail-img">
                        <img src={nail4} alt="Nature 4" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="thumbnail-img">
                        <img src={nail1} alt="Nature 5" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="thumbnail-img">
                        <img
                          src="https://swiperjs.com/demos/images/nature-6.jpg"
                          alt="Nature 6"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="thumbnail-img">
                        <img
                          src="https://swiperjs.com/demos/images/nature-7.jpg"
                          alt="Nature 7"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="thumbnail-img">
                        <img
                          src="https://swiperjs.com/demos/images/nature-8.jpg"
                          alt="Nature 8"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="thumbnail-img">
                        <img
                          src="https://swiperjs.com/demos/images/nature-9.jpg"
                          alt="Nature 9"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="thumbnail-img">
                        <img
                          src="https://swiperjs.com/demos/images/nature-10.jpg"
                          alt="Nature 10"
                        />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>

                {/* Main swiper on right - full width */}
                <div className="swiper-main">
                  <Swiper
                    loop={true}
                    spaceBetween={0}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Thumbs]}
                    className="mySwiper2"
                  >
                    <SwiperSlide>
                      <div className="main-img-wrapper">
                        <img
                          src={nail1}
                          alt="Nature 1"
                          className="main-swiper-img"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="main-img-wrapper">
                        <img
                          src={nail2}
                          alt="Nature 2"
                          className="main-swiper-img"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="main-img-wrapper">
                        <img
                          src={nail3}
                          alt="Nature 3"
                          className="main-swiper-img"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="main-img-wrapper">
                        <img
                          src={nail4}
                          alt="Nature 4"
                          className="main-swiper-img"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="main-img-wrapper">
                        <img
                          src={nail1}
                          alt="Nature 5"
                          className="main-swiper-img"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="main-img-wrapper">
                        <img
                          src="https://swiperjs.com/demos/images/nature-6.jpg"
                          alt="Nature 6"
                          className="main-swiper-img"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="main-img-wrapper">
                        <img
                          src="https://swiperjs.com/demos/images/nature-7.jpg"
                          alt="Nature 7"
                          className="main-swiper-img"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="main-img-wrapper">
                        <img
                          src="https://swiperjs.com/demos/images/nature-8.jpg"
                          alt="Nature 8"
                          className="main-swiper-img"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="main-img-wrapper">
                        <img
                          src="https://swiperjs.com/demos/images/nature-9.jpg"
                          alt="Nature 9"
                          className="main-swiper-img"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="main-img-wrapper">
                        <img
                          src="https://swiperjs.com/demos/images/nature-10.jpg"
                          alt="Nature 10"
                          className="main-swiper-img"
                        />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
            {/* detail sofa */}
            <div className="col-lg-6">
              <div className="detail-sofa">
                <p className="name">Asgaard sofa</p>
                <p className="text">Rs. 250,000.00 </p>
                <div className="fav-customer">
                  <div className="fav-fun">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-half-line mr-2"></i>
                  </div>
                  <div className="custom-feed">
                    <p className="customer-review">5 Customer Review</p>
                  </div>
                </div>
                <p className="para-all">
                  Setting the bar as one of the loudest speakers in its class,
                  the Kilburn is a compact, stout-hearted hero with a
                  well-balanced audio which boasts a clear midrange and extended
                  highs for a sound.
                </p>
                <div className="size-head">Size</div>
                <div className="size">
                  <div className="size-no">L</div>
                  <div className="size-no">XL</div>
                  <div className="size-no">XS</div>
                </div>
                <div className="size-head">Color</div>
                <div className="fun-color">
                  <div className="fun-circle color-pur"></div>
                  <div className="fun-circle"></div>
                  <div className="fun-circle color-black"></div>
                </div>
                <div className="counter-sec">
                  <div className="count-in">
                    <div className="inner-txt">
                      <i className="ri-subtract-line"></i>
                      <div className="number-count">4</div>
                      <i className="ri-add-line"></i>
                    </div>
                    <button className="add-cart">Add To Cart</button>
                    <button className="add-cart">
                      <i className="ri-add-line"></i>Compare
                    </button>
                  </div>
                </div>
              </div>
              <div className="icons-social">
                <div className="icons-head">SKU</div>
                <div className="icons-head">:</div>
                <div className="icons-head">SS001</div>
              </div>
              <div className="icons-social">
                <div className="icons-head">Category</div>
                <div className="icons-head">:</div>
                <div className="icons-head">Sofas</div>
              </div>
              <div className="icons-social">
                <div className="icons-head">Tags</div>
                <div className="icons-head">:</div>
                <div className="icons-head">Sofa, Chair, Home, Shop</div>
              </div>
              <div className="icons-social">
                <div className="icons-head">Share</div>
                <div className="icons-head">:</div>
                <div className="icons-head">
                  <i className="ri-facebook-circle-fill"></i>
                </div>
                <div className="icons-head">
                  <i className="ri-linkedin-box-fill"></i>
                </div>
                <div className="icons-head">
                  <i className="ri-twitter-fill"></i>
                </div>
              </div>
            </div>
            {/* detail sofa */}
          </div>
        </div>
      </section>
      {/* thumbnailswiper */}
      {/* section-destab */}
      <section className="sec-tabdes main-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tabs-funiture">
                <Tabs
                  defaultActiveKey="description"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="description" title="Description">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-12 mb-4">
                          <div className="desc-txt">
                            Embodying the raw, wayward spirit of rock ‘n’ roll,
                            the Kilburn portable active stereo speaker takes the
                            unmistakable look and sound of Marshall, unplugs the
                            chords, and takes the show on the road.
                          </div>
                          <div className="desc-txt">
                            Weighing in under 7 pounds, the Kilburn is a
                            lightweight piece of vintage styled engineering.
                            Setting the bar as one of the loudest speakers in
                            its class, the Kilburn is a compact, stout-hearted
                            hero with a well-balanced audio which boasts a clear
                            midrange and extended highs for a sound that is both
                            articulate and pronounced. The analogue knobs allow
                            you to fine tune the controls to your personal
                            preferences while the guitar-influenced leather
                            strap enables easy and stylish travel.
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="sofa-pic">
                            <img src={sofapic}/>
                          </div>

                        </div>
                          <div className="col-lg-6">
                          <div className="sofa-pic">
                            <img src={lsofa}/>
                          </div>

                        </div>
                      </div>
                    </div>
                  </Tab>
                  <Tab
                    eventKey="additionalinformation"
                    title="Additional Information"
                  >
                    Tab content for Profile
                  </Tab>
                  <Tab eventKey="reviews" title="Reviews [5]">
                    Tab content for Contact
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section-destab */}
    </>
  );
};

export default Singleproduct;
