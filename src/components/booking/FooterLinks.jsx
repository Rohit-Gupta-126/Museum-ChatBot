import React from "react";

const links = ["Contact Us", "About Us", "Help Center", "Careers", "FAQ"];

export default function FooterLinks() {

  return (
    <div className="flex flex-wrap gap-8 justify-center items-start mt-8 w-full text-sm font-semibold text-white">
      {links.map((link) => (
        <button
          key={link}
          className="gothic-text hover:underline focus:outline-none focus:ring-2 focus:ring-white"
          aria-label={link}
        >
          {link}
        </button>
      ))}
    </div>
  );
}
