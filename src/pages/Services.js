import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../style/Services.css";
import android from "../assets/icons/android 1.png";
import dekstopDev from "../assets/icons/coding 1-1.png";
import websiteIcon from "../assets/icons/coding (1) 1-1.png";
import cloudIcon from "../assets/icons/cloud 1.png";

export const Services = () => {
  return (
    <section
      id="services"
      className="services"
      style={{
        padding: "10vh",
        paddingTop: "150px",
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
          <Col xs={12} sm={6} className="mb-4">
            <Card>
              <Card.Body>
                <div className="icon-container">
                  <img alt="" src={android} className="icon" />
                </div>
                <Card.Title style={{ paddingTop: "30px" }}>
                  Android Development
                </Card.Title>
                <Card.Text
                  style={{ paddingLeft: "20px", paddingRight: "20px" }}
                >
                  We're experts in developing apps from design to registration
                  on Google Play.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} className="mb-4">
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
          <Col xs={12} sm={6} className="mb-4">
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
                  We provide website creation services for various types of
                  businesses
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} className="mb-4">
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
