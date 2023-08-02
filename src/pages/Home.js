import { Container, Row, Col } from "react-bootstrap";
import frame1 from "../assets/images/Frame 1000001463.webp";
import "../style/Home.css";

export const Home = () => {
  return (
    <section
      id="home"
      className="home"
      style={{
        paddingTop: "120px",
        paddingBottom: "20px",
        fontFamily: "Poppins",
      }}
    >
      <Container>
        <Row className="row-home">
          <Col md={6} sm={12}>
            <section className="home-section pt-5">
              <h1>
                <span className="home-title">WE ARE</span>{" "}
                <span className="home-title2">DNA</span>
              </h1>

              <h2 className="home-subtitle">Driving New Advancement</h2>

              <p className="home-description" style={{ textAlign: "justify" }}>
                Digital Nayaka Abhinaya is the best partner for implementing
                your chosen IT solution. Our vision is performing at the
                forefront of Asia as an organization providing excellent quality
                information technology products, solutions, and services to
                customers from all over the world. Our mission is to develop
                superior innovations in the form of quality and cost-effective
                solutions in the field of information technology to global
                customers through a solid, creative, and dedicated professional
                team.
              </p>
            </section>
          </Col>
          <Col md={6} sm={12} className="pt-3">
            <section className="home-section">
              <img
                alt=""
                src={frame1}
                className="home-image"
                style={{ maxWidth: "100%" }}
              />
            </section>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
