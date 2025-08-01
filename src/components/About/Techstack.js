import React from "react";
import { Col, Row } from "react-bootstrap";
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

const techList = [
  { icon: <CgCPlusPlus />, key: "cpp", color: "#00599C" }, // C++
  { icon: <DiJavascript1 />, key: "js", color: "#F7DF1E" }, // JavaScript
  { icon: <DiNodejs />, key: "node", color: "#339933" }, // Node.js
  { icon: <DiReact />, key: "react", color: "#61DAFB" }, // React
  { icon: <DiMongodb />, key: "mongo", color: "#47A248" }, // MongoDB
  { icon: <SiNextdotjs />, key: "next", color: "#000000" }, // Next.js
  { icon: <DiGit />, key: "git", color: "#F05032" }, // Git
  { icon: <SiFirebase />, key: "firebase", color: "#FFCA28" }, // Firebase
  { icon: <SiPostgresql />, key: "postgres", color: "#336791" }, // PostgreSQL
  { icon: <DiPython />, key: "python", color: "#3776AB" }, // Python
  { icon: <DiJava />, key: "java", color: "#007396" }, // Java
];

const baseStyle = {
  fontSize: "3.5rem",
  padding: "15px",
  margin: "10px",
  borderRadius: "12px",
  backgroundColor: "rgba(38, 92, 0, 0.04)",
  boxShadow: "black",
  transition: "transform 0.3s, box-shadow 0.3s, color 0.3s, background 0.3s",
  cursor: "default",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

function Techstack() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "50px",
        flexWrap: "wrap",
      }}
    >
      {techList.map((tech, idx) => (
        <Col
          xs={4}
          md={2}
          key={tech.key}
          style={{
            ...baseStyle,
            color: tech.color,
          }}
          className="tech-icons"
        >
          {tech.icon}
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
