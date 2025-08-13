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
          marginTop: "-150px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* <Particle /> */}

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
              height: "100%",
              zIndex: 3,
              marginTop: "20px", // Push content down
            }}
          >
            <h1
              className="heading"
              style={{
                color: "#222", // Black greeting
                fontWeight: 700,
                fontSize: "5.5rem", // Increased font size
                marginBottom: "20rem",
                letterSpacing: "1px",
                lineHeight: 1.2,
                textAlign: "center",
              }}
            >
              Hello!
              We Are{" "}<br/>
              <span
                style={{
                  color: "#006400", // Dark green brand
                  fontWeight: 900,
                  fontSize: "5.0rem", // Larger MangoHub name
                }}
              >
                MangoHub Systems
                              <span
                className="wave"
                role="img"
                aria-labelledby="wave"
                style={{
                  fontSize: "4rem", // You can adjust to 3rem, 5rem, etc. as desired
                  marginLeft: "0.3rem",
                  verticalAlign: "middle",
                  lineHeight: 1,
                }}
              >
                🥭
              </span>
              </span>
            </h1>

            <h3
              style={{
                color: "#555", // Tagline gray
                fontWeight: 500,
                fontSize: "1.35rem", // Bigger tagline
                fontStyle: "italic",
                marginBottom: "5rem",
                marginTop: "-12rem",
                letterSpacing: "0.2px",
                textAlign: "center",
              }}
            >
              "Delivering innovative web solutions that cultivate growth and drive your digital success"
            </h3>

            <div
              style={{
                padding: "0 0 1rem 0",
                width: "100%",
                textAlign: "center",
              }}
            >
              <Type />
            </div>
{/* 
            <p
              style={{
                color: "#222",
                fontSize: "1.25rem", // Larger paragraph font
                lineHeight: 2,
                marginBottom: "1.8rem",
                background: "#f5f6fa",
                borderRadius: "14px",
                boxShadow: "0 2px 12px rgba(0,100,0,0.08)",
                padding: "1.4rem",
                width: "100%",
                maxWidth: "800px",
                textAlign: "center",
              }}
            >
              At MangoHub Systems, we specialize in delivering{" "}
              <span style={{ color: "#006400", fontWeight: 600 }}>
                cutting-edge web solutions
              </span>{" "}
              tailored to your business needs.<br />
              Our team creates innovative, user-friendly, high-performance
              applications for your success.<br />
              We build scalable, secure, and modern web solutions—custom web
              apps, cloud integration, UI/UX design, and quality assurance.
            </p> */}

            <Button
              href="#about"
              variant="primary"
              style={{
                backgroundColor: "#006400",
                color: "#fff",
                border: "none",
                fontWeight: 700,
                padding: "0.8rem 2.5rem", // Slightly bigger button
                borderRadius: "30px",
                fontSize: "1.2rem", // Larger button text
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
