import * as React from "react";
import { FeatureCard } from "./FeatureCard";

const features = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/948451c9cd8add0c7dc0bef71b0473d97863fd278817d8c452b8ceeb18b02e5b?placeholderIfAbsent=true&apiKey=f8a34676c8024e5f9712ef8747d7751a",
    title: "Timeless Design",
    description:
      "Gothic arches illuminated by neon accents create a mesmerizing atmosphere.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/948451c9cd8add0c7dc0bef71b0473d97863fd278817d8c452b8ceeb18b02e5b?placeholderIfAbsent=true&apiKey=f8a34676c8024e5f9712ef8747d7751a",
    title: "Interactive Experience",
    description: "Engage with our digital displays and immersive exhibitions.",
  },
];

export function MuseumSection() {
  return (
    <div className="flex overflow-hidden flex-col justify-center px-16 py-28 text-white bg-sienna-500 max-md:px-5 max-md:py-24">
      <div className="flex flex-wrap gap-10 items-center w-full max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <div className="flex flex-col w-full max-md:max-w-full">
              <div className="self-start text-base font-semibold whitespace-nowrap font-decorative">
                Enchantment
              </div>
              <div className="flex flex-col mt-4 w-full max-md:max-w-full">
                <div className="text-3xl font-bold leading-[50px] max-md:max-w-full max-md:text-2xl max-md:leading-[46px] font-decorative">
                  Experience the Fusion of Past and Future
                </div>
                <div className="mt-6 text-xl leading-7 max-md:max-w-full text-white/90">
                  Step into a realm where medieval elegance meets futuristic
                  innovation. Our museum's unique cyber-gothic aesthetic invites
                  you to explore history through a modern lens.
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-8 w-full max-md:max-w-full">
              <div className="flex flex-wrap gap-6 items-start py-2 w-full max-md:max-w-full">
                {features.map((feature, index) => (
                  <FeatureCard
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex gap-6 items-center self-start mt-8 text-base whitespace-nowrap">
            <button className="text-white/80 overflow-hidden gap-2 self-stretch px-6 py-3 my-auto border border-darkgrey border-solid max-md:px-5 hover:bg-sienna-700/60 focus:outline-none focus:ring-2 focus:ring-white">
              Discover
            </button>
            <button className="flex overflow-hidden gap-2 justify-center items-center self-stretch my-auto">
              <span className="self-stretch my-auto text-white/80">Explore</span>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c648c99086dabcc02665d7136f3813fa8d9ab4a20d15904140067b9f5dc1586?placeholderIfAbsent=true&apiKey=f8a34676c8024e5f9712ef8747d7751a"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
            </button>
          </div>
        </div>
        <img
          loading="lazy"
          src="/celtic-pattern.svg"
          alt="Museum exhibition showcasing cyber-gothic aesthetic"
          className="object-contain flex-1 z-40 shrink self-stretch my-auto w-56 aspect-[0.96] basis-0 min-w-[200px] max-md:max-w-full"
        />
      </div>
    </div>
  );
}
