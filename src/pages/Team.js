import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import "../style/Team.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

//Team
import danielTeam from "../assets/team/Frame 1000001464.png";
import deniImage from "../assets/team/Deni.webp";
import adjieImage from "../assets/team/Adjie.webp";
import budiImage from "../assets/team/Budi.webp";
import cliefImage from "../assets/team/Clief.webp";
import andriImage from "../assets/team/Andri.webp";
import kimImage from "../assets/team/Kim.webp";
import rizqiImage from "../assets/team/Rizqi.webp";
import hendyImage from "../assets/team/Hendy.webp";
import raffiImage from "../assets/team/Raffi.webp";
import fahriImage from "../assets/team/Fahri.webp";
import azriImage from "../assets/team/Azri.webp";
import dwiImage from "../assets/team/Dwi.webp";
import diahImage from "../assets/team/Diah.webp";
import erlitaImage from "../assets/team/Erlita.webp";
import safiraImage from "../assets/team/Safira.webp";
import syarifImage from "../assets/team/Syarif.webp";
import novaImage from "../assets/team/Nova.webp";
import fadilImage from "../assets/team/Fadhil.webp";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Team = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      id="team"
      className="team"
      style={{
        paddingTop: "150px",
        textAlign: "center",
        width: "95%",
      }}
    >
      <Container>
        <h1
          style={{
            paddingBottom: "50px",
            color: "#005D8C",
            fontWeight: "bold",
            alignItems: "center",
            textAlign: "center",
          }}
          data-aos="fade-down"
        >
          Meet Our Team
        </h1>
      </Container>

      <Row className="justify-content-center">
        <Col md={4} sm={12} className="d-flex justify-content-center mb-5">
          <Image className="img-daniel" alt="Daniel" src={danielTeam} />
        </Col>

        <Col className="img-team" md={4} sm={12} style={{ width: "900px" }}>
          <Swiper
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay, Navigation]}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              waitForTransition: true,
            }}
          >
            {/* <SwiperSlide>
              <Image alt="Budi" src={budiImage} />
            </SwiperSlide> */}
            <SwiperSlide>
              <Image alt="Adjie" src={deniImage} />
            </SwiperSlide>
            <SwiperSlide>
              <Image alt="Safira" src={adjieImage} />
            </SwiperSlide>
            <SwiperSlide>
              <Image alt="Adjie" src={andriImage} />
            </SwiperSlide>
            <SwiperSlide>
              <Image alt="Syarif" src={syarifImage} />
            </SwiperSlide>
            <SwiperSlide>
              <Image alt="Andri" src={safiraImage} />
            </SwiperSlide>
            <SwiperSlide>
              <Image alt="Clief" src={diahImage} />
            </SwiperSlide>
            <SwiperSlide>
              <Image alt="Diah" src={erlitaImage} />
            </SwiperSlide>
            <SwiperSlide>
              <Image alt="Erlita" src={cliefImage} />
            </SwiperSlide>
            <SwiperSlide>
              <Image alt="Clief" src={novaImage} />
            </SwiperSlide>
            <SwiperSlide>
              <Image alt="Kim" src={kimImage} />
            </SwiperSlide>
            <SwiperSlide>
              <Image alt="Rizqi" src={rizqiImage} />
            </SwiperSlide>
            <SwiperSlide>
              <Image alt="Hendy" src={hendyImage} />
            </SwiperSlide>
            <SwiperSlide>
              <Image alt="Raffi" src={raffiImage} />
            </SwiperSlide>
            <SwiperSlide>
              <Image alt="Fahri" src={fahriImage} />
            </SwiperSlide>
            <SwiperSlide>
              <Image alt="Fadil" src={fadilImage} />
            </SwiperSlide>
            <SwiperSlide>
              <Image alt="Azri" src={azriImage} />
            </SwiperSlide>
            <SwiperSlide>
              <Image alt="Dwi" src={dwiImage} />
            </SwiperSlide>
          </Swiper>
        </Col>
      </Row>
    </section>
  );
};
