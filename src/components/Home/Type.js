import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div className="text-purple-900 font-semibold text-xl">
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
          deleteSpeed: 100,
        }}
      />
    </div>
  );
}

export default Type;
