\"use client\";

import { Canvas, useFrame } from \"@react-three/fiber\";
import { OrbitControls } from \"@react-three/drei\";
import { useRef } from \"react\";
import type { Mesh } from \"three\";

function HeroShape() {
  const mesh = useRef<Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.x = 0.6 + Math.sin(t / 2) * 0.05;
      mesh.current.rotation.y = t / 2.5;
    }
  });

  return (
    <mesh ref={mesh} castShadow receiveShadow>
      <torusKnotGeometry args={[1.1, 0.35, 180, 32]} />
      <meshStandardMaterial
        color=\"#38bdf8\"
        metalness={0.4}
        roughness={0.15}
        emissive=\"#22d3ee\"
        emissiveIntensity={0.35}
      />
    </mesh>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 42 }}
      className=\"h-full w-full rounded-3xl\"
    >
      <color attach=\"background\" args={[\"#020617\"]} />
      <ambientLight intensity={0.6} />
      <directionalLight
        intensity={1.2}
        position={[4, 6, 3]}
        color=\"#e5e7eb\"
      />
      <directionalLight
        intensity={0.9}
        position={[-5, -4, -2]}
        color=\"#22d3ee\"
      />
      <HeroShape />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.8}
      />
    </Canvas>
  );
}

