import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { FaAward, FaUsers, FaHandshake, FaRocket, FaShieldAlt, FaCogs } from "react-icons/fa";

const whyChooseData = [
  {
    icon: <FaAward size={40} />,
    title: "Proven Expertise",
    description: "Years of experience delivering secure, scalable solutions for businesses of all sizes.",
    color: "#0A1F44",
    bgGradient: "linear-gradient(135deg, rgba(10, 31, 68, 0.1), rgba(10, 31, 68, 0.2))",
  },
  {
    icon: <FaUsers size={40} />,
    title: "Client-Centric Approach",
    description: "We listen, collaborate, and tailor every project to your unique goals and challenges.",
    color: "#00b9ff",
    bgGradient: "linear-gradient(135deg, rgba(0, 185, 255, 0.1), rgba(0, 185, 255, 0.2))",
  },
  {
    icon: <FaHandshake size={40} />,
    title: "Reliable Partnership",
    description: "Count on us for transparency, ongoing support, and a commitment to your success.",
    color: "#993DFF",
    bgGradient: "linear-gradient(135deg, rgba(153, 61, 255, 0.1), rgba(153, 61, 255, 0.2))",
  },
  {
    icon: <FaRocket size={40} />,
    title: "Cutting-Edge Innovation",
    description: "Latest technologies and methodologies to keep your business ahead of the competition.",
    color: "#0A1F44",
    bgGradient: "linear-gradient(135deg, rgba(10, 31, 68, 0.1), rgba(10, 31, 68, 0.2))",
  },
  {
    icon: <FaShieldAlt size={40} />,
    title: "Security First",
    description: "Enterprise-grade security practices ensuring your data and applications are protected.",
    color: "#00b9ff",
    bgGradient: "linear-gradient(135deg, rgba(0, 185, 255, 0.1), rgba(0, 185, 255, 0.2))",
  },
  {
    icon: <FaCogs size={40} />,
    title: "Scalable Solutions",
    description: "Future-ready architecture that grows with your business and adapts to changing needs.",
    color: "#993DFF",
    bgGradient: "linear-gradient(135deg, rgba(153, 61, 255, 0.1), rgba(153, 61, 255, 0.2))",
  },
];

function WhyChooseUs() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <Container style={{ padding: "4rem 0" }}>
      {/* Section Header */}
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: 800,
            color: "#0A1F44",
            marginBottom: "1rem",
            letterSpacing: "0.5px",
          }}
        >
          Why Choose{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #993DFF, #00b9ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            MindCloud
          </span>
          ?
        </h1>
        <p
          style={{
            color: "#64748b",
            fontSize: "1.2rem",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: 1.6,
            fontWeight: 400,
          }}
        >
          Discover what sets us apart and makes us the ideal partner for your digital transformation journey
        </p>
      </div>

      {/* Cards Grid */}
      <Row className="g-4">
        {whyChooseData.map((item, idx) => (
          <Col lg={4} md={6} key={idx}>
            <div
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                borderRadius: "24px",
                padding: "2.5rem 2rem",
                height: "100%",
                minHeight: "280px",
                position: "relative",
                cursor: "pointer",
                transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                boxShadow: hoveredCard === idx 
                  ? `0 20px 60px ${item.color}20`
                  : "0 10px 40px rgba(0, 0, 0, 0.08)",
                transform: hoveredCard === idx ? "translateY(-12px)" : "translateY(0)",
                border: `2px solid ${hoveredCard === idx ? item.color : 'transparent'}`,
                overflow: "hidden",
              }}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated Background */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: item.bgGradient,
                  opacity: hoveredCard === idx ? 1 : 0,
                  transition: "opacity 0.4s ease",
                  zIndex: 0,
                }}
              />

              {/* Floating Decorations */}
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  background: `radial-gradient(circle, ${item.color}15, transparent)`,
                  opacity: hoveredCard === idx ? 0.8 : 0.3,
                  transition: "all 0.4s ease",
                  zIndex: 0,
                }}
              />

              <div
                style={{
                  position: "absolute",
                  bottom: "30px",
                  left: "30px",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: `radial-gradient(circle, ${item.color}10, transparent)`,
                  opacity: hoveredCard === idx ? 0.6 : 0.2,
                  transition: "all 0.4s ease",
                  zIndex: 0,
                }}
              />

              {/* Content */}
              <div style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column" }}>
                {/* Icon Container */}
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "20px",
                    background: hoveredCard === idx
                      ? `linear-gradient(135deg, ${item.color}, ${item.color}cc)`
                      : `${item.color}15`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.5rem",
                    transition: "all 0.4s ease",
                    boxShadow: hoveredCard === idx 
                      ? `0 8px 25px ${item.color}30`
                      : "0 4px 15px rgba(0, 0, 0, 0.08)",
                    transform: hoveredCard === idx ? "rotate(-10deg) scale(1.1)" : "rotate(0deg)",
                  }}
                >
                  <div
                    style={{
                      color: hoveredCard === idx ? "white" : item.color,
                      transition: "color 0.3s ease",
                    }}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Title */}
                <h3
                  style={{
                    color: "#1e293b",
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    marginBottom: "1rem",
                    letterSpacing: "0.3px",
                    lineHeight: 1.3,
                  }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    color: "#64748b",
                    fontSize: "1rem",
                    lineHeight: 1.7,
                    fontWeight: 400,
                    flex: 1,
                    marginBottom: "1.5rem",
                  }}
                >
                  {item.description}
                </p>

                {/* Learn More Link */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: item.color,
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    opacity: hoveredCard === idx ? 1 : 0,
                    transform: hoveredCard === idx ? "translateX(0)" : "translateX(-10px)",
                    transition: "all 0.3s ease",
                  }}
                >
                  Learn More
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    style={{ marginLeft: "0.5rem" }}
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Bottom Accent */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: hoveredCard === idx ? "60%" : "0%",
                  height: "4px",
                  background: `linear-gradient(90deg, transparent, ${item.color}, transparent)`,
                  transition: "width 0.4s ease",
                  borderRadius: "2px 2px 0 0",
                }}
              />
            </div>
          </Col>
        ))}
      </Row>

      {/* Bottom CTA Section */}
      <div
        style={{
          marginTop: "4rem",
          padding: "3rem 2rem",
          background: "linear-gradient(135deg, rgba(10, 31, 68, 0.05), rgba(153, 61, 255, 0.05))",
          borderRadius: "24px",
          textAlign: "center",
          border: "1px solid rgba(10, 31, 68, 0.1)",
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
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(153, 61, 255, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, rgba(0, 185, 255, 0.1) 0%, transparent 50%)`,
            zIndex: 0,
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          <h2
            style={{
              color: "#0A1F44",
              fontSize: "2.2rem",
              fontWeight: 700,
              marginBottom: "1rem",
              letterSpacing: "0.5px",
            }}
          >
            Ready to Transform Your Business?
          </h2>
          <p
            style={{
              color: "#64748b",
              fontSize: "1.1rem",
              marginBottom: "2rem",
              maxWidth: "500px",
              margin: "0 auto 2rem",
              lineHeight: 1.6,
            }}
          >
            Join hundreds of satisfied clients who trust MindCloud for their digital solutions
          </p>
          
          {/* Stats */}
          <div style={{ display: "flex", justifyContent: "center", gap: "3rem", flexWrap: "wrap" }}>
            {[
              { number: "150+", label: "Projects Delivered" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, idx) => (
              <div key={idx} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "#0A1F44",
                    marginBottom: "0.5rem",
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontSize: "0.9rem",
                    color: "#64748b",
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default WhyChooseUs;
