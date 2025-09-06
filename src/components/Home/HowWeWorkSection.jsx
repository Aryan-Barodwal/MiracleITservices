import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const HowWeWorkSection = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const frameId = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const geometryRef = useRef([]);
  const particlesRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);
    
    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Camera position
    camera.position.set(0, 0, 10);

    // Create floating geometric shapes
    const createFloatingGeometry = () => {
      const geometries = [];
      
      // Create various geometric shapes
      for (let i = 0; i < 8; i++) {
        let geometry, material;
        
        if (i % 3 === 0) {
          geometry = new THREE.TetrahedronGeometry(0.5 + Math.random() * 0.5);
        } else if (i % 3 === 1) {
          geometry = new THREE.OctahedronGeometry(0.5 + Math.random() * 0.5);
        } else {
          geometry = new THREE.IcosahedronGeometry(0.5 + Math.random() * 0.5);
        }
        
        material = new THREE.MeshBasicMaterial({
          color: new THREE.Color().setHSL(0.5 + Math.random() * 0.3, 0.7, 0.6),
          wireframe: true,
          transparent: true,
          opacity: 0.3
        });
        
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 10
        );
        mesh.rotation.set(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        );
        
        scene.add(mesh);
        geometries.push(mesh);
      }
      
      geometryRef.current = geometries;
    };

    // Create particle system
    const createParticles = () => {
      const particleCount = 100;
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);
      
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 30;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
        
        const color = new THREE.Color();
        color.setHSL(0.5 + Math.random() * 0.3, 0.8, 0.7);
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;
      }
      
      const particleGeometry = new THREE.BufferGeometry();
      particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      
      const particleMaterial = new THREE.PointsMaterial({
        size: 0.1,
        vertexColors: true,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending
      });
      
      const particles = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particles);
      particlesRef.current = particles;
    };

    // Create timeline connection lines
    const createTimelineConnections = () => {
      const points = [
        new THREE.Vector3(-8, 2, 0),
        new THREE.Vector3(-2, 3, 1),
        new THREE.Vector3(2, 2.5, -0.5),
        new THREE.Vector3(8, 3, 0.5)
      ];
      
      const curve = new THREE.CatmullRomCurve3(points);
      const tubeGeometry = new THREE.TubeGeometry(curve, 64, 0.05, 8, false);
      const tubeMaterial = new THREE.MeshBasicMaterial({
        color: 0x22d3ee,
        transparent: true,
        opacity: 0.8
      });
      
      const tube = new THREE.Mesh(tubeGeometry, tubeMaterial);
      scene.add(tube);
    };

    createFloatingGeometry();
    createParticles();
    createTimelineConnections();

    // Animation loop
    const animate = () => {
      frameId.current = requestAnimationFrame(animate);
      
      const time = Date.now() * 0.001;
      
      // Animate geometric shapes
      geometryRef.current.forEach((mesh, index) => {
        mesh.rotation.x += 0.01 + index * 0.002;
        mesh.rotation.y += 0.015 + index * 0.001;
        mesh.position.y += Math.sin(time + index) * 0.01;
        mesh.position.x += Math.cos(time * 0.5 + index) * 0.005;
      });
      
      // Animate particles
      if (particlesRef.current) {
        particlesRef.current.rotation.y += 0.002;
        const positions = particlesRef.current.geometry.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
          positions[i + 1] += Math.sin(time + i) * 0.01;
        }
        particlesRef.current.geometry.attributes.position.needsUpdate = true;
      }
      
      // Camera slight movement for depth
      camera.position.x = Math.sin(time * 0.2) * 2;
      camera.position.y = Math.cos(time * 0.15) * 1;
      camera.lookAt(0, 0, 0);
      
      renderer.render(scene, camera);
    };

    animate();

    // Intersection Observer for visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (mountRef.current) {
      observer.observe(mountRef.current);
    }

    // Handle resize
    const handleResize = () => {
      if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      observer.disconnect();
    };
  }, []);

  const steps = [
    {
      title: "1. Consultation & Requirements",
      description: "We begin by understanding your business needs, infrastructure, and pain points through a detailed discussion."
    },
    {
      title: "2. Planning & Proposal", 
      description: "Based on the assessment, we design a tailored IT solution — including hardware, AMC plans, security layers, and timelines."
    },
    {
      title: "3. Deployment & Support",
      description: "We sets everything up with minimal disruption and ensures continued support with monitoring, updates, and maintenance."
    }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Three.js Canvas */}
      <div 
        ref={mountRef} 
        className="absolute inset-0 z-0"
        style={{ pointerEvents: 'none' }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/90 z-5" />
      
      {/* Main content */}
      <div className="relative z-10 px-8 py-16 md:px-16 lg:px-24">
        {/* Header section */}
        <div className="mb-16 text-center">
          <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}>
            How We Work
          </h1>
          <p className={`text-lg md:text-xl text-gray-300 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}>
            A simple and transparent process to deliver secure, scalable, and
            reliable IT services tailored to your needs.
          </p>
        </div>

        {/* Steps timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Animated timeline line */}
          <div className="hidden md: absolute top-24 left-1/2 transform -translate-x-1/2 w-4/5 h-0.5">
            <div className={`h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 transition-all duration-2000 delay-500 ${
              isVisible ? 'opacity-80 scale-x-100' : 'opacity-0 scale-x-0'
            } origin-left`}>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-pulse opacity-50"></div>
            </div>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 ">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`relative transition-all duration-1000 ${
                  isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-20'
                }`}
                style={{ transitionDelay: `${800 + index * 200}ms` }}
              >
                {/* Step circle */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center relative z-10 shadow-lg shadow-cyan-500/25">
                    <span className="text-black font-bold text-xl">{index + 1}</span>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 animate-ping opacity-20"></div>
                  </div>
                </div>
                
                {/* Step content */}
                <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 border border-cyan-500/30 rotate-45 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 border border-purple-500/30 rotate-12 animate-pulse delay-1000"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom decorative text */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1500 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}>
          <div className="inline-block px-8 py-3 border border-cyan-500/30 rounded-full backdrop-blur-sm bg-cyan-500/5">
            <span className="text-cyan-400 font-medium">Seamless • Secure • Scalable</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWorkSection;