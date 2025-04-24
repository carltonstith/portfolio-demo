"use client";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
// import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Toggle() {
  const { theme, setTheme } = useTheme();
  return (
      <Button
        variant="outline"
        size="icon"
        className="rounded-full"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "dark" ? (
          <FaSun className="text-2xl text-yellow-500" />
        ) : (
          <FaMoon className="text-2xl text-gray-800" />
        )}
      </Button>
  );
}
