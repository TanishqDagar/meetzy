import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const IdentityRevealParticles = ({ active }) => {
  const points = useRef();
  const count = 3000;

  const [positions, initialPositions] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const initial = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        // More uniform sphere for transition
      const r = 4 + Math.random() * 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      initial[i * 3] = x;
      initial[i * 3 + 1] = y;
      initial[i * 3 + 2] = z;
    }
    return [pos, initial];
  }, []);

  useFrame((state) => {
    if (!points.current) return;
    const time = state.clock.getElapsedTime();
    const posAttr = points.current.geometry.attributes.position.array;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      if (active) {
        // Converge smoothly to center
        posAttr[i3] *= 0.98;
        posAttr[i3 + 1] *= 0.98;
        posAttr[i3 + 2] *= 0.98;
      } else {
        // Drifting effect
        posAttr[i3] = initialPositions[i3] + Math.sin(time + i) * 0.1;
        posAttr[i3 + 1] = initialPositions[i3 + 1] + Math.cos(time + i) * 0.1;
      }
    }
    points.current.geometry.attributes.position.needsUpdate = true;
    points.current.rotation.y = time * 0.05;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#8caf9f"
        transparent
        opacity={0.3}
        sizeAttenuation={true}
        blending={THREE.NormalBlending}
      />
    </points>
  );
};

export default IdentityRevealParticles;
