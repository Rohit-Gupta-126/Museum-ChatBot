import * as React from "react";

export function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain w-12 aspect-square"
      />
      <div className="mt-4 text-xl font-bold leading-snug">{title}</div>
      <div className="mt-4 text-base leading-6">{description}</div>
    </div>
  );
}
