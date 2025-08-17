import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiEclipseide,
  SiIntellijidea,
  SiWindows,
} from "react-icons/si";

const toolCategories = {
  "Development": [
    { 
      icon: <SiVisualstudiocode />, 
      name: "VS Code", 
      iconColor: "#007ACC", 
      cardColor: "#0A1F44", 
      description: "Code Editor",
      usage: "Primary IDE"
    },
    { 
      icon: <SiIntellijidea />, 
      name: "IntelliJ IDEA", 
      iconColor: "#000000", 
      cardColor: "#993DFF", 
      description: "Java IDE",
      usage: "Enterprise Development"
    },
    { 
      icon: <SiEclipseide />, 
      name: "Eclipse", 
      iconColor: "#2C2255", 
      cardColor: "#00b9ff", 
      description: "Development Platform",
      usage: "Java & Web Development"
    },
  ],
  "Testing & API": [
    { 
      icon: <SiPostman />, 
      name: "Postman", 
      iconColor: "#FF6C37", 
      cardColor: "#0A1F44", 
      description: "API Testing",
      usage: "REST API Development"
    },
    { 
      icon: <SiSlack />, 
      name: "Slack", 
      iconColor: "#4A154B", 
      cardColor: "#993DFF", 
      description: "Team Communication",
      usage: "Project Collaboration"
    },
    { 
      icon: <SiVercel />, 
      name: "Vercel", 
      iconColor: "#000000", 
      cardColor: "#00b9ff", 
      description: "Deployment Platform",
      usage: "Frontend Hosting"
    },
  ],
  "Operating Systems": [
    { 
      icon: <SiWindows />, 
      name: "Windows", 
      iconColor: "#0078D6", 
      cardColor: "#0A1F44", 
      description: "Desktop OS",
      usage: "Development Environment"
    },
    { 
      icon: <SiMacos />, 
      name: "macOS", 
      iconColor: "#000000", 
      cardColor: "#00b9ff", 
      description: "Apple OS",
      usage: "Design & Development"
    },
  ],
};

const categoryColors = {
  "Development": "#0A1F44",
  "Testing & API": "#993DFF",
  "Operating Systems": "#00b9ff",
};

