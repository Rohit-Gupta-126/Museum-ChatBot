import * as React from "react";

export function ServiceCard({ image, title, description }) {
  return (
    <div className="flex overflow-hidden flex-col flex-1 shrink basis-0 min-w-[240px]">
      <img
        loading="lazy"
        src={image}
        alt={title}
        className="object-contain w-full aspect-[1.69]"
      />
      <div className="flex flex-col mt-8 w-full">
        <div className="text-3xl font-bold leading-10">{title}</div>
        <div className="mt-6 text-base leading-6">{description}</div>
      </div>
    </div>
  );
}
