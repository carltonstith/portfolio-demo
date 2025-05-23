import { Metadata } from "next";
import PortfolioCard from "../portfolio-card/page";
import { Suspense } from "react";
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

export default async function Portfolio({ searchParams }: Props) {
  // THIS IS THE OLD WAY, BUT IT WORKS
  const showModal = (await searchParams)?.modal === "true";
  const portfolioId = (await searchParams)?.id;
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
