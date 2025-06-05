'use client';

import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

interface ThreeDBackgroundProps {
  className?: string;
}

const ThreeDBackground: React.FC<ThreeDBackgroundProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);  const cubesRef = useRef<THREE.Mesh[]>([]);
  const floatingTilesRef = useRef<THREE.Mesh[]>([]);
  const animationIdRef = useRef<number | undefined>(undefined);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 10, 15);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    mountRef.current.appendChild(renderer.domElement);

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0x9b59b6, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 20, 10);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 50;
    scene.add(directionalLight);

    // Purple gradient light
    const purpleLight = new THREE.PointLight(0x9b59b6, 0.6, 100);
    purpleLight.position.set(-10, 10, 5);
    scene.add(purpleLight);

    // Peach gradient light
    const peachLight = new THREE.PointLight(0xffcba4, 0.4, 100);
    peachLight.position.set(10, 5, -5);
    scene.add(peachLight);

    // Create cube grid
    const cubeGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
    const cubeMaterial = new THREE.MeshLambertMaterial({
      color: 0x9b59b6,
      transparent: true,
      opacity: 0.7,
    });

    const gridSize = 12;
    const spacing = 2;
    const cubes: THREE.Mesh[] = [];

    for (let x = 0; x < gridSize; x++) {
      for (let z = 0; z < gridSize; z++) {
        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cube.position.set(
          (x - gridSize / 2) * spacing,
          0,
          (z - gridSize / 2) * spacing
        );
        cube.castShadow = true;
        cube.receiveShadow = true;
        
        // Store original position for wave animation
        cube.userData = {
          originalY: 0,
          gridX: x,
          gridZ: z,
        };
        
        scene.add(cube);
        cubes.push(cube);
      }
    }
    cubesRef.current = cubes;

    // Create floating UI tiles
    const createFloatingTile = (x: number, y: number, z: number, color: number) => {
      const tileGeometry = new THREE.PlaneGeometry(1.5, 1.5);
      const tileMaterial = new THREE.MeshLambertMaterial({
        color: color,
        transparent: true,
        opacity: 0.8,
        side: THREE.DoubleSide,
      });
      
      const tile = new THREE.Mesh(tileGeometry, tileMaterial);
      tile.position.set(x, y, z);
      tile.userData = {
        originalPosition: { x, y, z },
        rotationSpeed: Math.random() * 0.02 + 0.005,
        driftSpeed: Math.random() * 0.01 + 0.005,
      };
      
      return tile;
    };

    const floatingTiles: THREE.Mesh[] = [
      createFloatingTile(-8, 8, 2, 0xffcba4), // Peach
      createFloatingTile(8, 6, -3, 0xdda0dd), // Plum
      createFloatingTile(-5, 12, -8, 0x9b59b6), // Purple
      createFloatingTile(6, 10, 5, 0xf0e68c), // Khaki
      createFloatingTile(0, 15, -2, 0xffa07a), // Light salmon
    ];

    floatingTiles.forEach(tile => {
      scene.add(tile);
    });
    floatingTilesRef.current = floatingTiles;

    // Animation loop
    let time = 0;
    const animate = () => {
      time += 0.016; // Roughly 60fps

      // Animate cubes in wave pattern
      cubes.forEach((cube) => {
        const { gridX, gridZ, originalY } = cube.userData;
        const waveX = Math.sin(time * 2 + gridX * 0.5) * 0.5;
        const waveZ = Math.cos(time * 1.5 + gridZ * 0.3) * 0.3;
        cube.position.y = originalY + waveX + waveZ;
        
        // Add subtle rotation
        cube.rotation.y = time * 0.5 + (gridX + gridZ) * 0.1;
      });

      // Animate floating tiles
      floatingTiles.forEach((tile) => {
        const { originalPosition, rotationSpeed, driftSpeed } = tile.userData;
        
        // Gentle rotation
        tile.rotation.x += rotationSpeed;
        tile.rotation.y += rotationSpeed * 0.7;
        
        // Gentle drifting motion
        tile.position.x = originalPosition.x + Math.sin(time * driftSpeed) * 2;
        tile.position.y = originalPosition.y + Math.cos(time * driftSpeed * 0.8) * 1;
        tile.position.z = originalPosition.z + Math.sin(time * driftSpeed * 0.6) * 1.5;
      });

      // Camera gentle movement
      camera.position.x = Math.sin(time * 0.1) * 2;
      camera.position.y = 10 + Math.cos(time * 0.15) * 1;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      animationIdRef.current = requestAnimationFrame(animate);
    };

    // Handle window resize
    const handleResize = () => {
      if (!camera || !renderer) return;
      
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    // Start animation
    animate();
    setIsLoaded(true);

    // Cleanup function
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      window.removeEventListener('resize', handleResize);
      
      // Dispose of geometries and materials
      cubes.forEach(cube => {
        cube.geometry.dispose();
        if (Array.isArray(cube.material)) {
          cube.material.forEach(material => material.dispose());
        } else {
          cube.material.dispose();
        }
      });
      
      floatingTiles.forEach(tile => {
        tile.geometry.dispose();
        if (Array.isArray(tile.material)) {
          tile.material.forEach(material => material.dispose());
        } else {
          tile.material.dispose();
        }
      });
      
      if (renderer) {
        renderer.dispose();
        if (mountRef.current && renderer.domElement) {
          mountRef.current.removeChild(renderer.domElement);
        }
      }
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className={`fixed inset-0 -z-10 ${className}`}
      style={{
        background: 'linear-gradient(135deg, #ffcba4 0%, #dda0dd 100%)',
      }}
    >
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-purple-600 text-lg font-medium">Loading 3D Scene...</div>
        </div>
      )}
    </div>
  );
};

export default ThreeDBackground;
