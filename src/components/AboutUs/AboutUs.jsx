import React from "react";
import { ArrowRight } from "lucide-react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <div className="bg-black text-white min-h-screen flex items-center justify-center px-6 py-12">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section - Image */}
          <div className="flex flex-col">
            <div className="flex items-center mb-6">
              <p className="text-cyan-400 font-semibold text-sm tracking-wider">
                MIRACLE CO.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden border border-gray-900 relative">
              <img
                src="/images/about-3.png"
                alt="Our Team"
                className="w-full h-full object-cover rounded-xl" // <- added rounding
              />
              {/* Bottom Cyan Strip (same as right) */}
              <div className="absolute bottom-0 left-0 w-full h-3 bg-gray-800 rounded-b-xl"></div>
            </div>
          </div>

          {/* Right Section - About Content */}
          <div className="flex flex-col justify-center border border-cyan-400 rounded-xl relative p-8">
            {/* Top Cyan Tab */}
            <div className="absolute -top-[1px] left-1/2 transform -translate-x-1/2 w-20 h-2 bg-cyan-400"></div>

            {/* Heading */}
            <h1 className="main2 text-6xl font-bold leading-none">
              WHO <br />
              <span className="text-cyan-400">WE ARE</span>
            </h1>

            {/* Subheading */}
            <p className="main2 mt-4 text-lg font-semibold">
              Our Vision & Approach
            </p>
            <div className="w-20 h-[1px] bg-cyan-400 mt-1 mb-6"></div>

            {/* Description */}
            <p className="text-sm text-cyan-400 max-w-sm mb-6">
              We are a team of creatives turning your ideas into impactful
              experiences. Whether you are starting out or revamping your brand,
              we combine strategy, design, and technology to make it happen.
            </p>

            {/* Key Points */}
            <div className="space-y-3 text-sm main2">
              <p>
                <i className="ri-arrow-right-double-fill"></i> Innovative
                digital solutions
              </p>
              <p>
                <i className="ri-arrow-right-double-fill"></i> Client-first
                approach
              </p>
              <p>
                <i className="ri-arrow-right-double-fill"></i> Driving
                measurable impact
              </p>
            </div>

            {/* Bottom Section */}
            <div className="flex items-center justify-end mt-8">
              <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
                <ArrowRight size={20} />
              </div>
            </div>

            {/* Bottom Cyan Strip */}
            <div className="absolute bottom-0 left-0 w-full h-3 bg-cyan-400 rounded-b-xl"></div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white min-h-screen flex items-center justify-center px-8 py-12">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div>
            <h1 className="text-5xl font-bold mb-4 main2">Vision</h1>
            <p className="text-[#22d3ee] text-xl mb-8">
              To empower businesses with innovative and reliable IT services
            </p>

            <ul className="space-y-6 text-lg text-gray-300">
              <li className="flex items-start">
                <span className="mr-2 text-teal-400">•</span>
                We want to leave behind a legacy of being a trusted technology
                partner that transformed businesses with modern, secure, and
                scalable IT solutions. Our impact will be measured in the
                success and growth of the organizations we support, and the
                positive difference we make in their digital journeys.
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-teal-400">•</span>
                We strive to create a culture of innovation, inclusivity, and
                continuous learning. Employees should feel motivated, valued,
                and empowered to bring their best ideas.
              </li>
            </ul>
          </div>

          {/* Right Section - Image */}
          <div className="flex justify-center">
            <img
              src="/images/vision.jpg" // Replace with your image path
              alt="Vision"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

     
    </>
  );
};

export default AboutUs;
