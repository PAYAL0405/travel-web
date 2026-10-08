import React from "react";
import { hero_icon } from "../icon";

const Hero = () => {
  const { leftwordarrow, rightwordarrow, profile, location, dower, search } =
    hero_icon;

  return (
    <div className="w-full">
      <section className="relative w-full h-auto xl:h-[85vh] overflow-hidden">
        {/* ================= BACKGROUND ================= */}
        <img
          src="/img/bg-img.png"
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
              <p
                className="
              mt-5
              text-black
              text-sm
              sm:text-base
              md:text-lg
              lg:text-[17px]
              xl:text-lg
              leading-relaxed
              max-w-[770px]
            "
              >
                Crafting Exceptional Journeys: Your Global Escape Planner.
                Unleash Your Wanderlust. Seamless Travel, Extraordinary
                Adventures
              </p>

              {/* ================= ARROWS ================= */}
              <div className="flex items-center gap-2 mt-10 sm:mt-12 md:mt-20">
                <button
                  className="
                w-7
                h-7
                sm:w-8
                sm:h-8
                rounded-full
                bg-white/90
                flex
                items-center
                justify-center
                hover:bg-white
                transition
              "
                >
                  <span className="text-black">{leftwordarrow}</span>
                </button>

                <button
                  className="
                w-7
                h-7
                sm:w-8
                sm:h-8
                rounded-full
                bg-white/90
                flex
                items-center
                justify-center
                hover:bg-white
                transition
              "
                >
                  <span className="text-black">{rightwordarrow}</span>
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
      <div
        className="
          relative
          z-50
          w-[90%] xl:w-[66%]
          mx-auto
          bg-white
          rounded-xl
          shadow
          p-4
          sm:p-5
          md:p-6
          -mt-3
          sm:-mt-16
          xl:-mt-28
        "
      >
        {/* ================= TABS ================= */}
        <div
          className="
            flex
            items-center
            gap-1
            sm:gap-4
            overflow-x-auto
            scrollbar-hide
            pb-3
          "
        >
          <button className="text-[10px] text-[#fff] tracking-wider px-4 py-2 bg-black rounded-3xl">
            Tours
          </button>

          <span className="text-[11px] text-[#000000] tracking-wider">
            Hotels
          </span>

          <span className="text-[11px] text-[#000000] tracking-wider">
            Tickets
          </span>

          <span className="text-[11px] text-[#000000] tracking-wider">
            Tickets
          </span>

          <span className="text-[11px] text-[#000000] tracking-wider">
            Activities
          </span>

          <div className="hidden md:flex ml-auto items-center gap-1 text-[11px] text-[#737373] tracking-wide">
            <span>{profile}</span>
            <span>Need some help?</span>
          </div>
        </div>

        {/* ================= SEARCH FIELDS ================= */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-[1.2fr_1fr_1fr_1fr_auto]
            gap-3
            md:gap-4
            pt-4
            border
            border-[#E4E6E8]
            rounded-xl
          "
        >
          {/* Location */}
          <div
            className="
              p-3
              sm:p-4
              min-w-0
             border-r
             mb-2
            "
          >
            <p className="text-[11px] text-[#737373] font-semibold">Location</p>

            <div className="flex items-center gap-2 mt-2 min-w-0">
              <span className="shrink-0">{location}</span>

              <span className="text-[11px] font-semibold text-[#000]">
                New York, USA
              </span>

              <span className="pl-1">{dower}</span>
            </div>
          </div>

          {/* Check In */}
          <div
            className="
              p-3
              sm:p-4
              min-w-0
            "
          >
            <p className="text-xs text-[#737373] font-semibold">Check In</p>

            <div className="flex items-center gap-2 mt-2 min-w-0">
              <span className="text-xs text-gray-500 shrink-0">📅</span>

              <span className="text-xs sm:text-sm font-semibold truncate">
                02 January 2024
              </span>

              <span className="ml-auto shrink-0">{dower}</span>
            </div>
          </div>

          {/* Check Out */}
          <div
            className="
              p-3
              sm:p-4
              min-w-0
            "
          >
            <p className="text-xs text-[#737373] font-semibold">Check Out</p>

            <div className="flex items-center gap-2 mt-2 min-w-0">
              <span className="text-xs text-gray-500 shrink-0">📅</span>

              <span className="text-xs sm:text-sm font-semibold truncate">
                02 January 2024
              </span>

              <span className="ml-auto shrink-0">{dower}</span>
            </div>
          </div>

          {/* Guest */}
          <div
            className="
              p-3
              sm:p-4
              min-w-0
            "
          >
            <p className="text-xs text-[#737373] font-semibold">Guest</p>

            <div className="flex items-center gap-2 mt-2 min-w-0">
              <span className="shrink-0">{profile}</span>

              <span className="text-xs sm:text-sm font-semibold truncate">
                2 adults, 2 children
              </span>

              <span className="ml-auto shrink-0">{dower}</span>
            </div>
          </div>

          {/* Search */}
          <button
            className="
              bg-black
              text-white
              rounded-3xl
              px-6
              py-3
              sm:py-4
              flex
              items-center
              justify-center
              gap-2
              text-[13px][#737373] font-semibold
              transition
              tracking-wider
              h-[44px]
            "
          >
            <span>{search}</span>
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
