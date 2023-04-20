import { useState, useRef } from 'react'
import './App.css'
import { Canvas, useFrame } from '@react-three/fiber'
import { Box } from '@react-three/drei'


function Stage() {

  const boxRef = useRef()

  useFrame(({ }) => {
    boxRef.current.rotation.x += 0.01
    boxRef.current.rotation.y += 0.01
  })

  return (
    <>
    <Box ref={boxRef} args={[1, 1, 1]} position={[0, 0, 0]}>
      <meshStandardMaterial color="hotpink" />
    </Box>
    </>
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
      <Stage />
    </Canvas>
  )
}

export default App
