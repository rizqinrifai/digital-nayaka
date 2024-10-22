import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "../style/Career.css";
import frontendIcon from "../assets/icons/coding (1) 1.png";
import beckendIcon from "../assets/icons/coding 1-1.png";
import marketingIcon from "../assets/icons/customer-support 1.png";
import mobildevIcon from "../assets/icons/mobile-application 1.png";
import accountsupervisorIcon from "../assets/icons/supervisor 1.png";
import businesmentIcon from "../assets/icons/businessman 1.png";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Career = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const careers = [
    {
      title: "Frontend Developer",
      description:
        "1. Pendidikan minimal D3 Teknologi Informasi\n" +
        "2. Pengalaman minimal 1 Tahun, fresh graduates are welcome to apply\n" +
        "3. Menguasai HTML, CSS, JavaScript, Layout, Responsive Web, jQuery, Rest API, Bootstrap CSS (Understanding Vue.js is a plus)\n" +
        "4. Menguasai alur atau proses akunting\n" +
        "5. Mampu bekerja secara detail dan akurat\n" +
        "6. Penempatan Bekasi",
      icon: frontendIcon,
    },
    {
      title: "Marketing Support",
      description:
        "1. Melakukan monitoring analisa data \n" +
        "2. Usia maksimal 30 tahun\n" +
        "3. Pendidikan terakhir S1 semua jurusan \n" +
        "4. Memiliki pengalaman minimal 1 tahun \n" +
        "5. Memiliki pengalaman dibidang marketing Support \n" +
        "6. Bersedia melakukan perjalanan dinas",
      icon: marketingIcon,
    },
    {
      title: "Backend Developer",
      description:
        "1. Pendidikan minimal D3 Teknologi Informasi\n" +
        "2. Memiliki pengalaman 1 Tahun di bidang Backend Developer\n" +
        "3. Menguasai setidaknya Bahasa PHP, Java, (memahami Golang, Phyton menjadi nilai tambah)\n" +
        "4. Memahami database Postgresql dan Mysq|(memahami database No-Sql menjadi nilai tambah)\n" +
        "5. Memahami OOP (Oriented Object Program)\n" +
        "6. Memahami framework minimal CI (Code Igniter), Laravel, memahami Go-Gin & Go-Micro menjadi nilai tambah)\n" +
        "7. Penempatan Bekasi",
      icon: beckendIcon,
    },
    {
      title: "Account Executive",
      description:
        "1. Menjaga dan memperluas jaringan klien.\n" +
        "2. Mempresentasikan produk ke klien potensial.\n" +
        "3. Melakukan negoslasi dan dealing dengan klien.\n" +
        "4. Bertanggung jawab untuk menyelesaikan masalah terkait komplain/kepuasan klien.\n" +
        "5. Menyediakan daily, weekly, dan monthly sales report.\n" +
        "6. Memiliki skill komunikasi dan negoslasi yang baik\n" +
        "7. Memiliki pengalaman minimal 2 tahun dalam menangani klien baik dari segi relasi, maupun pencarian Klien baru\n" +
        "8. Diutamakan Wanita maksimal 26 tahun.\n" +
        "9. Menguasai Ms. Office (Word, Excell, Power Point)",
      icon: businesmentIcon,
    },
    {
      title: "Mobile Developer",
      description:
        "1. Pendidikan minimal D3 Teknologi Informasi\n" +
        "2. Pengalaman minimal 1 Tahun, fresh graduates are welcome to apply\n" +
        "3. Memahami bahasa pemograman Java dan bahasa Kotlin meniadi nilai tambah\n" +
        "4. Memahami database Postgresql, MYSQL, SQLITE\n" +
        "5. Memahami tools android dan android studio\n" +
        "6. Memahami IOS development menjadi nilai tambah\n" +
        "7. Memahami Framework React-Native dan Flutter menjadi nilai tambah\n" +
        "8. Mampu bekerja sama dalam tim\n" +
        "9. Penempatan Bekasi",
      icon: mobildevIcon,
    },
    {
      title: "Supervisor Development Team",
      description:
        "1. Pendidikan minimal D3 Teknologi Informasi\n" +
        "2. Supervisor Development Program adalah program pembelajaran yang ditempuh untuk dipersiapkan menjadi karyawan pada level supervisor dan manajerial.\n" +
        "3. Usia maksimal 25 tahun\n" +
        "4. Aktif berorganisasi\n" +
        "5. Terbiasa mempimpin dalam sebuah team\n" +
        "6. Terbiasa bernegosiasi & bekerja dengan target\n" +
        "7. Bersedia dipindah tugaskan sewaktu-waktu\n" +
        "8. Siap ditempatkan diseluruh cabang Warung Dana",
      icon: accountsupervisorIcon,
    },
  ];

  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    if (activeCard === index) {
      setActiveCard(null);
    } else {
      setActiveCard(index);
    }
  };

  return (
    <section
      id="career"
      className="career"
      style={{
        padding: "10vh",
        paddingTop: "100px",
        paddingBottom: "80px",
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
          data-aos="fade-down"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          Career Opportunities
        </h1>
      </Container>

      <Container>
        <Row>
          {careers.map((career, index) => (
            <Col
              key={index}
              xs={12}
              sm={12}
              md={6}
              lg={6}
              className="mb-4"
              data-aos="zoom-out-up"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              <div
                onClick={() => handleCardClick(index)}
                className={`card-career ${
                  activeCard === index ? "active" : ""
                }`}
                style={{
                  boxShadow:
                    activeCard === index
                      ? "0 4px 8px rgba(0, 0, 0, 0.2)"
                      : "none",
                  borderRadius: "30px",
                  transition: "box-shadow 0.3s ease-in-out",
                  cursor: "pointer",
                  boxShadow: "0px 13px 14px rgba(0, 0, 0, 0.05)",
                }}
              >
                <div
                  style={{
                    paddingBottom: "20px",
                    paddingTop: "20px",
                    backgroundColor: "0 4px 8px rgba(0, 0, 0, 0.103)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "10px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img
                        className="iconCard"
                        src={career.icon}
                        alt={`${career.title} Icon`}
                        style={{
                          width: "40px",
                          height: "40px",
                          backgroundColor: "rgba(0, 138, 208, 0.1)",
                          boxShadow: "0 0 10px rgba(0, 138, 208, 0.3)",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "10px",
                        }}
                      />
                      <div style={{ marginLeft: "5px" }}>
                        <h5 className="card-title">{career.title}</h5>
                      </div>
                    </div>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={
                        activeCard === index
                          ? "arrow-icon active"
                          : "arrow-icon"
                      }
                      style={{
                        fontSize: "20px",
                        color: "#005D8C",
                        paddingLeft: "10px",
                      }}
                    />
                  </div>
                  {activeCard === index && (
                    <div
                      style={{
                        textAlign: "left",
                        fontSize: "14px",
                        marginTop: "20px",
                        lineHeight: "1.6",
                        paddingTop: "15px",
                        paddingBottom: "15px",
                        paddingLeft: "5%",
                        fontWeight: "500",
                        paddingRight: "5%",
                      }}
                    >
                      {career.description.split("\n").map((item, i) => (
                        <div key={"x" + i}>{item}</div>
                      ))}
                    </div>
                  )}
                  {activeCard === index && (
                    <a
                      href="https://forms.gle/9ynvhUQ188dH6Lkc6"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        className="btn-custom"
                        style={{
                          background: "#005D8C",
                        }}
                      >
                        Apply
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
