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
    sceneRef.current = scene;    // Camera setup with more dramatic perspective angle (like Jasper)
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 20, 20); // Higher up and further back
    camera.lookAt(0, -4, 0); // Looking down at the grid
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

    // Lighting setup - more like Jasper's gradient
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Main directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 15, 10);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 50;
    scene.add(directionalLight);

    // Purple light for the blocks
    const purpleLight = new THREE.PointLight(0x9b59b6, 0.7, 100);
    purpleLight.position.set(-10, 8, 15);
    scene.add(purpleLight);

    // Peach/orange warm light
    const peachLight = new THREE.PointLight(0xff9a76, 0.6, 100);
    peachLight.position.set(15, 5, -5);
    scene.add(peachLight);
    
    // Additional subtle light for depth
    const accentLight = new THREE.PointLight(0x6a0dad, 0.4, 60);
    accentLight.position.set(0, 10, -10);
    scene.add(accentLight);// Create cube grid in perspective, like the Jasper website
    const cubeGeometry = new THREE.BoxGeometry(1, 0.2, 1);
    const cubeMaterial = new THREE.MeshLambertMaterial({
      color: 0x9b59b6,
      transparent: true,
      opacity: 0.7,
    });

    const gridSizeX = 20; // More blocks horizontally
    const gridSizeZ = 20; // More blocks in depth
    const spacing = 1.5;
    const cubes: THREE.Mesh[] = [];

    // Create a grid that extends into the distance (perspective)
    for (let x = 0; x < gridSizeX; x++) {
      for (let z = 0; z < gridSizeZ; z++) {
        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        
        // Position cubes in a way that creates perspective grid
        cube.position.set(
          (x - gridSizeX / 2) * spacing,
          0,
          (z - gridSizeZ / 3) * spacing + 10 // Push grid forward
        );
        
        // Slight random rotation for more natural look
        cube.rotation.x = 0.1;
        cube.rotation.y = Math.random() * 0.1;
        
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
    cubesRef.current = cubes;    // Create floating UI tiles (like marketing icons in the Jasper site)
    const createFloatingTile = (x: number, y: number, z: number, type: string) => {
      // Create different shapes based on type
      let geometry;
      let material;
      let tile;
      
      switch(type) {
        case 'square':
          geometry = new THREE.BoxGeometry(1.8, 1.8, 0.2);
          material = new THREE.MeshLambertMaterial({
            color: 0x9370db,
            transparent: true,
            opacity: 0.9,
          });
          tile = new THREE.Mesh(geometry, material);
          break;
          
        case 'circle':
          geometry = new THREE.CircleGeometry(1, 32);
          material = new THREE.MeshLambertMaterial({
            color: 0xff9a76,
            transparent: true,
            opacity: 0.9,
            side: THREE.DoubleSide
          });
          tile = new THREE.Mesh(geometry, material);
          break;
          
        case 'icon': // G-like icon
          geometry = new THREE.BoxGeometry(2, 2, 0.3);
          material = new THREE.MeshLambertMaterial({
            color: 0xa855f7,
            transparent: true,
            opacity: 0.9,
          });
          tile = new THREE.Mesh(geometry, material);
          break;
          
        default:
          geometry = new THREE.BoxGeometry(1.5, 1.5, 0.2);
          material = new THREE.MeshLambertMaterial({
            color: 0xdda0dd,
            transparent: true,
            opacity: 0.9,
          });
          tile = new THREE.Mesh(geometry, material);
      }
      
      tile.position.set(x, y, z);
      tile.userData = {
        originalPosition: { x, y, z },
        rotationSpeed: Math.random() * 0.01 + 0.005,
        driftSpeed: Math.random() * 0.008 + 0.003,
        type: type
      };
      
      return tile;
    };

    const floatingTiles: THREE.Mesh[] = [
      createFloatingTile(-6, 6, 5, 'square'), 
      createFloatingTile(8, 7, 0, 'circle'),
      createFloatingTile(-3, 10, -2, 'icon'),
      createFloatingTile(6, 8, 8, 'square'),
      createFloatingTile(0, 9, 10, 'circle'),
      createFloatingTile(4, 12, 3, 'icon'),
    ];

    floatingTiles.forEach(tile => {
      scene.add(tile);
    });
    floatingTilesRef.current = floatingTiles;    // Animation loop
    let time = 0;
    const animate = () => {
      time += 0.016; // Roughly 60fps

      // Animate cubes in a smoother wave pattern like the Jasper site
      cubes.forEach((cube) => {
        const { gridX, gridZ, originalY } = cube.userData;
        
        // More pronounced waves from the center outward
        const distance = Math.sqrt(Math.pow(gridX - gridSizeX/2, 2) + Math.pow(gridZ - gridSizeZ/2, 2));
        
        // Ripple effect from center (similar to Jasper)
        const wave = Math.sin(time * 1.2 - distance * 0.4) * 0.7;
        
        // Apply wave height with distance falloff
        cube.position.y = originalY + wave * Math.max(0.1, (1 - distance * 0.05));
        
        // Very subtle rotation for life
        cube.rotation.x = 0.1 + Math.sin(time * 0.5) * 0.03;
      });

      // Animate floating tiles with Jasper-like movement
      floatingTiles.forEach((tile) => {
        const { originalPosition, rotationSpeed, driftSpeed, type } = tile.userData;
        
        // Different animation for different tile types
        if (type === 'icon') {
          // Icons have more pronounced movement
          tile.rotation.y += rotationSpeed * 0.5;
          tile.rotation.z += rotationSpeed * 0.3;
          
          // Gentle bobbing motion
          tile.position.y = originalPosition.y + Math.sin(time * 0.8) * 0.5;
        } else {
          // Regular tiles with subtle rotation
          tile.rotation.x += rotationSpeed * 0.3;
          tile.rotation.y += rotationSpeed * 0.4;
          
          // Gentle floating motion
          tile.position.x = originalPosition.x + Math.sin(time * driftSpeed) * 1.2;
          tile.position.y = originalPosition.y + Math.cos(time * driftSpeed * 0.7) * 0.6;
        }
      });

      // Subtle camera movement for parallax
      camera.position.x = Math.sin(time * 0.1) * 1;
      camera.position.y = 20 + Math.sin(time * 0.08) * 0.5;
      camera.lookAt(0, -4, 0);

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
      className={`absolute inset-0 -z-10 ${className}`}
      style={{
        background: 'linear-gradient(135deg, #ffcba4 0%, #dda0dd 100%)',
        height: '100%',
        width: '100%',
        overflow: 'hidden',
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
