import React, { useState } from "react";
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
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import Particle from "../Particle";
import contactImage from "../../Assets/mango.png";

const sectionStyle = {
  background: "#fff", // White background
  minHeight: "100vh",
  padding: "80px 0",
  color: "#222",
  overflow: "hidden",
  position: "relative",
};

const cardStyle = {
  background: "#f9f9f9", // Light gray card on white
  borderRadius: "16px",
  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
  padding: "3rem 2.5rem",
  height: "100%",
  border: "1px solid rgba(0,0,0,0.05)",
};

const headingStyle = {
  color: "#006400", // Dark green
  fontWeight: 700,
  fontSize: "2.8rem",
  letterSpacing: "0.5px",
  marginBottom: "0.5rem",
  textAlign: "left",
  position: "relative",
  display: "inline-block",
};

const headingUnderline = {
  content: '""',
  position: "absolute",
  bottom: "-8px",
  left: "0",
  width: "60px",
  height: "4px",
  background: "linear-gradient(90deg, #FFC324, #3CB371)",
  borderRadius: "2px",
};

const subheadingStyle = {
  color: "#555",
  fontWeight: 400,
  fontSize: "1.1rem",
  marginBottom: "2.5rem",
  textAlign: "left",
  lineHeight: "1.6",
};

const contactInfoBox = {
  backgroundColor: "#fdfdfd",
  borderRadius: "16px",
  padding: "25px",
  marginBottom: "30px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
  border: "1px solid rgba(0,0,0,0.05)",
};

const infoItem = {
  display: "flex",
  alignItems: "flex-start",
  gap: "18px",
  marginBottom: "1.5rem",
  color: "#333",
};

const iconStyle = {
  fontSize: "1.4rem",
  color: "#006400", // Dark green icons
  marginTop: "3px",
};

const infoText = {
  fontSize: "1rem",
  lineHeight: "1.5",
};

const formLabelStyle = {
  fontWeight: 500,
  color: "#222",
  marginBottom: "0.5rem",
};

const formControlStyle = {
  borderRadius: "10px",
  padding: "14px",
  backgroundColor: "#fff",
  border: "1px solid rgba(0,0,0,0.1)",
  color: "#222",
  transition: "all 0.3s ease",
};

function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/mqazapqn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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

  return (
    <Container fluid style={sectionStyle}>
      {/* <Particle /> */}
      <Container>
        <Row className="align-items-center">
          {/* Left Side: Image and Contact Info */}
          <Col lg={5} className="mb-5 mb-lg-0 pe-lg-5">
            <div className="mb-5">
              <Image
                src={contactImage}
                alt="Contact Us"
                fluid
                style={{
                  maxHeight: "400px",
                  objectFit: "contain",
                }}
              />
            </div>
            <div style={contactInfoBox}>
              <h4 style={{ color: "#006400", marginBottom: "1.5rem", fontWeight: 600 }}>
                <FaHeadset className="me-2" />
                Our Contact Details
              </h4>

              <div style={infoItem}>
                <FaMapMarkerAlt style={iconStyle} />
                <div>
                  <h6 style={{ color: "#006400", fontWeight: 500, marginBottom: "0.25rem" }}>
                    Our Location
                  </h6>
                  <p style={infoText}>No. 12, Web Avenue, Colombo, Sri Lanka</p>
                </div>
              </div>

              <div style={infoItem}>
                <FaPhoneAlt style={iconStyle} />
                <div>
                  <h6 style={{ color: "#006400", fontWeight: 500, marginBottom: "0.25rem" }}>
                    Phone Number
                  </h6>
                  <p style={infoText}>+94 77 123 4567</p>
                </div>
              </div>

              <div style={infoItem}>
                <FaEnvelope style={iconStyle} />
                <div>
                  <h6 style={{ color: "#006400", fontWeight: 500, marginBottom: "0.25rem" }}>
                    Email Address
                  </h6>
                  <p style={infoText}>contact@mangohubsystems.com</p>
                </div>
              </div>
            </div>
          </Col>

          {/* Right Side: Contact Form */}
          <Col lg={7}>
            <div style={cardStyle}>
              <div className="mb-4">
                <h1 style={headingStyle}>
                  Let's Talk
                  <span style={headingUnderline}></span>
                </h1>
                <p style={subheadingStyle}>
                  Have a project in mind or want to discuss potential collaboration?  
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>

              {submitted && (
                <Alert
                  variant="success"
                  style={{
                    borderRadius: "10px",
                    background: "rgba(0,100,0,0.08)",
                    border: "1px solid rgba(0,100,0,0.3)",
                    color: "#006400",
                  }}
                  className="d-flex align-items-center"
                >
                  <FiSend className="me-2" size={20} />
                  <span>
                    <strong>Message sent successfully!</strong> We'll get back to you within 24 hours.
                  </span>
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName" className="mb-4">
                  <Form.Label style={formLabelStyle}>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    style={formControlStyle}
                  />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-4">
                  <Form.Label style={formLabelStyle}>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email address"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    style={formControlStyle}
                  />
                </Form.Group>

                <Form.Group controlId="formMessage" className="mb-4">
                  <Form.Label style={formLabelStyle}>Your Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Tell us about your project or inquiry..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    style={formControlStyle}
                  />
                </Form.Group>

                <Button
                  type="submit"
                  className="d-flex align-items-center justify-content-center gap-2"
                  style={{
                    background: "linear-gradient(90deg, #FFC324 0%, #006400 100%)",
                    color: "#fff",
                    border: "none",
                    fontWeight: 600,
                    padding: "0.85rem 2rem",
                    borderRadius: "12px",
                    fontSize: "1.05rem",
                    width: "100%",
                    transition: "all 0.3s ease",
                    marginTop: "0.5rem",
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
    </Container>
  );
}

export default ContactUs;
