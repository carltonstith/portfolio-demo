async function generateBlogData() {
  const blogPromise = await fetch(
    "https://www.ceejaysmedia.com/dotCeeJayS/wp-json/wp/v2/posts"
  );
  const posts = await blogPromise.json();
  return posts;
  // const blogData = posts.map((post) => ({
  //   id: post.id,
  //   title: post.title.rendered,
  //   content: post.content.rendered,
  //   date: post.date,
  // }));
  return {
    title: "About Us",
    description: "Learn more about us on this page.",
  };
}

export default async function About() {
  const blogData = await generateBlogData();
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
              Hello! I'm a software engineer with a passion for building web
              applications. I specialize in .NET and JavaScript technologies,
              and I love creating efficient and user-friendly solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((skill, key) => (
                    <span
                      key={skill}
                      className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-500/200 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
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
                      key={skill}
                      className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-500/200 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1">Latest Posts From my Blog</div>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt8">
            <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
            </div>
          </div> */}
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt8">
          <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
          </div>
        </div> */}
      </section>
      {/* <section>
        <ul>
          {blogData.map((post) => (
            <li key={post.id}>
              <h2>{post.title.rendered}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: post.excerpt.rendered.replace(/(<([^>]+)>)/gi, ""),
                }}
              />
              <p>{new Date(post.date).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      </section> */}
    </>
  );
}
