"use client";
import React, { useState } from "react";
import { hero_icon } from "../icon";

const Hero = () => {
  const { leftwordarrow, rightwordarrow, profile, location, dower, search } =
    hero_icon;

  const [currentBg, setCurrentBg] = useState(0);

  const backgrounds = ["/img/bg-img.png", "/img/flight-img.png"];
  return (
    <div className="w-full">
      <section className="relative w-full h-auto xl:h-[85vh] overflow-hidden">
        {/* ================= BACKGROUND ================= */}
        <img
          src={backgrounds[currentBg]}
          alt="Travel Background"
          className="absolute w-full h-full object-cover"
        />

        {/* Light Overlay */}
        <div className="absolute inset-0 bg-white/10" />

        {/* ================= MAIN CONTAINER ================= */}
        <div className="relative z-10 w-full lg:w-[90%] xl:w-[66%] mx-auto">
          {/* ================= HERO CONTENT ================= */}
          <div
            className="
          flex
          flex-col
          lg:flex-row
          justify-between
          items-start
        "
          >
            {/* ================= LEFT CONTENT ================= */}
            <div
              className="pt-[40px] sm:pt-[100px] lg:pt-[110px]
              p-6
              sm:p-10
              lg:p-0
          "
            >
              {/* Badge */}
              <button
                className="
              bg-[#FEFA17]
              text-black
              px-4
              py-3
              rounded-full
              text-[12px]
              font-semibold
            "
              >
                Discovery the World
              </button>

              {/* Heading */}
              <h1
                className="
              mt-5
              sm:mt-6
              text-black
              font-bold
              leading-[1.08]
              text-[25px]
              sm:text-[30px]
              md:text-[35px]
              lg:text-[40px]
              xl:text-[45px]
              2xl:text-[53px]
            
            "
              >
                Unleash Your Wanderlust
                <br className="hidden sm:block" />
                Book Your Next Journey
              </h1>

              {/* Description */}
              <p className="mt-5 text-black text-sm sm:text-base md:text-lg lg:text-[17px] xl:text-lg leading-relaxed max-w-[770px] tracking-wider">
                Crafting Exceptional Journeys: Your Global Escape Planner.
                Unleash Your Wanderlust: Seamless Travel, Extraordinary
                Adventures
              </p>

              {/* ================= ARROWS ================= */}
              <div className="flex items-center gap-2 mt-10 sm:mt-12 md:mt-20">
                <button
                  className="bg-[#fff] rounded-full p-2"
                  onClick={() => {
                    setCurrentBg((prev) => (prev === 0 ? 1 : 0));
                  }}
                >
                  <span>{leftwordarrow}</span>
                </button>

                <button
                  className="bg-[#fff] rounded-full p-2"
                  onClick={() => {
                    setCurrentBg((prev) => (prev === 0 ? 1 : 0));
                  }}
                >
                  <span>{rightwordarrow}</span>
                </button>
              </div>
            </div>

            {/* ================= RIGHT IMAGES ================= */}
            <div
              className="
            hidden
            lg:flex
            flex-col
            gap-3
            w-[150px]
            xl:w-[175px]
            2xl:w-[195px]
            pt-12
            mr-2
            xl:mr-0
          "
            >
              <img
                src="/img/travling-img.png"
                alt="Travel"
                className="
                w-full
                h-[100px]
                xl:h-[110px]
                2xl:h-[125px]
                object-cover
                rounded-xl border-3
 border-white/80
              "
              />

              <img
                src="/img/travling-img.png"
                alt="Travel"
                className="
                w-full
                h-[100px]
                xl:h-[110px]
                2xl:h-[125px]
                object-cover
                rounded-xl
                border-3
                border-white/80
              "
              />

              <img
                src="/img/travling-img.png"
                alt="Travel"
                className="
                w-full
                h-[100px]
                xl:h-[110px]
                2xl:h-[125px]
                object-cover
                rounded-xl
                border-3
                border-white/80
              "
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= SEARCH CARD ================= */}
      {/* SEARCH AREA */}
      <div className="flex flex-col gap-4 relative z-50 w-[90%] xl:w-[66%] mx-auto  bg-white  rounded-xl shadow p-4 sm:p-5 -mt-3 sm:-mt-8 xl:-mt-25 bg-white rounded-2xl py-2 shadow-sm">
        {/* TOP */}
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-3 sm:gap-7 over flow-x-auto">
            <button className="bg-[#000] text-white rounded-full px-3 py-2 text-[10px] tracking-wider">
              Tours
            </button>
            <button className="text-[10px] 2xl:text-[11px] text-[#000000] tracking-wide">
              Hotels
            </button>
            <button className="text-[10px] 2xl:text-[11px] text-[#000000] tracking-wide">
              Tickets
            </button>
            <button className="text-[10px] 2xl:text-[11px] text-[#000000] tracking-wide">
              Rental
            </button>
            <button className="text-[10px] 2xl:text-[11px] text-[#000000] tracking-wide">
              Activities
            </button>
          </div>

          <div className="hidden md:flex items-center gap-1 text-xs text-[#737373] whitespace-nowrap">
            <span>{profile}</span>
            <span>Need some help?</span>
          </div>
        </div>

        {/* SEARCH ROW */}
        <div className="border border-[#E4E6E8] rounded-2xl p-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1.1fr_auto] items-center">
            {/* LOCATION */}
            <div className="px-3 py-3 lg:border-r border-[#E4E6E8]">
              <p className="text-[10px] font-bold text-[#737373] mb-1">
                Location
              </p>

              <div className="flex items-center gap-2">
                <span className="text-gray-400">{location}</span>

                <span className="text-[11px] font-semibold text-[#000]">
                  New York, USA
                </span>

                <span className="">{dower}</span>
              </div>
            </div>

            {/* CHECK IN */}
            <div className="px-3 sm:px-4 py-3 lg:border-r border-[#E4E6E8]">
              <p className="text-[10px] font-bold text-[#737373] mb-1">
                Check In
              </p>

              <div className="flex items-center gap-2">
                <span className="text-gray-400">{location}</span>

                <span className="text-[11px] font-semibold text-[#000]">
                  02 January 2024
                </span>

                <span className="">{dower}</span>
              </div>
            </div>

            {/* CHECK OUT */}
            <div className="px-3 sm:px-4 py-3 lg:border-r border-[#E4E6E8]">
              <p className="text-[10px] font-bold text-[#737373] mb-1">
                Check Out
              </p>

              <div className="flex items-center gap-2">
                <span className="text-gray-400">{location}</span>

                <span className="text-[11px] font-semibold text-[#000]">
                  02 January 2024
                </span>

                <span className="">{dower}</span>
              </div>
            </div>

            {/* GUEST */}
            <div className="px-3 sm:px-4 py-3 ">
              <p className="text-[10px] font-bold text-[#737373] mb-1">Guest</p>

              <div className="flex items-center gap-2">
                <span className="text-gray-400">{profile}</span>

                <span className="text-[11px] font-semibold text-[#000]">
                  2 adults, 2 children
                </span>

                <span className="">{dower}</span>
              </div>
            </div>

            {/* SEARCH BUTTON */}
            <div className="px-3 sm:px-4 py-3">
              <button
                className="
          w-full
          lg:w-auto
          bg-[#050505]
          text-white
          rounded-full
          px-7
          sm:px-6
          py-3
          flex
          items-center
          justify-center
          gap-2
          text-xs
          sm:text-sm
          whitespace-nowrap
        "
              >
                <span>{search}</span>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
