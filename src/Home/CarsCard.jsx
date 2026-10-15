import React from "react";
import { hero_icon } from "../icon";

const CarsCard = ({ carimg }) => {
  const { location, like, yellowstar, display, setting, diesel, seat } =
    hero_icon;

  return (
    <div className="overflow-hidden rounded-[22px] bg-white w-[315px]">
      {/* IMAGE */}
      <div className="relative h-[270px]">
        <img
          src={carimg}
          alt="Boat Cruise"
          className="h-full w-full object-cover"
        />

        {/* Heart */}
        <span className="absolute right-6 top-6  h-7 w-7 text-center flex flex-row items-center justify-center rounded-full bg-white text-xl sm:text-2xl text-gray-700">
          {like}
        </span>
      </div>

      {/* WHITE OVERLAY CONTENT */}
      <div className="relative z-10 -mt-10  rounded-[22px] bg-white px-7 pb-7 pt-8 border border-gray-100 border-b-0">
        {/* Rating - overlaps image + white section */}
        <div className="absolute -top-5 right-8 rounded-full bg-white px-4 py-1 shadow-sm">
          <div className="flex flex-row items-center">
            <span>{yellowstar}</span>
            <span className="ml-1 text-[10px] sm:text-[12px] font-semibold text-[#000] tracking-wide">
              4.96
            </span>
            <span className="ml-1 text-[12px] font-light text-[#737373] tracking-wide">
              (672 reviews)
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="w-full h-full">
          <h2 className="text-[16px] sm:text-[19px] font-semibold  text-[#000] tracking-wide">
            Audi A3 1.6 TDI S line
          </h2>
        </div>

        {/* Details */}
        <div className="mt-1 flex flex-row  items-center gap-1 border-[#E4E6E8] border-b pb-5 pt-2">
          <span>{location}</span>
          <span className="text-[#737373] text-[13px]  tracking-wide">
            Manchester, England
          </span>
        </div>
        <div className="flex flex-row justify-between it pt-5 pr-10">
          <div className="flex flex-row items-center gap-1">
            <span>{display}</span>
            <span className="text-[#000] text-[13px] font-bold tracking-wide">
              25,100 miles
            </span>
          </div>
          <div className="flex flex-row items-center gap-1">
            <span>{location}</span>
            <span className="text-[#000] text-[13px] font-bold  tracking-wide">
              Automatic
            </span>
          </div>
        </div>
        <div className="flex flex-row justify-between it pt-2 pr-10">
          <div className="flex flex-row items-center gap-1">
            <span>{location}</span>
            <span className="text-[#000] text-[13px] font-bold tracking-wide">
              Diesel
            </span>
          </div>
          <div className="flex flex-row items-center gap-1">
            <span>{seat}</span>
            <span className="text-[#000] text-[13px] font-bold tracking-wide">
              7 seats
            </span>
          </div>
        </div>
        {/* Bottom */}
        <div className="mt-8 flex items-center justify-between">
          {/* Price */}
          <div>
            <span className="text-[16px] sm:text-[19px] font-semibold text-wide text-[#000]">
              $120
            </span>
            <span className="ml-2 text-[12px] font-light text-[#737373] text-wider">
              / person
            </span>
          </div>

          {/* Book Button */}
          <button className="rounded-full bg-[#F2F4F6] px-4 py-2 text-[10px] sm:text-[11px] font-semibold text-[#000] shadow-sm">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarsCard;
