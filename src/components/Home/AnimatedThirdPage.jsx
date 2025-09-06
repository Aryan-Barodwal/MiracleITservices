import React, { useEffect, useRef, useState } from "react";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  SphereGeometry,
  MeshBasicMaterial,
  Mesh,
  BufferGeometry,
  LineBasicMaterial,
  Line,
  Vector3,
} from "three";

const AnimatedThirdPage = () => {
  const canvasContainerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const animationIdRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  // Define bullet points data
  const bulletPoints = [
    {
      gradient: "from-purple-900 to-purple-400",
      text: "Personalized IT services with a hands-on approach.",
      delay: "0.2s",
    },
    {
      gradient: "from-pink-900 to-rose-400",
      text: "Reliable support for desktops, laptops, and servers.",
      delay: "0.4s",
    },
    {
      gradient: "from-teal-900 to-emerald-400",
      text: "One point of contact — fast, direct, and trustworthy service.",
      delay: "0.6s",
    },
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    const currentRef = canvasContainerRef.current;
    if (currentRef) {
      observer.observe(currentRef.parentElement);
    }

    return () => {
      if (currentRef && currentRef.parentElement) {
        observer.unobserve(currentRef.parentElement);
      }
    };
  }, []);

  // Single Three.js initialization useEffect
  useEffect(() => {
    if (!canvasContainerRef.current) return;

    const initThreeJS = () => {
      const container = canvasContainerRef.current;

      // Scene setup
      const scene = new Scene();
      const camera = new PerspectiveCamera(
        75,
        container.offsetWidth / container.offsetHeight,
        0.1,
        1000
      );
      const renderer = new WebGLRenderer({
        alpha: true,
        antialias: true,
      });

      renderer.setSize(container.offsetWidth, container.offsetHeight);
      renderer.setClearColor(0x000000, 0);
      container.appendChild(renderer.domElement);

      sceneRef.current = scene;
      rendererRef.current = renderer;

      // Create animated elements
      createFloatingOrbs(scene);
      createNetworkLines(scene);

      camera.position.z = 8;

      // Animation loop
      const animate = () => {
        animationIdRef.current = requestAnimationFrame(animate);

        const time = Date.now() * 0.001;

        // Animate floating orbs
        scene.children.forEach((child, index) => {
          if (child.userData.type === "orb") {
            child.rotation.x = time * 0.5 + index;
            child.rotation.y = time * 0.3 + index;
            child.position.y =
              child.userData.originalY + Math.sin(time * 2 + index) * 0.5;

            // Mouse interaction
            child.position.x +=
              (mouseRef.current.x * 2 - child.position.x) * 0.02;
            child.position.z += (mouseRef.current.y - child.position.z) * 0.02;
          }

          if (child.userData.type === "network") {
            child.rotation.z = time * 0.1;
            child.material.opacity = 0.1 + Math.sin(time * 3) * 0.05;
          }
        });

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

    const createFloatingOrbs = (scene) => {
      const orbCount = 8;

      for (let i = 0; i < orbCount; i++) {
        const geometry = new SphereGeometry(0.1 + Math.random() * 0.1, 16, 16);

        // Different colors for variety
        const colors = [0x9333ea, 0xec4899, 0x14b8a6]; // purple, pink, teal
        const material = new MeshBasicMaterial({
          color: colors[i % 3],
          transparent: true,
          opacity: 0.6,
        });

        const orb = new Mesh(geometry, material);

        // Random positioning
        orb.position.x = (Math.random() - 0.5) * 12;
        orb.position.y = (Math.random() - 0.5) * 8;
        orb.position.z = (Math.random() - 0.5) * 4;

        orb.userData = {
          type: "orb",
          originalY: orb.position.y,
        };

        scene.add(orb);
      }
    };

    const createNetworkLines = (scene) => {
      const points = [];
      const lineCount = 20;

      for (let i = 0; i < lineCount; i++) {
        points.push(
          new Vector3(
            (Math.random() - 0.5) * 15,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 5
          )
        );
      }

      const geometry = new BufferGeometry().setFromPoints(points);
      const material = new LineBasicMaterial({
        color: 0x14b8a6,
        transparent: true,
        opacity: 0.15,
      });

      const network = new Line(geometry, material);
      network.userData.type = "network";
      scene.add(network);
    };

    const cleanup = initThreeJS();

    return () => {
      if (cleanup) cleanup();
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (rendererRef.current && canvasContainerRef.current) {
        try {
          const canvas = rendererRef.current.domElement;
          if (canvas && canvas.parentNode === canvasContainerRef.current) {
            canvasContainerRef.current.removeChild(canvas);
          }
          rendererRef.current.dispose();
        } catch (error) {
          console.warn("Cleanup error:", error);
        }
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
    <div className="min-h-screen bg-black flex flex-col lg:flex-row relative overflow-hidden">
      {/* Three.js Background Canvas */}
      <div
        ref={canvasContainerRef}
        className="absolute inset-0 z-0"
        onMouseMove={handleMouseMove}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-500/20 rounded-full animate-ping"></div>
        <div
          className="absolute top-3/4 left-1/6 w-1 h-1 bg-pink-500/30 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 w-3 h-3 bg-teal-500/20 rounded-full animate-ping"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-emerald-500/40 rounded-full animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      {/* Left side - Content */}
      <div className="flex-1 p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative z-20 order-2 lg:order-1">
        <h1
          className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-8 sm:mb-12 lg:mb-16 leading-tight transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent animate-pulse">
            Why Choose Miracle?
          </span>
          <br />
          <span className="text-white">in Business</span>
        </h1>

        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          {bulletPoints.map((point, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 sm:gap-6 transition-all duration-1000 transform ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
              style={{ transitionDelay: point.delay }}
            >
              <div
                className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br ${point.gradient} flex-shrink-0 relative overflow-hidden group`}
              >
                {/* Animated shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                {/* Pulsing ring */}
                <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping"></div>

                {/* Inner glow */}
                <div className="absolute inset-2 rounded-full bg-white/10 animate-pulse"></div>
              </div>

              <p className="text-white text-base sm:text-lg lg:text-xl leading-relaxed pt-1 sm:pt-2 flex-1">
                {point.text}
              </p>
            </div>
          ))}
        </div>

        {/* Additional CTA Section */}
        <div
          className={`mt-8 sm:mt-12 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "0.8s" }}
        >
          <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-teal-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
            <a href="/contact">
              <span className="relative z-10 text-sm sm:text-base">
                Get Started Today
              </span>
            </a>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="flex-1 relative order-1 lg:order-2 min-h-[40vh] lg:min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/60 z-10"></div>

        {/* Your image */}
        <img
          src="/images/image30.png"
          alt="Silhouette of person"
          className={`w-full h-full hidden object-cover transition-all duration-1000 transform ${
            isVisible ? "scale-100 opacity-100" : "scale-110 opacity-80"
          }`}
          onError={(e) => {
            // Fallback to placeholder if image fails to load
            e.target.src =
              "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
          }}
        />

        {/* Overlay effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10"></div>

        {/* Floating geometric shapes */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-4 h-4 border border-purple-400/30 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-1/3 right-1/6 w-6 h-6 border border-pink-400/20 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-teal-400/20 rotate-45 animate-bounce"></div>
        </div>
      </div>

      {/* <style >{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        @media (max-width: 1023px) {
          .order-1 {
            order: 1;
          }
          .order-2 {
            order: 2;
          }
        }
      `}</style> */}
    </div>
  );
};

export default AnimatedThirdPage;
