import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../style/Services.css";
import mobile from "../assets/icons/Mobile.png";
import dekstopDev from "../assets/icons/Desktop.png";
import websiteIcon from "../assets/icons/Website.png";
import cloudIcon from "../assets/icons/Cloud.png";
import productSystemIcon from "../assets/icons/product system.png";

export const Services = () => {
  return (
    <section
      id="services"
      className="services"
      style={{
        padding: "10vh",
        paddingTop: "120px",
        textAlign: "center",
      }}
    >
      <Container>
        <h1
          style={{
            paddingBottom: "35px",
            color: "#005D8C",
            fontWeight: "bold",
          }}
        >
          Our Services
        </h1>
      </Container>
      <Container>
        <Row className="mb-4">
          <Col xs={12} md={6} lg={6} className="mb-4">
            <Card>
              <Card.Body>
                <div className="icon-container">
                  <img alt="" src={productSystemIcon} className="icon" />
                </div>
                <Card.Title style={{ paddingTop: "30px" }}>
                  Product System
                </Card.Title>
                <Card.Text
                  style={{ paddingLeft: "20px", paddingRight: "20px" }}
                >
                  Unlock Your Vision: Our Product System Development Delivers
                  Success!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} lg={6} className="mb-4">
            <Card>
              <Card.Body>
                <div className="icon-container">
                  <img alt="" src={dekstopDev} className="icon" />
                </div>
                <Card.Title style={{ paddingTop: "30px" }}>
                  Desktop Development
                </Card.Title>
                <Card.Text
                  style={{ paddingLeft: "20px", paddingRight: "20px" }}
                >
                  We specialize in customized desktop development solutions for
                  businesses.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={6} lg={6} className="mb-4">
            <Card>
              <Card.Body>
                <div className="icon-container">
                  <img alt="" src={websiteIcon} className="icon" />
                </div>
                <Card.Title style={{ paddingTop: "30px" }}>
                  Website Development
                </Card.Title>
                <Card.Text
                  style={{ paddingLeft: "20px", paddingRight: "20px" }}
                >
                  We create customized, visually appealing, and functional
                  websites for businesses of all sizes and industries.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={6} className="mb-4">
            <Card>
              <Card.Body>
                <div className="icon-container">
                  <img alt="" src={mobile} className="icon" />
                </div>
                <Card.Title style={{ paddingTop: "30px" }}>
                  Mobile Development
                </Card.Title>
                <Card.Text
                  style={{ paddingLeft: "20px", paddingRight: "20px" }}
                >
                  We're experts in developing apps from design to registration
                  on Google Play and App Store.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={{ span: 6, offset: 3 }} lg={6} className="mb-4">
            <Card>
              <Card.Body>
                <div className="icon-container">
                  <img alt="" src={cloudIcon} className="icon" />
                </div>
                <Card.Title style={{ paddingTop: "30px" }}>
                  Cloud Server
                </Card.Title>
                <Card.Text
                  style={{ paddingLeft: "20px", paddingRight: "20px" }}
                >
                  Your family is guaranteed to have fun days with this best
                  kid-friendly place to live
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
