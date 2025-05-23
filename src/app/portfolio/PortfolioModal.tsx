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

  const response = await fetch(PORTFOLIO_API + `/${id}`);
  const data = (await response.json()) as Portfolio;
  console.log(data[0].alt);
  console.log(Array.isArray(data));

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
              src={data[0].image}
                alt={data[0].title}
                className="object-contain w-full rounded-lg overflow-hidden"
                width={300}
                height={300}
                priority={true}
                loading="eager"
              />
            </div>
            <div className="space-y-2">
              <h1 className="font-bold text-2xl sm:text-3xl max-w-[90%]">
                {data[0].title}
              </h1>
              <div className="flex items-center gap-4">
                {/* ⭐ {product.rating.rate} */}
                dummy text
                <span className="text-sm text-zinc-500">
                  {/* ({product.rating.count}) */}
                  dummy text
                </span>
              </div>
              <p className="text-sm leading-loose">{data[0].description}</p>
              <span className="inline-block bg-blue-200 text-blue-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
                {data[0].technologies.map((tech, index) => (
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
          <Link href={data[0].liveDemo} target="_blank">
            <button className="h-11 bg-secondary text-secondary-foreground hover:bg-secondary/80 justify-center flex text-center w-full border rounded py-2 text-white hover:bg-white transition-colors duration-300 hover:text-zinc-900 border-zinc-300 hover:border-zinc-900">
              Live Demo
            </button>
          </Link>
          <Link href={data[0].github} target="_blank">
            <button className="h-11 bg-secondary text-secondary-foreground hover:bg-secondary/80 justify-center flex text-center w-full border rounded py-2 text-white hover:bg-white transition-colors duration-300 hover:text-zinc-900 border-zinc-300 hover:border-zinc-900">
              Code
            </button>
          </Link>
        </div>
      </div>
    </div>

    // <div className="card lg:card-side bg-base-100 shadow-sm">
    //   <button className="text-black text-xl place-self-end">X</button>
    //   <figure>
    //     <Image
    //       src={portfolio.liveDemo}
    //       alt={portfolio.alt}
    //       width={30}
    //       height={30}
    //     />
    //   </figure>
    //   <div className="card-body">
    //     <h2 className="card-title">New album is released!</h2>
    //     <p>Click the button to listen on Spotiwhy app.</p>
    //     <div className="card-actions justify-end">
    //       <button className="btn btn-primary">Listen</button>
    //     </div>
    //   </div>
    // </div>

    // <div className="fixed inset-0 flex  bg-black bg-opacity-25 backdrop-blur-sm items-center justify-center z-50">
    //   <div className="w-[600px] flex flex-col">
    //     <button className="text-white text-xl place-self-end">X</button>
    //     <div className="bg-white p-2 rounded">
    //       <h2 className="text-xl font-bold mb-4">Project Details</h2>
    //     <p className="text-gray-700 dark:text-gray-300 mb-4">
    //       This is a detailed description of the project. It includes information
    //       about the technologies used, the challenges faced, and the solutions
    //       implemented.
    //     </p>
    //     <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
    //       Close
    //     </button>
    //     </div>

    //   </div>
    //   <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-6 max-w-md w-full">
    //     <h2 className="text-xl font-bold mb-4">Project Details</h2>
    //     <p className="text-gray-700 dark:text-gray-300 mb-4">
    //       This is a detailed description of the project. It includes information
    //       about the technologies used, the challenges faced, and the solutions
    //       implemented.
    //     </p>
    //     <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
    //       Close
    //     </button>
    //   </div>
    // </div>
  );
};
