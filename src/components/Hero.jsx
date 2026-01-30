import React from 'react'
import { Link } from "react-router-dom"


const Hero = () => {
  return (
    <div>
        <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          We Grow Your <span className="text-indigo-500">Brand</span>
        </h1>
        <p className="mt-6 text-gray-300 max-w-xl mx-auto">
          A digital marketing agency that helps startups and businesses scale
          with strategy, design, and performance.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          
           <Link
  to="/contact"
  className="bg-blue-500 px-6 py-3 rounded-lg text-white hover:bg-blue-600 transition"
> Get Started
          </Link>

          <Link
  to="/work"
  className="border border-blue-500 px-6 py-3 rounded-lg hover:bg-blue-500 hover:text-white transition"
>View Work
          </Link>


        </div>
      </div>
    </section>
    </div>
  )
}

export default Hero
