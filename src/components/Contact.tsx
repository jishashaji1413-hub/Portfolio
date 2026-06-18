import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

interface ContactLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

function Contact() {
  const email = "jishashaji1413@gmail.com";

  const contactLinks: ContactLink[] = [
    {
      name: "Email",
      href: `mailto:${email}?subject=Let's%20Connect&body=Hi%20Jisha,`,
      icon: <FaEnvelope />,
    },
    {
      name: "GitHub",
      href: "https://github.com/jishashaji1413-hub",
      icon: <FaGithub />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/jisha-shaji-860336282/",
      icon: <FaLinkedin />,
    },
  ];

  return (
    <section id="contact" className="relative py-28 bg-black overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
          Let's Connect
        </h2>

        <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
          I'm always interested in discussing frontend development, React projects,
          TypeScript applications, and new opportunities.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-6">

          {contactLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.name !== "Email" ? "_blank" : undefined}
              rel={link.name !== "Email" ? "noreferrer" : undefined}
              className="
                group relative flex items-center gap-3 px-8 py-4
                rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl
                text-white transition-all duration-500
                hover:-translate-y-2 hover:border-cyan-400
                hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]
              "
            >
              <span className="text-xl transition-transform duration-300 group-hover:scale-125">
                {link.icon}
              </span>

              <span className="font-medium">{link.name}</span>
            </a>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Contact;