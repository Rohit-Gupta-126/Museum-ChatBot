import * as React from "react";
import { ServiceCard } from "./ServiceCard";

const servicesData = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d3ad33ee67130d83e0d7fb635cea5f257f9d0c521a54ecf9a1367fe4556741db?placeholderIfAbsent=true&apiKey=f8a34676c8024e5f9712ef8747d7751a",
    title: "Secure Payment Integration for Peace of Mind",
    description: "Enjoy seamless transactions with our secure payment gateway.",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6dd824f9711d1cc25227494953668b166547215e932bef29cd8fa5dfef890f8a?placeholderIfAbsent=true&apiKey=f8a34676c8024e5f9712ef8747d7751a",
    title: "Instant Access to Our Chatbot Assistance",
    description: "Our chatbot is available 24/7 to assist you.",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6dd824f9711d1cc25227494953668b166547215e932bef29cd8fa5dfef890f8a?placeholderIfAbsent=true&apiKey=f8a34676c8024e5f9712ef8747d7751a",
    title: "User-Friendly Interface for Effortless Navigation",
    description: "Easily find what you need with our intuitive design.",
  },
];

export function ServicesSection() {
  return (
    <div className="flex overflow-hidden flex-col justify-center items-center px-16 py-28 text-white bg-slate-800 max-md:px-5 max-md:py-24">
      <div className="flex flex-wrap gap-10 justify-center items-center w-full max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full gothic-text text-center">
          Services
        </div>
        <div className="flex flex-col mt-4 w-full max-md:max-w-full items-center text-center">
          <div className="text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
            Explore Our Cutting-Edge Booking Solutions
          </div>
          <div className="mt-6 text-lg leading-7 max-md:max-w-full">
            Our innovative booking system offers real-time availability,
            ensuring you never miss out on your desired experience. With
            multi-language support, we cater to visitors from around the globe.
          </div>
        </div>
      </div>
      <div className="flex flex-col self-stretch mt-20 w-full text-center max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 justify-center items-start w-full max-md:max-w-full">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
      <div className="flex gap-6 items-center mt-20 text-base max-md:mt-10">
        <button
          className="overflow-hidden gap-2 self-stretch px-6 py-3 my-auto border border-darkgrey border-solid max-md:px-5 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-white"
          tabIndex="0"
        >
          Learn More
        </button>
        <button
          className="flex overflow-hidden gap-2 justify-center items-center self-stretch my-auto"
          tabIndex="0"
        >
          <span className="self-stretch my-auto">Sign Up</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee5bdbc32bbc53684deecb2f9d63712884517174ee790d5d45a4eae8116d726d?placeholderIfAbsent=true&apiKey=f8a34676c8024e5f9712ef8747d7751a"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
        </button>
      </div>
    </div>
  );
}
