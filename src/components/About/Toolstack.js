import React from "react";
import { Col, Row } from "react-bootstrap";
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

const toolList = [
  { icon: <SiWindows />, key: "windows", color: "#0078D6" }, // Windows Blue
  { icon: <SiMacos />, key: "macos", color: "#000000" }, // macOS (Apple Black)
  { icon: <SiVisualstudiocode />, key: "vscode", color: "#007ACC" }, // Visual Studio Code
  { icon: <SiPostman />, key: "postman", color: "#FF6C37" }, // Postman
  { icon: <SiSlack />, key: "slack", color: "#611f69" }, // Slack
  { icon: <SiVercel />, key: "vercel", color: "#000000" }, // Vercel (Black)
  { icon: <SiEclipseide />, key: "eclipse", color: "#2C2255" }, // Eclipse IDE (Dark Blue)
  { icon: <SiIntellijidea />, key: "intellij", color: "#000000" }, // IntelliJ IDEA (Black)
];

const baseStyle = {
  fontSize: "3.5rem",
  padding: "15px",
  margin: "10px",
  borderRadius: "12px",
  backgroundColor: "#bebcbc",
  boxShadow: "0 4px 8px #bebcbc",
  transition: "transform 0.3s, box-shadow 0.3s, color 0.3s",
  cursor: "default",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

function Toolstack() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "50px",
        flexWrap: "wrap",
      }}
    >
      {toolList.map((tool, idx) => (
        <Col
          xs={4}
          md={2}
          key={tool.key}
          style={{
            ...baseStyle,
            color: tool.color,
          }}
          className="tech-icons"
        >
          {tool.icon}
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
