"use client";
import { Button } from "@/components/ui/button";
// import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      <main className="min-h-screen flex items-center justify-center relative">
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="wave">👋</span>, I&apos;m Carlton&#33;
          </h1>
          <p className="text-lg mb-8 max-w-lg mx-auto">
            I&apos;m a software engineer with a passion for building web
            applications. My expertise lies in creating scalable, user-friendly,
            and efficient solutions for modern web platforms.
          </p>
          <div className="space-x-2">
            <a href="/resume">
              <Button className="resume-button">Resume</Button>
            </a>
            <a href="/portfolio">
              <Button className="resume-button" variant="outline">
                View Portfolio
              </Button>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
