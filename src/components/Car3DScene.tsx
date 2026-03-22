import { useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";
import vehicleImg from "@/assets/vehicle-car.png";

function CarPlane() {
  const texture = useLoader(TextureLoader, vehicleImg as string);
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.elapsedTime;
    groupRef.current.rotation.y = Math.sin(t * 0.35) * 0.45;
    groupRef.current.position.y = Math.sin(t * 0.7) * 0.12;
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <planeGeometry args={[3.6, 2.6]} />
        <meshStandardMaterial
          map={texture}
          transparent
          alphaTest={0.05}
          roughness={0.2}
          metalness={0.4}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

const Car3DScene = () => (
  <Canvas
    camera={{ position: [0, 0.3, 5], fov: 42 }}
    gl={{ alpha: true, antialias: true }}
    style={{ background: "transparent" }}
  >
    <ambientLight intensity={0.5} />
    <pointLight position={[5, 5, 5]} intensity={3} color="#00f3ff" />
    <pointLight position={[-5, 3, 3]} intensity={2} color="#ffffff" />
    <pointLight position={[0, -4, -2]} intensity={1.5} color="#ff3355" />
    <pointLight position={[0, 4, 0]} intensity={1} color="#00ff9d" />
    <Suspense fallback={null}>
      <CarPlane />
    </Suspense>
  </Canvas>
);

export default Car3DScene;
