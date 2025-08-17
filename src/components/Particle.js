import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: {
            value: "transparent", // Transparent background to show underlying UI
          },
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              area: 1000,
            },
          },
          color: {
            value: ["#0A1F44", "#000000", "#6A0DAD", "#FFFFFF"], // navy, black, purple, white
          },
          shape: {
            type: "circle",
          },
          size: {
            value: 3,
            random: { enable: true, minimumValue: 1 },
            anim: {
              enable: true,
              speed: 1,
              size_min: 0.3,
              sync: false,
            },
          },
          opacity: {
            value: 0.7,
            random: { enable: true, minimumValue: 0.2 },
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            random: true,
            straight: false,
            outModes: "out",
          },
          links: {
            enable: true,
            distance: 120,
            color: "#FFFFFF",
            opacity: 0.05,
            width: 1,
          },
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            onClick: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 150,
              links: {
                opacity: 0.2,
              },
            },
            bubble: {
              distance: 100,
              size: 6,
              duration: 2,
              opacity: 0.8,
              speed: 3,
            },
            repulse: {
              distance: 120,
              duration: 0.6,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default Particle;
