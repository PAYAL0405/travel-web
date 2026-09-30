import React from "react";

const ImagesLayoutPage = () => {
  return (
    <section className="w-full flex xl:flex-row justify-center items-center lg:w-[90%] xl:w-[66%] px-6 md:px-9 lg:px-0 xl:px-0">
      {/* Main Card */}
      <div
        className="
        mx-auto
        w-full
        max-w-[1600px]
        overflow-hidden
        rounded-2xl
        bg-[#f5f5f1]
        px-2 sm:px-5 py-8
        
        2xl:px-10 2xl:pt-10
        2xl:pb-20
      "
      >
        <div
          className="
          flex
          flex-col
          items-center
          gap-1
          lg:flex-row
          lg:justify-between
          lg:gap-1
        "
        >
          {/* LEFT CONTENT */}
          <div
            className="
            w-full
            text-center
            lg:w-[40%]
            lg:text-left
            xl:pl-16
          "
          >
            {/* Small Badge */}
            <span
              className="
              inline-flex
              rounded-full
              bg-white
              px-4 py-2.5
              text-[11px]
              font-semibold
              text-[#000]
              shadow-sm
              
            "
            >
              Easy payment
            </span>

            {/* Heading */}
            <h1
              className="
              mt-5
              max-w-[650px]
              text-2xl
              font-semibold
              leading-tight
              tracking-tight
              text-[#000]
              sm:text-[26px]
              2xl:leading-10
            "
            >
              Luxury Travel Redefined:
              <br />
              Your Passport to Global
              <br />
              Glamour
            </h1>

            {/* Description */}
            <p
              className="
              mx-auto
              mt-3
              sm:mt-4
              max-w-[600px]
              text-sm
              leading-6
              text-[#737373]

              sm:text-base
              sm:leading-7

              lg:mx-0
              xl:text-md
              xl:leading-6
            "
            >
              Discover how you can offset your adventure's carbon emissions and
              support the sustainable initiatives practiced by our operators
              worldwide.
            </p>
          </div>

          {/* RIGHT IMAGE COLLAGE */}
          <div
            className="
            flex
            w-full
            max-w-[755px]
            items-center
            justify-center
            gap-2
            sm:gap-4
            lg:w-[60%]
            
          "
          >
            {/* BIG IMAGE */}
            <div
              className="
              h-[200px]
              w-[150px]
              overflow-hidden
              rounded-[45px]

             
              sm:rounded-[45px]
              sm:h-[240px]
              sm:w-[130px]
            "
            >
              <img
                src="/img/images-layout-sec-img/payment.png.png"
                alt="Luxury travel"
                className="h-full w-full object-cover"
              />
            </div>

            {/* MIDDLE COLUMN */}
            <div
              className="
              flex
              flex-col
              gap-3
              sm:gap-4
            "
            >
              <div
                className="
                h-[140px]
                w-[90px]
                overflow-hidden
                rounded-[40px]
              sm:h-[210px]
              sm:w-[135px]
              "
              >
                <img
                  src="/img/images-layout-sec-img/payment2.png.png"
                  alt="Travel"
                  className="h-full w-full object-cover"
                />
              </div>

              <div
                className="
                h-[110px]
                w-[90px]
                overflow-hidden
                rounded-[40px]
                sm:h-[140px]
                sm:w-[135px]
              "
              >
                <img
                  src="/img/images-layout-sec-img/payment3.png.png"
                  alt="Travel destination"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div
              className="
              flex
              flex-col
              gap-3
              pt-5
              sm:gap-4
            "
            >
              <div
                className="
                h-[100px]
                w-[90px]
                overflow-hidden
                rounded-[35px]
                sm:h-[140px]
                sm:w-[135px]
              "
              >
                <img
                  src="/img/images-layout-sec-img/payment4.png.png"
                  alt="Luxury destination"
                  className="h-full w-full object-cover"
                />
              </div>

              <div
                className="
               h-[140px]
                w-[90px]
                overflow-hidden
                rounded-[40px]
              sm:h-[210px]
              sm:w-[135px]
              "
              >
                <img
                  src="/img/images-layout-sec-img/payment5.png.png"
                  alt="Luxury holiday"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImagesLayoutPage;
