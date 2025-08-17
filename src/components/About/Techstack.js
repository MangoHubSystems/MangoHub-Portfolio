import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import { SiFirebase, SiNextdotjs, SiPostgresql } from "react-icons/si";

const techCategories = {
  Frontend: [
    { 
      icon: <DiReact />, 
      name: "React", 
      level: 95, 
      iconColor: "#61DAFB", 
      cardColor: "#0A1F44", 
      description: "Modern UI Development" 
    },
    { 
      icon: <SiNextdotjs />, 
      name: "Next.js", 
      level: 90, 
      iconColor: "#000000", 
      cardColor: "#0A1F44", 
      description: "Full-Stack Framework" 
    },
    { 
      icon: <DiJavascript1 />, 
      name: "JavaScript", 
      level: 98, 
      iconColor: "#F7DF1E", 
      cardColor: "#00b9ff", 
      description: "Core Programming" 
    },
  ],
  Backend: [
    { 
      icon: <DiNodejs />, 
      name: "Node.js", 
      level: 92, 
      iconColor: "#339933", 
      cardColor: "#993DFF", 
      description: "Server-Side Runtime" 
    },
    { 
      icon: <DiPython />, 
      name: "Python", 
      level: 88, 
      iconColor: "#3776AB", 
      cardColor: "#993DFF", 
      description: "Versatile Programming" 
    },
    { 
      icon: <DiJava />, 
      name: "Java", 
      level: 85, 
      iconColor: "#ED8B00", 
      cardColor: "#00b9ff", 
      description: "Enterprise Development" 
    },
  ],
  Database: [
    { 
      icon: <DiMongodb />, 
      name: "MongoDB", 
      level: 90, 
      iconColor: "#47A248", 
      cardColor: "#0A1F44", 
      description: "NoSQL Database" 
    },
    { 
      icon: <SiPostgresql />, 
      name: "PostgreSQL", 
      level: 87, 
      iconColor: "#336791", 
      cardColor: "#00b9ff", 
      description: "Relational Database" 
    },
    { 
      icon: <SiFirebase />, 
      name: "Firebase", 
      level: 83, 
      iconColor: "#FFCA28", 
      cardColor: "#993DFF", 
      description: "Cloud Database" 
    },
  ],
  Tools: [
    { 
      icon: <DiGit />, 
      name: "Git", 
      level: 95, 
      iconColor: "#F05032", 
      cardColor: "#0A1F44", 
      description: "Version Control" 
    },
    { 
      icon: <CgCPlusPlus />, 
      name: "C++", 
      level: 80, 
      iconColor: "#00599C", 
      cardColor: "#00b9ff", 
      description: "System Programming" 
    },
  ],
};

const categoryColors = {
  Frontend: "#0A1F44",
  Backend: "#993DFF", 
  Database: "#00b9ff",
  Tools: "#0A1F44",
};

