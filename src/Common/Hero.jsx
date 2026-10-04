import React from "react";
import { hero_icon } from "../icon";

const Hero = () => {
  const { leftwordarrow, rightwordarrow, profile, location, dower, search } =
    hero_icon;

  return (
    <div className="w-full h-full flex flex-col justify-start md:justify-center md:items-center">
      {/* Description */}
      <section className="relative w-full sm:h-[85vh] overflow-hidden flex flex-row gap-5 xl:justify-center">
        <div className="w-full xl:w-[82%] h-full absolute z-10 flex flex-row px-4 xl:px-0 gap-5 mx-auto xl:justify-center">
          <div className="w-full lg:w-[90%] xl:w-[60%] 2xl:w-[60%] flex flex-col gap-3 md:gap-3 2xl:gap-5 px-4 md:px-15 pt-18 sm:pt-25 md:pt-27 2xl:px-4">
            <button className="bg-[#FEFA17] py-3 md:py-3 2xl:py-3.5 px-3 md:px-5 text-xs text-black font-semibold rounded-3xl w-[150px] md:w-[165px]">
              Discovery the World
            </button>
            <h1 className="text-black text-sm md:text-2xl 2xl:text-5xl font-semibold md:font-bold tracking-wide">
              Unleash Your Wanderlust <br /> Book Your Next Journey
            </h1>
            <p className="text-xs md:text-sm 2xl:text-xl font-light text-black">
              Crafting Exceptional Journeys: Your Global Escape Planner. Unleash
              Your Wanderlust: Seamless Travel, Extraordinary Adventures
            </p>

            <div className="hidden md:flex flex-row items-center gap-1 md:gap-2 md:pt-15 lg:pt-9 2xl:pt-18 ">
              <div className="flex flex-row items-center justify-center rounded-full p-1 bg-[#E4E6E8] w-[32px] h-[32px]">
                <span className="text-black">{leftwordarrow}</span>
              </div>
              <div className="flex flex-row items-center justify-center rounded-full p-1 bg-[#E4E6E8] w-[32px] h-[32px]">
                <span className="text-black">{rightwordarrow}</span>
              </div>
            </div>
          </div>

          <div className="hidden 2xl:flex flex-col gap-2 w-[20%] 2xl:pt-12 2xl:pl-10">
            <div>
              <img
                src="img/travling-img.png"
                alt=""
                className="overflow-hidden w-[200px] rounded-xl border border-white border-3 hover:border-[#FEFA17]"
              />
            </div>
            <div>
              <img
                src="img/travling-img.png"
                alt=""
                className="overflow-hidden w-[200px] rounded-xl border border-white border-3 hover:border-[#FEFA17]"
              />
            </div>
            <div>
              <img
                src="img/travling-img.png"
                alt=""
                className="overflow-hidden w-[200px] rounded-xl border border-white border-3 hover:border-[#FEFA17]"
              />
            </div>
          </div>
        </div>

        {/* background image  */}
        <img
          src="img/bg-img.png"
          alt=""
          className="p-4 xl:p-0 overflow-hidden h-[350] md:h-full lg:h-full w-full mx-auto object-cover  rounded-4xl xl:rounded-none"
        />
      </section>
      {/* search area  */}
      <div className="hidden lg:block relative xl:w-[90%] lg:w-[85%] 2xl:w-[66%] border-black bg-white -mt-[10%] xl:-mt-[7%] 2xl:-mt-[5%] z-0 shadow-2xl h-[200px] rounded-xl">
        <div className="flex flex-col gap-10 2xl:gap-6 p-3 2xl:p-6">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-4">
              <button className="bg-[#000] py-2 px-3 text-xs text-white font-normal rounded-3xl mx-auto">
                Tours
              </button>
              <button className="hover:bg-[#000] p-2 text-xs text-black hover:text-white font-light rounded-3xl mx-auto">
                Hotels
              </button>
              <button className="hover:bg-[#000] p-2 text-xs text-black hover:text-white font-light rounded-3xl mx-auto">
                Tickets
              </button>{" "}
              <button className="hover:bg-[#000] p-2 text-xs text-black hover:text-white font-light rounded-3xl mx-auto">
                Rental
              </button>{" "}
              <button className="hover:bg-[#000] p-2 text-xs text-black hover:text-white font-light rounded-3xl mx-auto">
                Activities
              </button>
            </div>

            <div className="flex flex-row gap-1 items-center">
              <samp>{profile}</samp>
              <p className="text-[#737373] text-xs font-normal">
                Need some help?
              </p>
            </div>
          </div>

          <div className="border border-[#E4E6E8] rounded-md p-3 2xl:p-5 flex flex-row justify-between gap-2 xl:gap-12">
            <div className="flex flex-col gap-1 2xl:gap-2 border-r-2 pr-2 2xl:pr-6">
              <span className="text-xs font-semibold text-[#737373]">
                Location
              </span>
              <div className="flex flex-row items-center">
                <span>{location}</span>
                <div className="flex flex-row gap-1 2xl:gap-4 items-center">
                  <span className="text-xs text-black font-semibold">
                    New York, USA
                  </span>
                  <span>{dower}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col 2xl:gap-2 border-r-2 pr-1 2xl:pr-6">
              <span className="text-xs font-semibold  text-[#737373]">
                Check In
              </span>
              <div className="flex flex-row gap-1 items-center">
                <span>{location}</span>
                <div className="flex flex-row gap-1 2xl:gap-4 items-center">
                  <span className="text-xs text-black font-semibold">
                    New York, USA
                  </span>
                  <span>{dower}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1 border-r-2 pr-1 2xl:pr-6">
              <span className="text-xs font-semibold text-[#737373]">
                Location
              </span>
              <div className="flex flex-row items-center">
                <span>{location}</span>
                <div className="flex flex-row  gap-1 2xl:gap-4 items-center">
                  <span className="text-xs text-black font-semibold">
                    New York, USA
                  </span>
                  <span>{dower}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 pr-2 2xl:pr-4">
              <span className="text-xs font-semibold text-[#737373]">
                Location
              </span>
              <div className="flex flex-row items-center">
                <span>{location}</span>
                <div className="flex flex-row gap-1 2xl:gap-4 items-center">
                  <span className="text-xs text-black font-semibold">
                    New York, USA
                  </span>
                  <span>{dower}</span>
                </div>
              </div>
            </div>
            <button className="flex flex-row gap-2 bg-black text-white rounded-3xl py-3 px-5 text-sm items-end">
              <span>{search}</span>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
