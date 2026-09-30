import React from "react";
import { hero_icon } from "../icon";

const PromoCards = () => {
  const { bigarrow } = hero_icon;

  return (
    <div className="flex flex-col lg:flex-row gap-5 sm:gap-2 sm:gap-4 justify-center items-center w-full lg:w-[90%] xl:w-[66%] px-6 md:px-9 lg:px-0 xl:px-0">
      <div className="relative w-full overflow-hidden rounded-2xl">
        <img
          src="/img/offers-cards/banner1.png.png"
          alt="Travel"
          className="w-full sm:h-[250px] object-cover"
        />

        <div className="absolute left-3 sm:left-8 top-6 sm:top-10">
          <h2 className="text-xl  xl:text-[26px] tracking-wide font-bold text-[#000] leading-tight">
            Waking up
            <br />
            in a far
            <br />
            away place
          </h2>

          <button className="mt-4 md:mt-6 2xl:mt-8 flex items-center gap-3 rounded-full tracking-wide bg-[#FEFA17] px-3 sm:px-4 py-2 sm:py-3 text-[12px] font-bold text-[#000] hover:bg-yellow-300 transition">
            View More
            <span className="text-xl">{bigarrow}</span>
          </button>
        </div>
      </div>
      <div className="relative w-full overflow-hidden rounded-2xl">
        <img
          src="/img/offers-cards/banner2.png.png"
          alt="Travel"
          className="w-full sm:h-[250px] object-cover"
        />

        <div className="absolute left-3 sm:left-8 top-6 sm:top-10">
          <h2 className="text-xl xl:text-[25px] font-bold text-[#000] leading-tight">
            Big promotion
            <br />
            at the end of
            <br />
            the year
          </h2>

          <button className="mt-4 md:mt-6 2xl:mt-8  flex items-center gap-3 rounded-full tracking-wide bg-[#FEFA17] px-3 sm:px-4 py-2 sm:py-3 text-[12px] font-bold text-[#000] hover:bg-yellow-300 transition">
            View More
            <span className="text-xl">{bigarrow}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoCards;
