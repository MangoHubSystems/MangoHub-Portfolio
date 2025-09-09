import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import { useLocation, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/mindcloud1.jpeg";
import Button from "react-bootstrap/Button";
import { CgGitFork, CgFileDocument } from "react-icons/cg";
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

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const handleToggle = () => {
    updateExpanded((prev) => (prev ? false : "expanded"));
  };

  const navLinkStyle = (match) => ({
    color: "#0A1F44",
    fontWeight: match ? "700" : "600",
    display: "flex",
    alignItems: "center",
    fontSize: "1rem",
    padding: "0.75rem 1.2rem",
    position: "relative",
    textDecoration: "none",
  });

  return (
    <>
      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColour ? "sticky" : "navbar"}
        style={{
          background: navColour ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.7)",
          transition: "background 0.3s",
          boxShadow: navColour ? "0 4px 24px rgba(10,31,68,0.07)" : "none",
          zIndex: 9999,
        }}
      >
        <Container>
          {/* LOGO */}
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img
              src={logo}
              alt="MindCloud Logo"
              className="img-fluid logo"
              style={{
                height: 58,
                width: "auto",
                borderRadius: "50%",
                marginRight: 13,
                boxShadow: "0 3px 10px rgba(0,0,0,.05)",
              }}
            />
            <span
              style={{
                color: "#0A1F44",
                fontWeight: 800,
                letterSpacing: "0.5px",
                fontSize: "1.4rem",
              }}
            >
              MindCloud
            </span>
          </Navbar.Brand>
          {/* MOBILE TOGGLER */}
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={handleToggle}
            style={{
              border: "none",
              boxShadow: "none",
              marginRight: "-0.1rem",
            }}
          />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            style={{
              background: "rgba(255, 255, 255, 0.98)",
              borderRadius: "12px",
              padding: window.innerWidth < 768 ? "1rem 0.8rem" : 0,
              marginTop: window.innerWidth < 768 ? "0.8rem" : 0,
            }}
          >
            <Nav className="ms-auto" style={{ alignItems: "center", gap: "0.5rem" }}>
              {[
                { path: "/", label: "Home", icon: <AiOutlineHome /> },
                { path: "/about", label: "Services", icon: <AiOutlineUser /> },
                { path: "/project", label: "Projects", icon: <AiOutlineFundProjectionScreen /> },
                { path: "/resume", label: "Contact Us", icon: <CgFileDocument /> },
              ].map(({ path, label, icon }) => {
                const active = location.pathname === path;
                return (
                  <Nav.Item key={path}>
                    <Nav.Link
                      as={Link}
                      to={path}
                      onClick={() => updateExpanded(false)}
                      style={navLinkStyle(active)}
                      className={`nav-link-custom${active ? " active" : ""}`}
                    >
                      <span style={{ marginRight: 6, display: "flex", alignItems: "center" }}>{icon}</span>
                      {label}
                      <span
                        className={`underline${active ? " active" : ""}`}
                        aria-hidden="true"
                      />
                    </Nav.Link>
                  </Nav.Item>
                );
              })}

              {/* CTA */}
              <Nav.Item className="mt-2 mt-md-0">
                <Button
                  href="https://github.com/MangoHubSystems/MangoHub_Systems.git"
                  target="_blank"
                  className="fork-btn-inner"
                  style={{
                    background: "linear-gradient(135deg, #993DFF, #00b9ff)",
                    color: "white",
                    border: "none",
                    borderRadius: "30px",
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 700,
                    fontSize: "1rem",
                    padding: "0.35rem 1rem",
                  }}
                >
                  <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                  <AiFillStar style={{ fontSize: "1.1em" }} />
                  <span className="d-none d-md-inline ms-2">Star</span>
                </Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Custom styling for underline */}
      <style>{`
        .nav-link-custom {
          position: relative;
          text-decoration: none !important;
          transition: color 0.3s ease;
        }
        .nav-link-custom:hover, 
        .nav-link-custom:focus {
          color: #993DFF !important;
        }
        .nav-link-custom .underline {
          position: absolute;
          left: 0;
          bottom: -6px;
          height: 2.5px;
          width: 0;
          background: #993DFF;
          border-radius: 2px;
          transition: width 0.3s ease;
          pointer-events: none;
        }
        .nav-link-custom:hover .underline,
        .nav-link-custom:focus .underline,
        .nav-link-custom.active .underline {
          width: 100%;
        }

        @media (max-width: 767px) {
          .navbar, .navbar-collapse {
            background: rgba(255,255,255,0.98) !important;
            box-shadow: 0 4px 24px rgba(10,31,68,0.07) !important;
            border-radius: 0 0 18px 18px;
            transition: background 0.3s;
          }
          .navbar-collapse {
            margin-top: 1rem !important;
            padding: 0.5rem 0 !important;
          }
          .navbar-nav .nav-link {
            width: 100%;
            text-align: center;
            padding: 0.7rem 1rem !important;
            font-size: 1.1rem;
            color: #0A1F44 !important;
          }
          .navbar-nav .nav-link:hover,
          .navbar-nav .nav-link:focus {
            background-color: #F5F7FF !important;
            color: #993DFF !important;
            border-radius: 30px !important;
          }
          .fork-btn-inner {
            width: 100%;
            justify-content: center;
            margin-top: 0.6rem;
          }
        }
      `}</style>
    </>
  );
}

export default NavBar;
