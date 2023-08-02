import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import "../style/Counter.css";
import React, { useEffect, useState } from "react";
import { Waypoint } from "react-waypoint";

export const Counter = () => {
  const [animateCounter, setAnimateCounter] = useState(false);

  const handleWaypointEnter = () => {
    setAnimateCounter(true);
  };

  useEffect(() => {
    // Reset the animation state when the component is unmounted
    return () => {
      setAnimateCounter(false);
    };
  }, []);

  return (
    <section
      className="counter"
      style={{
        paddingTop: "20px",
        marginTop: "70px",
        backgroundPosition: "cover",
        textAlign: "center",
      }}
    >
      <Container>
        <Row>
          <Col sm={6} md={6} lg={6}>
            <Waypoint onEnter={handleWaypointEnter}>
              <div>
                <CountUp
                  className={`counter-user ${animateCounter ? "count-up" : ""}`}
                  end={250000}
                  duration={4}
                  suffix="+"
                />
                <p className={`text-user ${animateCounter ? "fade-in" : ""}`}>
                  User
                </p>
              </div>
            </Waypoint>
          </Col>
          <Col sm={6} md={6} lg={6}>
            <Waypoint onEnter={handleWaypointEnter}>
              <div>
                <CountUp
                  className={`counter-partner ${
                    animateCounter ? "count-up" : ""
                  }`}
                  end={15}
                  duration={4}
                  suffix="+"
                />
                <p
                  className={`text-partner ${animateCounter ? "fade-in" : ""}`}
                >
                  Partner
                </p>
              </div>
            </Waypoint>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
