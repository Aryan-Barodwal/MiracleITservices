import React, { useEffect, useRef, useState } from 'react';
import { 
  Scene, 
  PerspectiveCamera, 
  WebGLRenderer, 
  PlaneGeometry,
  ShaderMaterial,
  Mesh,
  Vector2,
  Clock,
  BufferGeometry,
  BufferAttribute,
  PointsMaterial,
  Points
} from 'three';
import { Link } from 'react-router-dom';

// CountUp component
const CountUp = ({ from, to, duration, className }) => {
  const [count, setCount] = useState(from);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const startValue = from;
    const endValue = to;
    const durationMs = duration * 1000;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / durationMs, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
      const currentValue = Math.round(startValue + (endValue - startValue) * easeProgress);
      
      setCount(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [isVisible, from, to, duration]);

  return <span ref={ref} className={className}>{count}</span>;
};

const AnimatedStatsPage = () => {
  const cardRefs = useRef([]);
  const sceneRefs = useRef([]);
  const rendererRefs = useRef([]);
  const animationIds = useRef([]);
  const [isVisible, setIsVisible] = useState(false);

  // Statistics data
  const statsData = [
    {
      number: 25,
      suffix: "years",
      description: "IT services experience",
      index: "/01"
    },
    {
      number: 500,
      suffix: "+",
      description: "Satisfied Clients", 
      index: "/02"
    },
    {
      number: 1,
      suffix: "day",
      description: "Average Response Time",
      index: "/03"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (cardRefs.current[0]?.parentElement) {
      observer.observe(cardRefs.current[0].parentElement);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const initThreeJS = (container, index) => {
      if (!container) return null;

      const scene = new Scene();
      const camera = new PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
      const renderer = new WebGLRenderer({ alpha: true, antialias: true });
      
      renderer.setSize(container.offsetWidth, container.offsetHeight);
      renderer.setClearColor(0x000000, 0);
      container.appendChild(renderer.domElement);

      // Create animated background plane with shader
      const geometry = new PlaneGeometry(4, 4, 32, 32);
      const material = new ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          resolution: { value: new Vector2(container.offsetWidth, container.offsetHeight) },
          cardIndex: { value: index }
        },
        vertexShader: `
          uniform float time;
          uniform float cardIndex;
          varying vec2 vUv;
          varying float vElevation;
          
          void main() {
            vUv = uv;
            vec3 pos = position;
            
            float elevation = sin(pos.x * 3.0 + time * 2.0 + cardIndex) * 0.1 +
                            sin(pos.y * 2.0 + time * 1.5 + cardIndex) * 0.1;
            pos.z += elevation;
            vElevation = elevation;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
        fragmentShader: `
          uniform float time;
          uniform float cardIndex;
          varying vec2 vUv;
          varying float vElevation;
          
          void main() {
            float strength = (vElevation + 0.2) * 2.5;
            vec3 color = vec3(0.04, 0.58, 0.65); // #0993a5 color
            
            // Add some variation based on card index
            if (cardIndex == 1.0) color = vec3(0.4, 0.2, 0.8); // Purple tint
            if (cardIndex == 2.0) color = vec3(0.8, 0.2, 0.4); // Pink tint
            
            gl_FragColor = vec4(color * strength, 0.3);
          }
        `,
        transparent: true
      });

      const plane = new Mesh(geometry, material);
      scene.add(plane);

      // Add floating particles
      const particleCount = 30;
      const particleGeometry = new BufferGeometry();
      const positions = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 6;
        positions[i + 1] = (Math.random() - 0.5) * 6;
        positions[i + 2] = (Math.random() - 0.5) * 2;
      }

      particleGeometry.setAttribute('position', new BufferAttribute(positions, 3));

      const particleMaterial = new PointsMaterial({
        color: 0x0993a5,
        size: 0.05,
        transparent: true,
        opacity: 0.6
      });

      const particles = new Points(particleGeometry, particleMaterial);
      scene.add(particles);

      camera.position.z = 3;

      const clock = new Clock();

      const animate = () => {
        animationIds.current[index] = requestAnimationFrame(animate);

        const elapsedTime = clock.getElapsedTime();
        
        // Update shader uniforms
        material.uniforms.time.value = elapsedTime;
        
        // Animate particles
        const posArray = particles.geometry.attributes.position.array;
        for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3;
          posArray[i3 + 1] += Math.sin(elapsedTime * 2 + i) * 0.01;
          posArray[i3] += Math.cos(elapsedTime * 1.5 + i) * 0.005;
        }
        particles.geometry.attributes.position.needsUpdate = true;
        
        // Rotate particles slightly
        particles.rotation.z = elapsedTime * 0.1;

        renderer.render(scene, camera);
      };

      animate();

      const handleResize = () => {
        if (!container) return;
        camera.aspect = container.offsetWidth / container.offsetHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.offsetWidth, container.offsetHeight);
        material.uniforms.resolution.value.set(container.offsetWidth, container.offsetHeight);
      };

      window.addEventListener('resize', handleResize);

      return {
        scene,
        renderer,
        cleanup: () => {
          window.removeEventListener('resize', handleResize);
        }
      };
    };

    // Initialize Three.js for each card
    cardRefs.current.forEach((cardRef, index) => {
      if (cardRef) {
        const canvas = cardRef.querySelector('.three-canvas');
        if (canvas) {
          const threeJS = initThreeJS(canvas, index);
          if (threeJS) {
            sceneRefs.current[index] = threeJS.scene;
            rendererRefs.current[index] = threeJS.renderer;
          }
        }
      }
    });

    return () => {
      // Cleanup
      animationIds.current.forEach(id => {
        if (id) cancelAnimationFrame(id);
      });
      
      rendererRefs.current.forEach((renderer, index) => {
        if (renderer && cardRefs.current[index]) {
          const canvas = cardRefs.current[index].querySelector('.three-canvas');
          if (canvas && renderer.domElement.parentNode === canvas) {
            canvas.removeChild(renderer.domElement);
          }
          renderer.dispose();
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute top-8 sm:top-16 right-8 sm:right-32 w-32 sm:w-64 h-32 sm:h-64 opacity-30 sm:opacity-100">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full animate-pulse"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 40 Q40 20 60 40 Q80 60 100 40 Q120 20 140 40 Q160 60 180 40 L180 80 Q160 100 140 80 Q120 60 100 80 Q80 100 60 80 Q40 60 20 80 Z"
            stroke="#0993a5"
            strokeWidth="3"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M30 100 Q50 80 70 100 Q90 120 110 100 Q130 80 150 100 Q170 120 190 100 L190 140 Q170 160 150 140 Q130 120 110 140 Q90 160 70 140 Q50 120 30 140 Z"
            stroke="#0993a5"
            strokeWidth="3"
            fill="none"
            style={{ animationDelay: '0.5s' }}
            className="animate-pulse"
          />
          <path
            d="M40 160 Q60 140 80 160 Q100 180 120 160 Q140 140 160 160 Q180 180 200 160"
            stroke="#0993a5"
            strokeWidth="3"
            fill="none"
            style={{ animationDelay: '1s' }}
            className="animate-pulse"
          />
        </svg>
      </div>

      {/* Small decorative dots */}
      <div className="absolute top-16 sm:top-32 right-24 sm:right-96 w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
      <div className="absolute top-12 sm:top-24 right-20 sm:right-80 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>

      <div className="container mx- px-4 sm:px-6 py-8 sm:py-16">
        {/* Main heading */}
        <div className={`max-w-2xl mb-12 sm:mb-20 p-4 sm:p-8 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
              MIRACLE IT 
            </span>
            <br />
            <span className="text-white">Powering</span>
            <br />
            <span className="text-white">Your Technology</span>
          </h1>
          {/* Accent line */}
          <div className="mt-4 flex items-center">
            <div className="w-8 sm:w-12 h-1 bg-[#0993a5] animate-pulse"></div>
            <div className="w-2 sm:w-3 h-2 sm:h-3 bg-[#0993a5] rotate-45 ml-2 animate-spin-slow"></div>
          </div>
        </div>

        {/* Statistics cards */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 sm:gap-6 max-w-7xl mx-auto">
          {statsData.map((stat, index) => (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              className={`bg-gray-800/80 w-full sm:w-80 h-60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 relative overflow-hidden group hover:scale-105 transition-all duration-500 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              {/* Three.js Canvas Background */}
              <div className="three-canvas absolute inset-0 z-0"></div>
              
              {/* Content overlay */}
              <div className="relative z-10">
                <div className="text-3xl sm:text-5xl font-bold mb-4">
                  <CountUp
                    from={0}
                    to={stat.number}
                    duration={2}
                    className="text-[#0993a5] font-[900]"
                  />
                  <span className="text-[#0993a5] ml-1">{stat.suffix}</span>
                </div>
                <div className="text-gray-300 text-base sm:text-lg mb-8">
                  {stat.description}
                </div>
                <div className=" text-white font-mono text-lg sm:text-xl opacity-50">
                  {stat.index}
                  {/* absolute bottom-4 sm:bottom-6 left-6 sm:left-8 */}
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[5]"></div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl border border-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className={`text-center mt-12 sm:mt-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: '0.8s' }}>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
            <Link to="/contact"><span className="relative z-10">Start Your journey</span></Link>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimatedStatsPage;
