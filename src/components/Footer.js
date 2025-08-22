import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { FaLinkedinIn, FaEnvelope, FaMapMarkerAlt, FaPhone, FaHeart } from "react-icons/fa";
import logo from "../Assets/mindcloud1.jpeg"; // your logo

function Footer() {
  const year = new Date().getFullYear();
  const [hoveredIcon, setHoveredIcon] = useState("");

  // Scroll to top handler
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const socialLinks = [
    { icon: <AiFillGithub />, href: "https://github.com/mindcloud", color: "#0A1F44" },
    { icon: <AiOutlineTwitter />, href: "https://twitter.com/mindcloud", color: "#00b9ff" },
    { icon: <FaLinkedinIn />, href: "https://linkedin.com/company/mindcloud", color: "#993DFF" },
    { icon: <AiFillInstagram />, href: "https://www.instagram.com/mindcloud__?igsh=MTY2bTZ1aTJtNDExMQ%3D%3D&utm_source=qr", color: "#0A1F44" },
  ];

  // Basic style for icons
  const iconStyle = {
    fontSize: "1.5rem",
    transition: "color 0.3s, box-shadow 0.3s",
  };

  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #0A1F44, #1a3b6b, #0A1F44)",
        color: "#f0f0f0",
        position: "relative",
        overflow: "hidden",
        padding: "3rem 1.5rem",
      }}
    >
      {/* Background pattern for subtle depth */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(153, 61, 255, 0.1), transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(0, 185, 255, 0.1), transparent 50%)
          `,
          zIndex: 0,
        }}
      />

      <Container style={{ position: "relative", zIndex: 1 }}>
        {/* Top section with logo & contact info */}
        <Row className="align-items-center justify-content-center mb-5 g-4">
          
          {/* Logo & Motto */}
          <Col lg={4} xs={12} className="text-center text-lg-start">
          <img
  src={logo}
  alt="MindCloud Logo"
  style={{
    height: "60px",
    width: "auto",
    marginBottom: "1rem",
    transition: "transform 0.3s",
    borderRadius: "10%", // 👈 makes corners round
  }}
/>

            <h3
              style={{
                color: "#fff",
                fontSize: "1.8rem",
                fontWeight: 800,
                marginBottom: "0.5rem",
                letterSpacing: "-0.02em",
              }}
            >
              <span style={{ color: "#fff" }}>MindCloud</span> ☁️
            </h3>
            <p
              style={{
                fontSize: "1rem",
                color: "#cbd5e1",
                marginBottom: "0",
                maxWidth: "300px",
                margin: "0 auto",
              }}
            >
              Your Partner in Digital Innovation
            </p>
          </Col>

          {/* Contact Info */}
          <Col lg={4} xs={12} className="text-center text-lg-start">
            {/* Address */}
            <div style={{ display: "flex", alignItems: "flex-start", marginBottom: "1.5rem" }}>
              <FaMapMarkerAlt style={{ ...iconStyle, marginRight: "0.75rem", color: "#0A1F44" }} />
              <div style={{ color: "#cbd5e1" }}>
                <h6 style={{ marginBottom: "0.3rem", fontWeight: 600 }}>Our Location</h6>
                <p style={{ marginBottom: 0, fontSize: "0.95rem" }}>No. 12, Web Avenue, Colombo, Sri Lanka</p>
              </div>
            </div>

            {/* Phone Numbers */}
            <div style={{ display: "flex", flexDirection: "column", marginBottom: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "0.4rem" }}>
                <FaPhone style={{ ...iconStyle, marginRight: "0.75rem", color: "#993DFF" }} />
                <div>
                  <span style={{ fontSize: "0.95rem" }}>+94 71 762 1250</span>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "0.4rem" }}>
                <FaPhone style={{ ...iconStyle, marginRight: "0.75rem", color: "#993DFF" }} />
                <div>
                  <span style={{ fontSize: "0.95rem" }}>+94 71 492 2722</span>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaPhone style={{ ...iconStyle, marginRight: "0.75rem", color: "#993DFF" }} />
                <div>
                  <span style={{ fontSize: "0.95rem" }}>+94 70 418 2117</span>
                </div>
              </div>
            </div>

            {/* Email */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <FaEnvelope style={{ ...iconStyle, marginRight: "0.75rem", color: "#00b9ff" }} />
              <div style={{ color: "#cbd5e1" }}>
                <h6 style={{ marginBottom: "0.3rem", fontWeight: 600 }}>Email</h6>
                <p style={{ marginBottom: 0, fontSize: "0.95rem" }}>mindcloudco@gmail.com</p>
              </div>
            </div>
          </Col>

        </Row>

        {/* Social links + quick links */}
        <Row className="justify-content-center mb-4 g-4">
          
          {/* Social icons */}
          <Col lg={4} xs={12} className="text-center text-lg-start">
            <h5
              style={{
                color: "#f1f5f9",
                fontWeight: 700,
                marginBottom: "1rem",
                fontSize: "1.2rem",
              }}
            >
              Follow Us
            </h5>
            <div style={{ display: "flex", justifyContent: "center", gap: "1.2rem" }}>
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "50px",
                    height: "50px",
                    borderRadius: "12px",
                    background: hoveredIcon === social.name ? social.color : "rgba(255,255,255,0.1)",
                    color: hoveredIcon === social.name ? "white" : "#cbd5e1",
                    fontSize: "1.5rem",
                    transition: "all 0.3s",
                    boxShadow: hoveredIcon === social.name ? `0 8px 20px ${social.color}40` : "0 2px 8px rgba(0,0,0,0.1)",
                  }}
                  onMouseEnter={() => setHoveredIcon(social.name)}
                  onMouseLeave={() => setHoveredIcon("")}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </Col>

          {/* CTA Button */}
          <Col lg={4} xs={12} className="text-center text-lg-start">
            <h5
              style={{
                color: "#f1f5f9",
                fontWeight: 700,
                marginBottom: "1rem",
                fontSize: "1.2rem",
              }}
            >
              Ready to Work With Us?
            </h5>
            <Button
              href="#contact"
              style={{
                background: "linear-gradient(135deg, #993DFF, #00b9ff)",
                color: "white",
                border: "none",
                borderRadius: "50px",
                padding: "0.8rem 2.5rem",
                fontSize: "0.95rem",
                fontWeight: 600,
                boxShadow: "0 8px 30px rgba(153, 61, 255, 0.3)",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px) scale(1.02)";
                e.target.style.boxShadow = "0 12px 40px rgba(153, 61, 255, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0) scale(1)";
                e.target.style.boxShadow = "0 8px 30px rgba(153, 61, 255, 0.3)";
              }}
            >
              Let's Talk
            </Button>
          </Col>

        </Row>

        {/* Bottom copyright + scroll to top */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            padding: "1.5rem 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
            marginTop: "2rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "0.95rem",
              color: "#94a3b8",
            }}
          >
            <span>© {year} MindCloud Systems. All rights reserved.</span>
            <FaHeart style={{ marginLeft: "8px", color: "#ef4444", fontSize: "1.2rem", animation: "heartbeat 2s infinite" }} />
          </div>
          <button
            onClick={scrollToTop}
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "2px solid rgba(255,255,255,0.2)",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#cbd5e1",
              cursor: "pointer",
              fontSize: "1.3rem",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "#00b9ff";
              e.target.style.color = "white";
              e.target.style.transform = "translateY(-3px) scale(1.05)";
              e.target.style.boxShadow = "0 6px 20px rgba(0, 185, 255, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "rgba(255,255,255,0.1)";
              e.target.style.color = "#cbd5e1";
              e.target.style.transform = "translateY(0) scale(1)";
              e.target.style.boxShadow = "none";
            }}
          >
            <AiOutlineArrowUp />
          </button>
        </div>
      </Container>

      {/* Extra styles if needed */}
      <style>{`
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        @media(max-width: 991px) {
          .navbar-collapse {
            background: rgba(255,255,255,0.95);
            border-radius: 10px;
            padding: 1rem;
            backdrop-filter: blur(20px);
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
