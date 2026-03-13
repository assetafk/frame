// @ts-nocheck
"use client";

import { Canvas, useFrame, type ThreeElements } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMemo, useRef } from "react";
import {
  Color,
  DirectionalLight,
  MeshStandardMaterial,
  type Mesh
} from "three";

declare global {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {
      meshStandardMaterial: any;
      directionalLight: any;
      ambientLight: any;
      color: any;
    }
  }
}

function HeroShape() {
  const mesh = useRef<Mesh>(null);
  const material = useMemo(
    () =>
      new MeshStandardMaterial({
        color: "#38bdf8",
        metalness: 0.4,
        roughness: 0.15,
        emissive: "#22d3ee",
        emissiveIntensity: 0.35
      }),
    []
  );

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
      <primitive object={material} attach="material" />
    </mesh>
  );
}

export default function HeroCanvas() {
  const background = useMemo(() => new Color("#020617"), []);
  const keyLight = useMemo(
    () => new DirectionalLight("#e5e7eb", 1.2),
    []
  );
  const rimLight = useMemo(
    () => new DirectionalLight("#22d3ee", 0.9),
    []
  );

  keyLight.position.set(4, 6, 3);
  rimLight.position.set(-5, -4, -2);

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 42 }}
      className="h-full w-full rounded-3xl"
    >
      <primitive attach="background" object={background} />
      <ambientLight intensity={0.6} />
      <primitive object={keyLight} />
      <primitive object={rimLight} />
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

