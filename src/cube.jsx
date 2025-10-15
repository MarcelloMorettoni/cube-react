// Cube.jsx
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

function Cube(props) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef();

  // Set up state for hover and active states
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // useFrame allows you to run code on every rendered frame
  useFrame((state, delta) => {
    // If not actively clicked, apply a slow rotation
    if (!active && meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <mesh
      {...props}
      ref={meshRef}
      //scale={active ? 1.5 : 1} // Scale up when clicked
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[2, 2, 2]} />
      {/* Change color on hover */}
      <meshStandardMaterial color={hovered ? '#BBA2FF' : '#5D4BBA'} />
    </mesh>
  );
}

export default Cube;