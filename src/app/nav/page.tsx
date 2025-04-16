"use client";
import Link from "next/link";
import { useState } from "react";
import Toggle from "../toggle/page";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* <nav className="fixed top-0 w-full z-40 backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="font-mono text-xl font-bold ">
              carltonstith.com
            </Link>
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-inset text-black focus:ring-white dark:text-white"
                onClick={toggleNavbar}
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
            {isOpen && (
              <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 spa-y-1 sm:px-3">
                  <Link href="/" className="block">
                    Home
                  </Link>
                  <Link href="/about" className="block">
                    About
                  </Link>
                  <Link href="/portfolio" className="block">
                    Portfolio
                  </Link>
                  <Link href="/blog" className="block">
                    Blog
                  </Link>
                  <Toggle />
                </div>
              </div>
            )}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/blog">Blog</Link>
              <Toggle />
            </div>
          </div>
        </div>
      </nav> */}

      <nav className="bg-transparent top-0 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/" className="text-2xl font-bold">
                carltonstith.com
                </Link>
              </div>
            </div>
            <div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/portfolio">Portfolio</Link>
                {/* <Link href="/contact">Contact</Link> */}
                <Link href="https://www.ceejaysmedia.com/dotCeeJayS/" target="_blank">Blog</Link>
                <Toggle />
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button className="inline-flex items-center justify-center p-2 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-inset text-black focus:ring-white dark:text-white" onClick={toggleNavbar}>
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden items-end space-x-8 top-0 left-0 w-full pe-2 z-40 flex flex-col justify-center transition-all duration-300 ease-in-out">
            <div className="px-2 pt-2 pb-3 spa-y-1 sm:px-3">
                <Link href="/" className="block">Home</Link>
                <Link href="/about" className="block">About</Link>
                <Link href="/portfolio" className="block">Portfolio</Link>
                <Link href="/blog" className="block">Blog</Link>
                <Toggle />
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
