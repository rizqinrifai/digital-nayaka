import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { BsList, BsX } from "react-icons/bs";
import dnaImage from "../assets/images/dna.png";
import "../style/NavbarComponent.css";

const menu = ["Home", "Services", "Career", "Product", "Team"];

function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isRed, setIsRed] = useState(false);
  const [active, setActive] = useState(menu[0]);

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
              {menu.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActive(item);
                    document
                      .getElementById(String(item).toLowerCase())
                      .scrollIntoView({
                        behavior: "smooth",
                      });
                  }}
                  className={`navbar-link me-lg-4`}
                  style={{
                    alignItems: "center",
                    outline: "none",
                    backgroundColor: "transparent",
                    border: "none",
                    color: active === item ? "#005D8C" : "",
                  }}
                >
                  {item}
                </button>
              ))}

              <span className="navbar-text">
                <div
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
                  <button
                    onClick={() => {
                      document
                        .getElementById(String("contact").toLowerCase())
                        .scrollIntoView({
                          behavior: "smooth",
                        });
                    }}
                    className="btn-contact d-none d-lg-inline"
                  >
                    Contact<i className="ri-contacts-book-line"></i>
                  </button>
                  <span
                    onClick={() => {
                      document
                        .getElementById(String("contact").toLowerCase())
                        .scrollIntoView({
                          behavior: "smooth",
                        });
                    }}
                    className="d-lg-none"
                  >
                    Contact
                  </span>
                </div>
              </span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
}

export default NavbarComponent;
