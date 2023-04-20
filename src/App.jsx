
import "./App.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, KeyboardControls } from "@react-three/drei";
import { useRef, useState } from "react";
import { Player } from "./objects/player";

function Scene() {
   const [rotate, setRotate] = useState(true);

  const playerRef = useRef();

  useFrame(() => {
    // if (rotate) playerRef.current.rotation.y += 0.02;
  });

  return (
    <KeyboardControls map={[
      { keys: ["a", "ArrowLeft"], name: "moveLeft" },
      { keys: ["d", "ArrowRight"], name: "moveRight" },
      { keys: ["Space"], name: "jump" }
  ]}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Player />
    </KeyboardControls>
  )
}



function App() {
  return (
    <Canvas camera={{
      position: [0, 2, 10],
      fov: 75,
    }}>
      <ambientLight  />
      <pointLight position={[10, 10, 10]} />
      <Scene />
    </Canvas>
  )
}

export default App
