import React from "react";
import Navbar from "../components/NavbarComponent";
import { Container, Row, Col, Image } from "react-bootstrap";
//Team
import danielTeam from "../assets/team/Frame 1000001464.png";
import deniImage from "../assets/team/Deni.webp";
import adjieImage from "../assets/team/Adjie.webp";
// import budiImage from "../assets/team/Budi.webp";
import cliefImage from "../assets/team/Clief.webp";
import andriImage from "../assets/team/Andri.webp";
import kimImage from "../assets/team/Kim.png";
import rizqiImage from "../assets/team/Rizqi.png";
import hendyImage from "../assets/team/Hendy.webp";
import raffiImage from "../assets/team/Raffi.webp";
import fahriImage from "../assets/team/Fahri.webp";
import azriImage from "../assets/team/Azri.png";
import dwiImage from "../assets/team/Dwi.webp";
import diahImage from "../assets/team/Diah.webp";
import erlitaImage from "../assets/team/Erlita.webp";
import safiraImage from "../assets/team/Safira.webp";
import syarifImage from "../assets/team/Syarif.webp";
import novaImage from "../assets/team/Nova.webp";
import fadilImage from "../assets/team/Fadhil.webp";
import iwanImage from "../assets/team/Iwan Sasongko.webp";
import aditImage from "../assets/team/Adit.png";

