function Navbar() {
  const navItems = ["About", "Skills", "Projects", "Contact"];

  const cvUrl = import.meta.env.BASE_URL + "Jisha_CV.pdf";

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent cursor-pointer">
          Jisha Shaji
        </h1>

        <ul className="flex items-center gap-4">

          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="
                  relative px-5 py-2 rounded-full text-gray-300
                  transition-all duration-300
                  hover:text-white hover:bg-white/10
                  hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]
                "
              >
                {item}
              </a>
            </li>
          ))}

          {/* Resume Button */}
          <li>
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                relative px-5 py-2 rounded-full text-gray-300
                transition-all duration-300
                hover:text-white hover:bg-white/10
                hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]
              "
            >
              Resume
            </a>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;