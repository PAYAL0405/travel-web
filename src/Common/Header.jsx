import React from "react";
import { hero_icon } from "../icon";

const Header = () => {
  const { lightningbolt, arrow } = hero_icon;

  return (
    <div className="hidden xl:block w-full">
      {/* Top Header */}
      <div className="flex flex-row gap-2 md:gap-5 items-center justify-center text-center bg-[#000] h-[28px] md:h-[36px] ">
        <div className="flex flex-row md:gap-1">
          <span className="flex">{lightningbolt}</span>
          <p className="font-Manrope text-white text-[7px] sm:text-[10.9px] tracking-wide md:tracking-wider">
            Unlock the Magic of Travel with Travila - Your Gateway to
            Extraordinary Experiences
          </p>
        </div>
        <div className="flex flex-row gap-2 items-center justify-center">
          <h1 className="font-400 text-[#F09814] text-[6px] md:text-[12px]">
            Get This Now{" "}
          </h1>
          <span className="hidden md:flex">{arrow}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
