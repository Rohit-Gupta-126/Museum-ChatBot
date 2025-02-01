import React from "react";
import FooterLinks from "./FooterLinks";
import FooterLegal from "./FooterLegal";

export default function BookingFooter() {
  return (
    <div className="flex overflow-hidden flex-col px-16 py-20 w-full bg-slate-800 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col items-center self-center max-w-full w-[493px]">
        <div className="flex overflow-hidden flex-col w-[84px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c16890a5e9b7f628774a3232abe099dd9905ecbab571a0426283edee98870e6?placeholderIfAbsent=true&apiKey=f8a34676c8024e5f9712ef8747d7751a"
            className="object-contain w-full aspect-[2.33]"
            alt="Company Logo"
          />
        </div>
        <FooterLinks />
      </div>
      <FooterLegal />
    </div>
  );
}
