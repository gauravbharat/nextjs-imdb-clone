"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import DarkModeIcon from "./icons/DarkModeIcon";
import LightModeIcon from "./icons/LightModeIcon";

const DarkModeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  // console.log("DarkModeSwitch", { theme, systemTheme });

  return (
    <div
      className="cursor-pointer hover:text-amber-500"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {currentTheme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
    </div>
  );
};

export default DarkModeSwitch;
