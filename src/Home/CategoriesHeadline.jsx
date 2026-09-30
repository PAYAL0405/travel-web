import React from "react";
import { hero_icon } from "../icon";

const CategoriesHeadline = () => {
  const { arrow } = hero_icon;

  return (
    <div className="w-full lg:w-[90%] xl:w-[66%] px-6 md:px-9 lg:px-0 xl:px-0 flex flex-row items-center justify-between pt-3 md:pt-12 xl:pt-15 pb-3 xl:pb-5 ">
      <div className="flex flex-col gap-1 md:gap-2">
        <h1 className="text-black text-sm md:text-2xl 2xl:text-5xl font-semibold md:font-bold tracking-wide">
          Top Categories of Tours
        </h1>
        <h6 className="text-xs md:text-sm 2xl:text-[16px] font-extralight text-[#737373]">
          Favorite destinations based on customer reviews
        </h6>
      </div>
      <div className="hidden sm:flex flex-row gap-1 ">
        <button className="bg-[#000] flex flex-row justify-center items-center gap-1 py-2 px-4 text-xs text-white font-light rounded-3xl">
          View More
          <span>{arrow}</span>
        </button>
      </div>
    </div>
  );
};

export default CategoriesHeadline;
