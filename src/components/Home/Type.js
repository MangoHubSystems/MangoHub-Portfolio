import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Custom Web Solutions",
          "Full-Stack Development",
          "UI/UX Design Experts",
          "E-Commerce Development",
          "API & Integration Specialists",
          "Mobile-Responsive Websites",
          "Business Automation Tools",
          "Digital Transformation Partners",
          "Secure & Scalable Platforms",
          "Quality Assurance & Testing",
          "Automated Testing Specialists",
          "Manual Testing Professionals",
          "Selenium & Java QA Experts",
          "End-to-End Software Testing",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
