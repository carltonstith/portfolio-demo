import { Metadata } from "next";
// import Link from "next/link";
// import Image from "next/image";
// import portfolioData from "../data/portfolio.json";
import PortfolioCard from "../portfolio-card/page";
import { Suspense } from "react";
import { PortfolioModal } from "./PortfolioModal";
import { PORTFOLIO_API } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore my projects and skills.",
};

export type Props = {
  // searchParams: Record<string, string> | null | undefined;
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

//const projects: PortfolioProps[] = portfolioData.PortfolioData;

export default async function Portfolio({ searchParams }: Props) {
  // const params = await searchParams;
  // const showModal = params?.showModal === "true";
  // const portfolioId = params.portfolioId;

  // THIS IS THE OLD WAY, BUT IT WORKS
  const showModal = (await searchParams)?.modal === "true";
  const portfolioId = (await searchParams)?.id;
  // console.log("showModal: ", showModal);
  // console.log("portfolioId: ", portfolioId); // this is undefined
  // console.log("searchParams: ", searchParams);
  const response = await fetch(PORTFOLIO_API, {
    next: { revalidate: 60 * 60 },
  });
  console.log("response: ", response);
  const projects: Portfolio[] = await response.json();
  console.log("projects: ", projects);

  return (
    <section>
      <div className="flex items-center justify-center min-h-screen py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {""}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects &&
              projects.map((projects: Portfolio, idx: number) => (
                <PortfolioCard key={idx} {...projects} />
              ))}

            {showModal && (
              <Suspense key={portfolioId} fallback={<div>Loading...</div>}>
                <PortfolioModal id={portfolioId} />
              </Suspense>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
