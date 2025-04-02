import React, { useEffect, useRef } from "react";

const SplashCursor = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];

    const createParticle = (x, y) => {
      particles.push({ x, y, size: Math.random() * 5 + 2, opacity: 1 });
    };

    const updateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.opacity -= 0.02;
        p.size *= 0.95;
        ctx.fillStyle = `rgba(150, 50, 250, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        if (p.opacity <= 0) particles.splice(i, 1);
      }
      requestAnimationFrame(updateParticles);
    };

    const handleMouseMove = (e) => {
      createParticle(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    updateParticles();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: -1,
      }}
    />
  );
};

export default SplashCursor;
