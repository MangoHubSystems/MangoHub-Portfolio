import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/logo new.png";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

// Inline keyframes for fade-in/up heading animation
const headingAnimStyle = {
  animation: "fadeInUp 5s cubic-bezier(.42,.96,.58,1.01) 0s both",
};

const sectionStyle = {
  background: "#fff",
  padding: "80px 0 60px 0",
  minHeight: "100vh",
  position: "relative",
};

const aboutCardStyle = {
  background: "rgba(233, 234, 187, 0.74)", // glass effect, pale yellow-white
  borderRadius: "18px",
  boxShadow: "0 4px 32px rgba(34, 139, 34, 0.10)",
  backdropFilter: "blur(8px)",
  padding: "3rem 2.5rem",
  color: "#222",
  marginBottom: "2rem",
};

const headingStyle = {
  color: "#006400", // MangoHub dark green
  fontWeight: 1000,
  letterSpacing: "1px",
  marginBottom: "1.2rem",
  fontSize: "3.2em", // Larger heading
};

const greenStyle = {
  color: "#006400",
  fontWeight: 700,
};

const bodyTextStyle = {
  color: "#333",
  fontSize: "1.18rem",
  lineHeight: 1.78,
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
  maxWidth: "320px",       // Enlarged logo size
  borderRadius: "24px",
  boxShadow: "0 12px 48px 0 rgba(0, 100, 0, 0.16)",
  background: "#f0f0f0",
  padding: "0.3rem",
  marginTop: "1rem",
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

// Animation keyframes for heading
const globalAnimStyles = `
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
`;

function Home2() {
  const headingRef = useRef(null);

  useEffect(() => {
    // Inject animation styles only once
    if (!document.getElementById("mh-anim-keyframes")) {
      const styleTag = document.createElement("style");
      styleTag.id = "mh-anim-keyframes";
      styleTag.textContent = globalAnimStyles;
      document.head.appendChild(styleTag);
    }
  }, []);

  return (
    <Container fluid className="home-about-section" id="about" style={sectionStyle}>
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <div style={aboutCardStyle}>
              <h1
                style={{ ...headingStyle, ...headingAnimStyle }}
                ref={headingRef}
              >
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
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable glareMaxOpacity={0.15}>
              <img
                src={myImg}
                style={avatarImgStyle}
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
                  <span style={{ color: "#111", fontWeight: 500 }}>
                    mangohubsystems@gmail.com <br /> Follow {" "}
                  </span>
                  <span style={{ color: "#006400", fontWeight: 700 }}>
                    MangoHub Systems
                  </span>
                  <span style={{ color: "#111", fontWeight: 500 }}>
                    {" "}on social media
                  </span>
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
                  backgroundColor: "#006400",
                  color: "#fff",
                  border: "none",
                  fontWeight: 700,
                  padding: "0.8rem 2.5rem", // Larger button
                  borderRadius: "34px",
                  fontSize: "1.2rem",
                  boxShadow: "0 2px 12px 0 rgba(0, 100, 0, 0.35)",
                  transition: "box-shadow 0.2s, transform 0.2s",
                  zIndex: 1,
                  position: "relative",
                  letterSpacing: "0.5px",
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
