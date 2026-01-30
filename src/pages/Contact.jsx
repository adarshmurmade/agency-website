import { motion } from "framer-motion"
import { useState } from "react"

export default function Contact() {
  const [result, setResult] = useState("")

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult("Sending...")

    const formData = new FormData(event.target)
    formData.append("access_key", "db02200c-0517-4769-b053-f3d1378a634e")

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    })

    const data = await response.json()

    if (data.success) {
      setResult("Message sent successfully!")
      event.target.reset()
    } else {
      setResult("Failed to send message.")
    }
  }

  return (
    <div className="pt-24 bg-[#020617] text-white  min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-20">

        <motion.h1 className="text-4xl font-bold text-center text-white">
          Get In <span className="text-blue-500">Touch</span>
        </motion.h1>

        <form onSubmit={onSubmit} className="mt-16 space-y-6">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-4 rounded-lg bg-[#0F172A] border border-white/10"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-4 rounded-lg bg-[#0F172A] border border-white/10"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-4 rounded-lg bg-[#0F172A] border border-white/10"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-500 py-4 rounded-lg font-semibold hover:bg-blue-600"
          >
            Send Message
          </button>

          <span className="text-sm text-gray-400">{result}</span>

        </form>

      </div>
    </div>
  )
}
