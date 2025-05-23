export default async function PortfolioCard() {
  return (
    <></>
  )
}

// import Image from "next/image";
// import Link from "next/link";
// import { headers } from "next/headers";
// import { Portfolio } from "@/app/portfolio/page";

// export const PortfolioCard = async (portfolio: Portfolio) => {
//   const headersList = await headers();
//   const pathname = headersList.get("x-pathname");
//   //console.log(pathname);
//   const url = new URL(pathname ? pathname: "", "http://localhost:3000/portfolio");
//   //console.log("pathname: "+ pathname);

//   url.searchParams.set("modal", "true");
//   url.searchParams.set("id", portfolio.id.toString());
  
//   return (
//     <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-[0_2px_8px _rgba(59,130,246.0.2)] transition">
//               <h3 className="text-xl font-bold mb-2">
//                 {portfolio.title}
//               </h3>
//               <Image
//                 src={portfolio.image}
//                 alt={portfolio.alt}
//                 width={300}
//                 height={300}
//                 className="my-10"
//               />
//               <p className="text-gray-400 mb-4">
//                 {portfolio.shortDescription}
//               </p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {portfolio.technologies.map((tech, key) => (
//                   <span
//                     key={key}
//                     className="bg-orange-500 text-white py-1 px-3 text-sm font-medium mr-2 rounded-full hover:bg-blue=500/20 transition-all hover:shadow-[0_2px_8px _rgba(59,130,2246.0.1)]"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               <div className="flex justify-between items-center mt-4">
//                 <Link
//                   href={url.toString()}
//                   scroll={false}
//                   className="text-orange-400 hover:text-orange-300 transition-colors my-4 no-underline"
//                 >
//                   View Project &rarr;
//                 </Link>
//               </div>
//             </div>
//   );
// }
