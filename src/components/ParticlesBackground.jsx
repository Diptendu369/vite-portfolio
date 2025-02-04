// import React from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";

// const ParticlesBackground = () => {
//   const particlesInit = async (main) => {
//     await loadFull(main);
//   };

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       options={{
//         fullScreen: { enable: false }, // Keep inside the div instead of full-screen
//         background: {
//           color: "transparent", // Keep background transparent so home-bg.jpg is visible
//         },
//         particles: {
//           number: { value: 100, density: { enable: true, value_area: 800 } },
//           color: { value: "#ffffff" }, // White particles
//           shape: { type: "circle" },
//           opacity: { value: 0.4, random: true },
//           size: { value: 3, random: true },
//           move: {
//             enable: true,
//             speed: 1,
//             direction: "none",
//             random: false,
//             straight: false,
//           },
//         },
//         interactivity: {
//           events: {
//             onHover: { enable: true, mode: "repulse" },
//             onClick: { enable: true, mode: "push" },
//           },
//           modes: {
//             repulse: { distance: 100, duration: 0.4 },
//           },
//         },
//       }}
//     />
//   );
// };

// export default ParticlesBackground;

//2


// import React from "react";
// import Particles from "react-tsparticles";
// import { useCallback } from "react";
// import { loadSlim } from "tsparticles-slim"; // Use slim version


// const ParticlesBackground = () => {
//   const particlesInit = useCallback(async (engine) => {
//     await loadSlim(engine);
//   }, []);

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       options={{
//         fullScreen: { enable: false },
//         background: { color: "transparent" }, 
//         particles: {
//           number: { value: 100, density: { enable: true, value_area: 800 } },
//           color: { value: "#ffffff" }, 
//           shape: { type: "circle" },
//           opacity: { value: 0.5, random: true },
//           size: { value: 3, random: true },
//           move: { enable: true, speed: 1, direction: "none", random: false },
//         },
//         interactivity: {
//           events: {
//             onHover: { enable: true, mode: "repulse" },
//             onClick: { enable: true, mode: "push" },
//           },
//           modes: { repulse: { distance: 100, duration: 0.4 } },
//         },
//       }}
//     />
//   );
// };

// export default ParticlesBackground;

import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (engine) => {
    console.log("Initializing tsparticles...");
    await loadFull(engine);
  };

  const particlesLoaded = (container) => {
    console.log("Particles loaded", container);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          number: { value: 100, density: { enable: true, value_area: 800 } },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.4, random: true },
          size: { value: 3, random: true },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
