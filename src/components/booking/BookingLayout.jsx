import React from "react";
import BookingHero from "./BookingHero";
import BookingFooter from "./BookingFooter";

export default function BookingLayout() {
  return (
    <div className="flex flex-col bg-slate-800">
      <BookingHero />
      <BookingFooter />
    </div>
  );
}
