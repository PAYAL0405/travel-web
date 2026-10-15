const arCategoriesCard = () => {
  const categories = [
    {
      name: "Lexus",
      image: "/img/search-by-category/lexus.png.png",
      width: "w-[150px]",
    },
    {
      name: "Mercedes",
      image: "/img/search-by-category/mer.png.png",
      width: "w-[72px]",
    },
    {
      name: "Bugatti",
      image: "/img/search-by-category/bugatti.png.png",
      width: "w-[72px]",
    },
    {
      name: "Jaguar",
      image: "/img/search-by-category/jaguar.png.png",
      width: "w-[100px]",
    },
    {
      name: "Honda",
      image: "/img/search-by-category/honda.png.png",
      width: "w-[72px]",
    },
    {
      name: "Chevrolet",
      image: "/img/search-by-category/chevrolet.png.png",
      width: "w-[85px]",
    },
    {
      name: "Acura",
      image: "/img/search-by-category/acura.png.png",
      width: "w-[72px]",
    },
    {
      name: "BMW",
      image: "/img/search-by-category/bmw.png.png",
      width: "w-[72px]",
    },
    {
      name: "Toyota",
      image: "/img/search-by-category/toyota.png.png",
      width: "w-[85px]",
    },
  ];

  return (
    <section className="w-full bg-[#E4F9F9] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-8 sm:mb-10 md:mb-14">
          <h2 className="text-2xl font-bold text-[#000] sm:text-2xl md:text-3xl">
            Search by category
          </h2>

          <p className="mt-3 text-sm text-[#737373] sm:text-base ">
            There has 30+ Brand Category Available
          </p>
        </div>

        {/* Brand Logos */}
        <div
          className="
            flex
            flex-wrap
            items-center
            gap-3
            sm:gap-4
            md:gap-5
            lg:gap-6
          "
        >
          {categories.map((category) => (
            <button
              key={category.name}
              type="button"
              aria-label={category.name}
              className={`
                ${category.width}
                h-[50px]
                shrink-0
                flex
                items-center
                justify-center
                rounded-xl
                bg-white
                px-4
                transition
                duration-300
                hover:bg-white
                hover:shadow-md
              `}
            >
              <img
                src={category.image}
                alt={category.name}
                className="max-h-7 max-w-full object-contain sm:max-h-9 overflow-hidden"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default arCategoriesCard;
