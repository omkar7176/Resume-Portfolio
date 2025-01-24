// import React from "react";
import { Home, Github, Linkedin, Twitter } from "lucide-react";

const FloatingBar = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
      link: "https://github.com",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={23} />,
      link: "https://linkedin.com",
    },
    {
      name: "Twitter",
      icon: <Twitter size={23} />,
      link: "https://twitter.com",
    },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg px-4 py-4 flex items-center space-x-4 z-50">
      {socialLinks.map((item) =>
        item.link ? (
          <a
            key={item.name}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-950 hover:text-gray-900 transition-colors"
          >
            {item.icon}
          </a>
        ) : (
          <button
            key={item.name}
            onClick={item.action}
            className="text-gray-950 hover:text-gray-900 transition-colors"
          >
            {item.icon}
          </button>
        )
      )}
    </div>
  );
};

export default FloatingBar;
