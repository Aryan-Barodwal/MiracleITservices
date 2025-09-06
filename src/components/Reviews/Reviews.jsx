import { Star } from "lucide-react";
import { motion } from "framer-motion";
import "./Reviews.css"; 

export default function Reviews() {
  const reviews = [
    {
      name: "Rahul Sharma",
      review:
        "Miracle IT Services transformed our business with modern IT solutions. Highly recommended!",
      rating: 5,
    },
    {
      name: "Sneha Kapoor",
      review:
        "Professional, reliable, and innovative. They truly understand the client’s needs.",
      rating: 4,
    },
    {
      name: "Amit Verma",
      review: "Great experience! Their IT support and services are top-notch.",
      rating: 5,
    },
    {
      name: "Priya Nair",
      review:
        "Their team is always responsive and helpful. We saw a huge improvement in our operations after working with them.",
      rating: 5,
    },
    {
      name: "Arjun Mehta",
      review:
        "Excellent services at affordable prices. They delivered our project on time with amazing quality.",
      rating: 4,
    },
    {
      name: "Kavita Joshi",
      review:
        "A trustworthy partner for all IT solutions. Their vision for the future matches exactly what businesses need today.",
      rating: 5,
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-2 main2">
            People’s <span className="text-cyan-400">Reviews</span>
          </h2>
          <p className="text-cyan-400 text-lg ">
            What our clients say about Miracle IT Services
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="border border-cyan-400 rounded-xl p-6 relative bg-black/50 shadow-lg shadow-cyan-500/20"
            >
              <motion.div
                className="flex items-center mb-4"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.1 },
                  },
                }}
              >
                {[...Array(item.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    <Star
                      size={18}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  </motion.div>
                ))}
              </motion.div>
              <p className="text-gray-300 mb-4">“{item.review}”</p>
              <p className="text-cyan-400 font-semibold main2">- {item.name}</p>

              {/* Bottom Cyan Strip */}
              <div className="absolute bottom-0 left-0 w-full h-2 bg-cyan-400 rounded-b-xl"></div>
            </motion.div>
          ))}
        </div>

        

      
        
      </div>
    </div>
  );
}
