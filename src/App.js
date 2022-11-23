import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

function App() {
  const model = useGLTF("/model/pipe.glb");
  Object.keys(model.materials).forEach((key) => {
    const material = model.materials[key];
    material.roughness = 1.0;
    material.color = new THREE.Color("#008b8b");
  });

  return (
    <>
      <Canvas
        style={{ width: "100vw", height: "100vh", background: "#333" }}
        camera={{
          fov: 75,
          near: 0.1,
          far: 200,
          position: [0, 5, 10],
        }}
      >
        <Environment preset="sunset" />
        <OrbitControls makeDefault />
        <primitive object={model.scene} />
      </Canvas>
    </>
  );
}

export default App;
