import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { BsList, BsX } from "react-icons/bs";
import dnaImage from "../assets/images/dna.png";
import "../style/NavbarComponent.css";

function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isRed, setIsRed] = useState(false); // State untuk mengontrol gaya merah

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsRed(true);
    } else {
      setIsRed(false);
    }
  }, [isOpen]);

  return (
    <section style={{ textAlign: "center" }}>
      <Navbar
        className={`${isScrolled ? "scrolled" : ""} ${isRed ? "bgnav" : ""}`} // Menambahkan kelas CSS "red" saat mode toggle aktif
        expand="lg"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="/">
            {!isOpen && (
              <img
                alt=""
                src={dnaImage}
                className={`d-inline-block align-top ${isOpen ? "d-none" : ""}`}
              />
            )}
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={toggleNavbar}
            // style={{ color: "#005D8C", fontSize: "30px" }}
          >
            {isOpen ? <BsX /> : <BsList />}
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={`navbar-link me-lg-4 ${isOpen ? "show" : ""}`}
                style={{ paddingTop: "25px", alignItems: "center" }}
              >
                Home
              </Nav.Link>

              <Nav.Link
                href="#services"
                className={`navbar-link me-lg-4 ${isOpen ? "show" : ""}`}
                style={{ paddingTop: "25px", alignItems: "center" }}
              >
                Services
              </Nav.Link>

              <Nav.Link
                href="#career"
                className={`navbar-link me-lg-4 ${isOpen ? "show" : ""}`}
                style={{ paddingTop: "25px", alignItems: "center" }}
              >
                Career
              </Nav.Link>

              <Nav.Link
                href="#project"
                className={`navbar-link me-lg-4 ${isOpen ? "show" : ""}`}
                style={{ paddingTop: "25px", alignItems: "center" }}
              >
                Project
              </Nav.Link>

              <Nav.Link
                href="#team"
                className={`navbar-link me-lg-4 ${isOpen ? "show" : ""}`}
                style={{ paddingTop: "25px", alignItems: "center" }}
              >
                Team
              </Nav.Link>

              <span className="navbar-text">
                <Nav.Link
                  href="#contact"
                  style={{
                    textDecoration: "none",
                    display: "grid",
                    alignItems: "center",
                    transition: "all 0.3s ease",
                    justifyContent: "center",
                  }}
                  activeClassName="active"
                >
                  <button className="btn-contact d-none d-lg-inline">
                    Contact<i className="ri-contacts-book-line"></i>
                  </button>
                  <span className="d-lg-none">Contact</span>
                </Nav.Link>
              </span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
}

export default NavbarComponent;