export const Employee = () => {
  const query = new URLSearchParams(window.location.search);
  const token = query.get("id");
  console.log(token);

  const employees = [
    {
      id: "L191007",
      nama: "Deni Candra",
      jabatan: "IT Leader",
      deskripsi:
        "Do nisi occaecat ullamco labore nostrud non et culpa voluptate elit cupidatat. Aliqua ad commodo et aute amet tempor commodo. Aute reprehenderit nostrud mollit anim est magna adipisicing mollit reprehenderit veniam Lorem elit ullamco proident. Non in cillum excepteur nulla id voluptate ullamco officia exercitation.",
      gambar: deniImage,
    },
    {
      id: "L201011",
      nama: "Clief Benyal",
      jabatan: "Marketing",
      deskripsi:
        "Do nisi occaecat ullamco labore nostrud non et culpa voluptate elit cupidatat. Aliqua ad commodo et aute amet tempor commodo. Aute reprehenderit nostrud mollit anim est magna adipisicing mollit reprehenderit veniam Lorem elit ullamco proident. Non in cillum excepteur nulla id voluptate ullamco officia exercitation.",
      gambar: cliefImage,
    },
    {
      id: "L231028",
      nama: "Kimberly Sani",
      jabatan: "UI /UX Designer",
      deskripsi:
        "Do nisi occaecat ullamco labore nostrud non et culpa voluptate elit cupidatat. Aliqua ad commodo et aute amet tempor commodo. Aute reprehenderit nostrud mollit anim est magna adipisicing mollit reprehenderit veniam Lorem elit ullamco proident. Non in cillum excepteur nulla id voluptate ullamco officia exercitation.",
      gambar: kimImage,
    },
    {
      id: "L201010",
      nama: "Andhika Aji",
      jabatan: "Head Engineer",
      deskripsi:
        "Do nisi occaecat ullamco labore nostrud non et culpa voluptate elit cupidatat. Aliqua ad commodo et aute amet tempor commodo. Aute reprehenderit nostrud mollit anim est magna adipisicing mollit reprehenderit veniam Lorem elit ullamco proident. Non in cillum excepteur nulla id voluptate ullamco officia exercitation.",
      gambar: adjieImage,
    },
    {
      id: "L221027",
      nama: "Rizqi Nur Rifai",
      jabatan: "DEVOPS ENGINER",
      deskripsi:
        "Do nisi occaecat ullamco labore nostrud non et culpa voluptate elit cupidatat. Aliqua ad commodo et aute amet tempor commodo. Aute reprehenderit nostrud mollit anim est magna adipisicing mollit reprehenderit veniam Lorem elit ullamco proident. Non in cillum excepteur nulla id voluptate ullamco officia exercitation.",
      gambar: rizqiImage,
    },
    {
      id: "L201013",
      nama: "Andri Setyawan",
      jabatan: "Head Engineer",
      deskripsi:
        "Do nisi occaecat ullamco labore nostrud non et culpa voluptate elit cupidatat. Aliqua ad commodo et aute amet tempor commodo. Aute reprehenderit nostrud mollit anim est magna adipisicing mollit reprehenderit veniam Lorem elit ullamco proident. Non in cillum excepteur nulla id voluptate ullamco officia exercitation.",
      gambar: andriImage,
    },
    {
      id: "L221022",
      nama: "M Abdurraffi",
      jabatan: "Frontend Developer",
      deskripsi:
        "Do nisi occaecat ullamco labore nostrud non et culpa voluptate elit cupidatat. Aliqua ad commodo et aute amet tempor commodo. Aute reprehenderit nostrud mollit anim est magna adipisicing mollit reprehenderit veniam Lorem elit ullamco proident. Non in cillum excepteur nulla id voluptate ullamco officia exercitation.",
      gambar: raffiImage,
    },
    {
      id: "L211017",
      nama: "Azri Nurvani",
      jabatan: "Software Developer",
      deskripsi:
        "Do nisi occaecat ullamco labore nostrud non et culpa voluptate elit cupidatat. Aliqua ad commodo et aute amet tempor commodo. Aute reprehenderit nostrud mollit anim est magna adipisicing mollit reprehenderit veniam Lorem elit ullamco proident. Non in cillum excepteur nulla id voluptate ullamco officia exercitation.",
      gambar: azriImage,
    },
    {
      id: "L231023",
      nama: "M Fahri Kurniawan",
      jabatan: "Frontend Developer",
      deskripsi:
        "Do nisi occaecat ullamco labore nostrud non et culpa voluptate elit cupidatat. Aliqua ad commodo et aute amet tempor commodo. Aute reprehenderit nostrud mollit anim est magna adipisicing mollit reprehenderit veniam Lorem elit ullamco proident. Non in cillum excepteur nulla id voluptate ullamco officia exercitation.",
      gambar: fahriImage,
    },
    {
      id: "L231030",
      nama: "Dwi A Sobarna",
      jabatan: "Software Developer",
      deskripsi:
        "Do nisi occaecat ullamco labore nostrud non et culpa voluptate elit cupidatat. Aliqua ad commodo et aute amet tempor commodo. Aute reprehenderit nostrud mollit anim est magna adipisicing mollit reprehenderit veniam Lorem elit ullamco proident. Non in cillum excepteur nulla id voluptate ullamco officia exercitation.",
      gambar: dwiImage,
    },
    {
      id: "L211018",
      nama: "Hendi Triatmoko",
      jabatan: "Frontend Developer",
      deskripsi:
        "Do nisi occaecat ullamco labore nostrud non et culpa voluptate elit cupidatat. Aliqua ad commodo et aute amet tempor commodo. Aute reprehenderit nostrud mollit anim est magna adipisicing mollit reprehenderit veniam Lorem elit ullamco proident. Non in cillum excepteur nulla id voluptate ullamco officia exercitation.",
      gambar: hendyImage,
    },
    {
      id: "L231029",
      nama: "Nova Sekar",
      jabatan: "IT HELPDESK",
      deskripsi:
        "Do nisi occaecat ullamco labore nostrud non et culpa voluptate elit cupidatat. Aliqua ad commodo et aute amet tempor commodo. Aute reprehenderit nostrud mollit anim est magna adipisicing mollit reprehenderit veniam Lorem elit ullamco proident. Non in cillum excepteur nulla id voluptate ullamco officia exercitation.",
      gambar: novaImage,
    },
    {
      id: "L221021",
      nama: "Safira Hakim",
      jabatan: "Marketing Business",
      deskripsi:
        "Do nisi occaecat ullamco labore nostrud non et culpa voluptate elit cupidatat. Aliqua ad commodo et aute amet tempor commodo. Aute reprehenderit nostrud mollit anim est magna adipisicing mollit reprehenderit veniam Lorem elit ullamco proident. Non in cillum excepteur nulla id voluptate ullamco officia exercitation.",
      gambar: safiraImage,
    },
    {
      id: "L211019",
      nama: "M Syarif A",
      jabatan: "Marketing Business",
      deskripsi:
        "Do nisi occaecat ullamco labore nostrud non et culpa voluptate elit cupidatat. Aliqua ad commodo et aute amet tempor commodo. Aute reprehenderit nostrud mollit anim est magna adipisicing mollit reprehenderit veniam Lorem elit ullamco proident. Non in cillum excepteur nulla id voluptate ullamco officia exercitation.",
      gambar: syarifImage,
    },
    {
      id: "L221025",
      nama: "Ahmad Fadhil",
      jabatan: "Backend Developer",
      deskripsi:
        "Do nisi occaecat ullamco labore nostrud non et culpa voluptate elit cupidatat. Aliqua ad commodo et aute amet tempor commodo. Aute reprehenderit nostrud mollit anim est magna adipisicing mollit reprehenderit veniam Lorem elit ullamco proident. Non in cillum excepteur nulla id voluptate ullamco officia exercitation.",
      gambar: fadilImage,
    },
    {
      id: "L231032",
      nama: "Aditya Permadi",
      jabatan: "Backend Developer",
      deskripsi:
        "Do nisi occaecat ullamco labore nostrud non et culpa voluptate elit cupidatat. Aliqua ad commodo et aute amet tempor commodo. Aute reprehenderit nostrud mollit anim est magna adipisicing mollit reprehenderit veniam Lorem elit ullamco proident. Non in cillum excepteur nulla id voluptate ullamco officia exercitation.",
      gambar: aditImage,
    },
  ];

  return (
    <div>
      <Navbar />
      {employees.map((employee) => (
        <div>
          {employee.id === token && (
            <section
              id="employee"
              className="employee"
              style={{
                fontFamily: "Poppins",
              }}
            >
              <Container>
                <Row
                  className="employee"
                  style={{
                    boxShadow: "0 4px 25px rgba(0, 0, 0, 0.1)",
                    margin: "100px auto",
                    maxWidth: "700px",
                    borderRadius: "100px 100px 0px 0px",
                    overflow: "hidden",
                  }}
                >
                  <Col
                    xs={12}
                    md={4}
                    className="image-container"
                    style={{
                      overflow: "hidden",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src={employee.gambar}
                      alt="Employee"
                      fluid
                      style={{
                        paddingTop: "13px",
                        margin: "0 auto",
                        display: "flex",
                      }}
                    />
                  </Col>
                  <Col
                    xs={12}
                    md={8}
                    className="text-container"
                    style={{
                      paddingLeft: "20px",
                      paddingRight: "40px",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "#008AD0",
                        fontFamily: "Poppins",
                        paddingTop: "25px",
                      }}
                      className="d-none d-md-block"
                    >
                      {employee.nama}
                    </h3>
                    <h4
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        fontFamily: "Poppins",
                        paddingTop: "5px",
                      }}
                      className="d-none d-md-block"
                    >
                      {employee.jabatan}
                    </h4>
                    <p
                      style={{
                        fontFamily: "Poppins",
                        paddingTop: "10px",
                        textAlign: "justify",
                      }}
                    >
                      {employee.deskripsi}
                    </p>
                  </Col>
                </Row>
              </Container>
            </section>
          )}
        </div>
      ))}
    </div>
  );
};
