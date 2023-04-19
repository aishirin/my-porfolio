import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Planets = ({ isMobile }) => {
  const planet = useGLTF("./rinDesktop/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={10.15} groundColor="black" />

      <pointLight intensity={5} />
      <primitive
        object={planet.scene}
        scale={2.75}
        position={[3, -0.5, -4.5]}
        rotation={[0.0, 1.3, -0.1]}
      />
    </mesh>
  );
};

const PlanetsCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 10], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Planets isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default PlanetsCanvas;