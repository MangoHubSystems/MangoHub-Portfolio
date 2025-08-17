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
    icon: <FaLaptopCode size={38} color="#0A1F44" />,
    title: "Custom Web Development",
    desc: "Modern, scalable websites and apps built for your business.",
    bg: "rgba(10, 31, 68, 0.08)",
    borderColor: "#0A1F44",
  },
  {
    icon: <FaPalette size={38} color="#00b9ff" />,
    title: "UI/UX Design",
    desc: "User-friendly, engaging interfaces for great digital experiences.",
    bg: "rgba(0, 185, 255, 0.08)",
    borderColor: "#00b9ff",
  },
  {
    icon: <FaCloud size={38} color="#993DFF" />,
    title: "Cloud Solutions",
    desc: "Cloud integration and management for secure, reliable infrastructure.",
    bg: "rgba(153, 61, 255, 0.08)",
    borderColor: "#993DFF",
  },
  {
    icon: <FaCogs size={38} color="#0A1F44" />,
    title: "Business Automation",
    desc: "Automation tools and workflows to boost your efficiency.",
    bg: "rgba(10, 31, 68, 0.08)",
    borderColor: "#0A1F44",
  },
  {
    icon: <FaShoppingCart size={38} color="#00b9ff" />,
    title: "E-Commerce Platforms",
    desc: "Secure, robust online stores with seamless payment integration.",
    bg: "rgba(0, 185, 255, 0.08)",
    borderColor: "#00b9ff",
  },
  {
    icon: <FaShieldAlt size={38} color="#993DFF" />,
    title: "QA & Testing",
    desc: "Manual and automated software testing for reliability and security.",
    bg: "rgba(153, 61, 255, 0.08)",
    borderColor: "#993DFF",
  },
];

function About() {
  return (
    <Container
      fluid
      className="about-section"
      style={{
        background: "#fff",
        minHeight: "100vh",
        paddingBottom: "40px",
      }}
    >
      <Particle />
      <Container>
        {/* Main Services Heading */}
        <h1
          className="project-heading"
          style={{
            color: "#0A1F44",
            fontWeight: 800,
            marginTop: "2.5rem",
            textAlign: "center",
            fontSize: "3rem",
            letterSpacing: "1px",
          }}
        >
          <span style={{ color: "#0A1F44" }}>MindCloud</span>{" "}
          <span style={{ color: "purple" }}>Services</span>
        </h1>

        {/* Services Grid */}
        <Row style={{ marginTop: "50px", marginBottom: "60px" }}>
          {serviceData.map((service, idx) => (
            <Col
              md={4}
              sm={6}
              xs={12}
              key={idx}
              style={{
                marginBottom: "2.5rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  background: service.bg,
                  borderRadius: "18px",
                  padding: "2.2rem 1.8rem",
                  minHeight: "240px",
                  maxWidth: "360px",
                  width: "100%",
                  boxShadow: `0 6px 28px 0 ${service.borderColor}22`,
                  border: `1px solid ${service.borderColor}30`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = `0 12px 40px 0 ${service.borderColor}35`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = `0 6px 28px 0 ${service.borderColor}22`;
                }}
              >
                <div
                  style={{
                    marginBottom: "1.3rem",
                    padding: "0.8rem",
                    background: `${service.borderColor}15`,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {service.icon}
                </div>
                <h3
                  style={{
                    color: service.borderColor,
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    marginBottom: "1rem",
                    letterSpacing: "0.3px",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    color: "#4a5568",
                    fontSize: "1.05rem",
                    lineHeight: 1.6,
                    fontWeight: 400,
                  }}
                >
                  {service.desc}
                </p>
              </div>
            </Col>
          ))}
        </Row>

        {/* Professional Skillset Section */}
        <h1
          className="project-heading"
          style={{
            color: "#0A1F44",
            fontWeight: 700,
            marginTop: "4rem",
            fontSize: "2.5rem",
            letterSpacing: "0.5px",
          }}
        >
          Professional{" "}
          <span style={{ color: "#00b9ff" }}>Skillset</span>
        </h1>
        <Techstack />

        {/* Tools Section */}
        <h1
          className="project-heading"
          style={{
            color: "#0A1F44",
            fontWeight: 700,
            marginTop: "4rem",
            fontSize: "2.5rem",
            letterSpacing: "0.5px",
          }}
        >
          <span style={{ color: "#993DFF" }}>Tools</span>{" "}
          <span style={{ color: "#0A1F44" }}>We Use</span>
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
