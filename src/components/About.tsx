import { motion } from "framer-motion";


function About() {
  return (
    <section
      id="about"
      className="bg-black py-28 px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="
          max-w-5xl
          mx-auto
          rounded-3xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          p-10
          shadow-[0_0_40px_rgba(34,211,238,0.08)]
          hover:shadow-[0_0_60px_rgba(168,85,247,0.15)]
          transition-all
          duration-500
        "
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">

          {/* Profile Circle */}
          <div className="relative">
            <div
              className="
                w-28
                h-28
                rounded-full
                bg-gradient-to-r
                from-cyan-400
                via-purple-500
                to-pink-500
                p-[3px]
                shadow-[0_0_30px_rgba(168,85,247,0.4)]
              "
            >
              <img
  src="/profile.jpg"
  alt="Jisha Shaji"
  className="w-full h-full rounded-full object-cover"
/>
            </div>
          </div>

          {/* Name & Title */}
          <div>
            <h2
              className="
                text-5xl
                font-bold
                bg-gradient-to-r
                from-cyan-400
                via-purple-400
                to-pink-500
                bg-clip-text
                text-transparent
              "
            >
              About Me
            </h2>

            <h3 className="text-2xl text-white font-semibold mt-3">
              Jisha Shaji
            </h3>

            <p className="text-gray-400 mt-1">
              Frontend Developer
            </p>
          </div>
        </div>

        {/* About Text */}
        <p className="text-gray-300 text-lg leading-9">
          I'm a passionate Frontend Developer focused on building
          modern, responsive, and scalable web applications.

          I enjoy creating clean user experiences using
          <span className="text-cyan-400 font-semibold"> React</span>,
          <span className="text-purple-400 font-semibold"> TypeScript</span>,
          <span className="text-pink-400 font-semibold"> Redux Toolkit</span>,
          and
          <span className="text-green-400 font-semibold"> REST APIs</span>.

          My goal is to transform complex business requirements
          into intuitive digital experiences while maintaining
          high performance, scalability, and clean code.
        </p>

        {/* Skills Tags */}
        <div className="mt-10 flex flex-wrap gap-4">
          <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            React
          </span>

          <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400">
            TypeScript
          </span>

          <span className="px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400">
            Redux Toolkit
          </span>

          <span className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400">
            REST APIs
          </span>

          <span className="px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400">
            SQL
          </span>

          <span className="px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400">
            Postman
          </span>
        </div>
      </motion.div>
    </section>
  );
}

export default About;