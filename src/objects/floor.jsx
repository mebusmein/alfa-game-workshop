import { Plane } from "@react-three/drei";

export function Floor() {
  return (
    <Plane
      args={[40, 100]}
      position={[0, -10, -50]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <meshStandardMaterial color="#444" />
    </Plane>
  );
}
