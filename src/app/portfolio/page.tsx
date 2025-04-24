import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore my projects and skills.",
};

export default function Portfolio() {
  // const projects = [
  //   {
  //     title: "Project 1",
  //     description: "Description of Project 1",
  //     technologies: ["React", "Node.js", "MongoDB"],
  //     link: "/projects/project1",
  //   },
  //   {
  //     title: "Project 2",
  //     description: "Description of Project 2",
  //     technologies: ["Python", "Django", "PostgreSQL"],
  //     link: "/projects/project2",
  //   },
  //   {
  //     title: "Project 3",
  //     description: "Description of Project 3",
  //     technologies: ["Java", "Spring Boot", "MySQL"],
  //     link: "/projects/project3",
  //   },
  // ];
  // const featuredProjects = [
  //   {
  //     title: "Project 1",
  //     description: "Description of Project 1",
  //     technologies: ["React", "Node.js", "MongoDB"],
  //     link: "/projects/project1",
  //   },
  //   {
  //     title: "Project 2",
  //     description: "Description of Project 2",
  //     technologies: ["Python", "Django", "PostgreSQL"],
  //     link: "/projects/project2",
  //   },
  //   {
  //     title: "Project 3",
  //     description: "Description of Project 3",
  //     technologies: ["Java", "Spring Boot", "MySQL"],
  //     link: "/projects/project3",
  //   },
  // ];
  return (
    <section>
      <div className="flex items-center justify-center min-h-screen py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {""}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-[0_2px_8px _rgba(59,130,246.0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Cloud Platform</h3>
              <p className="text-gray-400 mb-4">
                Scalable cloud infrastructure management with real-time
                monitoring and automated scaling
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-orange-500 text-white py-1 px-3 text-sm font-medium mr-2 rounded-full hover:bg-blue=500/20 transition-all hover:shadow-[0_2px_8px _rgba(59,130,2246.0.1)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors my-4 no-underline">
                  {" "}
                  View Project &rarr;
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-[0_2px_8px _rgba(59,130,246.0.2)] transition">
              <h3 className="text-xl font-bold mb-2">AI Analytics Dashboard</h3>
              <p className="text-gray-400 mb-4">
                ML-powered data visiualization and analytics platform with predective analytics and interactive reports
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "Tensorflow", "D3.js", "Flask"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-orange-500 text-white py-1 px-3 text-sm font-medium mr-2 rounded-full hover:bg-blue=500/20 transition-all hover:shadow-[0_2px_8px _rgba(59,130,2246.0.1)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors my-4 no-underline">
                  {" "}
                  View Project &rarr;
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-[0_2px_8px _rgba(59,130,246.0.2)] transition">
              <h3 className="text-xl font-bold mb-2">E-Commerce Web App</h3>
              <p className="text-gray-400 mb-4">
                Full-stack e-commerce with modern UI, secure payment intergration, and customizable product inventory
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Next.js", "TypeScript", "Stripe", "PostgreSQL"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-orange-500 text-white py-1 px-3 text-sm font-medium mr-2 rounded-full hover:bg-blue=500/20 transition-all hover:shadow-[0_2px_8px _rgba(59,130,2246.0.1)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors my-4 no-underline">
                  {" "}
                  View Project &rarr;
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-[0_2px_8px _rgba(59,130,246.0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Real-Time Chat App</h3>
              <p className="text-gray-400 mb-4">
                Scalable chat platform supporting real-time messaging, presence, and group chat features.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["SocketIO", "Express", "React", "Redis"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-orange-500 text-white py-1 px-3 text-sm font-medium mr-2 rounded-full hover:bg-blue=500/20 transition-all hover:shadow-[0_2px_8px _rgba(59,130,2246.0.1)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors my-4 no-underline">
                  {" "}
                  View Project &rarr;
                </a>
              </div>
            </div>
          </div>
          
        </div>

        {/* <h2 className="text-2xl font-semibold mt-6">Projects</h2>
        <ul className="list-disc list-inside mt-2">
          <li>
            <a href="/projects/project1" className="text-blue-500">
              Project 1
            </a>
          </li>
          <li>
            <a href="/projects/project2" className="text-blue-500">
              Project 2
            </a>
          </li>
          <li>
            <a href="/projects/project3" className="text-blue-500">
              Project 3
            </a>
          </li>
          <li>
            <a href="/projects/project4" className="text-blue-500">
              Project 4
            </a>
          </li>
          <li>
            <a href="/projects/project5" className="text-blue-500">
              Project 5
            </a>
          </li>
          <li>
            <a href="/projects/project6" className="text-blue-500">
              Project 6
            </a>
          </li>
          <li>
            <a href="/projects/project7" className="text-blue-500">
              Project 7
            </a>
          </li>
          <li>
            <a href="/projects/project8" className="text-blue-500">
              Project 8
            </a>
          </li>
          <li>
            <a href="/projects/project9" className="text-blue-500">
              Project 9
            </a>
          </li>
          <li>
            <a href="/projects/project10" className="text-blue-500">
              Project 10
            </a>
          </li>
        </ul> */}
      </div>
    </section>
  );
}
