import Image from "next/image";
import Link from "next/link";
import { headers } from "next/headers";

import { Portfolio } from "@/app/portfolio/page";

export async function PortfolioCard(props: Portfolio) {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname");
  console.log(pathname);
  // const url = new URL(pathname ? pathname: "", "http://localhost:3000/portfolio");
  const url = new URL(pathname ? pathname: "", process.env.API_URL);
  console.log("pathname: "+ pathname);
  console.log(process.env.API_URL);

  url.searchParams.set("modal", "true");
  url.searchParams.set("id", props.id.toString());
  
  return (
    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-gray-500/30 hover:shadow-[0_2px_8px _rgba(59,130,246.0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                {props.title}
              </h3>
              <Image
                src={props.image}
                alt={props.alt}
                width={300}
                height={300}
                className="my-10"
              />
              <p className="text-gray-400 mb-4">
                {props.shortDescription}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {props.technologies.map((tech, key) => (
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
                  href={url.toString()}
                  scroll={false}
                  className="text-orange-400 hover:text-orange-300 transition-colors my-4 no-underline"
                >
                  View Project &rarr;
                </Link>
              </div>
            </div>
  );
}
