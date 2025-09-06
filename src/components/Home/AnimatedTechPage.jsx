import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const AnimatedTechPage = () => {
  const canvasContainerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const particlesRef = useRef(null);
  const animationIdRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!canvasContainerRef.current) return;

    // Initialize Three.js
    const initThreeJS = () => {
      const container = canvasContainerRef.current;

      // Scene setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        container.offsetWidth / container.offsetHeight,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
      });

      renderer.setSize(container.offsetWidth, container.offsetHeight);
      renderer.setClearColor(0x000000, 0);
      container.appendChild(renderer.domElement);

      // Store references
      sceneRef.current = scene;
      rendererRef.current = renderer;

      // Create particle system
      createParticleSystem(scene);

      // Create geometric shapes
      createFloatingGeometry(scene);

      // Camera position
      camera.position.z = 5;

      // Animation loop
      const animate = () => {
        animationIdRef.current = requestAnimationFrame(animate);

        const time = Date.now() * 0.001;

        // Rotate particles
        if (particlesRef.current) {
          particlesRef.current.rotation.x = time * 0.1;
          particlesRef.current.rotation.y = time * 0.2;

          // Mouse interaction
          particlesRef.current.rotation.x += mouseRef.current.y * 0.1;
          particlesRef.current.rotation.y += mouseRef.current.x * 0.1;
        }

        // Animate geometric shapes
        if (scene.userData.torus) {
          scene.userData.torus.rotation.x = time * 0.3;
          scene.userData.torus.rotation.y = time * 0.5;
          scene.userData.torus.position.y = 1 + Math.sin(time * 2) * 0.3;
        }

        if (scene.userData.octahedron) {
          scene.userData.octahedron.rotation.x = time * 0.4;
          scene.userData.octahedron.rotation.z = time * 0.3;
          scene.userData.octahedron.position.x =
            -2 + Math.cos(time * 1.5) * 0.5;
        }

        renderer.render(scene, camera);
      };

      animate();

      // Handle resize
      const handleResize = () => {
        const container = canvasContainerRef.current;
        if (!container || !camera || !renderer) return;

        camera.aspect = container.offsetWidth / container.offsetHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.offsetWidth, container.offsetHeight);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    };

    const createParticleSystem = (scene) => {
      const particleCount = 50;
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 10;
        positions[i + 1] = (Math.random() - 0.5) * 10;
        positions[i + 2] = (Math.random() - 0.5) * 10;

        colors[i] = 0.04; // R
        colors[i + 1] = 0.58; // G
        colors[i + 2] = 0.65; // B
      }

      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

      const material = new THREE.PointsMaterial({
        size: 0.1,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
      });

      const particles = new THREE.Points(geometry, material);
      particlesRef.current = particles;
      scene.add(particles);
    };

    const createFloatingGeometry = (scene) => {
      // Create wireframe torus
      const torusGeometry = new THREE.TorusGeometry(1, 0.3, 8, 16);
      const torusMaterial = new THREE.MeshBasicMaterial({
        color: 0x0993a5,
        wireframe: true,
        transparent: true,
        opacity: 0.3,
      });
      const torus = new THREE.Mesh(torusGeometry, torusMaterial);
      torus.position.set(2, 1, -2);
      scene.add(torus);

      // Create wireframe octahedron
      const octaGeometry = new THREE.OctahedronGeometry(0.8);
      const octaMaterial = new THREE.MeshBasicMaterial({
        color: 0x0993a5,
        wireframe: true,
        transparent: true,
        opacity: 0.2,
      });
      const octahedron = new THREE.Mesh(octaGeometry, octaMaterial);
      octahedron.position.set(-2, -1, -1);
      scene.add(octahedron);

      // Store references for animation
      scene.userData.torus = torus;
      scene.userData.octahedron = octahedron;
    };

    const cleanup = initThreeJS();

    // Cleanup function
    return () => {
      if (cleanup) cleanup();
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (rendererRef.current && canvasContainerRef.current) {
        canvasContainerRef.current.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
    };
  }, []);

  const handleMouseMove = (event) => {
    const container = canvasContainerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    mouseRef.current.x =
      ((event.clientX - rect.left) / container.offsetWidth) * 2 - 1;
    mouseRef.current.y =
      -((event.clientY - rect.top) / container.offsetHeight) * 2 + 1;
  };

  return (
    <div className="min-h-screen flex flex-wrap">
      {/* flex flex-wrap */}
      {/* Left side - Artistic collage */}
      <div className="w-full lg:w-1/2 relative md:block hidden overflow-hidden min-h-[50vh] lg:min-h-screen group">
        <img
          src="/images/image2.jpg"
          alt="Creative artwork collage"
          className="w-full h-full md:w-full md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 lg:to-black/40"></div>
      </div>

      {/* Right side - Content */}
      <div className="w-full lg:w-1/2 bg-gradient-to-br from-black to-gray-900 bg-black relative flex items-center justify-center px-6 sm:px-12 lg:px-16 py-12 min-h-[50vh] lg:min-h-screen overflow-hidden">
        {/* Three.js Canvas Container */}
        <div
          z
          ref={canvasContainerRef}
          className="absolute inset-0 z-0"
          onMouseMove={handleMouseMove}
        />

        {/* Floating CSS elements */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute top-1/4 left-1/10 w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-70"></div>
          <div
            className="absolute top-3/5 left-1/5 w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-70"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-2/5 right-1/5 w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-70"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-1/5 right-3/10 w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-70"
            style={{ animationDelay: "3s" }}
          ></div>
          <div
            className="absolute top-1/3 right-1/10 w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-70"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-cyan-500/5 z-10"></div>

        <div className="max-w-xl z-20 relative">
          {/* Lightbulb icon */}
          <div className="mb-8 transform transition-transform duration-300 hover:scale-110">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0993a5"
              strokeWidth="2"
              className="filter drop-shadow-lg animate-pulse"
            >
              <path d="M9 21h6" />
              <path d="M12 17v4" />
              <path d="M12 3a6 6 0 0 1 6 6c0 3-2 5.5-2 8H8c0-2.5-2-5-2-8a6 6 0 0 1 6-6z" />
            </svg>
          </div>

          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight animate-fadeInUp">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              Welcome to the Future of Tech
            </span>
          </h1>

          {/* Description text */}
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed animate-fadeInUp opacity-90">
            In today’s fast-changing world, technology isn’t just support—it’s
            strategy. See how innovation turns obstacles into growth.
          </p>

          {/* CTA Button */}
          <div className="mt-8 animate-fadeInUp">
            <button className="group relative px-8 py-3 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:from-cyan-500 hover:to-cyan-600 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25">
              <span className="relative z-10">
                Explore Innovation <i className="ri-arrow-right-down-line"></i>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }

        .animate-fadeInUp:nth-child(2) {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animate-fadeInUp:nth-child(3) {
          animation-delay: 0.4s;
          opacity: 0;
        }

        .animate-fadeInUp:nth-child(4) {
          animation-delay: 0.6s;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default AnimatedTechPage;
