"use client";
import { Vector2 } from "three";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";
import { Factory } from "./factory";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import {
  Bloom,
  ChromaticAberration,
  EffectComposer,
} from "@react-three/postprocessing";
import LoadingSpinner from "./LoadingSpinner";

const Gallery = () => {
  return (
    <div className="relative h-screen w-screen justify-items-center">
      <div className="relative h-screen w-screen flex justify-center items-center">
        <Suspense fallback={<LoadingSpinner />}>
          <Canvas
            gl={{ antialias: true }}
            style={{
              background: "linear-gradient(360deg, #7dd3fc, #cffafe)",
              width: "100%",
              height: "100%",
            }}
            camera={{
              fov: 50, // Smaller value zooms in
              position: [0, 1, 3], // Bring the camera closer to the models
            }}
          >
            <Environment preset="forest" />

            <EffectComposer>
              <ChromaticAberration
                offset={new Vector2(0.0005, 0.0005)}
                radialModulation={true}
                modulationOffset={0.1}
              />
            </EffectComposer>
            <OrbitControls
              enableDamping={true}
              enablePan={true}
              enableZoom={false}
              autoRotate={true} // Enables automatic camera rotation
              autoRotateSpeed={-0.5} // Controls the speed of the auto-rotation
            />
            {/* <ambientLight color={"white"} intensity={0.4} /> */}
            <directionalLight
              intensity={1}
              position={[5, 3, 0]}
              color={"yellow"}
            />
            <ContactShadows
              position={[0, 0, 0]}
              opacity={0.2}
              scale={2}
              blur={8}
              far={3}
              resolution={128}
            />
            <Factory />
          </Canvas>
        </Suspense>
      </div>{" "}
      <div className="relative h-screen">
        <Suspense fallback={<LoadingSpinner />} />
        <Canvas
          gl={{ antialias: true }}
          style={{
            background: "linear-gradient(360deg, #f0abfc, #fee2e2)",
            width: "100%",
            height: "100%",
          }}
          camera={{
            fov: 50, // Smaller value zooms in
            position: [0, 0.5, 0.5], // Bring the camera closer to the models
          }}
        >
          <Environment preset="night" />

          <OrbitControls
            enableDamping={true}
            enablePan={true}
            enableZoom={false}
            autoRotate={true} // Enables automatic camera rotation
            autoRotateSpeed={1.5} // Controls the speed of the auto-rotation
          />
          {/* <ambientLight color={"white"} intensity={0.4} /> */}
          <directionalLight intensity={0.5} position={[5, 3, 0]} />
          {/* <ContactShadows
            position={[0, 0, 0]}
            opacity={0.2}
            scale={2}
            blur={8}
            far={3}
            resolution={128}
          /> */}

          <EffectComposer>
            <Bloom
              intensity={0.4}
              luminanceThreshold={0.3}
              luminanceSmoothing={0.5}
            />
          </EffectComposer>

          <Scene />
        </Canvas>
        <Suspense />
      </div>
    </div>
  );
};

export default Gallery;
