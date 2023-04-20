
import "./App.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, KeyboardControls } from "@react-three/drei";
import { useRef, useState } from "react";
import { Player } from "./objects/player";
import { Floor } from "./objects/floor";
import { Boxes } from "./objects/boxes";

function Scene() {
  return (
    <KeyboardControls map={[
      { keys: ["a", "ArrowLeft"], name: "moveLeft" },
      { keys: ["d", "ArrowRight"], name: "moveRight" },
      { keys: ["Space"], name: "jump" }
  ]}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Player />
      <Floor />
        <Boxes />
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
