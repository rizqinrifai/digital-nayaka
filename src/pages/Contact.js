import { Container, Row, Col } from "react-bootstrap";
import "../style/Contact.css";
import { FaWhatsapp } from "react-icons/fa";
import ThemeProvider from "react-bootstrap/ThemeProvider";

export const Contact = () => {
  return (
    <section
      className="contact"
      style={{
        paddingTop: "150px",
        textAlign: "center",
      }}
    >
      <Container>
        <h1
          style={{
            paddingBottom: "50px",
            color: "#005D8C",
            fontWeight: "bold",
          }}
        >
          Discuss Your Project
        </h1>
        <Row>
          <Col sm={12} md={3}>
            <div
              style={{
                width: 257,
                height: 48,
                paddingTop: 16,
                paddingBottom: 16,
                paddingLeft: 16,
                background: "white",
                borderRadius: 10,
                border: "0.50px #E4E7EC solid",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 10,
                display: "inline-flex",
              }}
            >
              <input
                type="text"
                style={{
                  color: "#667085",
                  fontSize: 14,
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  textTransform: "capitalize",
                  wordWrap: "break-word",
                  border: "none",
                  outline: "none",
                  width: "100%",
                  background: "transparent",
                }}
                placeholder="Name"
              />
            </div>
          </Col>

          <Col sm={12} md={3}>
            <div
              style={{
                width: 257,
                height: 48,
                paddingTop: 16,
                paddingBottom: 16,
                paddingLeft: 16,
                background: "white",
                borderRadius: 10,
                border: "0.50px #E4E7EC solid",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 10,
                display: "inline-flex",
              }}
            >
              <input
                type="text"
                style={{
                  color: "#667085",
                  fontSize: 14,
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  textTransform: "capitalize",
                  wordWrap: "break-word",
                  border: "none",
                  outline: "none",
                  width: "100%",
                  background: "transparent",
                }}
                placeholder="Email"
              />
            </div>
          </Col>

          <Col sm={12} md={3}>
            <div
              style={{
                width: 257,
                height: 48,
                paddingTop: 16,
                paddingBottom: 16,
                paddingLeft: 16,
                background: "white",
                borderRadius: 10,
                border: "0.50px #E4E7EC solid",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 10,
                display: "inline-flex",
              }}
            >
              <input
                type="text"
                style={{
                  color: "#667085",
                  fontSize: 14,
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  textTransform: "capitalize",
                  wordWrap: "break-word",
                  border: "none",
                  outline: "none",
                  width: "100%",
                  background: "transparent",
                }}
                placeholder="Message"
              />
            </div>
          </Col>

          <Col sm={12} md={3}>
            <button className="button-send" onClick={() => {}}>
              Send
            </button>
          </Col>
        </Row>
      </Container>

      <Container id="contact">
        <h1
          style={{
            paddingTop: "100px",
            paddingBottom: "50px",
            color: "#005D8C",
            fontWeight: "bold",
          }}
        >
          Contact Us
        </h1>

        <Row>
          <Col sm={12} md={6}>
            <Row>
              <Col>
                <div
                  style={{
                    width: "518px",
                    height: "139px",
                    border: "none",
                    borderRadius: "10px",
                    padding: "10px",
                    boxSizing: "border-box",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.103)",
                    backgroundColor: "#ffffff",
                  }}
                >
                  <h4>Address</h4>
                  <p>
                    Ruko Sentra Komersil (Rsk) Blok 7/96 Grand Galaxy City,
                    Kelurahan Jakasetia, Kecamatan Bekasi Selatan, Kota Bekasi,
                    Jawa Barat.
                  </p>
                </div>
              </Col>
            </Row>
            {FaWhatsapp}
            <Row>
              <Col style={{ paddingTop: "30px" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
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

          <Col sm={6}>
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.616133051055!2d106.9735196!3d-6.2752565!2m3!1f0!2f17.5!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d7c1e72f359%3A0x51e794bd85b95c9!2sDNA%20Space!5e0!3m2!1sen!2sid!4v1626516523999!5m2!1sen!2sid"
              width="518"
              height="211"
              frameborder="0"
              style={{ border: 0, borderRadius: "10px" }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </Col>
          <p
            style={{
              paddingTop: "5%",
              textAlign: "center",
            }}
          >
            <hr />© 2023 Digital Nayaka Abhinaya
          </p>
        </Row>
      </Container>

      {/* <Container style={{ paddingTop: "100px", justifyContent: "center" }}>
        <div
          style={{
            width: "1300px",
            height: "0",
            border: "0.50px #DADDE3 solid",
            margin: "0 auto",
          }}
        ></div>
      </Container> */}
    </section>
  );
};
