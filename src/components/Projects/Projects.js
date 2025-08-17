import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import hotel from "../../Assets/Projects/hotel.png";
import sarith from "../../Assets/Projects/Sarith.png";
import task from "../../Assets/Projects/TaskMate.png";
import cookhub from "../../Assets/Projects/CookHub.png";
import bookStore from "../../Assets/Projects/BookStore.png";
import presentPath from "../../Assets/Projects/PresentPath.png";
import { FaCode, FaMobile, FaGlobe, FaRocket, FaEye, FaGithub } from "react-icons/fa";

function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projectsData = [
    {
      imgPath: hotel,
      title: "Hotel Management Platform",
      description: "A full-stack hotel management system built with MERN stack, Material-UI, offering features like room booking, service management, and a user-friendly admin dashboard.",
      ghLink: "https://github.com/Sarith-Samarakoon/hotel-management-frontend.git",
      demoLink: "https://goldenhorizonhotel.vercel.app/",
      category: "Web",
      tech: ["React", "Node.js", "MongoDB", "Material-UI"],
      color: "#0A1F44"
    },
    {
      imgPath: sarith,
      title: "Developer Portfolio",
      description: "A personal portfolio website built using HTML, CSS, and JavaScript to showcase skills, projects, and achievements. Designed for a seamless and professional user experience.",
      ghLink: "https://github.com/Sarith-Samarakoon/ImSarith.github.io",
      demoLink: "https://sarith-samarakoon.github.io/ImSarith.github.io/",
      category: "Web",
      tech: ["HTML", "CSS", "JavaScript"],
      color: "#00b9ff"
    },
    {
      imgPath: task,
      title: "TaskMate Mobile App",
      description: "A smart assistant app built with React Native and Expo, integrated with Python and AppWrite. Helps users track, organize, and prioritize tasks using voice and text input.",
      ghLink: "https://github.com/Sarith-Samarakoon/TaskMate",
      category: "Mobile",
      tech: ["React Native", "Expo", "Python", "AppWrite"],
      color: "#993DFF"
    },
    {
      imgPath: bookStore,
      title: "The BookTown",
      description: "A modern online bookstore built with React, APIs and Tailwind CSS, featuring dynamic book listings, search functionality, and a sleek, responsive UI.",
      ghLink: "https://github.com/RusiruWaduge/THE_BOOKTOWN-Online-BookStore",
      demoLink: "https://thebooktown-onlinebookstore.vercel.app/",
      category: "Web",
      tech: ["React", "Tailwind CSS", "APIs"],
      color: "#0A1F44"
    },
    {
      imgPath: presentPath,
      title: "PresentPath Mobile App",
      description: "A mobile app built with React Native and Expo, integrated with Python and AppWrite. Streamlines scheduling, evaluation, and feedback of academic presentations.",
      ghLink: "https://github.com/RusiruWaduge/Presentation-Scheduling-MobileApp",
      category: "Mobile",
      tech: ["React Native", "Expo", "Python", "AppWrite"],
      color: "#00b9ff"
    },
    {
      imgPath: cookhub,
      title: "CookHub Food App",
      description: "A full-stack web platform for food lovers and aspiring chefs to explore, learn, and connect through cooking. Features food posts, learning plans, and community interaction.",
      ghLink: "https://github.com/RusiruWaduge/Cook_Hub-FoodApp.git",
      category: "Web",
      tech: ["React", "Node.js", "MongoDB"],
      color: "#993DFF"
    }
  ];

  const categories = ["All", "Web", "Mobile"];
  const filteredProjects = activeCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  const stats = [
    { icon: <FaCode />, number: "6+", label: "Projects Built", color: "#0A1F44" },
    { icon: <FaRocket />, number: "3", label: "Live Deployments", color: "#00b9ff" },
    { icon: <FaMobile />, number: "2", label: "Mobile Apps", color: "#993DFF" },
    { icon: <FaGlobe />, number: "4", label: "Web Platforms", color: "#0A1F44" },
  ];

  return (
    <Container
      fluid
      className="project-section"
      style={{
        background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
        minHeight: "100vh",
        paddingTop: "100px",
        paddingBottom: "100px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Particle />
      
      {/* Background Elements */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          right: "5%",
          width: "250px",
          height: "250px",
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
          bottom: "20%",
          left: "5%",
          width: "300px",
          height: "300px",
          background: "linear-gradient(45deg, rgba(10, 31, 68, 0.08), rgba(153, 61, 255, 0.08))",
          borderRadius: "50%",
          filter: "blur(120px)",
          animation: "float 10s ease-in-out infinite reverse",
          zIndex: 1,
        }}
      />

      <Container style={{ position: "relative", zIndex: 2 }}>
        {/* Header Section */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "4rem",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(50px)",
            transition: "all 1s cubic-bezier(0.23, 1, 0.32, 1)",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 900,
              color: "purple",
              marginBottom: "1rem",
              letterSpacing: "-0.02em",
            }}
          >
            Our Recent{" "}
            <span
              style={{
                background: "rgb(7, 56, 140)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Works
            </span>
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#64748b",
              maxWidth: "600px",
              margin: "0 auto 3rem",
              lineHeight: 1.6,
            }}
          >
            Explore our portfolio of innovative projects that showcase our expertise 
            in modern web development and mobile applications
          </p>

          {/* Category Filter */}
          <div
            style={{
              display: "inline-flex",
              background: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(20px)",
              borderRadius: "50px",
              padding: "8px",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              gap: "4px",
            }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                style={{
                  background: activeCategory === category 
                    ? "linear-gradient(135deg, #0A1F44, #1a3b6b)"
                    : "transparent",
                  color: activeCategory === category ? "white" : "#64748b",
                  border: "none",
                  padding: "12px 24px",
                  borderRadius: "25px",
                  fontSize: "1rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                {category} {category !== "All" && `(${projectsData.filter(p => p.category === category).length})`}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <Row className="mb-5">
          <Col lg={12}>
            <div
              style={{
                background: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(20px)",
                borderRadius: "25px",
                padding: "2rem",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: "all 1s cubic-bezier(0.23, 1, 0.32, 1) 0.2s",
              }}
            >
              <Row>
                {stats.map((stat, idx) => (
                  <Col lg={3} md={6} key={idx} className="text-center mb-3">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "15px",
                          background: `linear-gradient(135deg, ${stat.color}, ${stat.color}cc)`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                          fontSize: "1.5rem",
                          marginBottom: "0.8rem",
                          boxShadow: `0 8px 25px ${stat.color}30`,
                        }}
                      >
                        {stat.icon}
                      </div>
                      <div
                        style={{
                          fontSize: "2rem",
                          fontWeight: 800,
                          color: stat.color,
                          marginBottom: "0.3rem",
                        }}
                      >
                        {stat.number}
                      </div>
                      <div
                        style={{
                          color: "#64748b",
                          fontSize: "0.95rem",
                          fontWeight: 600,
                        }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>

        {/* Projects Grid */}
        <Row style={{ justifyContent: "center" }}>
          {filteredProjects.map((project, idx) => (
            <Col
              lg={4}
              md={6}
              key={`${project.title}-${idx}`}
              className="project-card mb-4"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(50px)",
                transition: `all 1s cubic-bezier(0.23, 1, 0.32, 1) ${0.4 + idx * 0.1}s`,
              }}
            >
              <EnhancedProjectCard project={project} />
            </Col>
          ))}
        </Row>

        {/* CTA Section */}
        <div
          style={{
            textAlign: "center",
            marginTop: "4rem",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 1s cubic-bezier(0.23, 1, 0.32, 1) 0.8s",
          }}
        >
          <div
            style={{
              background: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(20px)",
              borderRadius: "25px",
              padding: "3rem 2rem",
              boxShadow: "0 15px 40px rgba(0, 0, 0, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            <h3
              style={{
                color: "purple",
                fontSize: "1.8rem",
                fontWeight: 700,
                marginBottom: "1rem",
              }}
            >
              Ready to Start Your Project?
            </h3>
            <p
              style={{
                color: "#64748b",
                fontSize: "1.1rem",
                marginBottom: "2rem",
                lineHeight: 1.6,
              }}
            >
              Let's collaborate and bring your vision to life with cutting-edge technology
            </p>
            <Button
              style={{
                background: "rgb(37, 103, 218)",
                color: "white",
                border: "none",
                fontWeight: 700,
                padding: "1rem 2.5rem",
                borderRadius: "50px",
                fontSize: "1.1rem",
                boxShadow: "0 8px 30px rgba(153, 61, 255, 0.3)",
                transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
                letterSpacing: "0.5px",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-3px) scale(1.05)";
                e.target.style.boxShadow = "0 15px 40px rgba(153, 61, 255, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0) scale(1)";
                e.target.style.boxShadow = "0 8px 30px rgba(153, 61, 255, 0.3)";
              }}
            >
              🚀 Get Started Today
            </Button>
          </div>
        </div>
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

// Enhanced Project Card Component
function EnhancedProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        background: "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(20px)",
        borderRadius: "25px",
        padding: "0",
        boxShadow: hovered 
          ? `0 20px 60px ${project.color}20`
          : "0 10px 40px rgba(0, 0, 0, 0.08)",
        border: `2px solid ${hovered ? project.color : 'transparent'}`,
        transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
        transform: hovered ? "translateY(-10px)" : "translateY(0)",
        cursor: "pointer",
        height: "100%",
        overflow: "hidden",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Project Image */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <img
          src={project.imgPath}
          alt={project.title}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "25px 25px 0 0",
            transition: "transform 0.4s ease",
            transform: hovered ? "scale(1.05)" : "scale(1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "15px",
            right: "15px",
            background: project.color,
            color: "white",
            padding: "5px 12px",
            borderRadius: "15px",
            fontSize: "0.8rem",
            fontWeight: 600,
          }}
        >
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "1.5rem" }}>
        <h4
          style={{
            color: "#0A1F44",
            fontSize: "1.3rem",
            fontWeight: 700,
            marginBottom: "0.8rem",
            letterSpacing: "0.3px",
          }}
        >
          {project.title}
        </h4>

        <p
          style={{
            color: "#64748b",
            fontSize: "0.95rem",
            lineHeight: 1.6,
            marginBottom: "1rem",
            minHeight: "60px",
          }}
        >
          {project.description}
        </p>

        {/* Tech Stack */}
        <div style={{ marginBottom: "1.5rem" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
            }}
          >
            {project.tech.map((tech, idx) => (
              <span
                key={idx}
                style={{
                  background: `${project.color}15`,
                  color: project.color,
                  padding: "3px 8px",
                  borderRadius: "10px",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: "flex",
            gap: "0.8rem",
          }}
        >
          <a
            href={project.ghLink}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "8px 16px",
              background: `${project.color}15`,
              color: project.color,
              borderRadius: "20px",
              textDecoration: "none",
              fontSize: "0.85rem",
              fontWeight: 600,
              transition: "all 0.3s ease",
              flex: 1,
            }}
            onMouseEnter={(e) => {
              e.target.style.background = project.color;
              e.target.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = `${project.color}15`;
              e.target.style.color = project.color;
            }}
          >
            <FaGithub style={{ marginRight: "5px" }} />
            Code
          </a>
          
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "8px 16px",
                background: project.color,
                color: "white",
                borderRadius: "20px",
                textDecoration: "none",
                fontSize: "0.85rem",
                fontWeight: 600,
                transition: "all 0.3s ease",
                flex: 1,
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
              }}
            >
              <FaEye style={{ marginRight: "5px" }} />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;
