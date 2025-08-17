import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillHeart,
} from "react-icons/ai";
import { 
  FaLinkedinIn, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaPhone,
  FaCode,
  FaCloud,
  FaPalette,
  FaCogs,
  FaRocket,
  FaArrowUp
} from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();
  const [hoveredIcon, setHoveredIcon] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    { name: "Web Development", icon: <FaCode />, link: "#services" },
    { name: "Cloud Solutions", icon: <FaCloud />, link: "#services" },
    { name: "UI/UX Design", icon: <FaPalette />, link: "#services" },
    { name: "Automation", icon: <FaCogs />, link: "#services" },
  ];

  const quickLinks = [
    { name: "About Us", link: "#about" },
    { name: "Our Services", link: "#services" },
    { name: "Portfolio", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  const socialLinks = [
    { 
      icon: <AiFillGithub />, 
      href: "https://github.com/mindcloud", 
      color: "#0A1F44",
      name: "GitHub"
    },
    { 
      icon: <AiOutlineTwitter />, 
      href: "https://twitter.com/mindcloud", 
      color: "#00b9ff",
      name: "Twitter"
    },
    { 
      icon: <FaLinkedinIn />, 
      href: "https://linkedin.com/company/mindcloud", 
      color: "#993DFF",
      name: "LinkedIn"
    },
    { 
      icon: <AiFillInstagram />, 
      href: "https://instagram.com/mindcloud", 
      color: "#0A1F44",
      name: "Instagram"
    },
  ];

  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #0A1F44 0%, #1a3b6b 50%, #0A1F44 100%)",
        color: "#e2e8f0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Pattern */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(153, 61, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(0, 185, 255, 0.1) 0%, transparent 50%)
          `,
          zIndex: 0,
        }}
      />

      <Container style={{ position: "relative", zIndex: 1 }}>
        {/* Main Footer Content */}
        <div style={{ padding: "4rem 0 2rem" }}>
          <Row>
            {/* Company Info */}
            <Col lg={4} md={6} className="mb-4">
              <div style={{ marginBottom: "2rem" }}>
                <h3
                  style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    marginBottom: "1rem",
                    background: "linear-gradient(135deg, #993DFF, #00b9ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    letterSpacing: "-0.01em",
                  }}
                >
                  MindCloud ☁️
                </h3>
                <p
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                    color: "#cbd5e1",
                    marginBottom: "1.5rem",
                  }}
                >
                  Empowering businesses with innovative technology solutions. 
                  We transform ideas into digital reality.
                </p>
                
                {/* Contact Info */}
                <div style={{ marginBottom: "1rem" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "0.8rem",
                      color: "#94a3b8",
                    }}
                  >
                    <FaEnvelope style={{ marginRight: "12px", color: "#00b9ff" }} />
                    <span>mindcloudco@gmail.com</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "0.8rem",
                      color: "#94a3b8",
                    }}
                  >
                    <FaPhone style={{ marginRight: "12px", color: "#993DFF" }} />
                    <span>+94 71 762 1250</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      color: "#94a3b8",
                    }}
                  >
                    <FaMapMarkerAlt style={{ marginRight: "12px", marginTop: "2px", color: "#0A1F44" }} />
                    <span>No. 12, Web Avenue<br />Colombo, Sri Lanka</span>
                  </div>
                </div>
              </div>
            </Col>

            {/* Services */}
            <Col lg={2} md={6} className="mb-4">
              <h5
                style={{
                  color: "#f1f5f9",
                  fontWeight: 700,
                  marginBottom: "1.5rem",
                  fontSize: "1.2rem",
                  letterSpacing: "0.5px",
                }}
              >
                Our Services
              </h5>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {services.map((service, idx) => (
                  <li key={idx} style={{ marginBottom: "0.8rem" }}>
                    <a
                      href={service.link}
                      style={{
                        color: "#94a3b8",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        fontSize: "0.95rem",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = "#00b9ff";
                        e.target.style.transform = "translateX(5px)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = "#94a3b8";
                        e.target.style.transform = "translateX(0)";
                      }}
                    >
                      <span style={{ marginRight: "8px", fontSize: "0.9em" }}>
                        {service.icon}
                      </span>
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>

            {/* Quick Links */}
            <Col lg={2} md={6} className="mb-4">
              <h5
                style={{
                  color: "#f1f5f9",
                  fontWeight: 700,
                  marginBottom: "1.5rem",
                  fontSize: "1.2rem",
                  letterSpacing: "0.5px",
                }}
              >
                Quick Links
              </h5>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {quickLinks.map((link, idx) => (
                  <li key={idx} style={{ marginBottom: "0.8rem" }}>
                    <a
                      href={link.link}
                      style={{
                        color: "#94a3b8",
                        textDecoration: "none",
                        fontSize: "0.95rem",
                        transition: "all 0.3s ease",
                        display: "block",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = "#993DFF";
                        e.target.style.transform = "translateX(5px)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = "#94a3b8";
                        e.target.style.transform = "translateX(0)";
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>

            {/* Newsletter & Social */}
            <Col lg={4} md={6} className="mb-4">
              <h5
                style={{
                  color: "#f1f5f9",
                  fontWeight: 700,
                  marginBottom: "1.5rem",
                  fontSize: "1.2rem",
                  letterSpacing: "0.5px",
                }}
              >
                Stay Connected
              </h5>
              <p
                style={{
                  color: "#cbd5e1",
                  marginBottom: "1.5rem",
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                }}
              >
                Follow us on social media for updates, insights, and behind-the-scenes content.
              </p>

              {/* Social Icons */}
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  marginBottom: "2rem",
                  flexWrap: "wrap",
                }}
              >
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "50px",
                      height: "50px",
                      borderRadius: "15px",
                      background: hoveredIcon === social.name 
                        ? social.color 
                        : "rgba(255, 255, 255, 0.1)",
                      color: hoveredIcon === social.name ? "white" : "#cbd5e1",
                      fontSize: "1.5rem",
                      transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
                      textDecoration: "none",
                      backdropFilter: "blur(10px)",
                      border: `2px solid ${hoveredIcon === social.name ? social.color : 'transparent'}`,
                      transform: hoveredIcon === social.name ? "translateY(-3px) scale(1.1)" : "translateY(0) scale(1)",
                      boxShadow: hoveredIcon === social.name 
                        ? `0 8px 25px ${social.color}40` 
                        : "0 2px 10px rgba(0, 0, 0, 0.1)",
                    }}
                    onMouseEnter={() => setHoveredIcon(social.name)}
                    onMouseLeave={() => setHoveredIcon("")}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Newsletter */}
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "15px",
                  padding: "1.5rem",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <h6
                  style={{
                    color: "#f1f5f9",
                    fontWeight: 600,
                    marginBottom: "0.8rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <FaRocket style={{ marginRight: "8px", color: "#00b9ff" }} />
                  Ready to Get Started?
                </h6>
                <p
                  style={{
                    color: "#94a3b8",
                    fontSize: "0.9rem",
                    marginBottom: "1rem",
                    lineHeight: 1.5,
                  }}
                >
                  Contact us today for a free consultation and let's bring your vision to life.
                </p>
                <a
                  href="#contact"
                  style={{
                    display: "inline-block",
                    background: "linear-gradient(135deg, #993DFF, #00b9ff)",
                    color: "white",
                    padding: "8px 16px",
                    borderRadius: "20px",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-2px) scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0) scale(1)";
                  }}
                >
                  Get Quote
                </a>
              </div>
            </Col>
          </Row>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            padding: "1.5rem 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#94a3b8",
              fontSize: "0.95rem",
            }}
          >
            <span>© {year} MindCloud Systems. Made with </span>
            <AiFillHeart 
              style={{ 
                margin: "0 5px", 
                color: "#ef4444",
                animation: "heartbeat 2s ease-in-out infinite"
              }} 
            />
            <span>in Sri Lanka</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <a
              href="/privacy"
              style={{
                color: "#94a3b8",
                textDecoration: "none",
                fontSize: "0.9rem",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => e.target.style.color = "#00b9ff"}
              onMouseLeave={(e) => e.target.style.color = "#94a3b8"}
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              style={{
                color: "#94a3b8",
                textDecoration: "none",
                fontSize: "0.9rem",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => e.target.style.color = "#993DFF"}
              onMouseLeave={(e) => e.target.style.color = "#94a3b8"}
            >
              Terms of Service
            </a>
            
            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                border: "2px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#cbd5e1",
                cursor: "pointer",
                transition: "all 0.3s ease",
                backdropFilter: "blur(10px)",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#00b9ff";
                e.target.style.color = "white";
                e.target.style.transform = "translateY(-3px) scale(1.1)";
                e.target.style.boxShadow = "0 6px 20px rgba(0, 185, 255, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(255, 255, 255, 0.1)";
                e.target.style.color = "#cbd5e1";
                e.target.style.transform = "translateY(0) scale(1)";
                e.target.style.boxShadow = "none";
              }}
            >
              <FaArrowUp />
            </button>
          </div>
        </div>
      </Container>

      {/* Animation Styles */}
      <style>{`
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
