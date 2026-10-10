"use client";
import { useRef } from "react";
import React from "react";
import { hero_icon } from "../icon";
import CarsCard from "./CarsCard";

const RecentLaunchedCar = () => {
  const sliderRef = useRef(null);
  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: sliderRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const handlePrevious = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -sliderRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };
  const { rightwordarrow, leftwordarrow } = hero_icon;

  return (
    <div className="w-full bg-[#E4F9F9] flex flex-col items-center py-6">
      <div className=" w-full lg:w-[90%] xl:w-[66%] px-6 md:px-9 lg:px-0 xl:px-0 py-12 flex flex-row items-center justify-between pt-3 md:pt-12 xl:pt-15 pb-3 xl:pb-5 ">
        {/* Header Section */}
        <div className="flex flex-col gap-1 md:gap-2">
          <h1 className="text-black text-sm md:text-2xl 2xl:text-5xl font-semibold md:font-bold tracking-wide">
            Recent Launched Car
          </h1>
          <h6 className="text-xs md:text-sm 2xl:text-[16px] font-extralight text-[#737373]">
            The world's leading car brands
          </h6>
        </div>
        <div className="flex flex-row items-center gap-2 pt-1 md:pt-2">
          <button
            onClick={handlePrevious}
            className="flex items-center justify-center rounded-full p-1 bg-[#E4E6E8] w-[32px] h-[32px]"
          >
            <span className="text-black">{leftwordarrow}</span>
          </button>

          <button
            onClick={handleNext}
            className="flex items-center justify-center rounded-full p-1 bg-[#E4E6E8] w-[32px] h-[32px]"
          >
            <span className="text-black">{rightwordarrow}</span>
          </button>
        </div>
      </div>
      <div
        ref={sliderRef}
        className="w-full flex flex-row gap-4 overflow-x-auto scroll-smooth scrollbar-hide py-9 pl-6 pr-6 2xl:pl-[17%]"
      >
        <div className="">
          <CarsCard />
        </div>
      </div>
    </div>
  );
};

export default RecentLaunchedCar;
