import { motion } from "framer-motion"

export default function Testimonials() {
  const reviews = [
    {
      name: "Rohit Sharma",
      role: "Startup Founder",
      text: "BOLDLY transformed our online presence. Our sales doubled in 3 months!",
    },
    {
      name: "Ananya Patel",
      role: "Business Owner",
      text: "Professional team and outstanding design quality. Highly recommended!",
    },
    {
      name: "Vikram Singh",
      role: "E-commerce Brand",
      text: "Their marketing strategy delivered incredible ROI for our campaigns.",
    },
  ]

  return (
    <section className="bg-[#020617] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          What Our <span className="text-blue-500">Clients Say</span>
        </motion.h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#0F172A] p-8 rounded-2xl border border-white/10
                         hover:border-blue-500 hover:scale-105 transition duration-300"
            >
              <p className="text-gray-400 text-sm mb-6">
                “{review.text}”
              </p>
              <h3 className="text-lg font-semibold">{review.name}</h3>
              <span className="text-blue-500 text-sm">{review.role}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
