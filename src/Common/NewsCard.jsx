import React from "react";
import { hero_icon } from "../icon";

const NewsCard = ({ img, newsheading, news }) => {
  const { location, clock2, profile, like, msg, celender2 } = hero_icon;

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
        <span className="absolute right-6 top-6  h-7 w-7 text-center flex flex-row items-center justify-center rounded-full bg-white text-xl sm:text-2xl text-gray-700">
          {like}
        </span>
      </div>

      {/* WHITE OVERLAY CONTENT */}
      <div className="relative z-10 -mt-10  rounded-[22px] bg-white px-7 pb-7 pt-7 border border-gray-100 ">
        {/* Rating - overlaps image + white section */}
        {/* Details */}
        <div className="flex flex-row items-center  justify-between">
          <div className="flex items-center gap-1">
            <span>{celender2}</span>
            <span className="text-[#000] text-[12px] font-light text-wider">
              18 Sep 2024
            </span>
          </div>

          <div className="flex items-center gap-1">
            <span>{clock2}</span>
            <span className="text-[#000] text-[12px] font-light text-wider">
              4-6 guest
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span>{msg}</span>
            <span className="text-[#000] text-[12px] font-light text-wider">
              4-6 guest
            </span>
          </div>
        </div>
        {/* Title */}
        <div className="w-full pt-3">
          <h2 className="text-[14px] sm:text-[16px] xl:text-[17px] font-semibold text-wide text-[#000]">
            {newsheading}
          </h2>
        </div>

        {/* Book Button */}
        <div className="flex flex-row justify-between pt-4 2xl:pt-7">
          <div className="flex flex-row gap-2 items-center">
            <div className="ml-2 w-7 h-7">
              <img src="/img/small-img-profile/avatar.png.png" alt="" />
            </div>
            <h6 className="text-[11px] font-semibold tracking-wide text-[#000]">
              Jimmy Dave
            </h6>
          </div>
          <button className="rounded-full bg-[#F2F4F6] px-4 py-2 text-[10px] sm:text-[11px] font-semibold text-[#000] shadow-sm">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
