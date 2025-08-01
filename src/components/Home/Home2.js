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

// Inline style objects
const sectionStyle = {
  background: "linear-gradient(135deg, #181818 60%, #232323 100%)",
  padding: "80px 0 60px 0",
  minHeight: "100vh",
  position: "relative",
};

const aboutCardStyle = {
  background: "rgba(34, 34, 34, 0.7)",
  borderRadius: "18px",
  boxShadow: "0 4px 32px rgba(60, 179, 113, 0.10)",
  backdropFilter: "blur(8px)",
  padding: "3rem 2.5rem",
  color: "#EAEAEA",
  marginBottom: "2rem",
};

const headingStyle = {
  color: "#3CB371",
  fontWeight: 700,
  letterSpacing: "1px",
  marginBottom: "1.2rem",
  fontSize: "2.6em",
};

const greenStyle = {
  color: "#3CB371",
  fontWeight: 700,
};

const bodyTextStyle = {
  color: "#EAEAEA",
  fontSize: "1.15rem",
  lineHeight: 1.7,
};

const avatarColStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "2rem",
  paddingBottom: "2rem",
  position: "relative", // <-- added
  zIndex: 0, // <-- ensure it's below the social icons
};

const avatarImgStyle = {
  maxWidth: "260px",
  borderRadius: "18px",
  boxShadow: "0 8px 32px 0 rgba(60, 179, 113, 0.10)",
  background: "#232323",
};

const socialSectionStyle = {
  textAlign: "center",
  color: "#EAEAEA",
  marginTop: "2rem",
  position: "relative", // <-- added
  zIndex: 10, // <-- added to raise above other components
};

const socialHeadingStyle = {
  color: "#FFC324",
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
  color: "white",
};

const iconStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "44px",
  height: "44px",
  background: "rgba(255, 255, 255, 0.07)",
  borderRadius: "50%",
  color: "white",
  fontSize: "1.7em",
  border: "1.5px solid rgba(60, 179, 113, 0.25)",
  boxShadow: "0 2px 8px 0 rgba(60, 179, 113, 0.09)",
  transition: "background 0.2s, color 0.2s, box-shadow 0.2s",
  textDecoration: "none",
  cursor: "pointer",
  pointerEvents: "auto",
  zIndex: 1, // <-- new
  position: "relative", // <-- ensures zIndex works
};

function SocialIcon({ href, children }) {
  const [hovered, setHovered] = React.useState(false);

  const baseStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "44px",
    height: "44px",
    background: hovered ? "#3CB371" : "rgba(255, 255, 255, 0.07)",
    borderRadius: "50%",
    color: hovered ? "#181818" : "white",
    fontSize: "1.7em",
    border: "1.5px solid rgba(60, 179, 113, 0.25)",
    boxShadow: "0 2px 8px 0 rgba(60, 179, 113, 0.09)",
    transition: "all 0.25s ease-in-out",
    textDecoration: "none",
    cursor: "pointer",
    pointerEvents: "auto",
    zIndex: 1,
    position: "relative",
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
    <Container
      fluid
      className="home-about-section"
      id="about"
      style={sectionStyle}
    >
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
                  background:
                    "linear-gradient(90deg, #FFC324 60%, #3CB371 100%)",
                  color: "#181818",
                  border: "none",
                  fontWeight: 700,
                  padding: "0.7rem 2.2rem",
                  borderRadius: "30px",
                  fontSize: "1.1rem",
                  boxShadow: "0 2px 12px 0 #FFC32455",
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
