// Cube.jsx
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

function Cube({ onFaceHover, ...props }) {
  const meshRef = useRef();
  const [faceColors, setFaceColors] = useState(Array(6).fill('#5D4BBA'));

  const handlePointerMove = (e) => {
    e.stopPropagation();
    const faceIndex = Math.floor(e.faceIndex / 2);
    setFaceColors(colors =>
      colors.map((c, i) => (i === faceIndex ? '#BBA2FF' : '#5D4BBA'))
    );
    onFaceHover?.(faceIndex); // 👈 notify parent
  };

  const handlePointerOut = () => {
    setFaceColors(Array(6).fill('#5D4BBA'));
    onFaceHover?.(null);
  };

  useFrame((_, delta) => {
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
