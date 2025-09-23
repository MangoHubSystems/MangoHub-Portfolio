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

  // Close menu on route change
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

  return (
    <>
      <Navbar
        expanded={expanded}
        fixed="top"
        expand="md"
        data-bs-theme="light"
        style={{
          background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.85)",
          transition: "background 0.25s ease, box-shadow 0.25s ease",
          boxShadow: scrolled ? "0 4px 20px rgba(10,31,68,0.08)" : "none",
          zIndex: 9999,
          paddingTop: 6,
          paddingBottom: 6,
          minHeight: 56,
          position: "relative",
        }}
      >
        <Container className="nav-inner">
          {/* Brand */}
          <Navbar.Brand
            as={Link}
            to="/"
            className="d-flex align-items-center order-1 brand-wrap text-truncate"
          >
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
                flex: "0 0 auto",
              }}
            />
            <span className="brand-name text-truncate"
              style={{
                color: "#0A1F44",
                fontWeight: 800,
                letterSpacing: "0.2px",
                fontSize: "1.15rem",
                lineHeight: 1,
                minWidth: 0,
              }}
            >
              MindCloud Technologies
            </span>
          </Navbar.Brand>

          {/* Custom stylish hamburger (RIGHT on mobile) */}
          <button
            type="button"
            aria-controls="main-nav"
            aria-label="Toggle navigation"
            aria-expanded={expanded}
            onClick={() => setExpanded((p) => !p)}
            className={`hamburger ms-auto order-3 d-md-none ${expanded ? "is-active" : ""}`}
          >
            <span className="line line-top" />
            <span className="line line-mid" />
            <span className="line line-bot" />
          </button>

          {/* Collapsible menu */}
          <Navbar.Collapse id="main-nav" className="order-2">
            <Nav className="ms-auto" style={{ alignItems: "center", gap: "0.25rem" }}>
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

      {/* Styles */}
      <style>{`
        :root {
          --hamburger-color: #993DFF;
        }

        /* Prevent wrapping in the navbar row and reserve space for the hamburger */
        .nav-inner {
          display: flex !important;
          align-items: center !important;
          flex-wrap: nowrap !important;
        }
        /* On mobile, cap brand width so the hamburger always fits on the same line */
        @media (max-width: 767.98px) {
          .brand-wrap {
            max-width: calc(100% - 56px); /* 44px btn + margins */
            min-width: 0;
          }
          .brand-name {
            display: inline-block;
            max-width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .hamburger { margin-left: auto !important; } /* push to right */
        }

        /* Fancy hamburger */
        .hamburger {
          width: 44px;
          height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 0;
          border-radius: 12px;
          background: transparent;
          cursor: pointer;
          transition: box-shadow 0.2s ease, background 0.2s ease, transform 0.2s ease;
          position: relative;
          z-index: 10001;
          flex: 0 0 auto;
        }
        .hamburger:hover {
          background: rgba(153, 61, 255, 0.08);
          box-shadow: 0 6px 18px rgba(153, 61, 255, 0.18);
          transform: translateY(-1px);
        }
        .hamburger:active {
          transform: translateY(0);
          box-shadow: 0 3px 12px rgba(153, 61, 255, 0.16);
        }
        .hamburger:focus-visible {
          outline: 2px solid rgba(153, 61, 255, 0.4);
          outline-offset: 2px;
        }
        .hamburger .line {
          display: block;
          width: 24px;
          height: 2.5px;
          background: var(--hamburger-color);
          border-radius: 100px;
          position: absolute;
          transition: transform 260ms cubic-bezier(0.4, 0, 0.2, 1),
                      opacity 220ms ease,
                      width 220ms ease,
                      background 220ms ease;
        }
        .hamburger .line-top { transform: translateY(-7px); }
        .hamburger .line-mid { transform: translateY(0); }
        .hamburger .line-bot { transform: translateY(7px); }

        .hamburger.is-active .line-top { transform: rotate(45deg); }
        .hamburger.is-active .line-mid { opacity: 0; width: 0%; }
        .hamburger.is-active .line-bot { transform: rotate(-45deg); }

        @media (prefers-reduced-motion: reduce) {
          .hamburger, .hamburger .line { transition: none !important; }
        }

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

        /* Mobile collapse panel styling */
        @media (max-width: 767.98px) {
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
          .navbar .container, .navbar .container-fluid { min-height: 56px; }
        }
      `}</style>
    </>
  );
}

export default NavBar;
