import React from "react";
import {
  Heart,
  MapPin,
  Gauge,
  Settings2,
  Fuel,
  Users,
  Star,
} from "lucide-react";

const CarsCard = () => {
  return (
    <div className="w-full max-w-[370px] overflow-hidden rounded-[28px] bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Car Image */}
      <div className="relative h-[220px] sm:h-[240px]">
        <img
          src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=85"
          alt="Black luxury BMW car"
          className="h-full w-full object-cover"
        />
        {/* Heart Button */}
        <button
          aria-label="Add to favorites"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-700 shadow-sm hover:text-red-500"
        >
          <Heart size={19} />
        </button>
        {/* Rating */}
        <div className="absolute -bottom-4 right-4 flex items-center gap-1 rounded-full bg-white px-3 py-2 text-xs shadow-md">
          <Star size={13} className="fill-yellow-400 text-yellow-400" />
          <span className="font-semibold">4.96</span>
          <span className="text-gray-500">(672 reviews)</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 pt-7 sm:p-6 sm:pt-7">
        {/* Title */}
        <h2 className="text-lg font-bold text-gray-900">
          Audi A3 1.6 TDI S line
        </h2>

        {/* Location */}
        <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
          <MapPin size={15} />
          <span>Manchester, England </span>
        </div>

        <div className="my-5 border-t border-gray-100" />

        {/* Car Features */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-4 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <Gauge size={16} className="shrink-0 text-gray-400" />
            <span>25,100 miles</span>
          </div>

          <div className="flex items-center gap-2">
            <Settings2 size={16} className="shrink-0 text-gray-400" />
            <span>Automatic</span>
          </div>

          <div className="flex items-center gap-2">
            <Fuel size={16} className="shrink-0 text-gray-400" />
            <span>Diesel</span>
          </div>

          <div className="flex items-center gap-2">
            <Users size={16} className="shrink-0 text-gray-400" />
            <span>7 seats</span>
          </div>
        </div>

        {/* Price and Button */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold text-gray-950">$498.25</span>
            <span className="text-xs text-gray-500">/ person</span>
          </div>

          <button className="rounded-full bg-[#f5d76e] px-5 py-3 text-sm font-semibold text-gray-900 transition hover:bg-[#edc94e]">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarsCard;
