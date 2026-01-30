import { motion } from "framer-motion"
import { Code, Palette, BarChart3, Megaphone } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Code size={28} />,
      title: "Web Development",
      desc: "Modern, fast and scalable websites that convert visitors into customers.",
    },
    {
      icon: <Palette size={28} />,
      title: "Brand Identity",
      desc: "Bold logos, colors and visuals that make your brand unforgettable.",
    },
    {
      icon: <BarChart3 size={28} />,
      title: "SEO & Analytics",
      desc: "Data-driven strategies to increase traffic and rankings.",
    },
    {
      icon: <Megaphone size={28} />,
      title: "Digital Marketing",
      desc: "High-performance ad campaigns and social media growth.",
    },
  ]

  return (
    <section className="bg-[#020617] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          Our <span className="text-blue-500">Services</span>
        </motion.h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="bg-[#0F172A] p-8 rounded-2xl border border-white/10
                         hover:border-blue-500 hover:scale-105 transition duration-300
                         shadow-lg hover:shadow-blue-500/20"
            >
              <div className="text-blue-500 mb-4 drop-shadow-[0_0_10px_#3b82f6]">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
