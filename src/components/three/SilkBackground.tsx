"use client";

import { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = `
  varying vec2 vUv;
  varying float vWave;
  uniform float uTime;

  void main() {
    vUv = uv;
    vec3 pos = position;
    float wave = sin(pos.x * 2.0 + uTime * 0.8) * 0.15
               + sin(pos.y * 3.0 + uTime * 0.6) * 0.1
               + sin((pos.x + pos.y) * 1.5 + uTime * 0.4) * 0.08;
    pos.z += wave;
    vWave = wave;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  varying float vWave;
  uniform float uTime;

  void main() {
    // Rose gold palette
    vec3 roseGoldLight = vec3(0.831, 0.647, 0.647);  // #d4a5a5
    vec3 roseGold      = vec3(0.718, 0.431, 0.475);  // #b76e79
    vec3 roseGoldMatte = vec3(0.788, 0.592, 0.624);  // #c9979f
    vec3 white         = vec3(1.0, 0.98, 0.97);

    float noise = sin(vUv.x * 10.0 + uTime * 0.3) * cos(vUv.y * 8.0 + uTime * 0.2) * 0.5 + 0.5;
    float shimmer = sin(vUv.x * 20.0 + vUv.y * 15.0 + uTime * 1.2) * 0.5 + 0.5;

    vec3 color = mix(roseGoldLight, roseGold, noise);
    color = mix(color, roseGoldMatte, vWave * 2.0 + 0.5);
    color = mix(color, white, shimmer * 0.15);

    float alpha = 0.12 + shimmer * 0.06;
    gl_FragColor = vec4(color, alpha);
  }
`;

function SilkMesh() {
  const meshRef = useRef<THREE.Mesh>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
    }),
    []
  );

  useFrame(({ clock }) => {
    uniforms.uTime.value = clock.getElapsedTime();
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 4, 0, Math.PI / 6]} position={[0, 0, -2]}>
      <planeGeometry args={[10, 10, 64, 64]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
}

export default function SilkBackground() {
  return (
    <div className="absolute inset-0 -z-10 opacity-60">
      <Canvas
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <SilkMesh />
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={0.3} />
        </Suspense>
      </Canvas>
    </div>
  );
}
