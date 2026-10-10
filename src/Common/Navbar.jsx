"use client";
import React, { useState } from "react";
import { hero_icon } from "../icon";

const Navbar = ({ open }) => {
  const { coconuttree, downwordarrow, world, light, menu, menu2, blackdotes } =
    hero_icon;
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="w-[95%] flex flex-row items-center justify-between mx-auto ">
      {/* //Navebar// */}
      <div className="w-full xl:w-auto flex flex-row items-center justify-between gap-2 py-2.5">
        <div className="flex flex-row items-center gap-2 ">
          <div className="rounded-full bg-[#FEFA17]">
            <span>{coconuttree}</span>
          </div>

          <h1 className="font-bold text-md tracking-wide text-[#000000]">
            Travila{" "}
          </h1>
        </div>

        <div className="xl:hidden block ml-auto text-black">
          <span>{menu2}</span>
        </div>
      </div>

      {/* //Navebar// */}

      <div className="hidden xl:flex flex-row gap-2 xl:gap-6 2xl:gap-8">
        <div className="flex flex-row gap-1 xl:gap-2 items-center">
          <h6 className="text-[11.8px] text-[#000000] tracking-wide">Home</h6>
          <span>{downwordarrow}</span>
        </div>
        <div className="flex flex-row gap-1 2xl:gap-2 items-center">
          <h6 className="text-[10px] 2xl:text-[11px] text-[#000000] tracking-wide">
            Tours
          </h6>
          <span>{downwordarrow}</span>
        </div>{" "}
        <div className="flex flex-row gap-1 2xl:gap-2 items-center">
          <h6 className="text-[10px] 2xl:text-[11.8px] text-[#000000] tracking-wide">
            Destinations
          </h6>
          <span>{downwordarrow}</span>
        </div>{" "}
        <div className="flex flex-row gap-1 2xl:gap-2 items-center">
          <h6 className="text-[10px] 2xl:text-[11.8px] text-[#000000] tracking-wide">
            Activities
          </h6>
          <span>{downwordarrow}</span>
        </div>{" "}
        <div className="flex flex-row gap-1 2xl:gap-2 items-center">
          <h6 className="text-[10px] 2xl:text-[11.8px] text-[#000000] tracking-wide">
            Hotel
          </h6>
          <span>{downwordarrow}</span>
        </div>{" "}
        <div className="flex flex-row gap-1 2xl:gap-2 items-center">
          <h6 className="text-[10px] 2xl:text-[11.8px] text-[#000000] tracking-wide">
            Rental
          </h6>
          <span>{downwordarrow}</span>
        </div>{" "}
        <div className="flex flex-row gap-1 2xl:gap-2 items-center">
          <h6 className="text-[10px] 2xl:text-[11.8px] text-[#000000] tracking-wide">
            Tickets
          </h6>
          <span>{downwordarrow}</span>
        </div>{" "}
        <div className="flex flex-row gap-1 2xl:gap-2 items-center">
          <h6 className="text-[10px] 2xl:text-[11.8px] text-[#000000] tracking-wide">
            Pages
          </h6>
          <span>{downwordarrow}</span>
        </div>{" "}
        <div className="flex flex-row gap-1 2xl:gap-2 items-center">
          <h6 className="text-[10px] 2xl:text-[11.8px] text-[#000000] tracking-wide">
            Blog
          </h6>
          <span>{downwordarrow}</span>
        </div>{" "}
        <div className="flex flex-row items-center">
          <h6 className="text-[10px] 2xl:text-[11.8px] text-[#000000] tracking-wide">
            Contact
          </h6>
        </div>
      </div>
      <div className="hidden xl:flex flex-row items-center gap-2 2xl:gap-4">
        <div className="flex flex-row gap-1">
          <span>{world}</span>
          <div className="flex flex-row gap-4">
            <div className="flex flex-row gap-1 items-center">
              <h6 className="text-[9px] 2xl:text-[10px] text-[#000000]">EN</h6>
              <span>{downwordarrow}</span>
            </div>
            <div className="flex flex-row gap-1 items-center">
              <h6 className="text-[9px] 2xl:text-[10px] text-[#000000]">USD</h6>
              <span>{downwordarrow}</span>
            </div>
          </div>
        </div>
        <div className="bg-[#F2F4F6] rounded-3xl px-3 py-2">
          <span>{light}</span>
        </div>
        <button className="border border-[#E4E6E8] rounded-3xl px-3 py-2">
          <h6 className="text-[#000000] text-[13px] tracking-wider font-semibold">
            Signin
          </h6>
        </button>
        <div className="p-2 bg-[#FEFA17] rounded-sm ">{blackdotes}</div>
      </div>

      {/* Menu Button  */}
      <div className="rounded-md p-1 w-full fixed  flex justify-end">
        {/* {isShow && (
          <button
            onClick={() => setIsShow(!isShow)}
            className="text-white rounded-sm bg-black border border-black h-10 w-10 p-4"
          ></button>
        )} */}
      </div>
    </div>
  );
};

export default Navbar;
