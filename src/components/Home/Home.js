import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import homeLogo from "../../Assets/logo new.png";
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
          alignItems: "center",
          background: "#fff",             // White background
          padding: "0",
          marginTop: "-60px",
          position: "relative",           // Important for layering particles
          overflow: "hidden",
        }}
      >
        <Particle />

        <Row
          className="align-items-center justify-content-center"
          style={{
            width: "100%",
            margin: 0,
            padding: "0 6vw",
            position: "relative",
            zIndex: 2,
          }}
        >
          <Col
            md={7}
            className="home-header"
            style={{
              padding: "2rem 0 0.5rem 0",
              zIndex: 3,
            }}
          >
            <h1
              className="heading"
              style={{
                color: "#006400",             // Dark green accent
                fontWeight: 700,
                fontSize: "2.6rem",
                marginBottom: "0.5rem",
                letterSpacing: "1px",
              }}
            >
              Hello! <br/> We Are MangoHub Systems <span className="wave" role="img" aria-labelledby="wave">🥭</span>
            </h1>
            <h2
              className="heading-name"
              style={{
                color: "#222",
                fontWeight: 800,
                fontSize: "2.2rem",
                marginBottom: "1.2rem",
              }}
            >
              {/* MangoHub Systems  */}
            </h2>
            <div style={{ padding: "0 0 1.2rem 0", textAlign: "left" }}>
              <Type />
            </div>
            <br/> <br/>
          
            <p
              style={{
                color: "#333",
                fontSize: "1.18rem",
                lineHeight: 1.7,
                marginBottom: "1.6rem",
                background: "#f5f6fa",
                borderRadius: "14px",
                boxShadow: "0 2px 12px rgba(0,100,0,0.10)",
                padding: "1.2rem",
              }}
            
              
            >
             
              At MangoHub Systems, we specialize in delivering <span style={{ color: "#006400" }}>cutting-edge web solutions</span> tailored to your business needs.<br />
              Our team creates innovative, user-friendly, high-performance applications for your success.<br />
              We build scalable, secure, and modern web solutions—custom web apps, cloud integration, UI/UX design, and quality assurance.
            </p>
            <Button
              href="#about"
              variant="primary"
              style={{
                backgroundColor: "black",
                color: "#fff",
                border: "none",
                fontWeight: 700,
                padding: "0.7rem 2.2rem",
                borderRadius: "30px",
                fontSize: "1.1rem",
                boxShadow: "",
                transition: "box-shadow 0.2s, transform 0.2s",
              }}
            >
              Explore More
            </Button>
          </Col>
          <Col
            md={5}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: "2rem",
              zIndex: 3,
            }}
          >
            <img
              src={homeLogo}
              alt="MangoHub logo"
              className="img-fluid"
              style={{
                maxHeight: "360px",
                borderRadius: "18px",
                boxShadow: "0 8px 40px 0 rgba(0,100,0,0.12)",
                background: "#f5f6fa",
                padding: "0.7rem",
              }}
            />
          </Col>
        </Row>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
