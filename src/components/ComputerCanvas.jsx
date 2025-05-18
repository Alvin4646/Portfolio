import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./CanvasLoader.jsx";
import {Leva, useControls} from "leva";
import {useMediaQuery} from "react-responsive";

const ComputerCanvas = () => {
    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery(({maxWidth: 1024}));

  const computer = useGLTF("/textures/desktop_pc/scene.gltf");
  return (
    <mesh>
      {/*<hemisphereLight intensity={0.15} groundColor="black" />*/}

      {/*<spotLight*/}
      {/*  position={[-20, 50, 10]}*/}
      {/*  angle={0.12}*/}
      {/*  penumbra={1}*/}
      {/*  intensity={1}*/}
      {/*  castShadow*/}
      {/*  shadow-mapSize={1024}*/}
      {/*/>*/}

      <primitive
        object={computer.scene}
        // scale={isMobile? 0.29 : isTablet? 0.4 : 0.70}
        // position={[isMobile? -4 : isTablet? -3: 0, isMobile? -1.2: isTablet? -1.2: -3.25,isMobile?-1.4: isTablet? -1.3 : -1.1]}
        // rotation={[1.1, 3.0, 1]}
          position={isMobile?[1.1, 3.0, 1]:[1.5, 0.7, -1]}
          rotation={[0, -1.6, -0.1]}
          scale={isMobile?0.7:1.1}


      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
      <>
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ComputerCanvas />

        <Preload all />
      </Suspense>
    </Canvas>
      </>
  );
};
export default ComputerCanvas;
