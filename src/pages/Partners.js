import React, { useEffect, useRef, useState } from "react";
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
import gambar12 from "../assets/Partner/12.png";

import AOS from "aos";
import "aos/dist/aos.css";

export const Partners = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [swiperMounted, setSwiperMounted] = useState(false);

  // Create a ref to access the Swiper instance
  const swiperRef = useRef(null);

  useEffect(() => {
    setSwiperMounted(true);
  }, []);

  useEffect(() => {
    if (swiperMounted) {
      // Pause autoplay on component mount
      const swiperInstance = swiperRef.current;
      if (swiperInstance && swiperInstance.autoplay) {
        swiperInstance.autoplay.stop();
      }

      // Add event listener to check scroll position
      const handleScroll = () => {
        const swiperInstance = swiperRef.current;
        if (swiperInstance && swiperInstance.el) {
          const swiperHeight = swiperInstance.el.offsetHeight;
          const swiperOffsetTop = swiperInstance.el.offsetTop;
          const scrollY = window.scrollY;
          const windowHeight = window.innerHeight;

          if (
            scrollY + windowHeight > swiperOffsetTop &&
            scrollY < swiperOffsetTop + swiperHeight
          ) {
            // Resume autoplay when the Swiper is visible in the viewport
            swiperInstance.autoplay.start();
          } else {
            // Pause autoplay when the Swiper is not visible in the viewport
            swiperInstance.autoplay.stop();
          }
        }
      };

      // Add the event listener to handle scroll
      window.addEventListener("scroll", handleScroll);

      // Remove the event listener on component unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [swiperMounted]);

  return (
    <section>
      <div
        className="mb-3"
        style={{
          paddingBottom: "5px",
          color: "#005D8C",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            paddingTop: "70px",
            paddingBottom: "35px",
            color: "#005D8C",
            fontWeight: "bold",
          }}
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          Our Partners
        </h1>

        <Col
          xs={12}
          md={6}
          lg={8}
          className="mx-auto"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <Swiper
            loop={true}
            ref={swiperRef}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
              waitForTransition: true,
            }}
          >
            <SwiperSlide>
              <Image
                alt="Partner 12"
                src={gambar12}
                style={{ height: "55px", width: "95px" }}
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
