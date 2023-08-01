import { Container, Row, Col, Image } from "react-bootstrap";
import "../style/Project.css";
import balapsImage from "../assets/images/Frame 1000001470.png";
import simotorImage from "../assets/images/Frame 1000001471.png";
import strackImage from "../assets/images/Frame 1000001472.png";
import dnacoopImage from "../assets/images/Frame 1000001475.png";
import jayyidImage from "../assets/images/Frame 1000001474.png";
import warungdanaImage from "../assets/images/Frame 1000001473.png";

export const Project = () => {
  return (
    <section
      id="product"
      className="project"
      style={{
        padding: "10vh",
        paddingTop: "150px",
        paddingBottom: "220px",
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
        >
          Our Product
        </h1>
      </Container>

      <Container>
        <Row>
          <Col xs={12} sm={6} md={4} className="mb-5 center">
            <Image src={balapsImage} fluid />
          </Col>
          <Col xs={12} sm={6} md={4} className="mb-5">
            <Image src={simotorImage} fluid />
          </Col>
          <Col xs={12} sm={6} md={4} className="mb-5">
            <Image src={strackImage} fluid />
          </Col>
        </Row>

        <Row style={{ marginTop: "20px" }}>
          <Col xs={12} sm={6} md={4} className="mb-5">
            <Image src={dnacoopImage} fluid />
          </Col>
          <Col xs={12} sm={6} md={4} className="mb-5">
            <Image src={jayyidImage} fluid />
          </Col>
          <Col xs={12} sm={6} md={4} className="mb-5">
            <Image src={warungdanaImage} fluid />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
