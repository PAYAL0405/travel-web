import React from "react";
import { hero_icon } from "../icon";

const NewsCard = ({ img, newsheading, news }) => {
  const { location, clock, profile } = hero_icon;

  return (
    <div className=" overflow-hidden rounded-[22px] bg-white">
      {/* IMAGE */}
      <div className="relative h-[320px] h-full ">
        <img
          src={img}
          alt="Boat Cruise"
          className="h-full w-full object-cover"
        />

        {/* Top Rated */}
        <div className="absolute left-6 top-6 rounded-full bg-white px-4 sm:px-5 py-1.5 text-[12px] font-semibold text-[#000]">
          {news}
        </div>

        {/* Heart */}
        <button className="absolute right-6 top-6  h-6 w-6 text-center flex flex-row items-center justify-center rounded-full bg-white text-xl sm:text-2xl text-gray-700">
          ♡
        </button>
      </div>

      {/* WHITE OVERLAY CONTENT */}
      <div className="relative z-10 -mt-10  rounded-[22px] bg-white px-7 pb-7 pt-7 border border-gray-100 border-b-0">
        {/* Rating - overlaps image + white section */}
        {/* Details */}
        <div className="flex flex-row items-center gap-8">
          <div className="flex items-center gap-1">
            <span>{clock}</span>
            <span className="text-[#737373] text-sm font-extralight text-wider">
              knjn
            </span>
          </div>

          <div className="flex items-center gap-1">
            <span>{profile}</span>
            <span className="text-[#737373] text-sm font-extralight text-wider">
              4-6 guest
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span>{profile}</span>
            <span className="text-[#737373] text-sm font-extralight text-wider">
              4-6 guest
            </span>
          </div>
        </div>
        {/* Title */}
        <div className="w-full pt-3">
          <h2 className="text-[16px] sm:text-[17px] font-semibold text-wide text-[#000]">
            {newsheading}
          </h2>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex items-center justify-between">
          {/* Price */}
          <div className="flex flex-row gap-2">
            <div className="ml-2 w-8 h-8 ">
              <img src="/img/small-img-profile" alt="" />
            </div>
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

export default NewsCard;
