import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";

import { PORTFOLIO_API } from "@/lib/constants";
import { Portfolio } from "./page";

interface PortfolioModalProps {
  id?: string;
}

// const portfolio: Portfolio = {
//   id: 0,
//   title: "",
//   shortDescription: "",
//   description: "",
//   technologies: [],
//   github: "",
//   liveDemo: "",
//   image: "",
//   alt: "",
// };

export const PortfolioModal = async ({ id }: PortfolioModalProps) => {
  if (!id || isNaN(parseInt(id, 10))) {
    return redirect("/portfolio");
  }
  console.log("id: ", id);

  const response = await fetch(PORTFOLIO_API + `/${id}`).then((res) => {
    if (!res.ok) {
      // Handle error in the UI
      console.error("Error fetching data:", res.statusText);
      // Optionally, you can redirect or show an error message
      redirect("/portfolio");

      throw new Error("Failed to fetch data");
    }
    return (res.json() as unknown) as Portfolio;
  });

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <Link
        className="fixed inset-0 bg-black opacity-75 cursor-default"
        href="/portfolio"
        scroll={false}
      />
      <div className="relative w-full max-w-3xl bg-white rounded-md shadow-md">
        <div className="flex justify-between items-start">
          <Link
            className="absolute top-2.5 right-2.5 h-6 w-6 bg-black text-white rounded justify-center items-center flex pb-0.5"
            href="/portfolio"
            scroll={false}
          >
            &times;
            <span className="sr-only">Close Modal</span>
          </Link>
        </div>
        <div className="bg-white rounded-lg max-w-3xl h- mx-auto p-3 space-y-4 overflow-y-auto max-h-96 z-20">
          <div className="grid gap-4 md:grid-cols-2 items-start">
            <div className="aspect-square w-full relative bg-white rounded-t-lg">
              <Image
              src={response.image}
                alt={response.title}
                className="object-contain w-full rounded-lg overflow-hidden"
                width={300}
                height={300}
                priority={true}
                loading="eager"
              />
            </div>
            <div className="space-y-2">
              <h1 className="font-bold text-2xl sm:text-3xl max-w-[90%]">
                {response.title}
              </h1>
              {/* <div className="flex items-center gap-4">
                dummy text
                <span className="text-sm text-zinc-500">
                  dummy text
                </span>
              </div> */}
              <p className="text-sm leading-loose">{response.description}</p>
              <span className="inline-block bg-blue-200 text-blue-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
                {response.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-orange-500 text-white py-1 px-3 text-sm font-medium mr-2 rounded-full hover:bg-blue=500/20 transition-all hover:shadow-[0_2px_8px _rgba(59,130,2246.0.1)]"
                  >
                    {tech}
                  </span>
                ))}
              </span>
            </div>
          </div>
        </div>
        <div className="pb-3 px-3">
          <Link href={response.liveDemo} target="_blank" className="btn btn-clr-primary">
          Live Demo
          </Link>
          <Link href={response.github} target="_blank" className="btn btn-clr-secondary">
          Code
          </Link>
        </div>
      </div>
    </div>
  );
};
