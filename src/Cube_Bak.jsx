// Cube.jsx
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

function Cube(props) {
  const meshRef = useRef();

  // Each face gets its own color
  const [faceColors, setFaceColors] = useState([
    '#5D4BBA', '#5D4BBA', '#5D4BBA',
    '#5D4BBA', '#5D4BBA', '#5D4BBA'
  ]);

  // On hover, we’ll recolor just that face
  const handlePointerMove = (e) => {
    e.stopPropagation();
    const faceIndex = Math.floor(e.faceIndex / 2); // two triangles per face
    setFaceColors((colors) =>
      colors.map((c, i) => (i === faceIndex ? '#BBA2FF' : '#5D4BBA'))
    );
  };

  const handlePointerOut = () => {
    // Reset to base color
    setFaceColors(['#5D4BBA', '#5D4BBA', '#5D4BBA', '#5D4BBA', '#5D4BBA', '#5D4BBA']);
  };

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <mesh
      {...props}
      ref={meshRef}
      onPointerMove={handlePointerMove}
      onPointerOut={handlePointerOut}
    >
      <boxGeometry args={[2, 2, 2]} />
      {faceColors.map((color, i) => (
        <meshStandardMaterial key={i} attach={`material-${i}`} color={color} />
      ))}
    </mesh>
  );
}

export default Cube;
