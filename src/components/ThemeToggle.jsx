
import React, { useState } from 'react';
import { Sun, Moon } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="flex items-center space-x-2">
      <Sun className="h-5 w-5 text-yellow-500" />
      <Switch checked={isDarkMode} onCheckedChange={toggleTheme} />
      <Moon className="h-5 w-5 text-blue-500" />
    </div>
  );
};

export default ThemeToggle;
