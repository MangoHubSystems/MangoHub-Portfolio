import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        background: {},
        particles: {
          number: {
            value: 90,
            density: {
              enable: true,
              value_area: 1000,
            },
          },
          color: {
            value: ["#000000", "#006400", "#B8860B"], // black, dark green, dark yellow
          },
          shape: {
            type: "circle",
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              size_min: 0.5,
              sync: false,
            },
          },
          opacity: {
            value: 0.6,
            random: true,
            anim: {
              enable: true,
              speed: 0.8,
              opacity_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 130,
            color: "#000000", // black lines for subtlety
            opacity: 0.05,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.4,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            attract: {
              enable: false,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: ["grab", "bubble"],
            },
            onclick: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 0.2,
              },
            },
            bubble: {
              distance: 100,
              size: 6,
              duration: 2,
              opacity: 0.8,
              speed: 2,
            },
            repulse: {
              distance: 120,
              duration: 0.5,
            },
            push: {
              particles_nb: 4,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
