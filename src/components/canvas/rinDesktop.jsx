import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { useEffect,useState } from "react";
// import CanvasLoader from "../Loader";

const Desk = ({isMobile}) => {
  const desk = useGLTF("./rinDesktop/scene.gltf");

  return (
    <mesh>
    <hemisphereLight intensity={10.15} groundColor="black" />

    {/* <pointLight intensity={5} /> */}
    <primitive object={desk.scene} scale={isMobile?1:0.8} position-y={isMobile?1:-1} rotation-y={0} />
  </mesh>
    
  );
};

const DeskCanvas = () => {
  
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
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Desk isMobile={isMobile}/>

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default DeskCanvas;

