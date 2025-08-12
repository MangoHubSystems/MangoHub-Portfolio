import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container
        fluid
        className="home-section"
        id="home"
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#fff", // Clean white background
          padding: 0,
          marginTop: "-60px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Particle />

        <Row
          style={{
            width: "100%",
            margin: 0,
            padding: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            position: "relative",
            zIndex: 2,
          }}
        >
          <Col
            md={8}
            className="home-header"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // Center horizontally
              justifyContent: "center", // Center vertically
              height: "100%", // Ensure full parent height for centering
              zIndex: 3,
            }}
          >
            <h1
              className="heading"
              style={{
                color: "#222", // Black for greeting
                fontWeight: 700,
                fontSize: "2.6rem",
                marginBottom: "0.2rem",
                letterSpacing: "1px",
                lineHeight: 1.2,
                textAlign: "center",
              }}
            >
              Hello! <br />
              We Are{" "}
              <span
                style={{
                  color: "#006400", // Dark green for MangoHub
                  fontWeight: 900,
                }}
              >
                MangoHub Systems
              </span>{" "}
              <span className="wave" role="img" aria-labelledby="wave">🥭</span>
            </h1>
            <h3
              style={{
                color: "#555", // Subtle modern gray
                fontWeight: 500,
                fontSize: "1.08rem",
                fontStyle: "italic",
                marginBottom: "1.7rem",
                marginTop: "0.7rem",
                letterSpacing: "0.2px",
                textAlign: "center",
              }}
            >
              Delivering innovative web solutions that cultivate growth and drive your digital success.
            </h3>
            <div style={{ padding: "0 0 1rem 0", width: "100%", textAlign: "center" }}>
              <Type />
            </div>
            <p
              style={{
                color: "#222",
                fontSize: "1.15rem",
                lineHeight: 1.7,
                marginBottom: "1.5rem",
                background: "#f5f6fa", // Soft light card
                borderRadius: "14px",
                boxShadow: "0 2px 12px rgba(0,100,0,0.08)",
                padding: "1.2rem",
                width: "100%",
                maxWidth: "600px",
                textAlign: "center",
              }}
            >
              At MangoHub Systems, we specialize in delivering <span style={{ color: "#006400", fontWeight: 600 }}>cutting-edge web solutions</span> tailored to your business needs.<br />
              Our team creates innovative, user-friendly, high-performance applications for your success.<br />
              We build scalable, secure, and modern web solutions—custom web apps, cloud integration, UI/UX design, and quality assurance.
            </p>
            <Button
              href="#about"
              variant="primary"
              style={{
                backgroundColor: "#006400", // Dark green CTA
                color: "#fff",
                border: "none",
                fontWeight: 700,
                padding: "0.7rem 2.2rem",
                borderRadius: "30px",
                fontSize: "1.1rem",
                boxShadow: "0 2px 10px 0 rgba(0,100,0,0.10)",
                transition: "box-shadow 0.2s, transform 0.2s",
                letterSpacing: "0.5px",
                marginTop: "0.6rem",
              }}
            >
              Explore More
            </Button>
          </Col>
        </Row>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
