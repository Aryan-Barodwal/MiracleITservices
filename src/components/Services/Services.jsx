import "./Services.css";
import { ArrowRight, Shield, Zap } from "lucide-react";
import { Eye, Lock } from "lucide-react";
import { Phone, Globe, Mail } from "lucide-react";

export default function ServicesPage() {
  return (
    <>
      {/* new ui  */}
      <div className="min-h-screen bg-[#000] text-white overflow-hidden">
        {/* Main Container */}
        <div className="relative flex items-center justify-center min-h-screen p-8">
          {/* Left Image - Hands typing on laptop */}
          <div className="absolute md:block hidden left-8 top-1/2 transform -translate-y-1/2 z-10">
            <img
              className="w-[22rem] h-64 rounded-lg overflow-hidden shadow-2xl"
              src="/images/S1.png"
              alt=""
            />
          </div>

          {/* Center Content */}
          <div className="text-center z-20 max-w-4xl mx-auto">
            {/* Top accent line */}
            <div className="w-32 h-1 bg-cyan-400 mx-auto mb-8"></div>

            {/* Main Heading */}
            <h1 className="text-7xl font-bold mb-4 tracking-wide">
              IT SERVICES
            </h1>

            {/* Subtitle */}
            <h2 className="text-xl text-cyan-400 font-medium mb-16 tracking-wider">
              THAT DRIVE BUSINESS SUCCESS
            </h2>

            {/* Bottom accent line */}
            <div className="w-full max-w-4xl h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-16"></div>

            {/* Content Section */}
            <div className="flex items-center justify-center space-x-16">
              {/* Text Content */}
              <div className="text-left">
                <h3 className="text-2xl main2 font-semibold mb-2">
                  Empowering
                </h3>
                <p className="text-xl main2 text-gray-300 mb-1">
                  Innovation, Security
                </p>
                <p className="text-xl main2 text-gray-300 mb-8">& Efficiency</p>

                {/* Decorative line */}
                <div className="w-24 h-px bg-gray-600 mb-6"></div>

                {/* Date */}
                <p className="text-cyan-400 font-medium">
                  {new Date().toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* Right Image - VR User */}
          <div className="absolute md:block hidden right-8 top-1/2 transform -translate-y-1/2 z-10">
            <img
              className="w-[22rem] h-64 rounded-lg overflow-hidden shadow-2xl"
              src="/images/S2.jpg"
              alt=""
            />
          </div>

          {/* Background geometric elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full opacity-30"></div>
            <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-cyan-400 rounded-full opacity-40"></div>
            <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>

      <div className="2nd_page min-h-screen bg-[#000] text-white">
        {/* Header */}
        <header className="flex items-center justify-between p-8">
          {/* <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-cyan-400 rounded flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-gray-900 rounded-sm"></div>
          </div>
          <span className="text-xl font-bold">MIRACLE CO.</span>
        </div> */}

          <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center">
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
          </div>
        </header>

        <div className="px-8 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Main Heading */}
              <div>
                <h1 id="" className="main2 text-4xl font-bold mb-4">
                  Building a Reliable Digital
                  <br />
                  Backbone
                </h1>
                <div className="w-24 h-1 bg-cyan-400"></div>
              </div>

              {/* Customer Service Image */}
              <div className="relative">
                <img
                  src="/images/S3.jpg"
                  alt="Customer service representative with headset"
                  className="w-full max-w-md rounded-lg"
                />
              </div>

              {/* Core IT Services Text */}
              <div className="pt-8">
                <h2 className="main2 text-5xl font-bold text-white mb-2">
                  CORE IT SERVICES
                </h2>
                <p className="main2 text-2xl text-cyan-400 font-semibold">
                  FOR ENTERPRISES
                </p>
              </div>
            </div>

            {/* Right Column - Service Cards */}
            <div className="space-y-6">
              <div className="relative bg-gray-800 border border-gray-700 rounded-lg p-6">
                <div className="absolute top-0 right-0 w-24 h-1 bg-cyan-400 rounded-br-lg"></div>
                <div className="absolute bottom-0 left-0 w-24 h-1 bg-cyan-400 rounded-bl-lg"></div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                  Server Installation & Maintenance
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Reliable setup and proactive monitoring for uninterrupted
                  business.
                </p>
              </div>

              {/* Annual Maintenance Contracts (AMC) */}
              <div className="relative bg-gray-800 border border-gray-700 rounded-lg p-6">
                <div className="absolute top-0 right-0 w-24 h-1 bg-cyan-400 rounded-br-lg"></div>
                <div className="absolute bottom-0 left-0 w-24 h-1 bg-cyan-400 rounded-bl-lg"></div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                  Annual Maintenance Contracts (AMC)
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Comprehensive IT care with regular maintenance and priority
                  support.
                </p>
              </div>

              {/* Firewall & Network Security */}
              <div className="relative bg-gray-800 border border-gray-700 rounded-lg p-6">
                <div className="absolute top-0 right-0 w-24 h-1 bg-cyan-400 rounded-br-lg"></div>
                <div className="absolute bottom-0 left-0 w-24 h-1 bg-cyan-400 rounded-bl-lg"></div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                  Firewall & Network Security
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Safeguarding your data with advanced security protocols and
                  firewalls.
                </p>
              </div>

              <div className="relative bg-gray-800 border border-gray-700 rounded-lg p-6">
                <div className="absolute top-0 right-0 w-24 h-1 bg-cyan-400 rounded-br-lg"></div>
                <div className="absolute bottom-0 left-0 w-24 h-1 bg-cyan-400 rounded-bl-lg"></div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                  Wired & Wireless Networking
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Fast, secure, and scalable networking solutions for businesses
                  of all sizes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="3RD_PAGE min-h-screen bg-[#000]">
        {/* Header */}

        <div className="container mx-auto px-6 py-12">
          {/* Main Hero Section */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            {/* Left side - Decorative Image */}
            <div className="lg:w-1/3 relative">
              <div className="relative w-80 h-80 bg-gradient-to-br from-blue-900 to-slate-800 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-500 to-blue-600 opacity-70"></div>
                <div className="absolute bottom-4 left-4 w-20 h-20 bg-white/20 rounded-full backdrop-blur-sm border border-white/30"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="rounded-full w-16 h-16 bg-white/20 hover:bg-white/30 border border-white/30 backdrop-blur-sm flex items-center justify-center cursor-pointer transition-all duration-300">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Center - Main Title */}
            <div className="lg:w-1/3 text-center">
              <div className="bg-gray-800/50 border border-cyan-400/30 backdrop-blur-sm p-12 rounded-lg">
                <div className="space-y-4 w-[17rem]">
                  <div className="w-16 h-1 bg-cyan-400 mx-auto mb-6"></div>
                  <h1 className="text-5xl main2 font-bold text-white tracking-wide">
                    NETWORK SECURITY
                  </h1>
                  <h2 className="text-3xl main2 font-light text-cyan-400 tracking-wider">
                    SERVICES
                  </h2>
                </div>

                <div className="mt-4">
                  <p className="text-cyan-400 font-semibold">MIRACLE CO.</p>
                </div>
              </div>
            </div>

            {/* Right side - Security Stats */}
            <div className="lg:w-1/3 relative">
              <div className="space-y-6">
                {/* Security Shield Icon */}
                <div className="flex md:justify-end justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-cyan-400/30">
                    <Shield className="w-16 h-16 text-cyan-400" />
                  </div>
                </div>

                {/* Security Stats Cards */}
                <div className="space-y-4">
                  <div className="bg-gray-800/30 border border-cyan-400/20 backdrop-blur-sm p-4 rounded-lg">
                    <div className="flex items-center justify-between gap-7 md:gap-0">
                      <p className="text-cyan-400 text-sm font-medium">
                        Clients Protected
                      </p>
                      <p className="text-white text-xl font-bold">500+</p>
                    </div>
                  </div>

                  <div className="bg-gray-800/30 border border-cyan-400/20 backdrop-blur-sm p-4 rounded-lg">
                    <div className="flex items-center justify-between gap-7 md:gap-0">
                      <p className="text-cyan-400 text-sm font-medium">
                        Uptime
                      </p>
                      <p className="text-white text-xl font-bold">24/7</p>
                    </div>
                  </div>

                  <div className="bg-gray-800/30 border border-cyan-400/20 backdrop-blur-sm p-4 rounded-lg">
                    <div className="flex items-center justify-between gap-7 md:gap-0">
                      <p className="text-cyan-400 text-sm font-medium">
                        Response Time
                      </p>
                      <p className="text-white text-xl font-bold">&lt;1min</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Real-Time Threat Detection */}
            <div className="bg-gray-800/50 border border-cyan-400/20 backdrop-blur-sm overflow-hidden group hover:border-cyan-400/50 transition-all duration-300 rounded-lg">
              <div className="relative h-48 bg-gradient-to-br from-blue-900 to-cyan-800 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-cyan-400/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-cyan-400/30">
                    <Eye className="w-12 h-12 text-cyan-400" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-blue-500 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-cyan-400 rounded-full"></div>
              </div>
              <div className="p-6">
                <p className="text-cyan-400 text-xl font-semibold mb-4">
                  Real-Time Threat Detection
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Identifies cyber threats instantly to minimize exposure and
                  damage.
                </p>
              </div>
            </div>

            {/* Data Protection Measures */}
            <div className="bg-gray-800/50 border border-cyan-400/20 backdrop-blur-sm overflow-hidden group hover:border-cyan-400/50 transition-all duration-300 rounded-lg">
              <div className="relative h-48 bg-gradient-to-br from-slate-700 to-blue-900 overflow-hidden">
                <div className="absolute inset-0 bg-circuit-pattern opacity-30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-blue-400/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-400/30">
                    <Lock className="w-12 h-12 text-blue-400" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent transform skew-x-12"></div>
              </div>
              <div className="p-6">
                <p className="text-cyan-400 text-xl font-semibold mb-4">
                  Data Protection Measures
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Secures sensitive information with encryption and structured
                  access control.
                </p>
              </div>
            </div>

            {/* Rapid Incident Response */}
            <div className="bg-gray-800/50 border border-cyan-400/20 backdrop-blur-sm overflow-hidden group hover:border-cyan-400/50 transition-all duration-300 rounded-lg">
              <div className="relative h-48 bg-gradient-to-br from-green-900 to-slate-800 overflow-hidden">
                <div className="absolute inset-0 bg-code-pattern opacity-25"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-green-400/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-green-400/30">
                    <Zap className="w-12 h-12 text-green-400" />
                  </div>
                </div>
                <div className="absolute top-2 left-2 text-green-400 text-xs font-mono opacity-50">
                  <div>{"<script>"}</div>
                  <div>{'  alert("secure")'}</div>
                  <div>{"</script>"}</div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-cyan-400 text-xl font-semibold mb-4">
                  Rapid Incident Response
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Reacts quickly to breaches and issues, ensuring business
                  continuity.
                </p>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .bg-grid-pattern {
            background-image: linear-gradient(
                rgba(34, 211, 238, 0.1) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(34, 211, 238, 0.1) 1px,
                transparent 1px
              );
            background-size: 20px 20px;
          }

          .bg-circuit-pattern {
            background-image: radial-gradient(
                circle at 25% 25%,
                rgba(59, 130, 246, 0.2) 2px,
                transparent 2px
              ),
              radial-gradient(
                circle at 75% 75%,
                rgba(34, 211, 238, 0.2) 2px,
                transparent 2px
              );
            background-size: 30px 30px;
          }

          .bg-code-pattern {
            background-image: repeating-linear-gradient(
              45deg,
              transparent,
              transparent 2px,
              rgba(34, 197, 94, 0.1) 2px,
              rgba(34, 197, 94, 0.1) 4px
            );
          }
        `}</style>
      </div>

      <div className="4TH_PAGE bg-black text-white min-h-screen flex items-center justify-center px-6 py-12">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Two Cards */}
          <div className="col-span-1 lg:col-span-1 space-y-8">
            {/* Card 1 */}
            <div className="border border-cyan-400 rounded-xl p-4">
              <div className="bg-cyan-500 rounded-lg overflow-hidden mb-4">
                <img
                  src="/images/S5.jpg"
                  alt="Code"
                  className="w-full h-48 object-cover"
                />
              </div>
              <h3 className="text-cyan-400 font-semibold mb-2">
                Security Audits & Compliance
              </h3>
              <p className="text-sm text-gray-300">
                Regular audits to ensure adherence to security standards and
                regulations.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border border-cyan-400 rounded-xl p-4">
              <div className="bg-cyan-500 rounded-lg overflow-hidden mb-4">
                <img
                  src="/images/S7.jpg"
                  alt="Remote"
                  className="w-full h-48 object-cover"
                />
              </div>
              <h3 className="text-cyan-400 font-semibold mb-2">
                Remote IT Support
              </h3>
              <p className="text-sm text-gray-300">
                Instant troubleshooting and assistance delivered remotely to
                keep operations running smoothly.
              </p>
            </div>
          </div>

          {/* Right Image with Title */}
          <div className="col-span-1 lg:col-span-2 flex flex-col justify-between">
            <div className="border border-cyan-400 rounded-xl overflow-hidden flex-grow mb-6">
              <img
                src="/images/S6.jpg"
                alt="Server"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col md:flex-row md:items-center items-start space-x-0 md:space-x-4">
              <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
                <ArrowRight size={20} />
              </div>

              <h1 className="text-4xl text-start font-bold main2 mt-4 md:mt-0">
                Cloud Infrastructure{" "}
                <span className="text-cyan-400">& Management</span>
              </h1>
            </div>

            <div className="mt-4">
              <p className="text-cyan-400 font-semibold">MIRACLE CO.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="5TH_PAGE bg-black text-white min-h-screen flex items-center justify-center px-6 pt-16 pb-14">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="flex flex-col space-y-8">
            {/* Title Box */}
            <div className="border-t border-b border-cyan-400 rounded-xl p-6 text-center">
              <div className="flex flex-col justify-center border border-cyan-400 rounded-xl relative p-8">
                {/* Top Cyan Tab */}
                <div className="absolute -top-[1px] left-1/2 transform -translate-x-1/2 w-20 h-2 bg-cyan-400"></div>
                <h2 className="text-lg font-semibold main2">
                  Ensuring Compliance{" "}
                  <span className="text-cyan-400">& Reducing Risks</span>
                </h2>
              </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Card 1 */}
              <div className="border h-[10rem] border-cyan-400 rounded-xl p-4 relative">
                <div className="absolute bottom-0 left-0 w-full h-3 bg-cyan-500 rounded-b-xl"></div>
                <h3 className="text-cyan-400 font-semibold mb-2">
                  Governance Policies
                </h3>
                <p className="text-sm text-gray-300">
                  Establish clear IT procedures to ensure compliance with
                  industry standards.
                </p>
              </div>

              {/* Card 2 */}
              <div className="border h-[10rem] border-cyan-400 rounded-xl p-4 relative">
                <div className="absolute bottom-0 left-0 w-full h-3 bg-cyan-500 rounded-b-xl"></div>
                <h3 className="text-cyan-400 font-semibold mb-2">
                  Audit Readiness
                </h3>
                <p className="text-sm text-gray-300">
                  Maintain detailed logs and reports to support accountability
                  and transparency.
                </p>
              </div>

              {/* Card 3 */}
              <div className="border h-[10rem] border-cyan-400 rounded-xl p-4 relative">
                <div className="absolute bottom-0 left-0 w-full h-3 bg-cyan-500 rounded-b-xl"></div>
                <h3 className="text-cyan-400 font-semibold mb-2">
                  Risk Analysis
                </h3>
                <p className="text-sm text-gray-300">
                  Continuously assess vulnerabilities and apply fixes to reduce
                  security risks.
                </p>
              </div>

              {/* Card 4 */}
              <div className="border h-[10rem] border-cyan-400 rounded-xl p-4 relative">
                <div className="absolute bottom-0 left-0 w-full h-3 bg-cyan-500 rounded-b-xl"></div>
                <h3 className="text-cyan-400 font-semibold mb-2">
                  Data Handling Practices
                </h3>
                <p className="text-sm text-gray-300">
                  Safeguard sensitive information through secure and compliant
                  data management.
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col justify-between">
            <div className="border border-cyan-400 rounded-xl overflow-hidden mb-6">
              <img
                src="/images/S83.jpg"
                alt="Compliance"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h1 className="text-4xl font-bold main2">
                IT COMPLIANCE{" "}
                <span className="text-cyan-400">AND RISK MANAGEMENT</span>
              </h1>
            </div>

            <div className="flex items-center space-x-6 mt-6">
              <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
                <ArrowRight size={20} />
              </div>
              <p className="text-cyan-400 font-semibold">MIRACLE CO.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="6TH_PAGE bg-black text-white min-h-screen flex items-center justify-center px-6 py-12">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section - Image */}
          <div className="flex flex-col">
            <div className="flex items-center mb-6">
              <p className="text-cyan-400 font-semibold text-sm tracking-wider">
                MIRACLE CO.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden border border-transparent">
              <img
                src="/images/S9.jpg"
                alt="Person working"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Section - Thank You Content */}
          <div className="flex flex-col justify-center border border-cyan-400 rounded-xl relative p-8">
            {/* Top Cyan Tab */}
            <div className="absolute -top-[1px] left-1/2 transform -translate-x-1/2 w-20 h-2 bg-cyan-400"></div>

            {/* Main Text */}
            <h1 className="text-6xl font-bold leading-none main2">
              THANK
              <br />
              <span className="text-cyan-400">YOU</span>
            </h1>

            {/* Subheading */}
            <p className="mt-4 text-lg font-semibold main2">Get In Touch</p>
            <div className="w-20 h-[1px] bg-cyan-400 mt-1 mb-6"></div>

            {/* Description */}
            <p className="text-sm text-cyan-400 max-w-sm mb-6">
              Let’s connect and explore how to future-proof your business
              through tailored IT solutions. Contact us now!
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone size={18} />
                <span>+91 9871331804</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe size={18} />
                <span>www.miracleit.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} />
                <span>info@miracleit.in</span>
              </div>
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
    </>
  );
}
