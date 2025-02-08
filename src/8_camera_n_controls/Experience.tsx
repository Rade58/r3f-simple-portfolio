import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

import { type Mesh } from "three";

import {
  // OrbitControls
  /* , Stage, */
  useGLTF,
  Environment,
  Float,
  PresentationControls,
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

  /* useFrame((state, delta) => {

  }); */

  return (
    <>
      {/* <Perf position="top-left" /> */}
      {/* not using orbit controls */}
      {/* <OrbitControls makeDefault /> */}

      <Environment preset="city" />
      {/* ------------------------------------------ */}

      {/* ---------------------------------------------------- */}
      {/* MACKBOOK */}
      <PresentationControls global={true}>
        <Float rotationIntensity={0.4}>
          <primitive object={mackbook.scene} position-y={-1.2} />
        </Float>
      </PresentationControls>
      {/* ---------------------------------------------------- */}
    </>
  );
}
