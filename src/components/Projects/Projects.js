import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import hotel from "../../Assets/Projects/hotel.png";
import sarith from "../../Assets/Projects/Sarith.png";
import task from "../../Assets/Projects/TaskMate.png";
import cookhub from "../../Assets/Projects/CookHub.png";
import bookStore from "../../Assets/Projects/BookStore.png";
import presentPath from "../../Assets/Projects/PresentPath.png";

function Projects() {
  return (
    <Container
      fluid
      className="project-section"
      style={{
        background: "#fff", // White background
        minHeight: "100vh",
        paddingTop: "10px",
      }}
    >
      {/* Uncomment below if you want particles over white */}
      {/* <Particle /> */}
      <Container>
        <h1
          style={{
            fontSize: "2.8rem",
            fontWeight: "700",
            textAlign: "center",
            marginBottom: "5px",
            color: "#222", // Dark text for headings
          }}
        >
          Our Recent{" "}
          <strong
            style={{
              color: "#006400", // Brand dark green accent
              fontWeight: "800",
              marginBottom:" -20px",
            }}
          >
            Works
          </strong>
        </h1>
{/* 
        <p
          style={{
            color: "black", // Medium dark gray body text
            textAlign: "center",
            marginBottom: "28px",
            fontSize: "1.25rem",
          }}
        >
          Here are a few projects we have worked on recently.
        </p> */}

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotel}
              isBlog={false}
              title="Hotel Management Platform"
              description="A full-stack hotel management system built with MERN stack, Material-UI, offering features like room booking, service management, and a user-friendly admin dashboard."
              ghLink="https://github.com/Sarith-Samarakoon/hotel-management-frontend.git"
              demoLink="https://goldenhorizonhotel.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sarith}
              isBlog={false}
              title="Developer Portfolio"
              description="A personal portfolio website built using HTML, CSS, and JavaScript to showcase my skills, projects, and achievements. Designed for a seamless and professional user experience."
              ghLink="https://github.com/Sarith-Samarakoon/ImSarith.github.io"
              demoLink="https://sarith-samarakoon.github.io/ImSarith.github.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={task}
              isBlog={false}
              title="TaskMate Mobile Application"
              description="A smart assistant app built with React Native and Expo, integrated with Python and AppWrite. It helps users track, organize, and prioritize tasks using voice and text input, enhancing productivity and optimizing scheduling."
              ghLink="https://github.com/Sarith-Samarakoon/TaskMate"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookStore}
              isBlog={false}
              title="The BookTown"
              description="A modern online bookstore built with React, APIs and Tailwind CSS, featuring dynamic book listings, search functionality, and a sleek, responsive UI for an engaging user experience."
              ghLink="https://github.com/RusiruWaduge/THE_BOOKTOWN-Online-BookStore"
              demoLink="https://thebooktown-onlinebookstore.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={presentPath}
              isBlog={false}
              title="PresentPath Mobile Application"
              description="A mobile app built with React Native and Expo, integrated with Python and AppWrite. It streamlines the scheduling, evaluation, and feedback of academic presentations, helping students and faculty manage presentations efficiently while reducing manual effort and improving coordination."
              ghLink="https://github.com/RusiruWaduge/Presentation-Scheduling-MobileApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cookhub}
              isBlog={false}
              title="CookHub Food Application"
              description="A full-stack web platform for food lovers and aspiring chefs to explore, learn, and connect through cooking. Features a food post feed, personalized learning plans, and community interaction."
              ghLink="https://github.com/RusiruWaduge/Cook_Hub-FoodApp.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
