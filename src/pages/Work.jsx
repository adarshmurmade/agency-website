import { motion } from "framer-motion"
import project1 from "../assets/work1.jpg"
import project2 from "../assets/work2.jpg"
import project3 from "../assets/work3.jpg"


export default function Work() {
  const projects = [
    {
      title: "E-commerce Growth",
      result: "3x Sales Increase",
      desc: "Optimized SEO, performance ads, and UX redesign.",
      img: project1,
    },
    {
      title: "Startup Branding",
      result: "10k Followers in 2 Months",
      desc: "Full brand identity and social strategy.",
      img: project2,
    },
    {
      title: "Local Business Boost",
      result: "120% Traffic Growth",
      desc: "Local SEO and conversion optimization.",
      img: project3,
    },
  ]

  return (
    <div className="pt-24 bg-[#020617] text-black  min-h-screen">

      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center text-white"
        >
          Our <span className="text-blue-500">Work</span>
        </motion.h1>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-100 dark:bg-[#0F172A] p-6 rounded-2xl 
           border border-gray-200 dark:border-white/10
           hover:border-blue-500 hover:scale-105 transition duration-300"
            >
              {/* IMAGE */}
              <img
                src={project.img}
                alt={project.title}
                className="h-44 w-full object-cover rounded-lg mb-5"
              />

              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-blue-500 mt-2 font-medium">
                {project.result}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                {project.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}
