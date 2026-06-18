
import { gsap } from "gsap";


const skills = [
  {
    title:"HTML5",
    description:"Creating responsive and well-structured web content"

  },
  {
    title: "React",
    description: "Building modern UI applications",
  },
  {
    title: "TypeScript",
    description: "Type-safe JavaScript development",
  },
  {
    title: "Redux Toolkit",
    description: "State management for React apps",
  },
  {
    title: "Tailwind CSS",
    description: "Modern utility-first styling",
  },
  {
    title: "REST APIs",
    description: "API integration , data fetching, HTTP methods",
  },
   {
    title:"SQL",
    description:"Performing CRUD operations, Joins, Aggregations, and Data Retrieval Subqueries, Grouping,  Stored Procedures"


  },
  {
    title: "POSTMAN",
    description: "API Testing, Response Validation, Authentication, and Troubleshooting"
  },
  {
    title:"Core Java",
    description:"Object-Oriented Programming, Collections Framework, Exception Handling, classes, Objects, Inheritance, Polymorphism, Abstraction, and Encapsulation"
},
  {
    title: "Git & GitHub",
    description: "Version control and collaboration",
  },
];

function Skills() {
  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    card: HTMLDivElement
  ) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);

    const rotateY = ((x - rect.width / 2) / rect.width) * 15;
    const rotateX = -((y - rect.height / 2) / rect.height) * 15;

    gsap.to(card, {
      rotateX,
      rotateY,
      duration: 0.2,
    });
  };

  const handleMouseLeave = (card: HTMLDivElement) => {
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.4,
    });
  };

  return (
    <section
      id="skills"
      className="bg-black py-24 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-white text-center mb-16">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {skills.map((skill) => (
            <div
              key={skill.title}
              onMouseMove={(e) =>
                handleMouseMove(
                  e,
                  e.currentTarget as HTMLDivElement
                )
              }
              onMouseLeave={(e) =>
                handleMouseLeave(
                  e.currentTarget as HTMLDivElement
                )
              }
              className="
                relative
                group
                overflow-hidden
                rounded-3xl
                border
                border-purple-500/20
                bg-[#120F17]
                p-8
                text-white
                transition-all
                duration-500
                hover:-translate-y-2
              "
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Spotlight */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-300
                "
                style={{
                  background:
                    "radial-gradient(circle at var(--x) var(--y), rgba(132,0,255,.35), transparent 40%)",
                }}
              />

              {/* Border Glow */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-3xl
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-300
                "
                style={{
                  boxShadow:
                    "0 0 40px rgba(132,0,255,.5)",
                }}
              />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3">
                  {skill.title}
                </h3>

                <p className="text-gray-400">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Skills;