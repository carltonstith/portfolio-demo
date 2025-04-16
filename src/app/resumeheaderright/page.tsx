export default function ResumeHeaderRight() {
  return (
    <main className="flex-[3] min-h-screen p-10">
      <div className="flex max-w-[1000px] flex-col gap-10 p-5 md:mx-10 md:py-14">
        <div className="space-y-5">
          <h1 className="text-2xl font-bold md:text-4xl">About me</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
          Hi, I&apos;m Carlton — a software engineer with over a decade of experience building robust, scalable applications using .NET and JavaScript. I&apos;m passionate about crafting clean, maintainable code and creating solutions that solve real-world problems. Whether working on enterprise-level systems or agile startups, I bring a strong technical foundation, a collaborative spirit, and a commitment to continuous learning.</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
          I thrive in dynamic environments and enjoy tackling complex challenges. My expertise spans the full software development lifecycle, from requirements gathering and design to implementation and deployment. I have a knack for translating business needs into technical solutions, ensuring that projects are delivered on time and within scope.</p>

          <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">When I&apos;m not coding, I&apos;m usually exploring new technologies, mentoring junior developers, or diving into the next challenging project. Let&apos;s build something great together.
          </p>
        </div>

        <div className="space-y-10" id="experience">
          <h1 className="text-2xl font-bold md:text-4xl">Experience</h1>

          <div className="flex flex-col lg:flex-row lg:gap-20">
          <ul>
            <li className="relative flex flex-col gap-1 border-1 p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
              <span className="text-lg font-semibold">
                Applications Developer
              </span>
              <span className="font-light">Commonwealth of PA</span>
              <span className="text-sm text-gray-400">Feb 2024-Present</span>
              <p className="text-sm text-gray-600 dark:text-gray-400">
              Proficient full-stack Microsoft stack development, maintenance, and debugging of numerous .NET Framework enterprise software applications hosted in Microsoft Azure. Application development of new features using Visual Basic and SQL Server stored procedures. Web Forms and WCF application maintenance. Azure DevOps version control.
              </p>
            </li>

            <li className="relative flex flex-col gap-1 border-1 p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform mt-10">
              <span className="text-lg font-semibold">
              Full Stack Developer
              </span>
              <span className="font-light">New Ocean Health Solutions</span>
              <span className="text-sm text-gray-400">Feb 2023-Sept 2023</span>
              <p className="text-sm text-gray-600 dark:text-gray-400">
              Successful front-end UI conversion to Ionic 6, maintenance, and debugging of an Ionic Angular enterprise software application hosted in Microsoft Azure. Application development of new features using SQL Server stored procedures. Created a cohesive modern mobile application UI in a Scrum Agile environment. CI/CD pipelines and Git version control.
              </p>
            </li>

            <li className="relative flex flex-col gap-1 border-1 p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform mt-10">
              <span className="text-lg font-semibold">
              Software Developer
              </span>
              <span className="font-light">Alarm Connections</span>
              <span className="text-sm text-gray-400">June 2020-Nov 2022</span>
              <p className="text-sm text-gray-600 dark:text-gray-400">
              Full-stack development, maintenance, and debugging of a .NET Core 3.1 enterprise software application hosted in Microsoft Azure using Software Development Lifecycle principles. Application development using SQL Server tables and stored procedures. REST API development using .NET Core Web API to query a SQL Server database. Javascript, Kendo UI, and Angular used to create a modern UI in a Scrum Agile environment. Git version control and updates using Azure Repos.
              </p>
            </li>

            <li className="relative flex flex-col gap-1 border-1 p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform mt-10">
              <span className="text-lg font-semibold">
              Application Developer
              </span>
              <span className="font-light">Dossier Systems, Inc</span>
              <span className="text-sm text-gray-400">May 2018-Oct 2019</span>
              <p className="text-sm text-gray-600 dark:text-gray-400">
              Contributed to the front-end development of a .NET based business software application querying a REST API using Javascript and Vue Kendo UI in an Agile environment. Provide updates using Git.
              </p>
            </li>

            <li className="relative flex flex-col gap-1 border-1 p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform mt-10">
              <span className="text-lg font-semibold">
              Junior Web Developer
              </span>
              <span className="font-light">NextGen Healthcare</span>
              <span className="text-sm text-gray-400">Nov 2015-April 2018</span>
              <p className="text-sm text-gray-600 dark:text-gray-400">
              Contributed to the development of .NET client web applications in an Agile environment. Provide updates to company WordPress websites. HTML email creation and maintenance. Collaborate with coworkers in an Agile environment using Perforce (version control system).
              </p>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </main>
  );
}