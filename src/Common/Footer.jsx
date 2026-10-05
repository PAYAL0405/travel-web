import React from "react";
import { hero_icon } from "../icon";

const Footer = () => {
  const { email, location, coconuttree } = hero_icon;

  return (
    <footer className="w-full bg-[#050505] text-white flex flex-col justify-center items-center ">
      {/* Newsletter Section */}
      <div className="flex flex-col  border-b border-white/10 w-full lg:w-[90%] xl:w-[66%] px-6 md:px-9 lg:px-0 xl:px-0">
        <div className="w-full flex flex-col gap-2 sm:gap-0 lg:flex-row 2xl:justify-between py-8">
          {/* Heading */}
          <div className="w-full ">
            <h2 className="text-[16px] sm:text-[18px] font-bold leading-snug lg:text-[21px] tracking-wide">
              Subscribe to see secret deals prices
              <br className="hidden sm:block" />
              drop the moment you sign up!
            </h2>
          </div>
          {/* Subscribe Form */}
          <div className="flex w-full flex-col items-center gap-2 sm:flex-row ">
            <div className="relative flex flex-row items-center justify-center sm:ml-auto">
              <span className="w-auto absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                {email}
              </span>

              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-full border border-white/20 bg-transparent px-17 sm:px-10 py-3 text-[12px] text-white outline-none placeholder:text-gray-500 focus:border-yellow-400"
              />
            </div>
            <button
              type="submit"
              className="py-3 rounded-full bg-[#FEFA17] w-[90%] sm:w-auto sm:px-4 text-[12px] font-semibold text-black transition hover:bg-[#ffe77c]"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="w-full lg:w-[90%] xl:w-[66%] px-6 md:px-9 lg:px-0 xl:px-0 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6">
          {/* Company Info */}
          <div className="lg:col-span-2 flex flex-col ">
            <div className="flex flex-row items-center gap-2">
              <div className="rounded-full bg-[#FEFA17] w-9 h-9 text-center">
                <span>{coconuttree}</span>
              </div>

              <h1 className="font-bold text-lg tracking-wide text-white">
                Travila{" "}
              </h1>
            </div>

            <div className="flex flex-col gap-3 pt-8">
              <div className="flex flex-row gap-1">
                <span>{location}</span>
                <p className=" text-[13px] text-[#8E8E8E]">
                  4517 Washington Ave. Manchester,
                  <br /> Kentucky 39495
                </p>
              </div>

              <div className="flex items-center flex-row gap-2">
                <span>{location}</span>

                <p className="text-[13px] text-[#8E8E8E]">
                  Hours: 8:00 - 17:00, Mon - Sat
                </p>
              </div>

              <div className="flex items-center flex-row gap-2">
                <span>{location}</span>

                <p className="text-[13px] text-[#8E8E8E]">
                  support@travila.com
                </p>
              </div>

              <div className="flex flex-row gap-2 pt-5">
                <span>{location}</span>

                <p className="text-[14px] text-[#fff]">Need help? Call us</p>
              </div>

              <div className=" flex items-center">
                <a
                  href="tel:18002228888"
                  className="text-lg font-bold text-[#F09814]"
                >
                  1-800-222-8888
                </a>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="lg:col-span-1">
            <FooterColumn
              title="Support"
              links={[
                "Forum support",
                "Help Center",
                "Live chat",
                "How it works",
                "Security",
                "Privacy",
                "Charges logs",
              ]}
            />
          </div>

          {/* Company */}
          <div className="lg:col-span-1">
            <FooterColumn
              title="Company"
              links={[
                "About Us",
                "Community Blog",
                "Jobs and Careers",
                "Contact Us",
                "Our Awards",
                "Agencies",
              ]}
            />
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <FooterColumn
              title="Services"
              links={[
                "Tour Guide",
                "Tour Booking",
                "Hotel Booking",
                "Ticket Booking",
                "Rental Services",
              ]}
            />
          </div>

          {/* Legal */}
          <div className="lg:col-span-1">
            <FooterColumn
              title="Legal"
              links={[
                "Terms of Service",
                "Privacy Policy",
                "Cookies Policy",
                "Data Processing",
                "Data Policy",
                "Refund Policy",
              ]}
            />
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-6 text-[11px] text-[#fff] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2024 Travila Inc. All rights reserved.</p>

          <div>
            <p className="mb-2 text-[14px] text-white">Follow us</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* Footer Link Column */
const FooterColumn = ({ title, links }) => {
  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold text-white">{title}</h3>

      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-[13.5px] text-[#8E8E8E] transition hover:text-white"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

/* Social Icon */
const SocialIcon = ({ children }) => {
  return (
    <a
      href="#"
      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-xs text-gray-400 transition hover:border-white hover:text-white"
    >
      {children}
    </a>
  );
};

export default Footer;
