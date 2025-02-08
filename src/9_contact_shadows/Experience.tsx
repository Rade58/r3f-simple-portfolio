// import { useRef } from "react";
// import { useFrame } from "@react-three/fiber";

// import { type Mesh } from "three";

import {
  // OrbitControls
  /* , Stage, */
  useGLTF,
  Environment,
  Float,
  PresentationControls,
  ContactShadows,
} from "@react-three/drei";

// import { Perf } from "r3f-perf";

// import { useControls } from "leva";

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
      <PresentationControls
        // if you drag outside the mesh it wil also move the mesh
        global={true}
        // starting rotation
        rotation={[0.13, 0.1, 0]}
        // vertical limits
        polar={[-0.4, 0.2]}
        // horizontal limits
        azimuth={[-1, 0.75]}
        // For Spring
        // ------------------------------
        config={{ mass: 2, tension: 400 }}
        // to go back to initial position when you relese it
        snap={{ mass: 4, tension: 400 }}
        // ------------------------------
      >
        <Float rotationIntensity={0.4}>
          <primitive object={mackbook.scene} position-y={-1.2} />
        </Float>
      </PresentationControls>
      {/* ---------------------------------------------------- */}
      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
}
