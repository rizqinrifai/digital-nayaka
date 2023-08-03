import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../style/Contact.css";
import { FaWhatsapp } from "react-icons/fa";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import linkedinImage from "../assets/images/Linkedin.png";
import instagramImage from "../assets/images/Instagram.png";

export const Contact = () => {
  return (
    <section
      className="contact"
      style={{ paddingTop: "40px", paddingBottom: "15px", textAlign: "center" }}
    >
      <Container id="contact">
        <h1
          className="mb-3"
          style={{
            paddingTop: "60px",
            paddingBottom: "20px",
            color: "#005D8C",
            fontWeight: "bold",
          }}
        >
          Contact Us
        </h1>

        <Row>
          <Col xs={12} md={6} style={{ textAlign: "center" }}>
            <Row>
              <div className="address-container">
                <h4>Social Media</h4>
              </div>

              <Col xs={12} md={12} className="mb-3">
                <div>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="instagram-link"
                  >
                    <Image
                      alt="Instagram"
                      src={instagramImage}
                      style={{ height: "50px", width: "83%" }}
                      className="img-fluid instagram-image"
                    />
                  </a>
                </div>
              </Col>

              <Col xs={12} md={12} className="mb-3">
                <div>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin-link"
                  >
                    <Image
                      alt="LinkedIn"
                      src={linkedinImage}
                      style={{ height: "50px", width: "83%" }}
                      className="img-fluid linkedin-image"
                    />
                  </a>
                </div>
              </Col>
            </Row>

            <Row>
              <Col style={{ paddingTop: "15px" }}>
                <div className="address-container text-center">
                  {" "}
                  <h4>Address</h4>
                  <p>
                    Ruko Sentra Komersil (Rsk) Blok 7/96 Grand Galaxy City,
                    Kelurahan Jakasetia, Kecamatan Bekasi Selatan, Kota Bekasi,
                    Jawa Barat.
                  </p>
                </div>
              </Col>
            </Row>

            <Row>
              <Col xs={12} md={12} className="mb-3">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  className="mb-3"
                >
                  <a
                    href="https://wa.me/08111873434"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-contact"
                    style={{ textDecoration: "none" }}
                  >
                    <FaWhatsapp
                      size={24}
                      color="#25D366"
                      style={{ marginLeft: "10px" }}
                    />
                    Contact Us
                  </a>
                </div>
              </Col>
            </Row>
          </Col>

          <Col
            xs={12}
            md={6}
            className="embed-responsive embed-responsive-4by3"
          >
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.616133051055!2d106.9735196!3d-6.2752565!2m3!1f0!2f17.5!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d7c1e72f359%3A0x51e794bd85b95c9!2sDNA%20Space!5e0!3m2!1sen!2sid!4v1626516523999!5m2!1sen!2sid"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0, borderRadius: "10px" }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </Col>
        </Row>
        <p
          style={{
            paddingTop: "5%",
            marginBottom: "0px",
            textAlign: "center",
          }}
        >
          <hr />© 2023 Digital Nayaka Abhinaya
        </p>
      </Container>
    </section>
  );
};
