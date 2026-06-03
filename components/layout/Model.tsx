"use client";

import { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Center } from "@react-three/drei";
import * as THREE from "three";

// A global mutable object to track screen-wide normalized coordinates
const globalMouse = { x: 0, y: 0 };

function AIModel() {
  const { scene } = useGLTF("/models/ai_robot.glb");
  const modelRef = useRef<THREE.Group>(null);

  // Set up a window-wide mouse listener when the component mounts
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize values between -1 and 1 based on the entire screen size
      globalMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      globalMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    if (!modelRef.current) return;

    // Set maximum boundaries for how far the model can rotate (0.5 max rads)
    const targetX = globalMouse.x * 1;
    const targetY = globalMouse.y * 0.5;

    // Smoothly transition to the target coordinates
    modelRef.current.rotation.y = THREE.MathUtils.lerp(
      modelRef.current.rotation.y,
      targetX,
      0.08,
    );

    modelRef.current.rotation.x = THREE.MathUtils.lerp(
      modelRef.current.rotation.x,
      -targetY,
      0.08,
    );
  });

  return (
    <group ref={modelRef}>
      <primitive object={scene} scale={10} />
    </group>
  );
}

const Model = () => {
  return (
    <div style={{ width: "70vw", height: "70vh" }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} />

        <Suspense fallback={null}>
          <Center>
            <AIModel />
          </Center>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Model;

useGLTF.preload("/models/ai_robot.glb");
