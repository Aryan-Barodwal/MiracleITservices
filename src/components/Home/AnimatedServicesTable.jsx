import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const AnimatedServicesTable = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const animationRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const services = [
    {
      service: "Desktop & Laptop Support",
      purpose: "Hardware and software issue resolution",
      benefit: "Fast troubleshooting and minimal downtime"
    },
    {
      service: "Server Installation & Maintenance",
      purpose: "Setup, optimize, and manage critical servers",
      benefit: "Enhanced performance and secure access"
    },
    {
      service: "Annual Maintenance Contracts (AMC)",
      purpose: "Regular checkups and priority IT support",
      benefit: "Uninterrupted operations and peace of mind"
    },
    {
      service: "Firewall & Network Security",
      purpose: "Prevent unauthorized access and attacks",
      benefit: "Secure network and protected data"
    },
    {
      service: "IT Components Supply",
      purpose: "RAMs, SSDs, CPUs, cables, and more",
      benefit: "Genuine products with quick availability"
    },
    {
      service: "Wired & Wireless Networking",
      purpose: "Setup, configuration, and optimization",
      benefit: "Faster speeds and seamless connectivity"
    }
  ];

  const headerColors = [
    { color: 0x4f46e5, name: "Service" },      // Blue-purple
    { color: 0x14b8a6, name: "Purpose" },     // Teal-green
    { color: 0xec4899, name: "Client Benefit" } // Pink-red
  ];

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 2, 12);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    // Table dimensions
    const boxWidth = 3.5;
    const boxHeight = 1.2;
    const boxDepth = 0.3;
    const spacing = 0.1;

    // Store all boxes for animation
    const allBoxes = [];

    // Create header boxes
    headerColors.forEach((header, colIndex) => {
      const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
      const material = new THREE.MeshLambertMaterial({ 
        color: header.color,
        transparent: true,
        opacity: 0
      });
      const box = new THREE.Mesh(geometry, material);
      
      const x = (colIndex - 1) * (boxWidth + spacing);
      const y = 3;
      const z = 0;
      
      box.position.set(x, y, z);
      box.castShadow = true;
      box.receiveShadow = true;
      box.userData = { 
        targetY: y, 
        initialY: y - 5, 
        delay: colIndex * 0.2,
        isHeader: true,
        text: header.name
      };
      
      scene.add(box);
      allBoxes.push(box);
    });

    // Create service boxes
    services.forEach((service, rowIndex) => {
      [service.service, service.purpose, service.benefit].forEach((text, colIndex) => {
        const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
        const material = new THREE.MeshLambertMaterial({ 
          color: 0xf8f9fa,
          transparent: true,
          opacity: 0
        });
        const box = new THREE.Mesh(geometry, material);
        
        const x = (colIndex - 1) * (boxWidth + spacing);
        const y = 2 - (rowIndex + 1) * (boxHeight + spacing);
        const z = 0;
        
        box.position.set(x, y, z);
        box.castShadow = true;
        box.receiveShadow = true;
        box.userData = { 
          targetY: y, 
          initialY: y - 8, // Start much lower for dramatic effect
          delay: 1 + (rowIndex + 1) * 0.4 + colIndex * 0.2, // Start after headers
          isHeader: false,
          text: text
        };
        
        scene.add(box);
        allBoxes.push(box);
      });
    });

    // Set initial positions for animation
    allBoxes.forEach((box) => {
      box.position.y = box.userData.initialY;
      box.material.opacity = 0;
      box.scale.set(0.1, 0.1, 0.1);
    });

    // Animation variables
    let animationTime = 0;

    const animate = () => {
      animationTime += 0.016; // ~60fps

      // Start text visibility after some boxes are visible
      if (animationTime > 2 && !isVisible) {
        setIsVisible(true);
      }

      allBoxes.forEach((box) => {
        const { delay, targetY, initialY } = box.userData;
        const progress = Math.max(0, Math.min(1, (animationTime - delay) / 1.5)); // Slower animation over 1.5 seconds
        
        if (progress > 0) {
          // Smooth easing function - ease out back
          const easeOutBack = (t) => {
            const c1 = 1.70158;
            const c3 = c1 + 1;
            return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
          };

          const easedProgress = easeOutBack(Math.min(progress, 1));
          
          // Position animation
          box.position.y = initialY + (targetY - initialY) * easedProgress;
          
          // Opacity animation
          box.material.opacity = Math.min(progress * 1.5, 1);
          
          // Scale animation
          const scaleProgress = Math.min(progress * 1.2, 1);
          box.scale.set(scaleProgress, scaleProgress, scaleProgress);

          // Add subtle floating animation after main animation
          if (progress >= 1) {
            box.position.y = targetY + Math.sin(animationTime * 2 + delay) * 0.05;
          }

          // Add subtle rotation
          box.rotation.y = Math.sin(animationTime * 0.5 + delay) * 0.03;
          box.rotation.x = Math.cos(animationTime * 0.3 + delay) * 0.02;
        }
      });

      // Gentle camera movement
      camera.position.x = Math.sin(animationTime * 0.2) * 0.3;
      camera.position.z = 12 + Math.cos(animationTime * 0.15) * 0.5;

      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (mountRef.current && renderer && camera) {
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;
        
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (mountRef.current && renderer.domElement && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Geometric background pattern */}
      <div className="absolute inset-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 200 L300 50 L600 200 L300 350 Z"
            stroke="#22d3ee"
            strokeWidth="2"
            fill="none"
            opacity="0.1"
          />
          <path
            d="M300 350 L600 200 L900 350 L600 500 Z"
            stroke="#22d3ee"
            strokeWidth="2"
            fill="none"
            opacity="0.1"
          />
          <path
            d="M600 50 L900 200 L1200 50 L900 -100 Z"
            stroke="#22d3ee"
            strokeWidth="2"
            fill="none"
            opacity="0.1"
          />
          <path
            d="M900 200 L1200 350 L1500 200 L1200 50 Z"
            stroke="#22d3ee"
            strokeWidth="2"
            fill="none"
            opacity="0.1"
          />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header section */}
          <div className="mb-12 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Services We Provide
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Comprehensive IT solutions for businesses — from everyday
              support to enterprise-grade infrastructure.
            </p>
          </div>

          {/* Three.js Animation Container */}
          <div 
            ref={mountRef} 
            className="w-full hidden h-[600px] rounded-lg border border-gray-800 mb-8"
            style={{ background: 'black' }}
          />

          {/* Text overlay for the animated table */}
          {isVisible && (
            <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto text-center opacity-90">
              {/* Headers */}
              <div className="text-blue-400 font-semibold text-lg">Service</div>
              <div className="text-teal-400 font-semibold text-lg">Purpose</div>
              <div className="text-pink-400 font-semibold text-lg">Client Benefit</div>
              
              {/* Service rows */}
              {services.map((service, index) => (
                <React.Fragment key={index}>
                  <div className="text-gray-300 text-sm p-2 bg-gray-900 bg-opacity-50 rounded">
                    {service.service}
                  </div>
                  <div className="text-gray-300 text-sm p-2 bg-gray-900 bg-opacity-50 rounded">
                    {service.purpose}
                  </div>
                  <div className="text-gray-300 text-sm p-2 bg-gray-900 bg-opacity-50 rounded">
                    {service.benefit}
                  </div>
                </React.Fragment>
              ))}
            </div>
          )}

          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              Watch our comprehensive IT services come to life with interactive 3D visualization
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedServicesTable;