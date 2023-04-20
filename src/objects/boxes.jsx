import { Box, useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

export function Boxes() {
  const [playing, setPlaying] = useState(false);

  const [sub] = useKeyboardControls();

  useEffect(() => {
    return sub(
      (state) => state.jump,
      (pressed) => {
        if (pressed) setPlaying(state => !state);
      }
    )
  }, [])

  const boxes = useRef();

  const count = 10;

  const boxSize = 4;
  const boxSpeed = 0.5;
  const boxStart = -100;
  const boxEnd = 10;

  const spread = 40;

  useFrame(() => {
    boxes.current.children.forEach((box) => {
      if (!playing) return;
      box.position.z += boxSpeed;

      if (box.position.z > boxEnd) {
        const randomX = Math.random() * spread - spread / 2;
        box.position.x = randomX;
        box.position.z = boxStart;
      }
    });
  });

  return (
    <group ref={boxes}>
      {Array(count)
        .fill()
        .map((_, i) => {
          const randomZ = Math.random() * boxStart;
          const randomX = Math.random() * spread - spread / 2;
          return (
            <Box
              key={i}
              args={[boxSize, boxSize, boxSize]}
              position={[randomX, -8, boxStart + randomZ]}
            >
              <meshStandardMaterial color="hotpink" />
            </Box>
          );
        })}
    </group>
  );
}
