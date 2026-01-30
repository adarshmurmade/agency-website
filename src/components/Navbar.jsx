import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-[#0F172A]/90 backdrop-blur border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold text-white">
          BOLD<span className="text-blue-500">LY</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-300 font-medium">
          {["/", "/about", "/services", "/work", "/contact"].map((path, i) => (
            <NavLink
              key={i}
              to={path}
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "hover:text-white transition"
              }
            >
              {path === "/" ? "Home" : path.substring(1)}
            </NavLink>
          ))}
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center gap-4">

          {/* CTA */}
          <Link
            to="/contact"
            className="hidden md:inline-block bg-blue-500 px-5 py-2 rounded-lg text-white hover:bg-blue-600 transition"
          >
            Let’s Talk
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          className="md:hidden bg-[#020617] px-6 py-6 space-y-4"
        >
          {["/", "/about", "/services", "/work", "/contact"].map((path, i) => (
            <NavLink
              key={i}
              to={path}
              onClick={() => setOpen(false)}
              className="block text-gray-300 hover:text-white"
            >
              {path === "/" ? "Home" : path.substring(1)}
            </NavLink>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}
