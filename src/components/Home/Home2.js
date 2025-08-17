import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/mango2.png";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

// Animation keyframes for heading fade-in
const headingAnimStyle = {
  animation: "fadeInUp 2.2s cubic-bezier(.42,.96,.58,1.01) 0s both",
};

const sectionStyle = {
  background: "#fff",
  padding: "80px 0 60px 0",
  minHeight: "100vh",
  position: "relative",
};

const aboutCardStyle = {
  background: "rgba(2, 7, 16, 0.66)", // navy blue glass for strong contrast
  borderRadius: "18px",
  boxShadow: "0 8px 36px rgba(10,31,68,0.10)",
  backdropFilter: "blur(14px)",
  padding: "2.5rem 2rem",
  color: "#f4f8fa",
  marginBottom: "2rem",
};

const headingStyle = {
  color: "#fff",
  fontWeight: 800,
  letterSpacing: "1.5px",
  marginBottom: "1.2rem",
  fontSize: "2.9em",
  textShadow: "0 2px 8px rgba(10,31,68,0.14)"
};

const highlightStyle = {
  color: "#0A1F44", // purple for 'MindCLOUD'
  fontWeight: 800,
  letterSpacing: "1px",
  textShadow: "0 2px 8px rgba(153,61,255,0.10)"
};

const bodyTextStyle = {
  color: "#e8f0fa",
  fontSize: "1.13rem",
  lineHeight: 1.7,
  fontWeight: 400,
};

const subHeadingStyle = {
  color: "#00b9ff", // secondary light blue accent (for key points if needed)
  fontWeight: 700,
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
  maxWidth: "340px",
  minWidth: "180px",
  width: "100%",
  height: "auto",
  borderRadius: "22px",
  boxShadow: "0 16px 60px 0 rgba(10,31,68,0.13)",
  background: "#e0e7ef",
  padding: "0.4rem",
  marginTop: "1rem",
  objectFit: "contain",
};

const socialSectionStyle = {
  textAlign: "center",
  color: "#222",
  marginTop: "2rem",
  position: "relative",
  zIndex: 10,
};

const socialHeadingStyle = {
  color: "#0A1F44",
  fontSize: "2rem",
  marginBottom: "0rem",
  fontWeight: 800,
  letterSpacing: "1px"
};

const socialLinksStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "18px",
  padding: 0,
  marginTop: "1.2rem",
  listStyle: "none",
  color: "#fff",
};

const iconStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "44px",
  height: "44px",
  background: "rgba(0, 187, 255, 0.58)", // light blue highlight
  borderRadius: "50%",
  color: "#0A1F44", // navy blue icons
  fontSize: "1.7em",
  border: "1.5px solidrgb(2, 129, 175)", // light blue border
  boxShadow: "0 2px 8px 0 rgba(0,185,255,0.11)",
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
    background: hovered ? "#993DFF" : "rgba(0,185,255,0.15)",
    color: hovered ? "#fff" : "#0A1F44",
    borderColor: hovered ? "#993DFF" : "#00b9ff",
    boxShadow: hovered
      ? "0 4px 18px 0 rgba(153,61,255,0.13)"
      : "0 2px 8px 0 rgba(0,185,255,0.11)",
    transition: "all 0.25s ease",
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

const globalAnimStyles = `
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(64px);
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
    // Add animation styles once
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
                About <span style={highlightStyle}>MindCLOUD</span>
              </h1>
              <p style={bodyTextStyle}>
                <span style={highlightStyle}>MindCloud</span> is a forward-thinking
                technology company dedicated to empowering businesses through
                innovative digital solutions.<br /><br />
                Our team specializes in {" "}
                <span style={subHeadingStyle}>custom web development</span>,{" "}
                <span style={subHeadingStyle}>enterprise automation</span>, and {" "}
                <span style={subHeadingStyle}>quality assurance</span>. We deliver robust,
                scalable, and secure platforms tailored to the unique needs of each client.<br /><br />
                <span style={subHeadingStyle}>Our expertise:</span> Full-stack web
                development, UI/UX design, API & system integration, e-commerce
                platforms, business automation tools, and comprehensive software
                testing—including both manual and automated QA.<br /><br />
                <span style={subHeadingStyle}>Our mission:</span> To help businesses grow
                and thrive by providing reliable, high-performance digital
                products and seamless user experiences. We believe in the power
                of technology to transform organizations, inspired by the
                limitless potential of the cloud!<br /><br />
                We leverage leading technologies such as{" "}
                <span style={subHeadingStyle}>React.js</span>,{" "}
                <span style={subHeadingStyle}>Node.js</span>,{" "}
                <span style={subHeadingStyle}>cloud infrastructure</span>, and advanced
                testing frameworks like <span style={subHeadingStyle}>Selenium</span> to
                ensure every solution is future-ready.<br /><br />
                Whether you’re a startup, SME, or enterprise, MindCloud
                is your partner for digital innovation, automation, and growth.
              </p>
            </div>
          </Col>
          <Col md={4} style={avatarColStyle}>
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable glareMaxOpacity={0.13}>
              <img
                src={myImg}
                style={avatarImgStyle}
                className="img-fluid"
                alt="MindCloud mascot"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} style={socialSectionStyle}>
            <h1 style={socialHeadingStyle}>CONNECT WITH US</h1>
            <p>
              <span style={{ color: "#0A1F44", fontWeight: 600 }}>
                mindcloudco@gmail.com <br /> Follow{" "}
              </span>
              <span style={{ color: "#993DFF", fontWeight: 800 }}>
                MindCloud
              </span>
              <span style={{ color: "#0A1F44", fontWeight: 600 }}>
                {" "}on social media
              </span>
            </p>
            <ul style={socialLinksStyle}>
              <li>
                <SocialIcon href="https://github.com/MindCloud">
                  <AiFillGithub />
                </SocialIcon>
              </li>
              <li>
                <SocialIcon href="https://twitter.com/MindCloud">
                  <AiOutlineTwitter />
                </SocialIcon>
              </li>
              <li>
                <SocialIcon href="https://www.linkedin.com/company/mindcloud">
                  <FaLinkedinIn />
                </SocialIcon>
              </li>
              <li>
                <SocialIcon href="https://www.instagram.com/mindcloud">
                  <AiFillInstagram />
                </SocialIcon>
              </li>
            </ul>
            <div style={{ marginTop: "2.2rem" }}>
              <Button
                href="mailto:mindcloudco@gmail.com"
                style={{
                  backgroundColor: "#0A1F44",
                  color: "#fff",
                  border: "none",
                  fontWeight: 800,
                  padding: "0.85rem 2.7rem",
                  borderRadius: "34px",
                  fontSize: "1.2rem",
                  boxShadow: "0 2px 16px 0 rgba(153,61,255,0.16)",
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
