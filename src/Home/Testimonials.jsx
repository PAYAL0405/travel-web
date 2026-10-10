"use client";

import { useRef } from "react";
import { hero_icon } from "../icon";
const { yellowstar, rightwordarrow, leftwordarrow } = hero_icon;

const testimonials = [
  {
    title: "The best booking system",
    description:
      "I've been using the hotel booking system for several years now, and it has become my go-to platform for planning my trips. The interface is user-friendly, and I appreciate the detailed information and real-time availability of hotels.",
    name: "Sara Mohamed",
    location: "Jakarta",
    image: "/img/testimonials-sec/profile-img.png",
  },
  {
    title: "The best booking system",
    description:
      "I've been using the hotel booking system for several years now, and it has become my go-to platform for planning my trips. The interface is user-friendly, and I appreciate the detailed information and real-time availability of hotels.",
    name: "Atend John",
    location: "California",
    image: "/img/testimonials-sec/profile-img2.png",
  },
  {
    title: "The best booking system",
    description:
      "I've been using the hotel booking system for several years now, and it has become my go-to platform for planning my trips. The interface is user-friendly, and I appreciate the detailed information and real-time availability of hotels.",
    name: "Sara Mohamed",
    location: "Jakarta",
    image: "/img/testimonials-sec/profile-img.png",
  },
  {
    title: "The best booking system",
    description:
      "I've been using the hotel booking system for several years now, and it has become my go-to platform for planning my trips. The interface is user-friendly, and I appreciate the detailed information and real-time availability of hotels.",
    name: "David Smith",
    location: "London",
    image: "/img/testimonials-sec/profile-img2.png",
  },
];

export default function Testimonials() {
  const sliderRef = useRef(null);

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === "right" ? 320 : -320,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className=" w-full lg:w-[90%] xl:w-[66%] px-6 md:px-9 lg:px-0 xl:px-0 relative overflow-hidden py-16  sm:py-20 lg:py-24">
      {/* Background Decoration */}
      {/* <div className="pointer-events-none absolute right-10 top-12 hidden text-5xl text-gray-200 lg:block">
        ✈
      </div> */}

      <div className="">
        {/* Heading */}
        <div className="mb-12 sm:mb-16">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#FEFA17] px-4 py-2 text-xs font-semibold text-gray-800">
            <div className="flex items-center justify-center rounded-full  ">
              <img src="/img/testimonials-sec/testimonial.png.png" alt="" />
              <img src="/img/testimonials-sec/testimonial2.png.png" alt="" />
              <img src="/img/testimonials-sec/testimonial3.png.png" alt="" />
            </div>
            Testimonials
          </span>

          <h2 className="max-w-3xl text-3xl font-bold leading-tight text-[#000] sm:text-4xl lg:text-[40px]">
            Don’t take our word for it
          </h2>
        </div>

        {/* Testimonial Slider */}
        <div
          ref={sliderRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden "
        >
          {testimonials.map((item, index) => (
            <article
              key={index}
              className="flex p-8 shrink-0 snap-start flex-col justify-between rounded-[27px] border border-[#E4E6E8] w-[380px] shadow"
            >
              <div>
                <h3 className="mb-2 text-[16px] font-semibold text-[#000] tracking-wide">
                  {item.title}
                </h3>
                <p className="text-[11px] text-[#737373] leading-4.5 tracking-wide">
                  {item.description}
                </p>
              </div>

              {/* User Information */}
              <div className="mt-4 flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-13 w-13 shrink-0 rounded-full object-cover"
                  />

                  <div className="min-w-0">
                    <h4 className="truncate text-sm font-semibold text-[#000]">
                      {item.name}
                    </h4>

                    <p className="text-[12px] font-medium text-[#000]">
                      {item.location}
                    </p>
                  </div>
                </div>

                <div className="flex flex-row gap-1">
                  <span>{yellowstar}</span>
                  <span>{yellowstar}</span>
                  <span>{yellowstar}</span>
                  <span>{yellowstar}</span>
                  <span>{yellowstar}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Left and Right Arrows */}
        <div className="mt-5 flex justify-end gap-3">
          <button
            onClick={() => scrollSlider("left")}
            aria-label="Previous testimonials"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E4E6E8] transition hover:bg-[#f5e900] hover:text-black"
          >
            {leftwordarrow}
          </button>

          <button
            onClick={() => scrollSlider("right")}
            aria-label="Next testimonials"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E4E6E8]  transition hover:bg-[#f5e900] hover:text-black"
          >
            {rightwordarrow}
          </button>
        </div>
      </div>
    </section>
  );
}
