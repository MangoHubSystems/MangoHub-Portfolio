import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { FaArrowRight, FaCode, FaCloud, FaPalette, FaCogs, FaRocket, FaShieldAlt } from "react-icons/fa";

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    
  ];

  const stats = [
    { number: "150+", label: "Projects", color: "#0A1F44" },
    { number: "98%", label: "Success Rate", color: "#00b9ff" },
    { number: "5+", label: "Years", color: "#993DFF" },
    { number: "24/7", label: "Support", color: "#0A1F44" },
  ];

  return (
    <section>
      <Container
        fluid
        className="home-section"
        id="home"
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg,rgb(255, 255, 255) 0%,rgb(144, 184, 227) 100%)",
          padding: 0,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Particle />

        {/* Floating Background Elements */}
        <div
          style={{
            position: "absolute",
            top: "15%",
            right: "10%",
            width: "200px",
            height: "200px",
            background: "linear-gradient(45deg, rgba(153, 61, 255, 0.1), rgba(0, 185, 255, 0.1))",
            borderRadius: "50%",
            filter: "blur(80px)",
            animation: "float 8s ease-in-out infinite",
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            left: "10%",
            width: "250px",
            height: "250px",
            background: "linear-gradient(45deg, rgba(10, 31, 68, 0.1), rgba(153, 61, 255, 0.1))",
            borderRadius: "50%",
            filter: "blur(100px)",
            animation: "float 10s ease-in-out infinite reverse",
            zIndex: 1,
          }}
        />

        {/* Main Content Container */}
        <Container style={{ position: "relative", zIndex: 2, paddingTop: "130px", paddingBottom: "100px" }}>
          
          {/* Hero Section */}
          <Row className="min-vh-100 align-items-center">
            <Col lg={12} className="text-center">
              
           

              {/* Main Heading */}
              <div
                style={{
                  marginBottom: "2rem",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(50px)",
                  transition: "all 1.2s cubic-bezier(0.23, 1, 0.32, 1) 0.2s",
                }}
              >
               <h1
  style={{
    fontSize: "clamp(1.5rem, 5vw, 4rem)",
    fontWeight: 400,
    color: "purple", // Changed to purple
    marginBottom: "1rem",
    letterSpacing: "-0.02em",
    lineHeight: 1.1,
    marginTop: "-8rem",
  }}
>
  Hello! We Are
</h1>
<h1
  style={{
    fontSize: "clamp(4rem, 8vw, 8rem)",
    fontWeight: 900, // Fixed from 1000 to 900 (max valid value)
    color: "#0A1F44", // Changed from background to color
    marginBottom: "2rem",
    letterSpacing: "-0.03em",
    lineHeight: 0.9,
    position: "relative",
    display: "inline-block",
  }}
>
  MindCloud
  <span
    style={{
      fontSize: "1.15em", // Increased size for better visibility
      position: "absolute",
      top: "0.03em", // Adjusted positioning
      right: "-1em", // Adjusted positioning
      color: "#00b9ff", // Added explicit color
      filter: "drop-shadow(0 0 20px rgba(0, 185, 255, 0.8))",
      animation: "bounce 2s ease-in-out infinite",
      fontWeight: "normal", // Reset font weight for emoji
      zIndex: 20, // Ensure it's on top
    }}
  >
    ☁️
  </span>
</h1>

              </div>

              {/* Tagline */}
              <p
                style={{
                  fontSize: "1.4rem",
                  color: "#475569",
                  fontStyle: "italic",
                  marginBottom: "3rem",
                  maxWidth: "600px",
                  margin: "0 auto 3rem",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  transition: "all 1s cubic-bezier(0.23, 1, 0.32, 1) 0.4s",
                  letterSpacing: "0.02em",
                }}
              >
                "Code Beyond Limits, Innovate with MindCloud"
              </p>

              {/* Services Pills */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "1rem",
                  marginBottom: "3rem",
                  flexWrap: "wrap",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  transition: "all 1s cubic-bezier(0.23, 1, 0.32, 1) 0.6s",
                }}
              >
                {services.map((service, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      background: "rgba(255, 255, 255, 0.8)",
                      backdropFilter: "blur(20px)",
                      border: `2px solid ${service.color}20`,
                      borderRadius: "50px",
                      padding: "12px 20px",
                      color: service.color,
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      boxShadow: `0 4px 20px ${service.color}15`,
                      transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = `${service.color}10`;
                      e.target.style.transform = "translateY(-3px) scale(1.05)";
                      e.target.style.boxShadow = `0 8px 30px ${service.color}25`;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "rgba(255, 255, 255, 0.8)";
                      e.target.style.transform = "translateY(0) scale(1)";
                      e.target.style.boxShadow = `0 4px 20px ${service.color}15`;
                    }}
                  >
                    <span style={{ marginRight: "8px", fontSize: "1.1em" }}>
                      {service.icon}
                    </span>
                    {service.title}
                  </div>
                ))}
              </div>

              {/* Typing Animation */}
              <div
                style={{
                  marginBottom: "3rem",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  transition: "all 1s cubic-bezier(0.23, 1, 0.32, 1) 0.8s",
                }}
              >
                <Type />
              </div>

              {/* CTA Buttons */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "1.5rem",
                  marginBottom: "5rem",
                  flexWrap: "wrap",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  transition: "all 1s cubic-bezier(0.23, 1, 0.32, 1) 1s",
                }}
              >
                <Button
                  href="#about"
                  style={{
                    background: "linear-gradient(135deg, #0A1F44, #1a3b6b)",
                    color: "white",
                    border: "none",
                    fontWeight: 700,
                    padding: "1rem 2.5rem",
                    borderRadius: "50px",
                    fontSize: "1.1rem",
                    boxShadow: "0 8px 30px rgba(10, 31, 68, 0.3)",
                    transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
                    letterSpacing: "0.5px",
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
                   Explore More
                  <FaArrowRight style={{ marginLeft: "10px", fontSize: "0.9em" }} />
                </Button>

                <Button
                  variant="outline"
                  style={{
                    background: "rgba(255, 255, 255, 0.8)",
                    backdropFilter: "blur(20px)",
                    color: "#0A1F44",
                    border: "2px solid rgba(10, 31, 68, 0.2)",
                    fontWeight: 600,
                    padding: "1rem 2.5rem",
                    borderRadius: "50px",
                    fontSize: "1.1rem",
                    transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
                    letterSpacing: "0.5px",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "rgba(10, 31, 68, 0.1)";
                    e.target.style.transform = "translateY(-3px)";
                    e.target.style.borderColor = "#0A1F44";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "rgba(255, 255, 255, 0.8)";
                    e.target.style.transform = "translateY(0)";
                    e.target.style.borderColor = "rgba(10, 31, 68, 0.2)";
                  }}
                >
                  Watch Demo
                </Button>
              </div>

              {/* Stats Section */}
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(20px)",
                  borderRadius: "30px",
                  padding: "3rem 2rem",
                  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  maxWidth: "800px",
                  margin: "0 auto",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(50px)",
                  transition: "all 1s cubic-bezier(0.23, 1, 0.32, 1) 1.2s",
                }}
              >
                <Row>
                  {stats.map((stat, idx) => (
                    <Col md={3} sm={6} key={idx} className="text-center mb-3">
                      <div
                        style={{
                          fontSize: "2.5rem",
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
                          fontSize: "1rem",
                          fontWeight: 600,
                        }}
                      >
                        {stat.label}
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </Container>

        {/* Animation Styles */}
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
        `}</style>
      </Container>

      <Home2 />
    </section>
  );
}

export default Home;
