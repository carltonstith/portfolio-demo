import { FaGithubAlt, FaYoutube, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  const name = "Carlton Stith";
  return (
    <>
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
        <aside className="grid-flow-col items-center">
        <Image src="/logo.svg" alt="logo" width={42} height={42} className="mx-auto h-10 w-auto" /> 
          <p>© {new Date().getFullYear()} {name}</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a href="https://www.linkedin.com/in/carltonjstith/" target="_blank">
          <FaLinkedin size={25} />
          </a>
          <a href="https://www.youtube.com/@CarltonStith" target="_blank">
          <FaYoutube size={25} />
          </a>
          <a href="https://github.com/carltonstith" target="_blank">
          <FaGithubAlt size={25} />
          </a>
        </nav>
      </footer>
    </>
  );
}
