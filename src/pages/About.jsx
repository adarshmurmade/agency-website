import { motion } from "framer-motion"

export default function About() {
  const team = [
    { name: "Adarsh Murmade", role: "Founder & Developer" },
    { name: "Creative Lead", role: "UI/UX Designer" },
    { name: "Marketing Head", role: "Growth Strategist" }
  ]

  return (
    <div className="pt-24 bg-[#020617] text-white  min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          About <span className="text-blue-500">BOLDLY</span>
        </motion.h1>

        {/* Mission */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-10 text-gray-400 text-center max-w-3xl mx-auto"
        >
          BOLDLY is a digital marketing agency focused on building
          powerful brand identities, driving measurable growth,
          and delivering high-impact digital experiences.
        </motion.p>

        {/* Team */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#0F172A] p-8 rounded-2xl border border-white/10
                         hover:border-blue-500 hover:scale-105 transition"
            >
              <div className="w-20 h-20 mx-auto bg-blue-500 rounded-full mb-6"></div>
              <h3 className="text-xl font-semibold text-center">{member.name}</h3>
              <p className="text-blue-500 text-sm text-center">{member.role}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}
