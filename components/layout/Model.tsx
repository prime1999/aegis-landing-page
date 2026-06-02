"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center } from "@react-three/drei";

// 1. Create a component for the 3D Model
function AIModel() {
  // Load the glb file from the public directory
  const { scene } = useGLTF("/models/ai_robot.glb");

  // Return the primitive object containing the loaded scene
  return <primitive object={scene} scale={10} />;
}

const Model = () => {
  return (
    <div style={{ width: "70vw", height: "70vh" }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true }}
      >
        {/* Ambient light for general visibility */}
        <ambientLight intensity={0.7} />

        {/* Directional light to cast shadows and highlights */}
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} />

        {/* Suspense handles the loading state gracefully while the model downloads */}
        <Suspense fallback={null}>
          <Center>
            <AIModel />
          </Center>
        </Suspense>

        {/* OrbitControls allows the user to rotate, zoom, and pan the model */}
        <OrbitControls
          enableZoom={true}
          maxPolarAngle={Math.PI / 2} // Keeps the camera above the ground
          minDistance={4}
          maxDistance={5}
        />
      </Canvas>
    </div>
  );
};

export default Model;

// Pre-load the model to prevent lag when the component mounts
useGLTF.preload("/models/ai_robot.glb");
