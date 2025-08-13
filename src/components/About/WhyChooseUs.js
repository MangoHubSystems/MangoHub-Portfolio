import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaAward, FaUsers, FaHandshake } from "react-icons/fa";

function WhyChooseUs() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "30px",
        marginTop: "30px",
      }}
    >
      <h1
        className="project-heading"
        style={{
          paddingBottom: "20px",
          textAlign: "center",
          width: "100%",
          color: "#111", // Dark heading text
          fontWeight: 800,
        }}
      >
        Why <span style={{ color: "#006400" }}>Choose Us?</span>
      </h1>

      <Col md={4} style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        <FaAward size={48} color="#006400" style={{ marginBottom: "0.6rem" }} />
        <h4 style={{ color: "#111", fontWeight: 700 }}>Proven Expertise</h4>
        <p style={{ color: "#333" }}>
          Years of experience delivering secure, scalable solutions for
          businesses of all sizes.
        </p>
      </Col>

      <Col md={4} style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        <FaUsers size={48} color="#006400" style={{ marginBottom: "0.6rem" }} />
        <h4 style={{ color: "#111", fontWeight: 700 }}>
          Client-Centric Approach
        </h4>
        <p style={{ color: "#333" }}>
          We listen, collaborate, and tailor every project to your unique goals
          and challenges.
        </p>
      </Col>

      <Col md={4} style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        <FaHandshake
          size={48}
          color="#006400"
          style={{ marginBottom: "0.6rem" }}
        />
        <h4 style={{ color: "#111", fontWeight: 700 }}>
          Reliable Partnership
        </h4>
        <p style={{ color: "#333" }}>
          Count on us for transparency, ongoing support, and a commitment to
          your success.
        </p>
      </Col>
    </Row>
  );
}

export default WhyChooseUs;
