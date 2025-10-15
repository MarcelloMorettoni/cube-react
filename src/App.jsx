// src/App.jsx
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Cube from "./Cube";
import Aurora from "./Aurora";
import Navbar from "./Navbar";
import "./GlassPanel.css"; // 👈 new style file for the panel

function App() {
  const [hoveredFace, setHoveredFace] = useState(null);

  // Text for each cube face (index 0–5)
  const faceTexts = [
    "This face represents vision — where ideas start forming.",
    "This face symbolizes balance and harmony in design.",
    "This face shows adaptability and dynamic motion.",
    "This face stands for intelligence and insight.",
    "This face embodies creativity through structure.",
    "This face highlights the beauty of simplicity.",
  ];

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Aurora Background */}
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />

      {/* Navbar on top */}
      <Navbar />

      {/* Glass Info Panel */}
      {hoveredFace !== null && (
        <div className="glass-panel">
          <h3>Face {hoveredFace + 1}</h3>
          <p>{faceTexts[hoveredFace]}</p>
        </div>
      )}

      {/* 3D Scene */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          height: "100%",
        }}
      >
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          {/* Cube sends hovered face info back up */}
          <Cube position={[0, 0, 0]} onFaceHover={setHoveredFace} />
          <OrbitControls />
          <Environment preset="sunset" />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
