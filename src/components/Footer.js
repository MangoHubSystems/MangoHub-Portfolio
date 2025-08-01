import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  const iconStyle = {
    fontSize: "1.5rem",
    color: "#f0f0f0",
    transition: "color 0.3s ease",
  };

  const hoverStyle = {
    color: "#FFA500",
  };

  return (
    <footer
      style={{
        backgroundColor: "#1a1a1a",
        color: "#f0f0f0",
        padding: "2rem 0",
      }}
    >
      <Container>
        <Row className="align-items-center text-center text-md-left">
          <Col md={4} className="mb-3 mb-md-0">
            <h5 style={{ marginBottom: "0.5rem", color: "#FFA500" }}>
              Mango Hub Systems
            </h5>
            <p style={{ fontSize: "0.9rem", marginBottom: 0 }}>
              Empowering Ideas with Technology
            </p>
          </Col>
          <Col md={4} className="mb-3 mb-md-0">
            <p style={{ fontSize: "0.9rem", marginBottom: 0 }}>
              © {year} Mango Hub Systems. All rights reserved.
            </p>
          </Col>
          <Col md={4}>
            <ul className="list-inline m-0 d-flex justify-content-center justify-content-md-end">
              <li className="list-inline-item mx-2">
                <a
                  href="https://github.com/mangohub"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={iconStyle}
                  onMouseEnter={(e) => (e.target.style.color = "#FFA500")}
                  onMouseLeave={(e) => (e.target.style.color = "#f0f0f0")}
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="list-inline-item mx-2">
                <a
                  href="https://twitter.com/mangohub"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={iconStyle}
                  onMouseEnter={(e) => (e.target.style.color = "#FFA500")}
                  onMouseLeave={(e) => (e.target.style.color = "#f0f0f0")}
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="list-inline-item mx-2">
                <a
                  href="https://linkedin.com/company/mangohub"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={iconStyle}
                  onMouseEnter={(e) => (e.target.style.color = "#FFA500")}
                  onMouseLeave={(e) => (e.target.style.color = "#f0f0f0")}
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="list-inline-item mx-2">
                <a
                  href="https://instagram.com/mangohub"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={iconStyle}
                  onMouseEnter={(e) => (e.target.style.color = "#FFA500")}
                  onMouseLeave={(e) => (e.target.style.color = "#f0f0f0")}
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
