import { Phone, Mail, MapPin, Send } from "lucide-react";
import "./Contact.css";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const notify = () => toast.error("Service not available yet!");

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section - Contact Info */}
        <div className="flex flex-col justify-center border border-cyan-400 rounded-xl relative p-8">
          {/* Top Cyan Tab */}
          <div className="absolute -top-[1px] left-1/2 transform -translate-x-1/2 w-20 h-2 bg-cyan-400"></div>

          {/* Heading */}
          <h1 className="text-5xl main2 font-bold leading-none mb-6">
            GET IN <span className="text-cyan-400">TOUCH</span>
          </h1>

          {/* Description */}
          <p className="text-sm text-cyan-400 max-w-sm mb-8">
            Have questions? Reach out to us and let’s discuss how Miracle IT can
            support your business with tailored solutions.
          </p>

          {/* Contact Info */}
          <div className="space-y-5">
            <div className="flex items-center space-x-3">
              <Phone size={20} className="text-cyan-400" />
              <span>+91 9871331804</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail size={20} className="text-cyan-400" />
              <span>info@miracleit.in</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin size={20} className="text-cyan-400" />
              <span>
                {" "}
                B-11/4, Mansrovar Building 90 Nehru Place, Delhi 110096
              </span>
            </div>
          </div>

          {/* Bottom Cyan Strip */}
          <div className="absolute bottom-0 left-0 w-full h-3 bg-cyan-400 rounded-b-xl"></div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="flex flex-col border border-cyan-400 rounded-xl relative p-8">
          {/* Top Cyan Tab */}
          <div className="absolute -top-[1px] left-1/2 transform -translate-x-1/2 w-20 h-2 bg-cyan-400"></div>

          <h2 className="text-3xl main2 font-bold mb-6">Send Us a Query</h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 focus:border-cyan-400 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 focus:border-cyan-400 outline-none"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 focus:border-cyan-400 outline-none"
            ></textarea>
            <button
              // type="submit"
              onClick={(e) => {
                e.preventDefault();
                notify();
              }}
              className="w-full main2 flex items-center justify-center space-x-2 px-6 py-3 rounded-lg bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition"
            >
              <Send size={18} />
              <span>Send Message</span>
            </button>
          </form>

          {/* Bottom Cyan Strip */}
          <div className="absolute bottom-0 left-0 w-full h-3 bg-cyan-400 rounded-b-xl"></div>
        </div>
      </div>
    </div>
  );
}
