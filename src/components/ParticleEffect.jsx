"use client";
import { useCallback } from "react";
import { Particles } from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // Use loadSlim instead of loadFull

export default function ParticleEffect() {
  const particlesInit = useCallback(async (engine) => {
    console.log("Initializing tsparticles...");
    await loadSlim(engine); // Use loadSlim for better compatibility
  }, []);

  return (
    <Particles
      className="absolute inset-0"
      init={particlesInit}
      options={{
        particles: {
          number: {
            value: 40,
            density: {
              enable: true,
              area: 800
            }
          },
          color: {
            value: "#fecb15"
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 0.5,
            random: true
          },
          size: {
            value: 2.5,
            random: true
          },
          links: {
            enable: true,
            distance: 150,
            color: "#4c6fff",
            opacity: 0.3,
            width: 2
          },
          move: {
            enable: true,
            speed: 2,
            random: true,
            outModes: "out"
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab"
            },
            onClick: {
              enable: true,
              mode: "push"
            }
          }
        },
        detectRetina: true
      }}
    />
  );
}
