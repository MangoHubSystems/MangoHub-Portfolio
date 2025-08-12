import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./WhyChooseUs";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import laptopImg from "../../Assets/logo new.png";
import {
  FaLaptopCode,
  FaCloud,
  FaCogs,
  FaShieldAlt,
  FaPalette,
  FaShoppingCart,
} from "react-icons/fa";

const serviceData = [
  {
    icon: <FaLaptopCode size={38} color="#3CB371" />,
    title: "Custom Web Development",
    desc: "Modern, scalable websites and apps built for your business.",
    bg: "rgba(60,179,113,0.08)",
  },
  {
    icon: <FaPalette size={38} color="#FFC324" />,
    title: "UI/UX Design",
    desc: "User-friendly, engaging interfaces for great digital experiences.",
    bg: "rgba(255,195,36,0.08)",
  },
  {
    icon: <FaCloud size={38} color="#3CB371" />,
    title: "Cloud Solutions",
    desc: "Cloud integration and management for secure, reliable infrastructure.",
    bg: "rgba(60,179,113,0.08)",
  },
  {
    icon: <FaCogs size={38} color="#FFC324" />,
    title: "Business Automation",
    desc: "Automation tools and workflows to boost your efficiency.",
    bg: "rgba(255,195,36,0.08)",
  },
  {
    icon: <FaShoppingCart size={38} color="#3CB371" />,
    title: "E-Commerce Platforms",
    desc: "Secure, robust online stores with seamless payment integration.",
    bg: "rgba(60,179,113,0.08)",
  },
  {
    icon: <FaShieldAlt size={38} color="#FFC324" />,
    title: "QA & Testing",
    desc: "Manual and automated software testing for reliability and security.",
    bg: "rgba(255,195,36,0.08)",
  },
];

function About() {
  return (
    <Container
      fluid
      className="about-section"
      style={{
        background: "#fff", // Changed to white
        minHeight: "100vh",
        paddingBottom: "40px",
      }}
    >
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingTop: "20px",
              paddingBottom: "50px",
              color: "#333", // dark text for readability on white
            }}
          >
            <h1
              style={{
                fontSize: "2.8rem",
                fontWeight: 800,
                color: "#222", // Darker text for headers on white
                textAlign: "center",
                marginTop: "3rem",
                marginBottom: "2.2rem",
                letterSpacing: "0.5px",
              }}
            >
              About <span style={{ color: "#3CB371" }}>MangoHub Systems</span>
            </h1>

            <br />
            <p
              style={{
                fontSize: "1.55rem",
                lineHeight: 1.7,
                marginBottom: "1.8rem",
                color: "#555", // medium dark gray for body text
              }}
            >
              MangoHub Systems delivers comprehensive digital solutions to help
              businesses thrive in a fast-evolving world.
              <br />
              <br />
              Our team blends technical expertise and creative vision to design,
              develop, and maintain secure, scalable web applications and
              platforms. From custom web development and intuitive UI/UX design
              to cloud integration, business automation, and rigorous quality
              assurance, we ensure every project is tailored to your unique
              goals and challenges.
              <br />
              <br />
              Whether you’re building a new digital presence, streamlining
              operations, or launching an e-commerce platform, MangoHub Systems
              is your trusted partner for innovation, reliability, and growth.
            </p>
          </Col>
          <Col
            md={5}
            style={{
              paddingTop: "90px",
              paddingBottom: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="about-img"
          >
            <img
              src={laptopImg}
              alt="about"
              className="img-fluid"
              style={{
                maxWidth: "320px",
                borderRadius: "18px",
                boxShadow: "0 8px 32px 0 rgba(60, 179, 113, 0.10)",
                background: "#f0f0f0", // lighter background to contrast image
              }}
            />
          </Col>
        </Row>

        <h1
          className="project-heading"
          style={{
            color: "#222",
            fontWeight: 700,
            marginTop: "2.5rem",
            textAlign: "center",
          }}
        >
          Our <span style={{ color: "#3CB371" }}>Services</span>
        </h1>

        <Row style={{ marginTop: "30px", marginBottom: "50px" }}>
          {serviceData.map((service, idx) => (
            <Col
              md={4}
              sm={6}
              xs={12}
              key={idx}
              style={{
                marginBottom: "2rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  background: service.bg,
                  borderRadius: "16px",
                  padding: "2rem 1.5rem",
                  minHeight: "210px",
                  maxWidth: "340px",
                  width: "100%",
                  boxShadow: "0 4px 24px 0 #3CB37122",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
              >
                <div style={{ marginBottom: "1.1rem" }}>{service.icon}</div>
                <h3
                  style={{
                    color: "#3CB371",
                    fontWeight: 700,
                    fontSize: "1.18rem",
                    marginBottom: "0.8rem",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    color: "#555",
                    fontSize: "1.02rem",
                    lineHeight: 1.5,
                  }}
                >
                  {service.desc}
                </p>
              </div>
            </Col>
          ))}
        </Row>

        <h1
          className="project-heading"
          style={{
            color: "#222",
            fontWeight: 700,
            marginTop: "2.5rem",
          }}
        >
          Professional <span style={{ color: "#3CB371" }}>Skillset</span>
        </h1>
        <Techstack />

        <h1
          className="project-heading"
          style={{
            color: "#222",
            fontWeight: 700,
            marginTop: "2.5rem",
          }}
        >
          <span style={{ color: "#3CB371" }}>Tools</span> We Use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
