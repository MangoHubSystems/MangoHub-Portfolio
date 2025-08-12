import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import myImg from "../../Assets/logo new.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

// Inline style objects with updated white background for main section
const sectionStyle = {
  background: "#fff", // Changed to pure white
  padding: "80px 0 60px 0",
  minHeight: "100vh",
  position: "relative",
};

const aboutCardStyle = {
  background: "rgba(255, 255, 255, 0.8)", // light translucent white for glass effect
  borderRadius: "18px",
  boxShadow: "0 4px 32px rgba(34, 139, 34, 0.10)", // subtle green shadow
  backdropFilter: "blur(8px)",
  padding: "3rem 2.5rem",
  color: "#222", // dark text for readability on light background
  marginBottom: "2rem",
};

const headingStyle = {
  color: "#006400", // dark green accent matching MangoHub branding
  fontWeight: 700,
  letterSpacing: "1px",
  marginBottom: "1.2rem",
  fontSize: "2.6em",
};

const greenStyle = {
  color: "#006400",
  fontWeight: 700,
};

const bodyTextStyle = {
  color: "#333",
  fontSize: "1.15rem",
  lineHeight: 1.7,
};

const avatarColStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "2rem",
  paddingBottom: "2rem",
  position: "relative",
  zIndex: 0,
};

const avatarImgStyle = {
  maxWidth: "260px",
  borderRadius: "18px",
  boxShadow: "0 8px 32px 0 rgba(0, 100, 0, 0.10)", // dark green shadow
  background: "#f0f0f0",
};

const socialSectionStyle = {
  textAlign: "center",
  color: "#222",
  marginTop: "2rem",
  position: "relative",
  zIndex: 10,
};

const socialHeadingStyle = {
  color: "#006400",
  fontSize: "2rem",
  marginBottom: "0.7rem",
  fontWeight: 700,
};

const socialLinksStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "18px",
  padding: 0,
  marginTop: "1.2rem",
  listStyle: "none",
  color: "#222",
};

const iconStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "44px",
  height: "44px",
  background: "rgba(0, 100, 0, 0.07)",
  borderRadius: "50%",
  color: "#006400",
  fontSize: "1.7em",
  border: "1.5px solid rgba(0, 100, 0, 0.25)",
  boxShadow: "0 2px 8px 0 rgba(0, 100, 0, 0.09)",
  transition: "background 0.2s, color 0.2s, box-shadow 0.2s",
  textDecoration: "none",
  cursor: "pointer",
  pointerEvents: "auto",
  zIndex: 1,
  position: "relative",
};

function SocialIcon({ href, children }) {
  const [hovered, setHovered] = React.useState(false);

  const baseStyle = {
    ...iconStyle,
    background: hovered ? "#006400" : "rgba(0, 100, 0, 0.07)",
    color: hovered ? "#fff" : "#006400",
    borderColor: hovered ? "#004d00" : "rgba(0, 100, 0, 0.25)",
    boxShadow: hovered
      ? "0 4px 12px 0 rgba(0, 100, 0, 0.5)"
      : "0 2px 8px 0 rgba(0, 100, 0, 0.09)",
    transition: "all 0.25s ease-in-out",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={baseStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </a>
  );
}

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about" style={sectionStyle}>
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <div style={aboutCardStyle}>
              <h1 style={headingStyle}>
                ABOUT <span style={greenStyle}>MANGOHUB SYSTEMS</span>
              </h1>
              <p style={bodyTextStyle}>
                <b style={greenStyle}>MangoHub Systems</b> is a forward-thinking
                technology company dedicated to empowering businesses through
                innovative digital solutions.
                <br />
                <br />
                Our team specializes in{" "}
                <b style={greenStyle}>custom web development</b>,{" "}
                <b style={greenStyle}>cloud-based applications</b>,{" "}
                <b style={greenStyle}>enterprise automation</b>, and end-to-end{" "}
                <b style={greenStyle}>quality assurance</b>. We deliver robust,
                scalable, and secure platforms tailored to the unique needs of
                each client.
                <br />
                <br />
                <b style={greenStyle}>Our expertise:</b> Full-stack web
                development, UI/UX design, API & system integration, e-commerce
                platforms, business automation tools, and comprehensive software
                testing—including both manual and automated QA.
                <br />
                <br />
                <b style={greenStyle}>Our mission:</b> To help businesses grow
                and thrive by providing reliable, high-performance digital
                products and seamless user experiences. We believe in the power
                of technology to transform organizations, inspired by the
                vibrant energy and adaptability of the mango!
                <br />
                <br />
                We leverage leading technologies such as{" "}
                <b style={greenStyle}>React.js</b>,{" "}
                <b style={greenStyle}>Node.js</b>,{" "}
                <b style={greenStyle}>cloud infrastructure</b>, and advanced
                testing frameworks like <b style={greenStyle}>Selenium</b> to
                ensure every solution is future-ready.
                <br />
                <br />
                Whether you’re a startup, SME, or enterprise, MangoHub Systems
                is your partner for digital innovation, automation, and growth.
              </p>
            </div>
          </Col>
          <Col md={4} className="myAvtar" style={avatarColStyle}>
            <Tilt style={{ pointerEvents: "none" }}>
              <img
                src={myImg}
                style={{ ...avatarImgStyle, pointerEvents: "auto" }}
                className="img-fluid"
                alt="MangoHub mascot"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social" style={socialSectionStyle}>
            <h1 style={socialHeadingStyle}>CONNECT WITH US</h1>
            <p>
              mangohubsystems@gmail.com <br />
              Follow <span style={greenStyle}>MangoHub Systems</span> on social
              media
            </p>
            <ul style={socialLinksStyle}>
              <li>
                <SocialIcon href="https://github.com/MangoHubSystems">
                  <AiFillGithub />
                </SocialIcon>
              </li>
              <li>
                <SocialIcon href="https://twitter.com/MangoHubSystems">
                  <AiOutlineTwitter />
                </SocialIcon>
              </li>
              <li>
                <SocialIcon href="https://www.linkedin.com/company/mangohub-systems/">
                  <FaLinkedinIn />
                </SocialIcon>
              </li>
              <li>
                <SocialIcon href="https://www.instagram.com/mangohub_systems">
                  <AiFillInstagram />
                </SocialIcon>
              </li>
            </ul>

            <div style={{ marginTop: "2.2rem" }}>
              <Button
                href="mailto:mangohubsystems@gmail.com"
                style={{
                  backgroundColor: "#006400", // solid dark green button for clarity
                  color: "#fff",
                  border: "none",
                  fontWeight: 700,
                  padding: "0.7rem 2.2rem",
                  borderRadius: "30px",
                  fontSize: "1.1rem",
                  boxShadow: "0 2px 12px 0 rgba(0, 100, 0, 0.35)",
                  transition: "box-shadow 0.2s, transform 0.2s",
                  zIndex: 1,
                  position: "relative",
                }}
              >
                Email Us Now
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
