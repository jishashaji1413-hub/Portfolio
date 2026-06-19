interface Project {
  id: number;
  title: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Fixed Deposit (FD) Calculator",
    description:
      "Developed a responsive fintech web application using React, TypeScript, and Vite to calculate FD maturity amount and interest earned based on deposit amount, tenure, interest rate, and compounding frequency. Implemented PDF report generation for investment summaries.",
  },
  {
    id:2,
    title:"Career Recommendation System",
    description:"A web-based Career Recommendation System that helps users discover a suitable career path using HTML, CSS, Javascript"
   },
    {
    id: 3,
    title: "User Management System",
    description:
      "CRUD operations, Pagination, Search and API integration.",
  },
  {
    id: 4,
    title: "Online Store Management System",
    description:
      "Developed web based store management using Java and MYSQL",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-black py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl text-white font-bold mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.id}
              className="
              group
              bg-white/5
              border border-white/10
              rounded-3xl
              p-8
              backdrop-blur-xl
              transition-all
              duration-500
              hover:scale-105
              hover:border-cyan-400
              hover:shadow-[0_0_50px_rgba(34,211,238,0.3)]
              "
            >
              <h3 className="text-2xl text-white font-bold">
                {project.title}
              </h3>

              <p className="text-gray-400 mt-4">
                {project.description}
              </p>

              <button
                className="
                mt-6
                text-cyan-400
                group-hover:translate-x-2
                transition
                "
              >
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;