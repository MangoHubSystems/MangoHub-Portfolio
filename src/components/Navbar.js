import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import { useLocation, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/mindcloud1.jpeg";
import Button from "react-bootstrap/Button";
import { CgGitFork, CgFileDocument } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const location = useLocation();

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
      <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home" style={{ color: "#0A1F44" }}>
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)} className="text-reset">
                <span
                  style={
                    location.pathname === "/"
                      ? { color: "#000", fontWeight: "bold" }
                      : { color: "#000" }
                  }
                >
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                </span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)} className="text-reset">
                <span
                  style={
                    location.pathname === "/about"
                      ? { color: "#000", fontWeight: "bold" }
                      : { color: "#000" }
                  }
                >
                  <AiOutlineUser style={{ marginBottom: "2px" }} /> Services
                </span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/project" onClick={() => updateExpanded(false)} className="text-reset">
                <span
                  style={
                    location.pathname === "/project"
                      ? { color: "#000", fontWeight: "bold" }
                      : { color: "#000" }
                  }
                >
                  <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Projects
                </span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/resume" onClick={() => updateExpanded(false)} className="text-reset">
                <span
                  style={
                    location.pathname === "/resume"
                      ? { color: "#000", fontWeight: "bold" }
                      : { color: "#000" }
                  }
                >
                  <CgFileDocument style={{ marginBottom: "2px" }} /> Contact Us
                </span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/MangoHubSystems/MangoHub_Systems.git"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
