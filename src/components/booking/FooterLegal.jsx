import React from "react";

const legalLinks = ["Privacy Policy", "Terms of Service", "Cookies Settings"];

export default function FooterLegal() {

  return (
    <div className="flex flex-col mt-20 w-full text-sm max-md:mt-10 max-md:max-w-full">
      <div className="flex w-full bg-white border border-white border-solid min-h-[1px] max-md:max-w-full" />
      <div className="flex flex-wrap gap-10 justify-between items-start mt-8 w-full max-md:max-w-full">
        <div className="text-white gothic-text">
          © 2025 Copyrights. All rights reserved.
        </div>
        <div className="flex gap-6 items-start text-white min-w-[240px]">
          {legalLinks.map((link) => (
            <button
              key={link}
              className="gothic-text underline decoration-auto decoration-solid underline-offset-auto hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label={link}
            >
              {link}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
