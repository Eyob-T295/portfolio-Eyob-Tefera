import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, Float, MeshDistortMaterial, Sphere, Torus } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

/* A stylised envelope shape built from standard geometry */
const Envelope = () => {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.4;
      groupRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.8) * 0.12;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main envelope body */}
      <mesh castShadow>
        <boxGeometry args={[1.6, 1.0, 0.06]} />
        <meshStandardMaterial color="#a855f7" metalness={0.3} roughness={0.4} />
      </mesh>

      {/* Envelope flap (triangle) */}
      <mesh position={[0, 0.5, 0.02]}>
        <coneGeometry args={[1.13, 0.72, 4, 1]} />
        <meshStandardMaterial color="#9333ea" metalness={0.3} roughness={0.4} />
      </mesh>

      {/* Envelope bottom flap lines */}
      <mesh position={[0, -0.42, 0.02]}>
        <coneGeometry args={[1.13, 0.6, 4, 1]} />
        <meshStandardMaterial color="#7e22ce" metalness={0.2} roughness={0.5} />
      </mesh>

      {/* Glowing seal circle */}
      <mesh position={[0, 0, 0.06]}>
        <circleGeometry args={[0.14, 32]} />
        <meshStandardMaterial color="#e879f9" emissive="#e879f9" emissiveIntensity={1.5} />
      </mesh>
    </group>
  );
};

/* Orbiting ring */
const OrbitRing = ({ radius, color, speed, tilt }) => {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.z = clock.getElapsedTime() * speed;
    }
  });
  return (
    <mesh ref={ref} rotation={[tilt, 0, 0]}>
      <torusGeometry args={[radius, 0.018, 16, 100]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} transparent opacity={0.65} />
    </mesh>
  );
};

/* Floating particle dots */
const Particles = ({ count = 80 }) => {
  const positions = React.useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 5;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 5;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }
    return arr;
  }, [count]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#c084fc" size={0.04} transparent opacity={0.7} />
    </points>
  );
};

/* Scene composition */
const ContactScene = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[3, 3, 3]} intensity={2.5} color="#a855f7" />
      <pointLight position={[-3, -3, -3]} intensity={1.5} color="#ec4899" />
      <spotLight position={[0, 6, 0]} intensity={1.5} angle={0.5} penumbra={1} color="#ffffff" />

      <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.6}>
        <Envelope />
      </Float>

      <OrbitRing radius={1.6} color="#a855f7" speed={0.6} tilt={Math.PI / 4} />
      <OrbitRing radius={2.1} color="#ec4899" speed={-0.4} tilt={Math.PI / 6} />
      <OrbitRing radius={2.6} color="#8b5cf6" speed={0.25} tilt={Math.PI / 2.5} />

      <Particles count={90} />
    </>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [0, 0, 6] }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 4} autoRotate autoRotateSpeed={0.5} />
        <ContactScene />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;