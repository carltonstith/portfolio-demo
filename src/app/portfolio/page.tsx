import { Metadata } from "next";
import {PortfolioCard} from "../components/PortfolioCard";
// import {PortfolioCard} from "../portfoliocard/page";
// import { Suspense } from "react";
import { PortfolioModal } from "./PortfolioModal";
import { PORTFOLIO_API } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore my projects and skills.",
};

export type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export type Portfolio = {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  github: string;
  liveDemo: string;
  image: string;
  alt: string;
};

export default async function Portfolio({ 
  searchParams 
}: {
  searchParams: Promise<{id:string, modal:string}>;
  //searchParams: Promise<{ modal:string, id:string}>; 
}) {
  //const { showModal } = await searchParams; // make showModal = true
  const params = await searchParams;
  // const showModal = params?.showModal === "true";
  // const portfolioId = params.portfolioId;
  const showModal = params?.modal === "true";
  const portfolioId = params?.id;

  const response = await fetch(PORTFOLIO_API, {
    next: { revalidate: 60 * 60 },
  }).then((res) => {
    if (!res.ok) {
      // Handle error in the UI
      console.error("Error fetching data:", res.statusText);
      // Optionally, you can redirect or show an error message
      // redirect("/portfolio");
      throw new Error("Failed to fetch data");
    }
    return res;
  });
  //console.log("response: ", response);
  const projects: Portfolio[] = await response.json();
  //console.log("projects: ", projects);

  return (
    <section>
      <div className="flex items-center justify-center min-h-screen py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {""}
            {/* Some of my work */}
            Hi. Thanks for taking a look at my portfolio.
Some of the projects that are featured here are labors of love and other were paid projects.
I'm currently available for hire.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects &&
              projects.map((projects: Portfolio, idx: number) => (
                <PortfolioCard key={idx} {...projects} />
              ))}

            {showModal && (
              <PortfolioModal id={portfolioId} />
              // <Suspense key={portfolioId} fallback={<div>Loading...</div>}>
              //   <PortfolioModal id={portfolioId} />
              // </Suspense>
            )}
          </div>
        </div>
      </div>
    </section>
  );
  // return (
  //   <section>
  //     <div className="flex items-center justify-center min-h-screen py-20">
  //       <div className="max-w-5xl mx-auto px-4">
  //         <h2 className="text-3xl font-bold mb-8 text-center">
  //           {""}
  //           Featured Projects
  //         </h2>
  //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  //           {projects &&
  //             projects.map((projects: Portfolio, idx: number) => (
  //               <PortfolioCard key={idx} {...projects} />
  //             ))}

  //           {showModal && (
  //             <Suspense key={portfolioId} fallback={<div>Loading...</div>}>
  //               <PortfolioModal id={portfolioId} />
  //             </Suspense>
  //           )}
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );
}
