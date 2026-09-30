import React from "react";
import { hero_icon } from "../icon";

const cards = [
  {
    icon: "🛡️",
    title: "Security Assurance",
    text: "Demonstrates commitment to user data security through encryption and secure payment practices",
  },
  {
    icon: "👨",
    title: "Security Assurance",
    text: "Demonstrates commitment to user data security through encryption and secure payment practices",
  },
  {
    icon: "🏨",
    title: "Security Assurance",
    text: "Demonstrates commitment to user data security through encryption and secure payment practices",
  },
  {
    icon: "💳",
    title: "Security Assurance",
    text: "Demonstrates commitment to user data security through encryption and secure payment practices",
  },
];

const payments = [
  "PayPal",
  "stripe",
  "Payoneer",
  "VISA",
  "Cash App",
  "₿ bitcoin",
  "DISCOVER",
];

function Features() {
  const { rightwordarrow, security } = hero_icon;

  return (
    <section className="w-full bg-white lg:w-[90%] xl:w-[66%] px-6 md:px-9 lg:px-0 xl:px-0">
      {/* Cards */}
      <div
        className="
        mx-auto mt-10 grid 
        grid-cols-1 gap-5 
        sm:grid-cols-2 
        md:mt-12 
        lg:grid-cols-4 
        xl:gap-7
      "
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className={`
              flex
              flex-col items-center
              justify-center
              rounded-2xl
              py-6
              text-center

              ${
                index === 0
                  ? "bg-[#E4F9F9]"
                  : index === 1
                    ? "bg-[#faf6f2]"
                    : index === 2
                      ? "bg-[#eef8fc]"
                      : "bg-[#f6f5f7]"
              }

              transition duration-300
              hover:-translate-y-1
              hover:shadow-lg

             
            `}
          >
            {/* Icon */}
            <div
              className="
              flex h-13 w-13
              items-center justify-center
              rounded-2xl bg-white
               shadow-sm

            
            "
            >
              {card.icon}
            </div>

            {/* Title */}
            <h3
              className="
              mt-4
              text-[12px] font-bold text-[#000]
              md:text-[14px]
              xl:text-[15px]
            "
            >
              {card.title}
            </h3>

            {/* Description */}
            <p
              className="
              mt-2
              text-sm leading-4
              text-[#737373]
              px-5
              sm:text-[14px]
              md:text-[12px]

            "
            >
              {card.text}
            </p>

            {/* Learn More */}
            <button
              className="
              mt-3
              text-[11px] font-normal
              text-[#000]
              hover:text-blue-600
              transition
              tracking-wide
              flex flex-row gap-1 
            "
            >
              <span>Learn More</span>
              <span className="">{rightwordarrow}</span>
            </button>
          </div>
        ))}
      </div>

      {/* Payment Logos */}
      <div
        className="
        mx-auto mt-12
        flex max-w-7xl
        flex-wrap
        items-center
        justify-center
        gap-x-8 gap-y-7
        px-4
        sm:mt-14
        sm:gap-x-10
        sm:px-6
        md:gap-x-12
        lg:mt-16
        lg:justify-between
        lg:px-8
        xl:gap-x-14
        2xl:max-w-[1500px]
      "
      >
        {/* PayPal */}
        <span
          className="
          text-sm font-bold italic
          text-[#0070ba]
          sm:text-xl
        "
        >
          PayPal
        </span>
        {/* Stripe */}
        <span
          className="
          text-3xl font-bold
          text-[#635bff]
          sm:text-4xl
        "
        >
          stripe
        </span>

        {/* Payoneer */}
        <span
          className="
          text-xl font-semibold
          text-gray-700
          sm:text-2xl
        "
        >
          <span className="text-orange-400">○</span>
          Payoneer
        </span>

        {/* Visa */}
        <span
          className="
          text-2xl font-black italic
          text-[#1a4b9b]
          sm:text-3xl
        "
        >
          VISA
          <span className="text-orange-500">●</span>
        </span>

        {/* Cash App */}
        <span
          className="
          flex items-center gap-1
          text-lg font-semibold
          text-gray-700
          sm:text-xl
        "
        >
          <span
            className="
            flex h-7 w-7
            items-center justify-center
            rounded-md bg-green-500
            text-white
          "
          >
            $
          </span>
          Cash App
        </span>

        {/* Bitcoin */}
        <span
          className="
          text-xl font-semibold
          text-gray-700
          sm:text-2xl
        "
        >
          <span className="text-orange-500">₿</span>
          bitcoin
        </span>

        {/* Discover */}
        <span
          className="
          text-lg font-bold
          text-gray-700
          sm:text-xl
        "
        >
          DISC<span className="text-orange-500">O</span>VER
        </span>
      </div>
    </section>
  );
}

export default Features;
