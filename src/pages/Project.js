import { Container, Row, Col, Image } from "react-bootstrap";
import "../style/Project.css";
// import balapsImage from "../assets/images/Frame 1000001470.png";
import simotorImage from "../assets/images/Frame 1000001471.png";
import strackImage from "../assets/images/Frame 1000001472.png";
import dnacoopImage from "../assets/images/Frame 1000001475.png";
import jayyidImage from "../assets/images/Frame 1000001474.png";
import warungdanaImage from "../assets/images/Frame 1000001473.png";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Project = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      id="product"
      className="project"
      style={{
        padding: "10vh",
        paddingTop: "150px",
        paddingBottom: "100px",
        textAlign: "center",
        backgroundColor: "#F4FAFD",
        backgroundPosition: "cover",
      }}
    >
      <Container>
        <h1
          style={{
            color: "#005D8C",
            fontWeight: "bold",
            paddingBottom: "30px",
          }}
          data-aos="fade-down"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          Our Product
        </h1>
      </Container>

      <Container>
        <Row>
          {/* <Col
            xs={12}
            sm={6}
            md={4}
            className="mb-5 center"
            data-aos="zoom-in"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <a href="https://balaps.id/" target="_blank">
              <Image src={balapsImage} fluid className="img-hover-zoom" />
            </a>
          </Col> */}
          <Col
            xs={12}
            sm={6}
            md={4}
            className="mb-5"
            data-aos="zoom-in"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <a href="https://simotor.id/" target="_blank">
              <Image src={simotorImage} fluid className="img-hover-zoom" />
            </a>
          </Col>
          <Col
            xs={12}
            sm={6}
            md={4}
            className="mb-5"
            data-aos="zoom-in"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <a href="https://strack.id/" target="_blank">
              <Image src={strackImage} fluid className="img-hover-zoom" />
            </a>
          </Col>
          <Col
            xs={12}
            sm={6}
            md={4}
            className="mb-5"
            data-aos="zoom-in"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <a href="your-dnacoop-url" target="_blank">
              <Image src={dnacoopImage} fluid className="img-hover-zoom" />
            </a>
          </Col>
        </Row>
        <Row style={{ marginTop: "10px" }}>
          <Col
            xs={12}
            sm={6}
            md={4}
            className="mb-5"
            data-aos="zoom-in"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <a href="your-jayyid-url" target="_blank">
              <Image src={jayyidImage} fluid className="img-hover-zoom" />
            </a>
          </Col>
          <Col
            xs={12}
            sm={6}
            md={4}
            className="mb-5"
            data-aos="zoom-in"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <a href="http://www.warungdana.com/" target="_blank">
              <Image src={warungdanaImage} fluid className="img-hover-zoom" />
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
