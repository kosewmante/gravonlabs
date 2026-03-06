import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Edges, Environment, Float, Box } from '@react-three/drei';
import * as THREE from 'three';

const ArchitecturalBox = ({ position, args, rotationSpd }: any) => {
    const meshRef = useRef<THREE.Group>(null);

    useFrame((_, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * rotationSpd;
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
            <group ref={meshRef} position={position}>
                <Box args={args}>
                    {/* Subtle teal color for the wireframe lines */}
                    <meshBasicMaterial transparent opacity={0} />
                    <Edges
                        linewidth={2}
                        threshold={15}
                        color="#00867D"
                    />
                </Box>
            </group>
        </Float>
    );
};

export const WireframeCanvas: React.FC = () => {
    return (
        <Canvas camera={{ position: [5, 4, 10], fov: 40 }}>
            {/* 
        To mimic the "floorplan wireframe" aesthetic shown in the mockup 
        but in 3D, we render a series of architectural wireframe blocks 
      */}
            <group position={[0, -1, 0]}>
                {/* Main foundation box */}
                <ArchitecturalBox position={[0, -1, 0]} args={[6, 0.5, 6]} rotationSpd={0.1} />

                {/* Secondary blocks (rooms/nodes) */}
                <ArchitecturalBox position={[-1.5, 0.5, -1.5]} args={[2, 2, 2]} rotationSpd={0.15} />
                <ArchitecturalBox position={[1.5, 0, 1]} args={[2, 1, 3]} rotationSpd={0.08} />
                <ArchitecturalBox position={[-1, 1, 1.5]} args={[1, 3, 1]} rotationSpd={0.12} />
            </group>

            <Environment preset="city" />
        </Canvas>
    );
};
