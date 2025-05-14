import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore my projects and skills.",
};

export default function Portfolio() {
  // const projects = [
  //   {
  //     title: "Cuts By Us",
  //     shortDescription: "Business website for Cuts By Us.",
  //     description: "Cuts By Us is no longer in business. This barber shop was located in the historic Germantown section of Philadelphia, PA. The owner of this barber shop needed a web site and social media management. He required a website that would primarily serve two purposes. First, the local business wanted to establish a web presence (the owner has been in business since 2000 and has never had a web site) and second, serve as a virtual help-wanted ad. I was solely responsible for the ongoing maintenance of the website as well as their social media presence and activity.",
  //     technologies: ["PHP", "HTML", "CSS", "JavaScript", "WordPress", "MySQL"],
  //     link: "/portfolio-detail/project1",
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
            {/* Cuts By Us, WordPress **REMOVE** */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-[0_2px_8px _rgba(59,130,246.0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Cuts By Us</h3>
              <img src="cutsByUsBarbershop.jpg" alt="logo" className="my-10" />
              <p className="text-gray-400 mb-4">
                Website design, development, and social media management.
              </p>
              <p className="text-gray-400 mb-4">
                Cuts By Us is no longer in business. This barber shop was
                located in the historic Germantown section of Philadelphia, PA.
                The owner of this barber shop needed a web site and social media
                management. He required a website that would primarily serve two
                purposes. First, the local business wanted to establish a web
                presence (the owner has been in business since 2000 and has
                never had a web site) and second, serve as a virtual help-wanted
                ad. I was solely responsible for the ongoing maintenance of the
                website as well as their social media presence and activity.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["WordPress", "JavaScript", "HTML", "CSS", "MySQL"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-orange-500 text-white py-1 px-3 text-sm font-medium mr-2 rounded-full hover:bg-blue=500/20 transition-all hover:shadow-[0_2px_8px _rgba(59,130,2246.0.1)]"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center mt-4">
                <Link
                  href="/"
                  className="text-orange-400 hover:text-orange-300 transition-colors my-4 no-underline"
                >
                  View Project &rarr;
                </Link>
              </div>
            </div>

            {/* Password Generator, JavaScript/Next.js */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-[0_2px_8px _rgba(59,130,246.0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                Password Generator Application
              </h3>
              <img src="password-generator.png" alt="logo" className="my-10" />
              <p className="text-gray-400 mb-4">
                Create a secure password in a sleek UI and save it to your
                clipboard.
              </p>
              <p className="text-gray-400 mb-4">
                This was a personal project. I created this application to learn
                how to use the Next.js React framework. I wanted to learn how to
                use the framework and the Tailwind CSS library. I also wanted to
                learn how to use the Fetch API to get data from an API. I used
                the Random User Generator API to get data about random users. I
                used the Chart.js library to create charts and graphs to display
                the data.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Next.js", "Tailwind CSS", "DaisyUI"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-orange-500 text-white py-1 px-3 text-sm font-medium mr-2 rounded-full hover:bg-blue=500/20 transition-all hover:shadow-[0_2px_8px _rgba(59,130,2246.0.1)]"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center mt-4">
                <Link
                  href="https://password-generator-five-red.vercel.app"
                  target="_blank"
                  className="text-orange-400 hover:text-orange-300 transition-colors my-4 no-underline"
                >
                  View Project &rarr;
                </Link>
              </div>
            </div>

            {/* Stith Auto Group, .NET 8, JavaScript/Next.js */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-[0_2px_8px _rgba(59,130,246.0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                Systems Management Application Dashboard
              </h3>
              <img src="stith-auto-group.png" alt="logo" className="my-10" />
              <p className="text-gray-400 mb-4">
                Full-stack systems management system for a fictional auto
                dealership with modern UI, CRUD functionality, and customizable
                product inventory
              </p>
              <p className="text-gray-400 mb-4">
                This was a personal project. This is a .NET 8 Web API and
                Next.js UI application. This CRUD application allows users to
                create, read, update, and delete records. The application uses
                the Entity Framework Core to interact with a SQL Server
                database. The application uses the Tailwind CSS library to style
                the UI.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[".NET 8", "TypeScript", "Next.js", "SQL"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-orange-500 text-white py-1 px-3 text-sm font-medium mr-2 rounded-full hover:bg-blue=500/20 transition-all hover:shadow-[0_2px_8px _rgba(59,130,2246.0.1)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <Link
                  href="https://stithautogroup-ui.vercel.app" 
                  target="_blank"
                  className="text-orange-400 hover:text-orange-300 transition-colors my-4 no-underline"
                >
                  View Project &rarr;
                </Link>
              </div>
            </div>

            {/* Coronavirus Tracker, ASP.NET or .NET  */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-[0_2px_8px _rgba(59,130,246.0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Coronavirus Tracker</h3>
              <img src="coronavirus_tracker.png" alt="logo" className="my-10" />
              <p className="text-gray-400 mb-4">
                Application used to retrieve COVID-19 cases and display related
                data.
              </p>
              <p className="text-gray-400 mb-4">
              This application was created to track the spread of the
              coronavirus. The application uses the Chart.js library to create
              charts and graphs to display the data. The application uses the
              Fetch API to get data from an API. I used the COVID-19 API to get
              data about the coronavirus.
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
                <Link
                  href="/"
                  className="text-orange-400 hover:text-orange-300 transition-colors my-4 no-underline"
                >
                  View Project &rarr;
                </Link>
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
