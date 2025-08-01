import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import hotel from "../../Assets/Projects/hotel.png";
import sarith from "../../Assets/Projects/Sarith.png";
import task from "../../Assets/Projects/TaskMate.png";
import cookhub from "../../Assets/Projects/CookHub.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import bookStore from "../../Assets/Projects/BookStore.png";
import presentPath from "../../Assets/Projects/PresentPath.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1
          style={{
            fontSize: "2.8rem",
            fontWeight: "700",
            textAlign: "center",
            marginBottom: "5px",
            color: "#ffffff", // dark gray for readability
          }}
        >
          My Recent{" "}
          <strong
            style={{
              color: "#00c897", // your green highlight color
              fontWeight: "800",
            }}
          >
            Works
          </strong>
        </h1>

        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotel}
              isBlog={false}
              title="Hotel Management Platformotel"
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

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cookhub}
              isBlog={false}
              title="CookHub Food Application"
              description="A full-stack web platform for food lovers and aspiring chefs to explore, learn, and connect through cooking. Features a food post feed, personalized learning plans, and community interaction."
              ghLink="https://github.com/RusiruWaduge/Cook_Hub-FoodApp.git"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
