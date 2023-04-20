import { useSpring, animated } from "@react-spring/three";
import { Box, useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { clamp } from "three/src/math/MathUtils";

export const Player = () => {
  const playerRef = useRef();

  const leftPressed = useKeyboardControls((state) => state.moveLeft);
  const rightPressed = useKeyboardControls((state) => state.moveRight);

  let rotate = 0;
  if (leftPressed) rotate += 0.2;
  if (rightPressed) rotate -= 0.2;

  const { rotation } = useSpring({ rotation: [0, 0, rotate] });

  useFrame(() => {
    if (leftPressed) playerRef.current.position.x = clamp(playerRef.current.position.x - 0.1, -10, 10);
    if (rightPressed) playerRef.current.position.x = clamp(playerRef.current.position.x + 0.1, -10, 10);
  });

  return (
    <animated.group ref={playerRef} rotation={rotation} position={[0, -6, 1]}>
      <Box args={[0.5, 0.5, 2]} rotation={[0, 0, 0]}>
        <meshStandardMaterial color="yellow" />
      </Box>
      <Box args={[2, 0.2, 0.7]} rotation={[0, 0, 0]}>
        <meshStandardMaterial color="hotpink" />
      </Box>
    </animated.group>
  );
};
