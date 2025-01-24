import React, { useState } from "react";
import { Home, Github, Linkedin, Twitter, Moon, Sun } from "lucide-react";

const FloatingBar = () => {
  // State for theme mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark", !isDarkMode);
  };

  // Social media links
  const socialLinks = [
    {
      name: "Home",
      icon: <Home size={23} />,
      action: scrollToTop,
    },
    {
      name: "GitHub",
      icon: <Github size={23} />,
      link: "https://github.com/omkar7176",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={23} />,
      link: "https://www.linkedin.com/in/omkar-tupere/",
    },
    {
      name: "Twitter",
      icon: <Twitter size={23} />,
      link: "https://x.com/omkartupere5",
    },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-950 rounded-full shadow-lg px-4 py-4 flex items-center space-x-4 z-50">
      {socialLinks.map((item) =>
        item.link ? (
          <a
            key={item.name}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-950 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300 transition-colors"
          >
            {item.icon}
          </a>
        ) : (
          <button
            key={item.name}
            onClick={item.action}
            className="text-gray-950 dark:text-gray-200 hover:text-gray-950 dark:hover:text-gray-300 transition-colors"
          >
            {item.icon}
          </button>
        )
      )}
      <button
        onClick={toggleTheme}
        className="text-gray-950 dark:text-gray-200 hover:text-gray-950 dark:hover:text-gray-600 transition-colors"
      >
        {isDarkMode ? <Sun size={23} /> : <Moon size={23} />}
      </button>
    </div>
  );
};

export default FloatingBar;
