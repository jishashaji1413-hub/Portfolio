import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Code2,
  FolderGit2,
  Mail,
} from "lucide-react";

function Navbar() {
  const cvUrl = import.meta.env.BASE_URL + "Jisha_CV.pdf";

  const navItems = [
    {
      name: "About",
      href: "#about",
      icon: User,
    },
    {
      name: "Skills",
      href: "#skills",
      icon: Code2,
    },
    {
      name: "Projects",
      href: "#projects",
      icon: FolderGit2,
    },
    {
      name: "Contact",
      href: "#contact",
      icon: Mail,
    },
  ];

  const [activeTab, setActiveTab] = useState("About");

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-4">

        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent cursor-pointer">
          Jisha Shaji
        </h1>

        {/* Tubelight Navbar */}
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-lg rounded-full p-1">

          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.name;

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveTab(item.name)}
                className="
                  relative
                  px-4 md:px-5
                  py-2
                  rounded-full
                  text-gray-300
                  hover:text-white
                  transition-colors
                "
              >
                {/* Desktop Text */}
                <span className="hidden md:inline relative z-10">
                  {item.name}
                </span>

                {/* Mobile Icons */}
                <span className="md:hidden relative z-10">
                  <Icon size={18} />
                </span>

                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="
                      absolute inset-0
                      rounded-full
                      bg-white/10
                      border border-white/10
                      -z-0
                    "
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    {/* Tubelight Glow */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                      <div className="w-8 h-1 bg-cyan-400 rounded-full">
                        <div className="absolute w-12 h-6 bg-cyan-400/20 rounded-full blur-md -top-2 -left-2" />
                        <div className="absolute w-8 h-6 bg-cyan-400/20 rounded-full blur-md -top-1 left-0" />
                        <div className="absolute w-4 h-4 bg-cyan-400/30 rounded-full blur-sm top-0 left-2" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </a>
            );
          })}

          {/* Resume Button - Unchanged */}
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
        </div>

      </div>
    </nav>
  );
}

export default Navbar;