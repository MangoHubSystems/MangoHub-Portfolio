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
          color: "#EAEAEA",
        }}
      >
        Why <span style={{ color: "#3CB371" }}>Choose Us?</span>
      </h1>
      <Col md={4} style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        <FaAward size={48} color="#EAEAEA" style={{ marginBottom: "0.6rem" }} />
        <h4 style={{ color: "#EAEAEA", fontWeight: 600 }}>Proven Expertise</h4>
        <p style={{ color: "#B0B0B0" }}>
          Years of experience delivering secure, scalable solutions for
          businesses of all sizes.
        </p>
      </Col>
      <Col md={4} style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        <FaUsers size={48} color="#EAEAEA" style={{ marginBottom: "0.6rem" }} />
        <h4 style={{ color: "#EAEAEA", fontWeight: 600 }}>
          Client-Centric Approach
        </h4>
        <p style={{ color: "#B0B0B0" }}>
          We listen, collaborate, and tailor every project to your unique goals
          and challenges.
        </p>
      </Col>
      <Col md={4} style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        <FaHandshake
          size={48}
          color="#EAEAEA"
          style={{ marginBottom: "0.6rem" }}
        />
        <h4 style={{ color: "#EAEAEA", fontWeight: 600 }}>
          Reliable Partnership
        </h4>
        <p style={{ color: "#B0B0B0" }}>
          Count on us for transparency, ongoing support, and a commitment to
          your success.
        </p>
      </Col>
    </Row>
  );
}

export default WhyChooseUs;
