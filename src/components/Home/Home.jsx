import { useRef, useEffect, useState } from "react";

import "./Home.css";
import ScrollingRow from "./ScrollingRow.jsx";
import LeafletMap from "../LeafletMap.jsx";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import * as THREE from "three";
import AnimatedTechPage from "./AnimatedTechPage.jsx";
import AnimatedThirdPage from "./AnimatedThirdPage.jsx";
import AnimatedStatsPage from "./AnimatedStatsPage.jsx";
import AnimatedLineChart from "./AnimatedLineChart.jsx";
import AnimatedServicesTable from "./AnimatedServicesTable.jsx";
import HowWeWorkSection from "./HowWeWorkSection.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const Home = () => {
  // useEffect(() => {
  //   let split = new SplitText(".H1", { type: "chars" });

  //   // Animate heading characters
  //   gsap.from(split.chars, {
  //     opacity: 0,
  //     y: 50,
  //     stagger: 0.05,
  //     duration: 1,
  //     ease: "power3.out",
  //   });
  // }, []);

  const data = [
    { month: "Jan", uptime: 40, supportHours: 5 },
    { month: "Feb", uptime: 57, supportHours: 21 },
    { month: "Mar", uptime: 80, supportHours: 27 },
    { month: "Apr", uptime: 87, supportHours: 38 },
    { month: "May", uptime: 95, supportHours: 48 },
    { month: "Jun", uptime: 99, supportHours: 56 },
  ];

  return (
    <div id="HOME">
      <div className="FirstPAGE w-full h-[80vh] md:h-[87vh]">
        <div
          className="bg-image absolute inset-0 z-0 bg-cover bg-center bg-landing"
          style={{
            backgroundImage: "url('/images/1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          ></div>

          <div className="w-full h-[98vh] font-bold text-white flex flex-col items-start justify-center px-4 md:px-10 lg:px-20">
            <h1 className="H1 text-[5rem] md:text-[6rem] lg:text-[7rem] flex items-start">
              <span className="text-[3.7rem] md:text-[5rem] lg:text-[6rem] font-bold text-center pl-2 md:pl-5 lg:pl-1">
                MIRACLE IT SERVICES
              </span>
            </h1>

            <p
              style={{
                display: "inline-block",
                fontWeight: "lighter",
                fontSize: "1.5rem",
                color: "#ffffff",
                paddingLeft: "1rem",
                textAlign: "center",
              }}
              className="md:text-left"
            >
              We're here, for innovative and precious IT solutions.
            </p>
          </div>

          <div className="md:block hidden">
            <div className="absolute inset-x-0 bottom-0 flex w-full flex-row items-center justify-center gap-4 md:gap-10 lg:gap-36 text-white text-[1rem] md:text-[1.2rem] font-light pb-6">
              <p className="w-40 md:w-60 text-center P1">
                Empowering Businesses with Advanced Gadgets
              </p>
              <p className="w-40 md:w-60 text-center P1">IT Solutions by MIS</p>
              <p className="w-40 md:w-60 text-center P1">
                {new Date().toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Other Sections */}

      <AnimatedTechPage />

      <AnimatedThirdPage />

      <AnimatedStatsPage />

      <AnimatedLineChart />

      <AnimatedServicesTable />

      <HowWeWorkSection />

      <div className="SeventhPage relative bg-black py-16 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            What Our Clients Say
          </h2>

          <ScrollingRow direction="left" speed={0.3} />
          <br />
          <ScrollingRow direction="right" speed={0.3} />
          <br />
          <ScrollingRow direction="left" speed={0.5} />
        </div>
      </div>

      <div className="EIGHTPage bg-black relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(
        45deg,
        transparent,
        transparent 20px,
        #374151 20px,
        #374151 21px
      )`,
          }}
        />

        {/* Main content centered */}
        <div className="flex items-center justify-center min-h-screen p-8">
          <div className="relative">
            {/* Gradient border container */}
            <div className="relative p-[0.05rem] bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 rounded-lg">
              {/* Main content box */}
              <div className="bg-black rounded-lg px-8 md:px-16 py-8 md:py-12 max-w-4xl">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-white mb-6 leading-tight">
                    Thank You for Connecting with Miracle
                  </h1>
                  <p className="text-gray-300 text-base leading-relaxed max-w-2xl mx-auto">
                    We're excited to support your IT needs — from systems to
                    security. Reach out to us anytime for personalized
                    solutions, partnerships, or technical assistance.
                  </p>
                </div>
              </div>

              {/* Corner markers */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-white"></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-white"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-white"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-white"></div>
            </div>
          </div>
        </div>

        {/* Contact information in bottom right */}
        <div
          style={{
            width: "90%",
            height: "50vh",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            margin: "150px auto",
          }}
        >
          <LeafletMap />
        </div>

        <div
          id="Enquiry"
          className="w-screen flex flex-wrap md:justify-center justify-start md:items-center items-start md:absolute md:bottom-12 md:right-12 z-50 gap-3 p-4"
        >
          {/* Email */}
          <div className="flex items-center gap-4">
            <div className="bg-purple-500 text-white px-5 py-2 rounded md:rounded-full text-sm font-medium">
              Email
            </div>
            <div className="bg-gray-800 text-gray-300 px-6 py-2 rounded md:rounded-full text-sm">
              info@miracleit.in
            </div>
          </div>

          {/* Website */}
          <div className="flex items-center gap-4">
            <div className="bg-pink-500 text-white px-5 py-2 rounded md:rounded-full text-sm font-medium">
              Contact No.
            </div>
            <div className="bg-gray-800 text-gray-300 px-6 py-2 rounded md:rounded-full text-sm">
              +91 9871331804
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center gap-4">
            <div className="bg-emerald-500 text-white px-5 py-2 rounded md:rounded-full text-sm font-medium">
              Address
            </div>
            <div className="bg-gray-800 text-gray-300 px-6 py-2 rounded md:rounded-full text-sm">
              Regd Office:- H.N. 680, Azmatgarh, Mansurpur,
              <br /> Muzaffarnagar, Uttar Pradesh- 251203, India.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
