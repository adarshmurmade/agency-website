import Hero from "../components/Hero"
import Services from "../components/Services"
import Testimonials from "../components/Testimonials"


export default function Home() {
  return (
    <div className="pt-2pt-24 bg-white text-black  min-h-screen">
      <Hero />
      <Services />
        <Testimonials />
    </div>
  )
}
