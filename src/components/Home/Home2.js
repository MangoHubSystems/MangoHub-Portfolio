import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/mango2.png";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaRocket, FaUsers, FaAward, FaCogs, FaHandshake, FaShieldAlt } from "react-icons/fa";

function Home2() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const headingRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Add animation styles once
    if (!document.getElementById("mh-anim-keyframes")) {
      const styleTag = document.createElement("style");
      styleTag.id = "mh-anim-keyframes";
      styleTag.textContent = globalAnimStyles;
      document.head.appendChild(styleTag);
    }

    // Auto-rotate features
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: <FaRocket />, title: "Innovation First", description: "Cutting-edge solutions", color: "#0A1F44" },
    { icon: <FaUsers />, title: "Client Focus", description: "Your success is our priority", color: "#00b9ff" },
    { icon: <FaAward />, title: "Quality Assured", description: "Excellence in every project", color: "#993DFF" },
    { icon: <FaShieldAlt />, title: "Secure & Reliable", description: "Built to last", color: "#0A1F44" },
  ];

  const stats = [
    { number: "150+", label: "Projects Completed", color: "#0A1F44" },
    { number: "98%", label: "Client Satisfaction", color: "#00b9ff" },
    { number: "24/7", label: "Support Available", color: "#993DFF" },
    { number: "5+", label: "Years of Excellence", color: "#0A1F44" },
  ];

  return (
    <Container
      fluid
      className="home-about-section"
      id="about"
      style={{
        background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
        padding: "100px 0",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Elements */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "300px",
          height: "300px",
          background: "linear-gradient(45deg, rgba(153, 61, 255, 0.05), rgba(0, 185, 255, 0.05))",
          borderRadius: "50%",
          filter: "blur(100px)",
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: "250px",
          height: "250px",
          background: "linear-gradient(45deg, rgba(10, 31, 68, 0.05), rgba(153, 61, 255, 0.05))",
          borderRadius: "50%",
          filter: "blur(80px)",
          animation: "float 10s ease-in-out infinite reverse",
        }}
      />

      <Container style={{ position: "relative", zIndex: 2 }}>
        {/* Section Header */}
        <Row className="mb-5">
          <Col lg={12} className="text-center">
            <div
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(50px)",
                transition: "all 1s cubic-bezier(0.23, 1, 0.32, 1)",
              }}
            >
              <h1
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontWeight: 900,
                  color: "#0A1F44",
                  marginBottom: "1rem",
                  letterSpacing: "-0.02em",
                }}
              >
                About{" "}
                <span
                  style={{
                    background: "rgb(7, 56, 140)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  MindCloud
                </span>
              </h1>
              <p
                style={{
                  fontSize: "1.2rem",
                  color: "#64748b",
                  maxWidth: "600px",
                  margin: "0 auto",
                  lineHeight: 1.6,
                }}
              >
                Transforming businesses through innovative technology solutions and exceptional digital experiences
              </p>
            </div>
          </Col>
        </Row>

        {/* Main Content */}
        <Row className="align-items-center mb-5">
          {/* About Card */}
          <Col lg={7} md={12}>
            <div
              style={{
                background: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(20px)",
                borderRadius: "30px",
                padding: "3rem",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-50px)",
                transition: "all 1s cubic-bezier(0.23, 1, 0.32, 1) 0.2s",
              }}
            >
              <h2
                style={{
                  color: "purple",
                  fontSize: "2rem",
                  fontWeight: 700,
                  marginBottom: "1.5rem",
                  letterSpacing: "0.5px",
                }}
              >
                Who We Are
              </h2>
              
              <p
                style={{
                  color: "#475569",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  marginBottom: "2rem",
                }}
              >
                <strong style={{ color: "#993DFF" }}>MindCloud</strong> is a forward-thinking
                technology company dedicated to empowering businesses through
                innovative digital solutions. We specialize in{" "}
                <strong style={{ color: "#00b9ff" }}>custom web development</strong>,{" "}
                <strong style={{ color: "#0A1F44" }}>cloud solutions</strong>, and{" "}
                <strong style={{ color: "#993DFF" }}>quality assurance</strong>.
              </p>

              <p
                style={{
                  color: "#475569",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  marginBottom: "2rem",
                }}
              >
                Our mission is to help businesses grow and thrive by providing reliable, 
                high-performance digital products and seamless user experiences. We believe 
                in the power of technology to transform organizations.
              </p>

              {/* Features Grid */}
              <Row className="mt-4">
                {features.map((feature, idx) => (
                  <Col md={6} key={idx} className="mb-3">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "1rem",
                        background: activeFeature === idx 
                          ? `${feature.color}10` 
                          : "rgba(255, 255, 255, 0.5)",
                        borderRadius: "15px",
                        border: `2px solid ${activeFeature === idx ? feature.color : 'transparent'}`,
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                      }}
                      onMouseEnter={() => setActiveFeature(idx)}
                    >
                      <div
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "12px",
                          background: `linear-gradient(135deg, ${feature.color}, ${feature.color}cc)`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                          marginRight: "1rem",
                          fontSize: "1.2rem",
                        }}
                      >
                        {feature.icon}
                      </div>
                      <div>
                        <h5
                          style={{
                            color: "#0A1F44",
                            fontSize: "1rem",
                            fontWeight: 700,
                            marginBottom: "0.3rem",
                          }}
                        >
                          {feature.title}
                        </h5>
                        <p
                          style={{
                            color: "#64748b",
                            fontSize: "0.9rem",
                            margin: 0,
                          }}
                        >
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>

          {/* Image & Stats */}
          <Col lg={5} md={12}>
            <div
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(50px)",
                transition: "all 1s cubic-bezier(0.23, 1, 0.32, 1) 0.4s",
              }}
            >
              {/* Company Image */}
              <div className="text-center mb-4">
                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable glareMaxOpacity={0.1}>
                  <div
                    style={{
                      background: "rgba(255, 255, 255, 0.9)",
                      borderRadius: "25px",
                      padding: "2rem",
                      boxShadow: "0 15px 40px rgba(0, 0, 0, 0.1)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    <img
                      src={myImg}
                      style={{
                        maxWidth: "250px",
                        width: "100%",
                        height: "auto",
                        borderRadius: "15px",
                      }}
                      className="img-fluid"
                      alt="MindCloud"
                    />
                  </div>
                </Tilt>
              </div>

              {/* Stats Cards */}
              <Row className="g-3">
                {stats.map((stat, idx) => (
                  <Col md={6} key={idx}>
                    <div
                      style={{
                        background: "rgba(255, 255, 255, 0.8)",
                        backdropFilter: "blur(20px)",
                        borderRadius: "20px",
                        padding: "1.5rem 1rem",
                        textAlign: "center",
                        boxShadow: "0 8px 25px rgba(0, 0, 0, 0.08)",
                        border: `2px solid ${stat.color}20`,
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = "translateY(-5px)";
                        e.target.style.boxShadow = `0 15px 35px ${stat.color}20`;
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = "translateY(0)";
                        e.target.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.08)";
                      }}
                    >
                      <div
                        style={{
                          fontSize: "2rem",
                          fontWeight: 800,
                          color: stat.color,
                          marginBottom: "0.5rem",
                        }}
                      >
                        {stat.number}
                      </div>
                      <div
                        style={{
                          color: "#64748b",
                          fontSize: "0.9rem",
                          fontWeight: 600,
                        }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>

        {/* Connect Section */}
        <Row>
          <Col lg={12}>
            <div
              style={{
                background: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(20px)",
                borderRadius: "30px",
                padding: "3rem 2rem",
                textAlign: "center",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(50px)",
                transition: "all 1s cubic-bezier(0.23, 1, 0.32, 1) 0.6s",
              }}
            >
              <h2
                style={{
                  color: "rgb(7, 56, 140)",
                  fontSize: "2.5rem",
                  fontWeight: 700,
                  marginBottom: "1rem",
                  letterSpacing: "0.5px",
                }}
              >
                Let's Connect
              </h2>
              
              <p
                style={{
                  color: "#64748b",
                  fontSize: "1.2rem",
                  marginBottom: "2rem",
                  maxWidth: "500px",
                  margin: "0 auto 2rem",
                }}
              >
                Ready to transform your business? Get in touch with our team today.
              </p>

              {/* Social Links */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "1rem",
                  marginBottom: "2rem",
                  flexWrap: "wrap",
                }}
              >
                {[
                  { icon: <AiFillGithub />, href: "https://github.com/MindCloud", color: "#0A1F44" },
                  { icon: <AiOutlineTwitter />, href: "https://twitter.com/MindCloud", color: "#00b9ff" },
                  { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/company/mindcloud", color: "#993DFF" },
                  { icon: <AiFillInstagram />, href: "https://www.instagram.com/mindcloud", color: "#0A1F44" },
                ].map((social, idx) => (
                  <SocialIcon key={idx} href={social.href} color={social.color}>
                    {social.icon}
                  </SocialIcon>
                ))}
              </div>

              {/* Contact Buttons */}
              <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
                <Button
                  href="mailto:mindcloudco@gmail.com"
                  style={{
                    background: "linear-gradient(135deg, #0A1F44, #1a3b6b)",
                    color: "white",
                    border: "none",
                    fontWeight: 700,
                    padding: "1rem 2.5rem",
                    borderRadius: "50px",
                    fontSize: "1.1rem",
                    boxShadow: "0 8px 30px rgba(10, 31, 68, 0.3)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-3px) scale(1.05)";
                    e.target.style.boxShadow = "0 15px 40px rgba(10, 31, 68, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0) scale(1)";
                    e.target.style.boxShadow = "0 8px 30px rgba(10, 31, 68, 0.3)";
                  }}
                >
                  ✉️ Email Us
                </Button>

                <Button
                  variant="outline"
                  style={{
                    background: "rgba(153, 61, 255, 0.1)",
                    color: "#993DFF",
                    border: "2px solid #993DFF",
                    fontWeight: 600,
                    padding: "1rem 2.5rem",
                    borderRadius: "50px",
                    fontSize: "1.1rem",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "#993DFF";
                    e.target.style.color = "white";
                    e.target.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "rgba(153, 61, 255, 0.1)";
                    e.target.style.color = "#993DFF";
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  🗓️ Schedule Call
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Animation Styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(64px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </Container>
  );
}

// Enhanced Social Icon Component
function SocialIcon({ href, children, color }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "60px",
        height: "60px",
        borderRadius: "20px",
        background: hovered ? color : `${color}15`,
        color: hovered ? "white" : color,
        fontSize: "1.5rem",
        transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
        textDecoration: "none",
        boxShadow: hovered ? `0 10px 30px ${color}40` : `0 4px 15px ${color}20`,
        transform: hovered ? "translateY(-3px) scale(1.1)" : "translateY(0) scale(1)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </a>
  );
}

const globalAnimStyles = `
@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(64px); }
  100% { opacity: 1; transform: translateY(0); }
}
`;

export default Home2;
