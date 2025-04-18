"use client";
import React, { useEffect } from 'react';
import ResumeHeaderLeft from "../resumeheaderleft/page";
import ResumeHeaderRight from "../resumeheaderright/page";

export default function Resume() {
  // const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
   console.log("Resume page loaded");
  }, []);
  return (
    <>
    <main className="min-h-screen w-full flex flex-col sm:flex-row py-20 max-w-960 m-auto resume-container">
    <ResumeHeaderLeft />
    <ResumeHeaderRight />
    </main>
    </>
  );
}