// src/App.jsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Cube from "./Cube";
import Aurora from "./Aurora";
import Navbar from "./Navbar";

function App() {
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

      {/* 3D Scene */}
      <div
        style={{
          position: "relative",
          zIndex: 1, // ensures Canvas is above the background but below navbar
          width: "100%",
          height: "100%",
        }}
      >
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Cube position={[0, 0, 0]} />
          <OrbitControls />
          <Environment preset="sunset" />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
