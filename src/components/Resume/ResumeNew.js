import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
  Image,
} from "react-bootstrap";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaHeadset,
  FaUser,
  FaRegEnvelope,
  FaCommentDots,
  FaRocket,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import Particle from "../Particle";
import contactImage from "../../Assets/mind.png";

function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState("");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/mqazapqn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Our Location",
      details: ["No. 12, Web Avenue", "Colombo, Sri Lanka"],
      color: "#0A1F44"
    },
    {
      icon: <FaPhoneAlt />,
      title: "Contact Numbers",
      details: ["+94 71 762 1250", "+94 71 492 2722", "+94 70 418 2117"],
      color: "#00b9ff"
    },
    {
      icon: <FaEnvelope />,
      title: "Email Address",
      details: ["mindcloudtech@gmail.com"],
      color: "#993DFF"
    },
  ];
  {contactInfo.map((info, index) => (
    <div key={index} className="mb-6 flex items-start space-x-4">
      <div style={{ color: info.color, fontSize: "1.5rem" }}>
        {info.icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold">{info.title}</h3>
        <div className="mt-1">
          {info.details.map((detail, idx) => (
            <p 
              key={idx} 
              style={{ 
                fontWeight: "bold",       // makes details highlighted
                color: info.color,        // highlight with same icon color
                fontSize: "1.05rem"       // slightly larger
              }}
            >
              {detail}
            </p>
          ))}
        </div>
      </div>
    </div>
  ))}
  

  const features = [
    { icon: <FaRocket />, text: "Quick Response", color: "#0A1F44" },
    { icon: <FaClock />, text: "24/7 Support", color: "#00b9ff" },
    { icon: <FaCheckCircle />, text: "Expert Team", color: "#993DFF" },
  ];

  return (
    <Container
      fluid
      style={{
        background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
        minHeight: "100vh",
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Particle />
      
      {/* Background Elements */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "300px",
          height: "300px",
          background: "linear-gradient(45deg, rgba(153, 61, 255, 0.08), rgba(0, 185, 255, 0.08))",
          borderRadius: "50%",
          filter: "blur(100px)",
          animation: "float 8s ease-in-out infinite",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: "250px",
          height: "250px",
          background: "linear-gradient(45deg, rgba(10, 31, 68, 0.08), rgba(153, 61, 255, 0.08))",
          borderRadius: "50%",
          filter: "blur(80px)",
          animation: "float 10s ease-in-out infinite reverse",
          zIndex: 1,
        }}
      />

      <Container style={{ position: "relative", zIndex: 2 }}>
        {/* Header Section */}
        <Row className="mb-5">
          <Col lg={12} className="text-center">
            <div
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(50px)",
                transition: "all 1s cubic-bezier(0.23, 1, 0.32, 1)",
              }}
            >
              <h1
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontWeight: 900,
                  color: "#0A1F44",
                  marginBottom: "1rem",
                  letterSpacing: "-0.02em",
                }}
              >
                Get In{" "}
                <span
                  style={{
                    background: "rgb(7, 56, 140)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Touch
                </span>
              </h1>
              <p
                style={{
                  fontSize: "1.2rem",
                  color: "#64748b",
                  maxWidth: "600px",
                  margin: "0 auto",
                  lineHeight: 1.6,
                }}
              >
                Ready to transform your business? Let's discuss your project and bring your vision to life
              </p>
            </div>
          </Col>
        </Row>

        {/* Features Pills */}
        <Row className="mb-5">
          <Col lg={12}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "1rem",
                flexWrap: "wrap",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: "all 1s cubic-bezier(0.23, 1, 0.32, 1) 0.2s",
              }}
            >
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    background: "rgba(255, 255, 255, 0.8)",
                    backdropFilter: "blur(20px)",
                    border: `2px solid ${feature.color}20`,
                    borderRadius: "50px",
                    padding: "12px 20px",
                    color: feature.color,
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    boxShadow: `0 4px 20px ${feature.color}15`,
                    transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = `${feature.color}10`;
                    e.target.style.transform = "translateY(-3px) scale(1.05)";
                    e.target.style.boxShadow = `0 8px 30px ${feature.color}25`;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "rgba(255, 255, 255, 0.8)";
                    e.target.style.transform = "translateY(0) scale(1)";
                    e.target.style.boxShadow = `0 4px 20px ${feature.color}15`;
                  }}
                >
                  <span style={{ marginRight: "8px", fontSize: "1.1em" }}>
                    {feature.icon}
                  </span>
                  {feature.text}
                </div>
              ))}
            </div>
          </Col>
        </Row>

        <Row className="align-items-center">
          {/* Left Side: Contact Info */}
          <Col lg={5} className="mb-5 mb-lg-0">
            <div
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-50px)",
                transition: "all 1s cubic-bezier(0.23, 1, 0.32, 1) 0.4s",
              }}
            >
              {/* Company Image */}
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(20px)",
                  borderRadius: "25px",
                  padding: "2rem",
                  marginBottom: "2rem",
                  textAlign: "center",
                  boxShadow: "0 15px 40px rgba(0, 0, 0, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                }}
              >
   <Image
  src={contactImage}
  alt="MindCloud"
  style={{
    maxHeight: "200px",
    width: "auto",
    objectFit: "contain",
    borderRadius: "15px" // 👈 makes the corners round
  }}
