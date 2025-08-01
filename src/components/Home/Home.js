import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import homeLogo from "../../Assets/logo new.png"; // Your MangoHub logo
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
          background: "linear-gradient(135deg, #181818 60%, #232323 100%)",
          padding: "0",
          marginTop: "-60px", // Adjust for fixed navbar height
        }}
      >
        <Particle />
        <Row
          className="align-items-center justify-content-center"
          style={{
            width: "100%",
            margin: 0,
            padding: "0 6vw",
          }}
        >
          <Col
            md={7}
            className="home-header"
            style={{
              paddingBottom: "0.5rem",
              zIndex: 2,
            }}
          >
            <h1
              className="heading"
              style={{
                color: "#3CB371",
                fontWeight: 700,
                fontSize: "2.6rem",
                marginBottom: "0.5rem",
              }}
            >
              Welcome to{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                🥭
              </span>
            </h1>
            <h2
              className="heading-name"
              style={{
                color: "white",
                fontWeight: 800,
                fontSize: "2.2rem",
                marginBottom: "1.5rem",
              }}
            >
              MangoHub Systems
            </h2>
            <div style={{ padding: "0 0 2rem 0", textAlign: "left" }}>
              <Type />
            </div>
            <p
              style={{
                color: "#EAEAEA",
                fontSize: "1.15rem",
                lineHeight: 1.6,
                marginBottom: "2rem",
              }}
            >
              At MangoHub Systems, we specialize in delivering cutting-edge web
              solutions tailored to your business needs. Our team of experts is
              dedicated to creating innovative, user-friendly, and
              high-performance applications that drive success.
              <br />
              We build scalable, secure, and modern web solutions to help your
              business grow. From custom web apps to cloud integration, UI/UX
              design, and quality assurance, MangoHub Systems is your trusted
              digital partner.
              <br />
              {/* <br />
              <span style={{ color: "#3CB371" }}>mangohubsystems@gmail.com</span> */}
            </p>

            <Button
              href="#about"
              variant="primary"
              style={{
                backgroundColor: "white",
                color: "#3CB371", // MangoHub green text
                border: "none",
                fontWeight: 700,
                padding: "0.7rem 2.2rem",
                borderRadius: "30px",
                fontSize: "1.1rem",
                boxShadow: "0 2px 8px 0 rgba(60,179,113,0.13)", // subtle green shadow
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
              zIndex: 2,
            }}
          >
            <img
              src={homeLogo}
              alt="MangoHub logo"
              className="img-fluid"
              style={{
                maxHeight: "360px",
                borderRadius: "18px",
                boxShadow: "0 8px 32px 0 rgba(255,195,36,0.10)",
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
