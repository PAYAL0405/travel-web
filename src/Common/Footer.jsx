import React from "react";
import { hero_icon } from "../icon";

const Footer = () => {
  const { email } = hero_icon;

  return (
    <footer className="w-full bg-[#050505] text-white flex flex-col justify-center items-center ">
      {/* Newsletter Section */}
      <div className="border-b border-white/10  w-full lg:w-[90%] xl:w-[66%] px-6 md:px-9 lg:px-0 xl:px-0">
        <div className="w-full flex flex-col lg:flex-row justify-between gap-6 py-8">
          {/* Heading */}
          <div className=" ">
            <h2 className="text-xl font-bold leading-snug sm:text-[21px] tracking-wide">
              Subscribe to see secret deals prices
              <br className="hidden sm:block" />
              drop the moment you sign up!
            </h2>
          </div>

          {/* Subscribe Form */}
          <form className="flex w-full max-w-lg flex-col gap-3 sm:flex-row">
            <div className="relative flex flex-row items-center justify-center">
              <span
                size={17}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {email}
              </span>

              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-full border border-white/20 bg-transparent px-10 py-3 text-[12px] text-white outline-none placeholder:text-gray-500 focus:border-yellow-400"
              />
            </div>

            <button
              type="submit"
              className="h-12 rounded-full bg-[#FEFA17] px-4 text-sm font-semibold text-black transition hover:bg-[#ffe77c]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-5 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f4d65e] text-xl">
                🌴
              </div>

              <h3 className="text-xl font-bold">Travila</h3>
            </div>

            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex gap-3">
                <input className="mt-0.5 shrink-0" size={17} />
                <p>
                  4517 Washington Ave.
                  <br />
                  Manchester, Kentucky 39495
                </p>
              </div>

              <div className="flex items-center gap-3">
                <p size={17} className="shrink-0" />
                <p>Hours: 8:00 - 17:00, Mon - Sat</p>
              </div>

              <div className="flex items-center gap-3">
                <input size={17} className="shrink-0" />
                <p>support@travila.com</p>
              </div>

              <div className="pt-2">
                <p className="text-sm text-gray-400">Need help? Call us</p>

                <div className="mt-1 flex items-center gap-2">
                  <p size={17} className="text-[#f4a261]" />

                  <a
                    href="tel:18002228888"
                    className="text-lg font-bold text-[#f4a261]"
                  >
                    1-800-222-8888
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Support */}
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

          {/* Company */}
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

          {/* Services */}
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

          {/* Legal */}
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

        {/* Bottom Footer */}
        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-6 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2024 Travila Inc. All rights reserved.</p>

          <div>
            <p className="mb-2 text-white">Follow us</p>

            <div className="flex gap-3">
              <SocialIcon>f</SocialIcon>
              <SocialIcon>𝕏</SocialIcon>
              <SocialIcon>in</SocialIcon>
              <SocialIcon>◎</SocialIcon>
            </div>
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
      <h3 className="mb-5 text-sm font-semibold text-white">{title}</h3>

      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-sm text-gray-500 transition hover:text-white"
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
