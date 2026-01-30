export default function Footer() {
  return (
    <footer className="bg-[#020617] text-gray-400 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-extrabold text-white">
            BOLD<span className="text-blue-500">LY</span>
          </h2>
          <p className="mt-4 text-sm">
            A digital marketing agency focused on bold ideas,
            performance, and growth.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">About</li>
            <li className="hover:text-blue-500 cursor-pointer">Services</li>
            <li className="hover:text-blue-500 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <p className="text-sm">hello@boldly.com</p>
          <p className="text-sm mt-2">India</p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 text-center py-4 text-sm">
        © {new Date().getFullYear()} BOLDLY. All rights reserved.
      </div>
    </footer>
  )
}
