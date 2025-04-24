import { Metadata } from "next";
import BlogPage from "../blog/blogpage";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about me on this page.",
};

export default function About() {
  const frontendSkills = [
    "HTML",
    "CSS",
    "Sass",
    "Bootstrap",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Angular",
    "React",
    "Next.js",
  ];
  const backendSkills = [
    ".NET",
    "C#",
    "Visual Basic",
    "SQL",
    "Azure",
    "Azure DevOps",
    "REST APIs",
    "GraphQL",
    "Entity Framework",
    "ASP.NET Core",
    "Microservices",
    "Docker",
    "Kubernetes",
  ];
  return (
    <>
      <section className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1.transition-all">
            <p className="mb-6">
              Hello! I&rsquo;m a software engineer with a passion for building web
              applications. I specialize in .NET and JavaScript technologies,
              and I love creating efficient and user-friendly solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((skill, key) => (
                    <span
                      key={key}
                      className="bg-orange-500 border-orange-700 text-white px-3 py-1 rounded-full text-sm hover:bg-orange-400 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                      // onClick={() => {
                      //   // Handle skill click
                      //   console.log(`Clicked on ${skill}`);
                      // }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((skill, key) => (
                    <span
                      key={key}
                      className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm hover:bg-orange-400 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 mt-6">
              <h3 className="text-xl font-bold mb-4">
                Latest Posts From my Blog
              </h3>
            </div>
            <BlogPage />
          </div>
        </div>
      </section>
    </>
  );
}
