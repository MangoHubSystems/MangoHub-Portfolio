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
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change (prevents “stuck” menu per-page)
  useEffect(() => {
    setExpanded(false);
  }, [location.pathname]);

  const navLinkStyle = (active) => ({
    color: "#0A1F44",
    fontWeight: active ? 700 : 600,
    display: "flex",
    alignItems: "center",
    fontSize: "0.98rem",
    padding: "0.5rem 0.9rem",
    position: "relative",
    textDecoration: "none",
    lineHeight: 1.1,
  });

  // Fixed purple for hamburger (as requested)
  const togglerColor = "#993DFF";

  return (
    <>
      <Navbar
        expanded={expanded}
        fixed="top"
        expand="md" // shows hamburger below md
        data-bs-theme="light"
        style={{
          // Custom hamburger icon (purple)
          ["--bs-navbar-toggler-icon-bg"]: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='${encodeURIComponent(
            togglerColor
          )}' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`,
          background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.85)",
          transition: "background 0.25s ease, box-shadow 0.25s ease",
          boxShadow: scrolled ? "0 4px 20px rgba(10,31,68,0.08)" : "none",
          zIndex: 9999,
          paddingTop: 6,
          paddingBottom: 6,
          minHeight: 56,
        }}
      >
        <Container>
          {/* Brand */}
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center order-1">
            <img
              src={logo}
              alt="MindCloud Logo"
              className="img-fluid"
              style={{
                height: 30,
                width: "auto",
                borderRadius: "20%",
                marginRight: 10,
                boxShadow: "0 3px 10px rgba(0,0,0,.05)",
              }}
            />
            <span
              style={{
                color: "#0A1F44",
                fontWeight: 800,
                letterSpacing: "0.2px",
                fontSize: "1.15rem",
                lineHeight: 1,
              }}
            >
              MindCloud Technologies
            </span>
          </Navbar.Brand>

          {/* Hamburger: RIGHT on mobile */}
          <Navbar.Toggle
            aria-controls="main-nav"
            aria-label="Toggle navigation"
            onClick={() => setExpanded((prev) => !prev)}
            // Right align on mobile; keep visible across pages; stay above collapse
            className="ms-auto order-3 d-md-none"
            style={{
              border: 0,
              boxShadow: "none",
              padding: "0.25rem 0.55rem",
              marginLeft: "auto",
              position: "relative",
              zIndex: 10001,
            }}
          />

          {/* Collapsible menu */}
          <Navbar.Collapse id="main-nav" className="order-2">
            <Nav className="ms-auto" style={{ alignItems: "center", gap: "0.25rem" }}>
              {[
                { path: "/", label: "Home", icon: <AiOutlineHome /> },
                { path: "/about", label: "Services", icon: <AiOutlineUser /> }, // Services page
                { path: "/project", label: "Projects", icon: <AiOutlineFundProjectionScreen /> },
                { path: "/resume", label: "Contact Us", icon: <CgFileDocument /> },
              ].map(({ path, label, icon }) => {
                const active = location.pathname === path;
                return (
                  <Nav.Item key={path}>
                    <Nav.Link
                      as={Link}
                      to={path}
                      onClick={() => setExpanded(false)}
                      style={navLinkStyle(active)}
                      className={`nav-link-custom${active ? " active" : ""}`}
                    >
                      <span style={{ marginRight: 6, display: "flex", alignItems: "center" }}>
                        {icon}
                      </span>
                      {label}
                      <span className={`underline${active ? " active" : ""}`} aria-hidden="true" />
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
                    borderRadius: "24px",
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    padding: "0.35rem 0.9rem",
                  }}
                >
                  <CgGitFork style={{ fontSize: "1.1em" }} />
                  <AiFillStar style={{ fontSize: "1.05em", marginLeft: 6 }} />
                  <span className="d-none d-md-inline ms-2">Star</span>
                </Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Scoped styles */}
      <style>{`
        .nav-link-custom {
          position: relative;
          text-decoration: none !important;
          transition: color 0.2s ease;
        }
        .nav-link-custom:hover, 
        .nav-link-custom:focus {
          color: #993DFF !important;
        }
        .nav-link-custom .underline {
          position: absolute;
          left: 0;
          bottom: -6px;
          height: 2px;
          width: 0;
          background: #993DFF;
          border-radius: 2px;
          transition: width 0.25s ease;
          pointer-events: none;
        }
        .nav-link-custom:hover .underline,
        .nav-link-custom:focus .underline,
        .nav-link-custom.active .underline {
          width: 100%;
        }

        /* Ensure hamburger sits on RIGHT on mobile regardless of page CSS */
        @media (max-width: 767.98px) {
          .navbar .navbar-toggler {
            margin-left: auto !important; /* push right */
          }
          .navbar,
          .navbar-collapse {
            background: rgba(255,255,255,0.98) !important;
            box-shadow: 0 4px 20px rgba(10,31,68,0.08) !important;
          }
          .navbar-collapse {
            margin-top: 0.5rem !important;
            border-radius: 12px;
            padding: 0.4rem 0.25rem !important;
          }
          .navbar-nav .nav-link {
            width: 100%;
            text-align: center;
            padding: 0.55rem 0.75rem !important;
            font-size: 1.02rem;
            color: #0A1F44 !important;
            border-radius: 28px !important;
          }
          .navbar-nav .nav-link:hover,
          .navbar-nav .nav-link:focus {
            background-color: #F5F7FF !important;
            color: #993DFF !important;
          }
          .fork-btn-inner {
            width: 100%;
            justify-content: center;
            margin-top: 0.5rem;
          }
        }

        /* Keep navbar slim on desktop too */
        @media (min-width: 768px) {
          .navbar .container, .navbar .container-fluid {
            min-height: 56px;
          }
        }
      `}</style>
    </>
  );
}

export default NavBar;
