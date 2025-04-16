"use client";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
// import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Toggle() {
  const { theme, setTheme } = useTheme();
  // const [ themeColor, setThemeColor ] = useState("");
  return (
    // <>
    // <Button className="bg-transparent" onClick={() => {
    //   setThemeColor("");
    // }}>
    //   <FaSun />
    // </Button>
    // <Button className="bg-transparent" onClick={() => {
    //   setThemeColor("dark");
    // }}>
    //   <FaMoon />
    // </Button>
    // </>
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

// import React, { useState } from "react";
// import { LuMoon, LuSun } from "react-icons/lu";

// export default function Toggle() {
//   const [ theme, setTheme ] = useState('');
//   return (
//     <div className={`${theme ? "dark" : ""} bg-white dark:bg-zinc-800 dark`}>
//       <div className="bg-zinc-100 dark:bg-zinc-700 p-2 rounded-xl">
//         <button 
//         onClick={() => {
//           setTheme("")
//         }}
//         className="bg-transparent p-3 hover:bg-zinc-200 dark:hover:bg-zinc-100/10 text-black dark:text-white rounded">
//           <LuSun className="text-2xl" />
//         </button>
//         <button
//         onClick={() => {
//           setTheme("dark")
//         }}
//         className="bg-transparent p-3 hover:bg-zinc-200 dark:hover:bg-zinc-100/10 text-black dark:text-white rounded">
//           <LuMoon className="text-2xl" />
//         </button>
//       </div>
//     </div>
//   );
// }
