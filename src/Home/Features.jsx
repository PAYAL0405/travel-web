import { hero_icon } from "../icon";

const Features = () => {
  const { rightwordarrow } = hero_icon;

  return (
    <section className="w-full bg-white py-2 lg:w-[90%] xl:w-[66%] px-6 md:px-9 lg:px-0 xl:px-0">
      {/* Security Cards */}
      <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-4">
        {/* Card 1 */}
        <div className="bg-[#E4F9F9] rounded-2xl flex flex-col gap-2 items-center justify-center text-center px-5 py-7">
          <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm">
            <img
              src="/img/security-logo/security.svg.png"
              alt="Security"
              className="w-7 h-7 object-contain"
            />
          </div>

          <h3 className="text-[17px] font-semibold text-gray-700">
            Security Assurance
          </h3>

          <p className="text-[13px] leading-5 text-[#737373]">
            Demonstrates commitment to user data security through encryption and
            secure payment practices.
          </p>

          <button className="flex flex-row gap-1 items-center text-[12px] font-medium tracking-wide text-[#000]">
            Learn More
            <span className="text-black">{rightwordarrow}</span>
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-[#FCF2FA] rounded-2xl flex flex-col gap-2 items-center justify-center text-center px-5 py-7">
          <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm">
            <img
              src="/img/security-logo/Clip path group.png"
              alt="Security"
              className="w-7 h-7 object-contain"
            />
          </div>

          <h3 className="text-[17px] font-semibold text-gray-700">
            Security Assurance
          </h3>

          <p className="text-[13px] leading-5 text-[#737373]">
            Demonstrates commitment to user data security through encryption and
            secure payment practices.
          </p>

          <button className="flex flex-row gap-1 items-center text-[12px] font-medium tracking-wide text-[#000]">
            Learn More
            <span className="text-black">{rightwordarrow}</span>
          </button>
        </div>
        {/* Card 3 */}
        <div className="bg-[#E3F0FF] rounded-2xl flex flex-col gap-2 items-center justify-center text-center px-5 py-7">
          <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm">
            <img
              src="/img/security-logo/policy.svg.png"
              alt="Security"
              className="w-7 h-7 object-contain"
            />
          </div>

          <h3 className="text-[17px] font-semibold text-gray-700">
            Security Assurance
          </h3>

          <p className="text-[13px] leading-5 text-[#737373]">
            Demonstrates commitment to user data security through encryption and
            secure payment practices.
          </p>

          <button className="flex flex-row gap-1 items-center text-[12px] font-medium tracking-wide text-[#000]">
            Learn More
            <span className="text-black">{rightwordarrow}</span>
          </button>
        </div>
        {/* Card 4 */}
        <div className="bg-[#F6F3FC] rounded-2xl flex flex-col gap-2 items-center justify-center text-center px-5 py-7">
          <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm">
            <img
              src="/img/security-logo/repu.svg.png"
              alt="Security"
              className="w-7 h-7 object-contain"
            />
          </div>

          <h3 className="text-[17px] font-semibold text-gray-700">
            Security Assurance
          </h3>

          <p className="text-[13px] leading-5 text-[#737373]">
            Demonstrates commitment to user data security through encryption and
            secure payment practices.
          </p>

          <button className="flex flex-row gap-1 items-center text-[12px] font-medium tracking-wide text-[#000]">
            Learn More
            <span className="text-black">{rightwordarrow}</span>
          </button>
        </div>
      </div>

      {/* Payment Logos */}
      {/* Payment Logos */}
      <div className="w-full mt-5 md:mt-9 2xl:mt-13">
        <div
          className="
    grid
    grid-cols-2
    sm:grid-cols-3
    md:grid-cols-4
    lg:grid-cols-7
    items-center
    justify-items-center
    gap-x-6
    gap-y-8
    sm:gap-x-8
    sm:gap-y-10
    md:gap-x-10
    lg:gap-x-4
    xl:gap-x-6
    2xl:gap-x-6
  "
        >
          {/* PayPal */}
          <img
            src="/img/security-logo/21 → paypal.png.png"
            alt="PayPal"
            className="w-[85px]  h-auto object-contain"
          />

          {/* Stripe */}
          <img
            src="/img/security-logo/21 → stripe.png.png"
            alt="Stripe"
            className="w-[65px] object-contain"
          />

          {/* Payoneer */}
          <img
            src="/img/security-logo/21 → payoneer.png.png"
            alt="Payoneer"
            className="w-[80px] sm:w-[90px] md:w-[100px] lg:w-[110px] xl:w-[115px] 2xl:w-[120px] h-auto object-contain"
          />

          {/* Visa */}
          <img
            src="/img/security-logo/21 → visa.png.png"
            alt="Visa Mastercard"
            className="w-[85px] h-auto object-contain"
          />

          {/* Cash App */}
          <img
            src="/img/security-logo/21 → cashapp.png.png"
            alt="Cash App"
            className="w-[80px] sm:w-[90px] md:w-[100px] lg:w-[110px] xl:w-[115px] 2xl:w-[120px] h-auto object-contain"
          />

          {/* Bitcoin */}
          <img
            src="/img/security-logo/21 → bitcoin.png.png"
            alt="Bitcoin"
            className="w-[80px] h-auto object-contain"
          />

          {/* Discover */}
          <img
            src="/img/security-logo/21 → discover.png.png"
            alt="Discover"
            className="w-[80px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