function Toolstack() {
  const [activeCategory, setActiveCategory] = useState("Development");
  const [hoveredTool, setHoveredTool] = useState(null);

  return (
    <Container style={{ padding: "3rem 0" }}>
      {/* Header Section */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h2
          style={{
            color: "#0A1F44",
            fontSize: "2.2rem",
            fontWeight: 700,
            marginBottom: "1rem",
            letterSpacing: "0.5px",
          }}
        >
          Development <span style={{ color: "#993DFF" }}>Toolkit</span>
        </h2>
        <p
          style={{
            color: "#64748b",
            fontSize: "1.1rem",
            maxWidth: "500px",
            margin: "0 auto",
            lineHeight: 1.6,
          }}
        >
          Professional tools and platforms we use for efficient development workflows
        </p>
      </div>

      {/* Category Pills */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <div
          style={{
            display: "inline-flex",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "50px",
            padding: "8px",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
            gap: "4px",
          }}
        >
          {Object.keys(toolCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              style={{
                background: activeCategory === category 
                  ? `linear-gradient(135deg, ${categoryColors[category]}, ${categoryColors[category]}dd)`
                  : "transparent",
                color: activeCategory === category ? "white" : "#64748b",
                border: "none",
                padding: "10px 20px",
                borderRadius: "25px",
                fontSize: "0.9rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                whiteSpace: "nowrap",
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Tools Grid */}
      <Row className="justify-content-center" style={{ minHeight: "350px" }}>
        {toolCategories[activeCategory].map((tool, idx) => (
          <Col
            key={`${activeCategory}-${tool.name}`}
            lg={4}
            md={6}
            sm={12}
            className="mb-4"
            style={{
              animation: `toolSlideIn 0.6s ease-out ${idx * 0.15}s both`,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                borderRadius: "20px",
                padding: "2.5rem 2rem",
                width: "100%",
                maxWidth: "320px",
                height: "280px",
                position: "relative",
                cursor: "pointer",
                transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                boxShadow: hoveredTool === tool.name 
                  ? `0 20px 50px ${tool.cardColor}25`
                  : "0 8px 30px rgba(0, 0, 0, 0.08)",
                transform: hoveredTool === tool.name ? "translateY(-10px) scale(1.02)" : "translateY(0)",
                border: `2px solid ${hoveredTool === tool.name ? tool.cardColor : 'transparent'}`,
                overflow: "hidden",
              }}
              onMouseEnter={() => setHoveredTool(tool.name)}
              onMouseLeave={() => setHoveredTool(null)}
            >
              {/* Gradient Background Overlay */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(135deg, ${tool.cardColor}06, ${tool.cardColor}12)`,
                  opacity: hoveredTool === tool.name ? 1 : 0,
                  transition: "opacity 0.4s ease",
                  zIndex: 0,
                }}
              />

              {/* Floating Decoration */}
              <div
                style={{
                  position: "absolute",
                  top: "15px",
                  right: "15px",
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background: `radial-gradient(circle, ${tool.iconColor}15, transparent)`,
                  opacity: hoveredTool === tool.name ? 0.8 : 0.3,
                  transition: "all 0.4s ease",
                  zIndex: 0,
                }}
              />

              <div style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                {/* Icon Container */}
                <div
                  style={{
                    width: "90px",
                    height: "90px",
                    borderRadius: "22px",
                    background: hoveredTool === tool.name 
                      ? `linear-gradient(135deg, ${tool.iconColor}15, ${tool.iconColor}25)`
                      : "rgba(248, 250, 252, 0.8)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.5rem",
                    transition: "all 0.4s ease",
                    boxShadow: hoveredTool === tool.name 
                      ? `0 8px 25px ${tool.iconColor}30`
                      : "0 4px 15px rgba(0, 0, 0, 0.08)",
                    transform: hoveredTool === tool.name ? "rotate(-5deg) scale(1.1)" : "rotate(0deg)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "3rem",
                      color: tool.iconColor,
                      transition: "all 0.3s ease",
                    }}
                  >
                    {tool.icon}
                  </div>
                </div>

                {/* Tool Info */}
                <div style={{ textAlign: "center", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <h3
                      style={{
                        color: "#1e293b",
                        fontSize: "1.3rem",
                        fontWeight: 700,
                        marginBottom: "0.5rem",
                        letterSpacing: "0.3px",
                      }}
                    >
                      {tool.name}
                    </h3>

                    <p
                      style={{
                        color: "#64748b",
                        fontSize: "0.9rem",
                        marginBottom: "1rem",
                        fontWeight: 500,
                      }}
                    >
                      {tool.description}
                    </p>
                  </div>

                  {/* Usage Badge */}
                  <div
                    style={{
                      background: `linear-gradient(135deg, ${tool.cardColor}15, ${tool.cardColor}25)`,
                      color: tool.cardColor,
                      padding: "8px 16px",
                      borderRadius: "20px",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      border: `1px solid ${tool.cardColor}30`,
                      display: "inline-block",
                    }}
                  >
                    {tool.usage}
                  </div>
                </div>
              </div>

              {/* Bottom Accent Line */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: hoveredTool === tool.name ? "80%" : "0%",
                  height: "3px",
                  background: `linear-gradient(90deg, transparent, ${tool.cardColor}, transparent)`,
                  transition: "width 0.4s ease",
                  borderRadius: "2px 2px 0 0",
                }}
              />
            </div>
          </Col>
        ))}
      </Row>

      {/* Category Stats */}
      <div
        style={{
          marginTop: "3rem",
          padding: "2.5rem",
          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
          borderRadius: "20px",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "2rem", flexWrap: "wrap" }}>
          {/* Category Icon */}
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "20px",
              background: `linear-gradient(135deg, ${categoryColors[activeCategory]}, ${categoryColors[activeCategory]}cc)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "2rem",
            }}
          >
            {activeCategory === "Development" && "💻"}
            {activeCategory === "Testing & API" && "🚀"}
            {activeCategory === "Operating Systems" && "🖥️"}
          </div>

          <div style={{ textAlign: "left" }}>
            <h3
              style={{
                color: categoryColors[activeCategory],
                fontSize: "1.5rem",
                fontWeight: 700,
                marginBottom: "0.5rem",
              }}
            >
              {activeCategory}
            </h3>
            <p
              style={{
                color: "#64748b",
                fontSize: "1rem",
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              {activeCategory === "Development" && "Powerful IDEs and editors for efficient coding"}
              {activeCategory === "Testing & API" && "Essential tools for testing and collaboration"}
              {activeCategory === "Operating Systems" && "Cross-platform development environments"}
            </p>
          </div>

          {/* Tools Count */}
          <div
            style={{
              background: `linear-gradient(135deg, ${categoryColors[activeCategory]}, ${categoryColors[activeCategory]}cc)`,
              color: "white",
              padding: "1rem 1.5rem",
              borderRadius: "20px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "1.8rem", fontWeight: 800 }}>
              {toolCategories[activeCategory].length}
            </div>
            <div style={{ fontSize: "0.9rem", opacity: 0.9 }}>
              Tools
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes toolSlideIn {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </Container>
  );
}

export default Toolstack;
