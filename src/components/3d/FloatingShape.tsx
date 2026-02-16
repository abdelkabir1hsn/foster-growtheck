import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import * as THREE from 'three';
import { useMousePosition } from '@/hooks/useMousePosition';

// Torus Knot Component with mouse interaction
function TorusKnot() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);
  const mousePosition = useMousePosition();

  // Create gradient texture
  const gradientTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const context = canvas.getContext('2d')!;
    
    const gradient = context.createLinearGradient(0, 0, 512, 512);
    gradient.addColorStop(0, '#10b981');
    gradient.addColorStop(0.5, '#34d399');
    gradient.addColorStop(1, '#84cc16');
    
    context.fillStyle = gradient;
    context.fillRect(0, 0, 512, 512);
    
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      // Smooth rotation
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      
      // Mouse parallax effect
      const targetX = mousePosition.normalizedY * 0.2;
      const targetY = mousePosition.normalizedX * 0.2;
      
      meshRef.current.rotation.x += (targetX - meshRef.current.rotation.x) * 0.05;
      meshRef.current.rotation.y += (targetY - meshRef.current.rotation.y) * 0.05;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
    >
      <mesh ref={meshRef} scale={1.2}>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <meshStandardMaterial
          ref={materialRef}
          map={gradientTexture}
          metalness={0.8}
          roughness={0.2}
          emissive="#10b981"
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  );
}

// Floating particles
function Particles() {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 50;

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      // Emerald to lime gradient colors
      const t = Math.random();
      colors[i * 3] = 0.06 + t * 0.4;     // R
      colors[i * 3 + 1] = 0.72 + t * 0.2; // G
      colors[i * 3 + 2] = 0.5 - t * 0.3;  // B
    }

    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3 ]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

// Ring component
function Ring() {
  const ringRef = useRef<THREE.Mesh>(null);
  const mousePosition = useMousePosition();

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.05;
      ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.03) * 0.1;
      
      // Subtle mouse follow
      const targetRotationY = mousePosition.normalizedX * 0.1;
      ringRef.current.rotation.y += (targetRotationY - ringRef.current.rotation.y) * 0.02;
    }
  });

  return (
    <mesh ref={ringRef} scale={2.5} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[1, 0.02, 16, 100]} />
      <meshBasicMaterial color="#10b981" transparent opacity={0.3} />
    </mesh>
  );
}

// Main 3D Scene
function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#10b981" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#84cc16" />
      <TorusKnot />
      <Particles />
      <Ring />
      <Environment preset="city" />
    </>
  );
}

// Main Component
export function FloatingShape() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
