import {
  BiCurrentLocation,
  BiEnvelope,
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoTwitter,
  BiPhone,
} from "react-icons/bi";
import globe from "../../../public/globe.svg";
import Image from "next/image";

export default function ResumeHeaderLeft() {
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
  const volunteerExperience = [
    {
      position: 'Volunteer Web Developer',
      company: 'CeeJayS Media',
      description: 'Developed and maintained multiple websites for local non-profit organizations and for-profit organizations.',
      startDate: 'November 2013',
      endDate: 'Present'
    },
    {
      position: 'Barcamp Philly Volunteer',
      company: 'Barcamp Philly',
      description: 'Volunteered at Barcamp Philly 2019. Helped with setup and breakdown of the event.',
      startDate: 'November 2014'
    },
    {
      position: 'Barcamp Philly Volunteer',
      company: 'Barcamp Philly',
      description: 'Volunteered at Barcamp Philly 2019. Helped with setup and breakdown of the event.',
      startDate: 'November 2015'
    },
    {
      position: 'Barcamp Philly Volunteer',
      company: 'Barcamp Philly',
      description: 'Volunteered at Barcamp Philly 2019. Helped with setup and breakdown of the event.',
      startDate: 'November 2018'
    },
    {
      position: 'Barcamp Philly Volunteer',
      company: 'Barcamp Philly',
      description: 'Volunteered at Barcamp Philly 2019. Helped with setup and breakdown of the event.',
      startDate: 'November 2019'
    },
    {
      position: 'Barcamp Philly Volunteer',
      company: 'Barcamp Philly',
      description: 'Volunteered at Barcamp Philly 2019. Helped with setup and breakdown of the event.',
      startDate: 'November 2023'
    },
    {
      position: 'Barcamp Philly Volunteer',
      company: 'Barcamp Philly',
      description: 'Volunteered at Barcamp Philly 2019. Helped with setup and breakdown of the event.',
      startDate: 'November 2024'
    }
  ];
  return (
    <main className="flex-1 min-h-screen relative p-10 dark:bg-zinc-800 dark:text-white sm:border-r dark:border-gray-700">
      <div className="flex flex-col gap-5">

        {/* HEADER */}
        <div className="flex flex-col items-center justify-center gap-5">
          <Image src={globe} alt="Globe" className="w-32 rounded-full" />

          <div className="text-center space-y-1">
            <h1 className="text-4xl font-light">
              Carlton <span className="font-semibold">Stith</span>
            </h1>
            <h3 className="text-xl font-light">Software Engineer</h3>
          </div>

          {/* <button></button> */}
        </div>

        {/* ABOUT */}
        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <BiCurrentLocation className="text-xl" />
              <span className="text-sm">Cheltenham, PA</span>
            </li>
            <li className="flex items-center gap-2">
              <BiEnvelope className="text-xl" />
              <span className="text-sm">carlton215@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <BiPhone className="text-xl" />
              <span className="text-sm">215-896-4556</span>
            </li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <h2 className="text-base font-semibold md:text-2xl">SOCIAL</h2>

          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              {/* <a href="https://github.com/carltonstith">
                  <BiLogoGithub className="text-xl" />
                </a> */}
              <BiLogoGithub className="text-xl" />
              <span>@carltonstith</span>
            </li>
            <li className="flex items-center gap-2">
              {/* <a href="https://x.com/carltonstith">
                  <BiLogoTwitter className="text-xl" />
                </a> */}
              <BiLogoTwitter className="text-xl" />
              <span>@carltonstith</span>
            </li>
            <li className="flex items-center gap-2">
              {/* <a href="https://www.linkedin.com/in/carltonjstith/">
                  <BiLogoLinkedin className="text-xl" />
                </a> */}
              <BiLogoLinkedin className="text-xl" />
              <span>@carltonjstith</span>
            </li>
          </ul>
        </div>

        {/* EDUCATION */}
        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <h2 className="text-base font-semibold md:text-2xl">EDUCATION</h2>
          <ul>
            <li className="relative flex flex-col gap-1 border-1 p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
              <span className="font-semibold md:text-lg">
                Broadcasting, Telecommunications, and Mass Media
              </span>
              <span className="font-light">Temple University</span>
              <span className="text-sm text-gray-400">2016-2007</span>
            </li>
          </ul>
        </div>

        {/* SKILLS */}
        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <h2 className="text-base font-semibold md:text-2xl">SKILLS</h2>

          <div className="flex flex-wrap gap-3">
            {/* <div className="rounded-xl p-6 hover:translate-y-1 transition-all"> */}
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((skill, key) => (
                  <span
                    key={skill}
                    className="bg-black text-white px-3 py-1 rounded-full text-sm hover:bg-blue-500/200 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            {/* </div> */}
          </div>

          <div className="flex flex-wrap gap-3">
            <h2 className="text-xl font-bold mb-4">Backend</h2>
            <div className="flex flex-wrap gap-2">
              {backendSkills.map((skill, key) => (
                <span
                  key={skill}
                  className="bg-black text-white px-3 py-1 rounded-full text-sm hover:bg-blue-500/200 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* VOLUNTEER & MISC. */}
        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <h2 className="text-base font-semibold md:text-2xl">VOLUNTEER & MISC.</h2>
          <div className="flex flex-wrap gap-16 p-3">
            <ul className="flex list-disc flex-col gap-3">
              {volunteerExperience.map((experience, key) => (
                <li key={key} className="flex flex-col gap-1">
                  <span className="font-semibold">{experience.position}</span>
                  <span className="font-light">{experience.company}</span>
                  <span className="text-sm text-gray-400">{experience.startDate} - {experience.endDate || 'Present'}</span>
                  <p className="text-sm text-gray-500">{experience.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
