import React from "react";
import "../Styles/Exploremore.scss";
import swiperpic1 from "../assets/swiperpic1.webp";
import swiperpic2 from "../assets/swiperpic2.webp";
import swiperpic3 from "../assets/swiperpic3.webp";
//
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";

//
const Exploremore = () => {
  return (
    <section className="explore main-padding">
      <div className="exploremore">
        <div className="inp-sec">
          <div className="title">50+ Beautiful rooms inspiration</div>
          <div className="text">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </div>
          <button className="buynow">Explore More</button>
        </div>
        {/* swiper */}
        <div className="swiper-sec">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={true}
            pagination={{ clickable: true }}
            spaceBetween={10}
            slidesPerView={2.5}
          >
            <SwiperSlide>
              <div className="image-slide">
                <img src={swiperpic1} />

                <div className="hover-layer">
                  <div className="hover-content">
                    <div className="box-inner">
                      <h1>01 - Bed Room</h1>
                      <p>Inner Peace</p>
                    </div>
                    <button className="inner-btn">
                      <i className="ri-arrow-right-long-line"></i>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="image-slide">
                <img src={swiperpic2} />
                <div className="hover-layer">
                  <div className="hover-content">
                    <div className="box-inner">
                      <h1>01 - Bed Room</h1>
                      <p>Inner Peace</p>
                    </div>
                    <button className="inner-btn">
                      <i className="ri-arrow-right-long-line"></i>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="image-slide">
                <img src={swiperpic3} />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* swiper */}
      </div>
    </section>
  );
};

export default Exploremore;
