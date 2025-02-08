import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

import { type Mesh } from "three";

import {
  OrbitControls /* , Stage */,
  useGLTF,
  Environment,
} from "@react-three/drei";

// import { Perf } from "r3f-perf";

import { useControls } from "leva";

export function Experience() {
  // from cdn
  /* const mackbook = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  ); */
  // local
  const mackbook = useGLTF("/models/macbook.gltf");

  console.log({ mackbook });

  // const someControls = useControls("_", { test: 1 });

  const cubeRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    // const elapsed: number = state.clock.getElapsedTime();

    if (cubeRef.current) {
      cubeRef.current.rotation.y += delta;
    }
  });

  return (
    <>
      {/* <Perf position="top-left" /> */}

      <OrbitControls makeDefault />

      {/* we won't be using this, we will use environment map */}
      {/* ---------------------------------- */}
      {/* <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} /> */}
      {/* <ambientLight intensity={0.5} /> */}
      {/* ---------------------------------- */}
      {/* we will use Environment with preset */}
      <Environment preset="city" />
      {/* ------------------------------------------ */}

      {/* CUBE */}
      {/* <mesh
        // position={[2, 0, 0]}
        ref={cubeRef}
        // scale={1.5}
        // castShadow
      >
        <boxGeometry
        // args={[1, 1, 1]}
        />
        <meshNormalMaterial />
      </mesh> */}

      {/* ---------------------------------------------------- */}
      {/* MACKBOOK */}
      <primitive object={mackbook.scene} />
      {/* ---------------------------------------------------- */}
    </>
  );
}
