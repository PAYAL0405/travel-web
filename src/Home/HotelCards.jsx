import React from "react";
import { hero_icon } from "../icon";

const HotelCards = () => {
  const { profile, location } = hero_icon;

  return (
    <div className="overflow-hidden rounded-[22px] bg-white ">
      {/* IMAGE */}
      <div className="relative h-[320px]">
        <img
          src="/img/service-card-img-1.png"
          alt="Boat Cruise"
          className="h-full w-full object-cover"
        />

        {/* Heart */}
        <button className="absolute right-6 top-6  h-6 w-6 text-center flex flex-row items-center justify-center rounded-full bg-white text-xl sm:text-2xl text-gray-700">
          ♡
        </button>
      </div>

      {/* WHITE OVERLAY CONTENT */}
      <div className="relative z-10 -mt-10  rounded-[22px] bg-white px-7 pb-7 pt-8 border border-gray-100 border-b-0">
        {/* Rating - overlaps image + white section */}
        <div className="absolute -top-5 right-8 rounded-full bg-white px-4 py-1 shadow-sm">
          <span className="text-yellow-400">★</span>
          <span className="ml-1 text-[10px] sm:text-[13px] font-semibold text-[#000]">
            4.96
          </span>
          <span className="ml-1 text-[12px] font-light text-[#737373]">
            (672 reviews)
          </span>
        </div>

        {/* Title */}
        <div className="w-full h-full">
          <h2 className="text-[16px] sm:text-[19px] font-semibold text-wide text-[#000]">
            California Sunset/Twilight Boat Cruise
          </h2>
        </div>

        {/* Details */}
        <div className="mt-1 flex flex-row justify-between items-center gap-5 text-[14px] text-gray-400">
          <div className="flex items-center gap-2">
            <span>{location}</span>
            <span className="text-[#737373] text-sm font-extralight text-wider">
              kjkmk
            </span>
          </div>

          <div className="flex items-center gap-1">
            <span className="text-[#737373] text-sm font-extralight text-wider">
              4-6 guest
            </span>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex items-center justify-between">
          {/* Price */}
          <div>
            <span className="text-[16px] sm:text-[19px] font-semibold text-wide text-[#000]">
              kk
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

export default HotelCards;
