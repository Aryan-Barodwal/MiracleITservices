import React, { useEffect, useRef } from "react";

const testimonials = [
  {
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    name: "@rahulsharma",
    text: "Miracle IT Services completely revamped our network infrastructure. Their team ensured seamless connectivity and optimized our servers. Now our downtime is almost zero!",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "@snehakapoor",
    text: "We signed up for their AMC package, and it’s been a lifesaver. No more IT headaches—regular maintenance, quick support, and excellent customer service.",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/66.jpg",
    name: "@anand_mehta",
    text: "Our business relies on uninterrupted server performance. Miracle IT Services set up and now manages our servers 24/7. Reliable and highly professional team!",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/67.jpg",
    name: "@pallavi_t",
    text: "They don’t just fix problems—they prevent them. From firewall configuration to network monitoring, their proactive IT support keeps us running smoothly.",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/77.jpg",
    name: "@vikram_enterprises",
    text: "Their IT consultancy guided us in choosing the right hardware and software for our growing business. Saved us a lot of costs while improving efficiency.",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "@global_tech_solutions",
    text: "We were struggling with data security, but Miracle IT Services provided an end-to-end solution with backups, encryption, and monitoring. Now we feel fully secure.",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/69.jpg",
    name: "@ridhima_official",
    text: "The team is always just a call away. Quick response times and remote support make it feel like they are part of our in-house IT department.",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/78.jpg",
    name: "@arjunpatel",
    text: "Highly recommend Miracle IT Services for any SME or enterprise. Their AMC and server management services are top-notch and very cost-effective.",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/79.jpg",
    name: "@creative_studio",
    text: "Our office network was a mess before they came in. Structured cabling, secure Wi-Fi, and seamless connectivity—they transformed our workplace IT environment.",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/80.jpg",
    name: "@tech_vision",
    text: "Miracle IT Services provided us with tailored IT solutions. From cloud migration to endpoint security, they ensured our digital transformation was smooth and efficient.",
  },
];

const ScrollingRow = ({ direction = "left", speed = 0.5 }) => {
  const containerRef = useRef(null);
  const translateX = useRef(0);
  const animationRef = useRef();

  useEffect(() => {
    const animate = () => {
      const container = containerRef.current;
      if (!container) return;

      translateX.current += direction === "left" ? -speed : speed;

      const totalWidth = container.scrollWidth / 2;

      // Loop
      if (translateX.current <= -totalWidth) {
        translateX.current = 0;
      } else if (translateX.current >= 0) {
        translateX.current = -totalWidth;
      }

      container.style.transform = `translateX(${translateX.current}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [direction, speed]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* 🔹 Left Gradient Overlay */}
      <div className="pointer-events-none absolute top-0 left-0 h-full md:w-24 w-6 z-10 bg-gradient-to-r from-black via-black/80 to-transparent" />

      {/* 🔹 Right Gradient Overlay */}
      <div className="pointer-events-none absolute top-0 right-0 h-full md:w-24 w-6 z-10 bg-gradient-to-l from-black via-black/80 to-transparent" />

      {/* 🔹 Scrolling Content */}
      <div
        ref={containerRef}
        className="flex gap-6 will-change-transform relative z-0"
        style={{ width: "max-content" }}
      >
        {[...testimonials, ...testimonials].map((item, idx) => (
          <div
            key={idx}
            className="min-w-[340px] md:min-w-[540px] max-w-[350px] bg-[#15121f] p-6 rounded-2xl border border-[#2b273b] text-white flex flex-col gap-4 shadow-md"
          >
            <p className="text-sm leading-relaxed whitespace-normal break-words">
              {item.text}
            </p>
            <div className="flex items-center gap-3 pt-4">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-10 h-10 rounded-full border-2 border-yellow-400"
              />
              <span className="text-sm text-white/80">{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingRow;
