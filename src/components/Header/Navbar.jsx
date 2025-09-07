import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { Slant as Hamburger } from "hamburger-react";
import gsap from "gsap";

import { Canvas } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import toast, { Toaster } from "react-hot-toast";

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);
  const location = useLocation();
  const isActiveRoute = location.pathname !== "/";
  const [isOpen, setOpen] = useState(false);

  const handleMove = () => {
    gsap.to("#buttonNav", {
      color: "black",
      duration: 1,
      backgroundColor: "white",
    });
  };

  const notify = () => toast("Coming Soon! 🚧");

  const handleLeave = () => {
    gsap.to("#buttonNav", {
      color: "white",
      duration: 1,
      backgroundColor: "black",
    });
  };

  function Stars() {
    const particles = new Float32Array(500).map(
      () => (Math.random() - 0.5) * 10
    );

    return (
      <Points positions={particles} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#3b82f6"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    );
  }

  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest(".megamenu")
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <div
      id="Nav"
      className={` ${isActiveRoute ? "bg-black" : "bg-transparent"}`}
    >
      <div
        id="navbar"
        className="p-3 w-full flex justify-around sm:px-80 md:px-0 items-center text-white relative"
      >
        {/* Left side logoNEW */}
        <div id="first">
          <h2 className="text-gray-300 flex items-center gap-2">
            <span className="text-[#FD356E]">
              <img className="w-12" src="/images/logoNEW.png" alt="logoNEW" />
            </span>
            <span className="font-bold text-xl">MIRACLE</span>
          </h2>
        </div>

        {/* Right-side Menu */}
        <div className="md:block hidden">
          <div id="third" className="flex gap-4 items-center ">
            {/* Services with dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <h1 className="cursor-pointer flex items-center gap-1">
                Services <i className="ri-arrow-drop-down-line text-xl"></i>
              </h1>

              {showDropdown && (
                <div className="absolute top-[1.85rem] left-[-229px] bg-white text-black shadow-xl px-8 py-8 w-[780px] grid grid-cols-3 gap-4 z-50 border-t-[4px] border-blue-500">
                  <Link
                    to="/services"
                    className="absolute top-2 right-2 w-6 h-6 border-[2px] border-black rounded-full flex items-center justify-center"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>

                  {/* Column 1 */}
                  <div>
                    <h2 className="font-semibold text-lg mb-3">
                      IT Support & Maintenance
                    </h2>
                    <ul className="space-y-2 text-sm">
                      <li className="hover:text-blue-600 cursor-pointer">
                        Desktop & Laptop Support
                      </li>
                      <li className="hover:text-blue-600 cursor-pointer">
                        Server Installation & Maintenance
                      </li>
                      <li className="hover:text-blue-600 cursor-pointer">
                        Annual Maintenance Contracts (AMC)
                      </li>
                      <li className="hover:text-blue-600 cursor-pointer">
                        Remote IT Support
                      </li>
                      <li className="hover:text-blue-600 cursor-pointer">
                        Data Backup & Recovery
                      </li>
                    </ul>
                  </div>

                  {/* Column 2 */}
                  <div>
                    <h2 className="font-semibold text-lg mb-3">
                      Network & Security
                    </h2>
                    <ul className="space-y-2 text-sm">
                      <li className="hover:text-blue-600 cursor-pointer">
                        Firewall & Network Security
                      </li>
                      <li className="hover:text-blue-600 cursor-pointer">
                        Wired Networking
                      </li>
                      <li className="hover:text-blue-600 cursor-pointer">
                        Wireless Networking
                      </li>
                      <li className="hover:text-blue-600 cursor-pointer">
                        VPN Setup & Management
                      </li>
                      <li className="hover:text-blue-600 cursor-pointer">
                        Endpoint Security Solutions
                      </li>
                    </ul>
                  </div>

                  {/* Column 3 */}
                  <div>
                    <h2 className="font-semibold text-lg mb-3">
                      IT Hardware & Solutions
                    </h2>
                    <ul className="space-y-2 text-sm">
                      <li className="hover:text-blue-600 cursor-pointer">
                        IT Components Supply
                      </li>
                      <li className="hover:text-blue-600 cursor-pointer">
                        Printer & Peripheral Support
                      </li>
                      <li className="hover:text-blue-600 cursor-pointer">
                        Software Installation & Licensing
                      </li>
                      <li className="hover:text-blue-600 cursor-pointer">
                        Cloud Setup & Migration
                      </li>
                      <li className="hover:text-blue-600 cursor-pointer">
                        Email & Collaboration Tools
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <Link to="/about-us">
              <h1 className="cursor-pointer">About Us</h1>
            </Link>
            {/* Blog */}
            <h1 onClick={notify} className="cursor-pointer ">
              Blog
            </h1>

            {/* Enquiry Button */}
            <button
              id="buttonNav"
              className="p-1 px-5 border-[3px] border-[#0895B6] bg-[#0895B6] text-white rounded-2xl"
              type="button"
            >
              <Link to="/contact">Enquiry</Link>
            </button>

            {/* Stars by People Button */}
            <button
              id="buttonNav"
              className="p-1 px-5 border-[3px] border-white bg-black text-white rounded-2xl"
              type="button"
            >
              Stars by People 4+{" "}
              <i className="ri-gemini-fill text-yellow-400"></i>
            </button>
          </div>
        </div>

        <div ref={menuRef} className="block md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} />
          <div
            className={`mobile-menu fixed text-[1.05rem] z-[9999] left-0 top-0 w-[68vw] h-screen bg-[#000] text-white overflow-y-auto transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex flex-col gap-4 items-start p-8">
              <h2 className="text-gray-300 flex items-center gap-2">
                <span className="text-[#FD356E]">
                  <img
                    className="w-12"
                    src="/images/logoNEW.png"
                    alt="logoNEW"
                  />
                </span>
                <span className="font-bold text-xl">MIRACLE</span>
              </h2>

              {/* Services with dropdown */}
              <div>
                {/* Services Button */}
                <h1
                  className="cursor-pointer flex items-center gap-1"
                  onClick={() => setShowMobileDropdown(!showMobileDropdown)}
                >
                  Services{" "}
                  <i
                    className={`ri-arrow-drop-down-line text-xl transition-transform duration-300 ${
                      showMobileDropdown ? "rotate-180" : ""
                    }`}
                  ></i>
                </h1>

                {/* Dropdown with 3D background */}
                <div
                  className={`relative overflow-hidden transition-all duration-500 ease-in-out ${
                    showMobileDropdown
                      ? "max-h-[1000px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {/* Three.js background */}
                  {showMobileDropdown && (
                    <div className="absolute inset-0 z-50">
                      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                        <Stars />
                      </Canvas>
                    </div>
                  )}

                  {/* Dropdown Content */}
                  <div className="mt-3 bg-black/80 text-white shadow-md px-4 py-6 rounded-lg space-y-6 border-t border-b border-blue-500">
                    {/* IT Support */}
                    <div>
                      <h2 className="font-semibold text-base mb-2">
                        IT Support & Maintenance
                      </h2>
                      <ul className="space-y-1 text-sm">
                        <li className="hover:text-blue-400 cursor-pointer">
                          Desktop & Laptop Support
                        </li>
                        <li className="hover:text-blue-400 cursor-pointer">
                          Server Installation & Maintenance
                        </li>
                        <li className="hover:text-blue-400 cursor-pointer">
                          AMC Services
                        </li>
                        <li className="hover:text-blue-400 cursor-pointer">
                          Remote IT Support
                        </li>
                        <li className="hover:text-blue-400 cursor-pointer">
                          Data Backup & Recovery
                        </li>
                      </ul>
                    </div>

                    {/* Networking */}
                    <div>
                      <h2 className="font-semibold text-base mb-2">
                        Network & Security
                      </h2>
                      <ul className="space-y-1 text-sm">
                        <li className="hover:text-blue-400 cursor-pointer">
                          Firewall Security
                        </li>
                        <li className="hover:text-blue-400 cursor-pointer">
                          Wired Networking
                        </li>
                        <li className="hover:text-blue-400 cursor-pointer">
                          Wireless Networking
                        </li>
                        <li className="hover:text-blue-400 cursor-pointer">
                          VPN Setup
                        </li>
                      </ul>
                    </div>

                    {/* IT Solutions */}
                    <div>
                      <h2 className="font-semibold text-base mb-2">
                        IT Hardware & Solutions
                      </h2>
                      <ul className="space-y-1 text-sm">
                        <li className="hover:text-blue-400 cursor-pointer">
                          IT Components Supply
                        </li>
                        <li className="hover:text-blue-400 cursor-pointer">
                          Cloud Setup & Migration
                        </li>
                        <li className="hover:text-blue-400 cursor-pointer">
                          Email & Collaboration Tools
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <Link to="/about-us">
                <h1 className="cursor-pointer">About Us</h1>
              </Link>

              {/* Blog */}
              <h1 onClick={notify} className="cursor-pointer ">
                Blog
              </h1>

              {/* Enquiry Button */}
              <button
                id="buttonNav"
                className="p-1 px-5 border-[3px] border-[#0895B6] bg-[#0895B6] text-white rounded-2xl"
                type="button"
              >
                <Link to="/contact">Enquiry</Link>
              </button>

              {/* Stars by People Button */}
              <button
                id="buttonNav"
                className="p-1 px-5 border-[3px] border-white bg-black text-white rounded-2xl"
                type="button"
              >
                Stars by People 4
                <i className="ri-gemini-fill text-yellow-400"></i>
              </button>
            </div>

            {/* <div className="absolute ">
              <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <Stars />
              </Canvas>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
