import React from "react";
import { hero_icon } from "../icon";

const CategoriesCard = ({ image, placename }) => {
  const { rightwordarrow } = hero_icon;

  return (
    <div className="w-full border border-gray-100 shadow-sm bg-[#fff] flex flex-col gap-2 2xl:gap-8 p-3 h-[240px]  md:h-[230px] lg:h-[180px] 2xl:h-[200px] rounded-3xl">
      <div className="w-full h-full 2xl:h-[50%]">
        <img
          src={image}
          alt=""
          className="rounded-3xl w-full 2xl:w-[254px] overflow-hidden"
        />
      </div>
      <div className="h-[50%] flex flex-col gap-2">
        <h2 className="ml-1 text-[14px] sm:text-[13px] font-bold tracking-wide text-[#000]">
          {placename}
        </h2>
        <div className="flex flex-row justify-between items-center">
          <h6 className="ml-1 text-[12px] font-light tracking-wide text-[#737373]">
            356 Tours, 248 Activities
          </h6>
          <div className="flex flex-row items-center justify-center rounded-full p-1 bg-[#F2F4F6] w-[25px] h-[25px]">
            <span className="text-black">{rightwordarrow}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesCard;