function Techstack() {
  const [activeCategory, setActiveCategory] = useState("Frontend");
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <Container style={{ padding: "3rem 0" }}>
      {/* Category Navigation */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <div
          style={{
            display: "inline-flex",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "50px",
            padding: "6px",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
          }}
        >
          {Object.keys(techCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              style={{
                background: activeCategory === category 
                  ? `linear-gradient(135deg, ${categoryColors[category]}, ${categoryColors[category]}dd)`
                  : "transparent",
                color: activeCategory === category ? "white" : "#64748b",
                border: "none",
                padding: "12px 24px",
                borderRadius: "25px",
                fontSize: "1rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                margin: "0 2px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Technology Cards */}
      <Row className="justify-content-center" style={{ minHeight: "400px" }}>
        {techCategories[activeCategory].map((tech, idx) => (
          <Col
            key={`${activeCategory}-${tech.name}`}
            lg={4}
            md={6}
            className="mb-4"
            style={{
              animation: `slideIn 0.6s ease-out ${idx * 0.1}s both`,
            }}
          >
            <div
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                borderRadius: "24px",
                padding: "2.5rem 2rem",
                height: "300px",
                position: "relative",
                cursor: "pointer",
                transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                boxShadow: hoveredTech === tech.name 
                  ? `0 20px 60px ${tech.cardColor}30`
                  : "0 10px 40px rgba(0, 0, 0, 0.08)",
                transform: hoveredTech === tech.name ? "translateY(-12px)" : "translateY(0)",
                border: `2px solid ${hoveredTech === tech.name ? tech.cardColor : 'transparent'}`,
                overflow: "hidden",
              }}
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              {/* Animated background */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(135deg, ${tech.cardColor}05, ${tech.cardColor}15)`,
                  opacity: hoveredTech === tech.name ? 1 : 0,
                  transition: "opacity 0.4s ease",
                  zIndex: 0,
                }}
              />

              {/* Floating orbs */}
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: `radial-gradient(circle, ${tech.iconColor}30, transparent)`,
                  opacity: hoveredTech === tech.name ? 1 : 0.4,
                  transition: "all 0.4s ease",
                  zIndex: 0,
                }}
              />

              {/* Secondary floating orb */}
              <div
                style={{
                  position: "absolute",
                  bottom: "30px",
                  left: "30px",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: `radial-gradient(circle, ${tech.cardColor}20, transparent)`,
                  opacity: hoveredTech === tech.name ? 0.8 : 0.2,
                  transition: "all 0.4s ease",
                  zIndex: 0,
                }}
              />

              <div style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column" }}>
                {/* Icon with floating effect - NOW WITH AUTHENTIC COLORS */}
                <div
                  style={{
                    fontSize: "4.5rem",
                    color: tech.iconColor, // Real technology color
                    marginBottom: "1.5rem",
                    display: "flex",
                    justifyContent: "center",
                    transform: hoveredTech === tech.name ? "scale(1.1) rotateY(15deg)" : "scale(1)",
                    transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                    filter: hoveredTech === tech.name ? `drop-shadow(0 0 20px ${tech.iconColor}50)` : "none",
                  }}
                >
                  {tech.icon}
                </div>

                {/* Tech name */}
                <h3
                  style={{
                    color: "#1e293b",
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    textAlign: "center",
                    marginBottom: "0.5rem",
                    letterSpacing: "0.5px",
                  }}
                >
                  {tech.name}
                </h3>

                {/* Description */}
                <p
                  style={{
                    color: "#64748b",
                    fontSize: "0.95rem",
                    textAlign: "center",
                    marginBottom: "1.5rem",
                    fontWeight: 500,
                  }}
                >
                  {tech.description}
                </p>

                {/* Skill level indicator */}
                <div style={{ marginTop: "auto" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "8px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        color: tech.cardColor,
                      }}
                    >
                      Expertise
                    </span>
                    <span
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        color: tech.cardColor,
                      }}
                    >
                      {tech.level}%
                    </span>
                  </div>
                  
                  {/* Progress bar with authentic tech color accent */}
                  <div
                    style={{
                      background: "rgba(148, 163, 184, 0.2)",
                      borderRadius: "10px",
                      height: "8px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: `${tech.level}%`,
                        height: "100%",
                        background: `linear-gradient(90deg, ${tech.cardColor}, ${tech.iconColor})`,
                        borderRadius: "10px",
                        transition: "width 0.8s ease-out 0.2s",
                        boxShadow: `0 0 10px ${tech.iconColor}50`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      {/* Category Summary */}
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
        <h3
          style={{
            color: categoryColors[activeCategory],
            fontSize: "1.6rem",
            fontWeight: 700,
            marginBottom: "1rem",
          }}
        >
          {activeCategory} Technologies
        </h3>
        <p
          style={{
            color: "#64748b",
            fontSize: "1.1rem",
            lineHeight: 1.6,
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          {activeCategory === "Frontend" && "Creating stunning user interfaces with modern frameworks and libraries for exceptional user experiences."}
          {activeCategory === "Backend" && "Building robust server-side applications and APIs with scalable architectures and optimal performance."}
          {activeCategory === "Database" && "Managing data efficiently with both SQL and NoSQL databases for reliable information storage."}
          {activeCategory === "Tools" && "Utilizing industry-standard development tools and version control systems for efficient workflows."}
        </p>

        {/* Tech count indicator with icon preview */}
        <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
          <span
            style={{
              background: `linear-gradient(135deg, ${categoryColors[activeCategory]}, ${categoryColors[activeCategory]}cc)`,
              color: "white",
              padding: "8px 16px",
              borderRadius: "20px",
              fontSize: "0.9rem",
              fontWeight: 600,
            }}
          >
            {techCategories[activeCategory].length} Technologies Mastered
          </span>
          
          {/* Mini icon preview */}
          <div style={{ display: "flex", gap: "0.5rem" }}>
            {techCategories[activeCategory].map((tech, idx) => (
              <div
                key={idx}
                style={{
                  fontSize: "1.5rem",
                  color: tech.iconColor,
                  padding: "4px",
                  background: "rgba(255,255,255,0.8)",
                  borderRadius: "8px",
                  opacity: 0.8,
                }}
              >
                {tech.icon}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add keyframes for animations */}
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </Container>
  );
}

export default Techstack;