/>


                <h3
                  style={{
                    color: "#0A1F44",
                    fontWeight: 700,
                    marginTop: "1rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  MindCloud Technologies
                </h3>
                <p style={{ color: "#64748b", margin: 0 }}>
                  Your Partner in Digital Innovation
                </p>
              </div>

              {/* Contact Info Cards */}
              {contactInfo.map((info, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "rgba(255, 255, 255, 0.8)",
                    backdropFilter: "blur(20px)",
                    borderRadius: "20px",
                    padding: "1.5rem",
                    marginBottom: "1rem",
                    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.08)",
                    border: `2px solid ${info.color}15`,
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateX(10px)";
                    e.target.style.boxShadow = `0 12px 35px ${info.color}20`;
                    e.target.style.borderColor = info.color;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateX(0)";
                    e.target.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.08)";
                    e.target.style.borderColor = `${info.color}15`;
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "12px",
                        background: `linear-gradient(135deg, ${info.color}, ${info.color}cc)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "1.2rem",
                        flexShrink: 0,
                      }}
                    >
                      {info.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h5
                        style={{
                          color: "#0A1F44",
                          fontWeight: 600,
                          marginBottom: "0.5rem",
                          fontSize: "1.1rem",
                        }}
                      >
                        {info.title}
                      </h5>
                      {info.details.map((detail, detailIdx) => (
                        <p
                          key={detailIdx}
                          style={{
                            color: "#64748b",
                            margin: "0.2rem 0",
                            fontSize: "0.95rem",
                          }}
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>

          {/* Right Side: Contact Form */}
          <Col lg={7}>
            <div
              style={{
                background: "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(20px)",
                borderRadius: "30px",
                padding: "3rem",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(50px)",
                transition: "all 1s cubic-bezier(0.23, 1, 0.32, 1) 0.6s",
              }}
            >
              <div className="mb-4">
                <h2
                  style={{
                    color: "#0A1F44",
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    marginBottom: "1rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Let's Start Something Amazing
                </h2>
                <p
                  style={{
                    color: "#64748b",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                    marginBottom: "2rem",
                  }}
                >
                  Have a project in mind? Fill out the form below and our expert team 
                  will get back to you within 24 hours with a tailored solution.
                </p>
              </div>

              {submitted && (
                <Alert
                  variant="success"
                  style={{
                    background: "linear-gradient(135deg, rgba(0, 185, 255, 0.1), rgba(153, 61, 255, 0.1))",
                    border: "2px solid #00b9ff",
                    borderRadius: "15px",
                    color: "#0A1F44",
                    padding: "1rem 1.5rem",
                    marginBottom: "2rem",
                  }}
                  className="d-flex align-items-center"
                >
                  <FiSend className="me-3" size={24} style={{ color: "#00b9ff" }} />
                  <div>
                    <strong style={{ fontSize: "1.1rem" }}>Message sent successfully! 🚀</strong>
                    <br />
                    <span style={{ fontSize: "0.95rem", color: "#64748b" }}>
                      We'll get back to you within 24 hours with personalized solutions.
                    </span>
                  </div>
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName" className="mb-4">
                  <Form.Label
                    style={{
                      fontWeight: 600,
                      color: "#0A1F44",
                      marginBottom: "0.5rem",
                      fontSize: "1rem",
                    }}
                  >
                    <FaUser style={{ marginRight: "8px", color: "#00b9ff" }} />
                    Full Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField("")}
                    required
                    style={{
                      borderRadius: "15px",
                      padding: "15px 20px",
                      backgroundColor: "rgba(255, 255, 255, 0.8)",
                      border: `2px solid ${focusedField === "name" ? "#00b9ff" : "rgba(0, 0, 0, 0.1)"}`,
                      color: "#0A1F44",
                      fontSize: "1rem",
                      transition: "all 0.3s ease",
                      boxShadow: focusedField === "name" ? "0 4px 20px rgba(0, 185, 255, 0.2)" : "none",
                    }}
                  />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-4">
                  <Form.Label
                    style={{
                      fontWeight: 600,
                      color: "#0A1F44",
                      marginBottom: "0.5rem",
                      fontSize: "1rem",
                    }}
                  >
                    <FaRegEnvelope style={{ marginRight: "8px", color: "#993DFF" }} />
                    Email Address
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email address"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField("")}
                    required
                    style={{
                      borderRadius: "15px",
                      padding: "15px 20px",
                      backgroundColor: "rgba(255, 255, 255, 0.8)",
                      border: `2px solid ${focusedField === "email" ? "#993DFF" : "rgba(0, 0, 0, 0.1)"}`,
                      color: "#0A1F44",
                      fontSize: "1rem",
                      transition: "all 0.3s ease",
                      boxShadow: focusedField === "email" ? "0 4px 20px rgba(153, 61, 255, 0.2)" : "none",
                    }}
                  />
                </Form.Group>

                <Form.Group controlId="formMessage" className="mb-4">
                  <Form.Label
                    style={{
                      fontWeight: 600,
                      color: "#0A1F44",
                      marginBottom: "0.5rem",
                      fontSize: "1rem",
                    }}
                  >
                    <FaCommentDots style={{ marginRight: "8px", color: "#0A1F44" }} />
                    Your Message
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Tell us about your project, requirements, or any questions you have..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField("")}
                    required
                    style={{
                      borderRadius: "15px",
                      padding: "15px 20px",
                      backgroundColor: "rgba(255, 255, 255, 0.8)",
                      border: `2px solid ${focusedField === "message" ? "#0A1F44" : "rgba(0, 0, 0, 0.1)"}`,
                      color: "#0A1F44",
                      fontSize: "1rem",
                      transition: "all 0.3s ease",
                      boxShadow: focusedField === "message" ? "0 4px 20px rgba(10, 31, 68, 0.2)" : "none",
                      resize: "vertical",
                    }}
                  />
                </Form.Group>

                <Button
                  type="submit"
                  style={{
                    background: "linear-gradient(135deg, #0A1F44, #1a3b6b)",
                    color: "white",
                    border: "none",
                    fontWeight: 700,
                    padding: "1rem 2rem",
                    borderRadius: "50px",
                    fontSize: "1.1rem",
                    width: "100%",
                    boxShadow: "0 8px 30px rgba(10, 31, 68, 0.3)",
                    transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
                    letterSpacing: "0.5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-3px) scale(1.02)";
                    e.target.style.boxShadow = "0 15px 40px rgba(10, 31, 68, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0) scale(1)";
                    e.target.style.boxShadow = "0 8px 30px rgba(10, 31, 68, 0.3)";
                  }}
                >
                  <FaPaperPlane />
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Animation Styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(3deg); }
        }
      `}</style>
    </Container>
  );
}

export default ContactUs;
