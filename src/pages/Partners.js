import React from "react";
import { Col, Image } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";

import gambar1 from "../assets/Partner/1.png";
import gambar2 from "../assets/Partner/2.png";
import gambar3 from "../assets/Partner/3.png";
import gambar4 from "../assets/Partner/4.png";
import gambar5 from "../assets/Partner/5.png";
import gambar6 from "../assets/Partner/6.png";
import gambar7 from "../assets/Partner/7.png";
import gambar8 from "../assets/Partner/8.png";
import gambar9 from "../assets/Partner/9.png";
import gambar10 from "../assets/Partner/10.png";
import gambar11 from "../assets/Partner/11.png";

export const Partners = () => {
  return (
    <section>
      <div
        className="mb-3"
        style={{
          paddingBottom: "20px",
          color: "#005D8C",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            paddingTop: "100px",
            paddingBottom: "35px",
            color: "#005D8C",
            fontWeight: "bold",
          }}
        >
          Our Partners
        </h1>

        <Col xs={12} md={6} lg={8} className="mx-auto">
          <Swiper
            loop={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              waitForTransition: true,
            }}
          >
            <SwiperSlide>
              <Image
                alt="Partner 1"
                src={gambar1}
                style={{ height: "40px", width: "95px" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="Partner 2"
                src={gambar2}
                style={{ height: "40px", width: "95px" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="Partner 3"
                src={gambar3}
                style={{ height: "40px", width: "95px" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="Partner 4"
                src={gambar4}
                style={{ height: "40px", width: "95px" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="Partner 5"
                src={gambar5}
                style={{ height: "40px", width: "95px" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="Partner 6"
                src={gambar6}
                style={{ height: "40px", width: "95px" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="Partner 7"
                src={gambar7}
                style={{ height: "40px", width: "95px" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="Partner 8"
                src={gambar8}
                style={{ height: "40px", width: "95px" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="Partner 9"
                src={gambar9}
                style={{ height: "40px", width: "95px" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="Partner 10"
                src={gambar10}
                style={{ height: "40px", width: "95px" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="Partner 11"
                src={gambar11}
                style={{ height: "40px", width: "95px" }}
              />
            </SwiperSlide>
          </Swiper>
        </Col>
      </div>
    </section>
  );
};
