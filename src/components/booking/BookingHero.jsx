import React from "react";

export default function BookingHero() {
  return (
    <div className="flex overflow-hidden flex-col justify-center items-start px-16 py-28 w-full bg-slate-800 max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[768px]">
        <div className="flex flex-col w-full text-white max-md:max-w-full">
          <div className="text-5xl font-bold leading-tight gothic-text max-md:max-w-full max-md:text-4xl">
            Book Your Tickets Effortlessly
          </div>
          <div className="mt-6 text-lg gothic-text max-md:max-w-full">
            Experience the fusion of history and technology—secure your visit
            today with our easy booking!
          </div>
        </div>
        <div className="flex gap-4 items-start self-start mt-8 text-base">
          <button
            className="gap-2 self-stretch px-6 py-3 text-slate-900 whitespace-nowrap bg-white border border-darkgrey border-solid max-md:px-5 hover:bg-slate-100 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Book tickets"
          >
            Book
          </button>
          <button
            className="gap-2 self-stretch px-6 py-3 text-white border border-darkgrey border-solid max-md:px-5 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Learn more about booking"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
