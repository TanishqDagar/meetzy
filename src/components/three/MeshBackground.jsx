import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const MeshBackground = () => {
  const mesh = useRef();

  useFrame((state) => {
    if (!mesh.current) return;
    const time = state.clock.getElapsedTime();
    mesh.current.rotation.z = time * 0.03;
    const positions = mesh.current.geometry.attributes.position.array;
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      positions[i + 2] = Math.sin(x + time * 0.5) * 0.3 + Math.cos(y + time * 0.5) * 0.3;
    }
    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <mesh ref={mesh} rotation={[-Math.PI / 3, 0, 0]} position={[0, -1, -5]}>
      <planeGeometry args={[25, 25, 50, 50]} />
      <meshStandardMaterial
        color="#8caf9f" // Soft sage wireframe
        wireframe
        transparent
        opacity={0.08}
      />
    </mesh>
  );
};

export default MeshBackground;
