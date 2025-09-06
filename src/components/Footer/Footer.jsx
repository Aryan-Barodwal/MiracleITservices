import React from "react";
import "./Footer.css"; 
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black py-12 px-6 md:px-14">
      <footer className=" text-white pt-12 border-t-[0.5px] border-gray-700 rounded-t-2xl overflow-hidden">
        {/* content */}
        <div className="max-w-7xl mx-auto ">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Section - Logo and Description */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <span className="text-[#FD356E]">
                  <img className="w-12" src="/images/logoNEW.png" alt="logo" />
                </span>

                <span className="text-2xl font-bold text-blue-400">
                  MIRACLE IT SERVICES
                </span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                We are a team of professionals offering a wide range of IT
                services. Our goal is to help you deliver high-quality
                technology solutions.
              </p>
              <a
                href="/privacypolicy"
                className="text-gray-400 text-sm hover:text-gray-300 transition-colors"
              >
                Privacy Policy
              </a>
            </div>

            {/* Center Section - Navigation */}
            <div className="space-y-4">
              <nav className="flex flex-col space-y-3">
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-white transition-colors button flex justify items-center text-left gap-1 text-lg"
                >
                  Services
                </Link>

                <Link
                  to="/review"
                  className="text-gray-300 hover:text-white transition-colors button flex justify items-center text-left gap-1 text-lg"
                >
                  Reviews
                </Link>
                <Link
                  to="/about-us"
                  className="text-gray-300 hover:text-white transition-colors button flex justify items-center text-left gap-1 text-lg"
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors button flex justify items-center text-left gap-1 text-lg"
                >
                  Contacts
                </Link>
              </nav>
            </div>

            {/* Right Section - Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-lg">+91 9871331804</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-lg">info@miracleit.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-400" />
                <span className="text-lg">10:00am — 06:00pm</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <div className="text-lg">
                  <div>B-11/4, Mansrovar Building</div>
                  <div>90 Nehru Place, Delhi 110096</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="">
            <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center rounded-b-2xl overflow-hidden space-y-4 sm:space-y-0">
              <div className="text-gray-400 text-sm">
                © Miracle IT Services 2018–2025. All rights reserved.
              </div>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                    <span className="text-blue-500 text-xs font-bold">
                      <i className="ri-facebook-box-fill"></i>
                    </span>
                  </div>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                    <span className="text-blue-500 text-xs font-bold">
                      <i className="ri-linkedin-box-fill"></i>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
