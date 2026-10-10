import React from "react";
import Header from "../Common/Header";
import Navbar from "../Common/Navbar";
import Hero from "../Common/Hero";
import Heading from "../Common/Heading";
import ServiceCard from "../Common/ServiceCard";
import CategoriesHeadline from "../Common/CategoriesHeadline";
import CategoriesCard from "./CategoriesCard";
import PromoCards from "./PromoCards";
import TopRatedHotels from "./TopRatedHotels";
import ImagesLayoutPage from "./ImagesLayoutPage";
import WhyTravel from "./WhyTravel";
import Features from "./Features";
import TravelingNews from "./TravelingNews";
import Footer from "../Common/Footer";
import Testimonials from "./Testimonials";
import RecentLaunchedCar from "./RecentLaunchedCar";

const HomeMain = () => {
  return (
    <div className="w-full flex flex-col">
      <Header />
      <Navbar />
      <Hero />
      <div className=" flex flex-col gap-5 justify-center items-center  ">
        <Heading />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-3 2xl:gap-5 justify-center items-center w-full lg:w-[90%] xl:w-[66%] px-6 md:px-9 lg:px-0 xl:px-0">
          <ServiceCard
            images="img/service-card-img-1.png"
            offers="Top Rated"
            heading="California Sunset/Twilight Boat Cruise"
            duration="2 days 3 nights"
            price="$48.25"
          />

          <ServiceCard
            images="img/service-card-img-2.png"
            offers="Best Sale"
            heading="NYC: Food Tastings and Culture Tour"
            duration="3 days 3 nights"
            price="$17.32"
          />
          <ServiceCard
            images="img/service-card-img-3.png"
            offers="25% Off"
            heading="Grand Canyon Horseshoe Bend 2 days"
            duration="3 days 3 nights"
            price="$17.32"
          />
        </div>
        <div className="w-full flex flex-row justify-center items-center">
          <CategoriesHeadline
            header="Top Categories of Tours"
            dis="Favorite destinations based on customer reviews"
            button="View More"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 2xl:gap-4 justify-center items-center w-full lg:w-[90%] xl:w-[66%] px-6 md:px-9 lg:px-0 xl:px-0">
          <CategoriesCard
            image="/img/cards-img/categories-card-img-1.png"
            placename="Mountain"
          />
          <CategoriesCard
            image="/img/cards-img/categories-card-img-2.png"
            placename="Safari"
          />{" "}
          <CategoriesCard
            image="/img/cards-img/categories-card-img-3.png"
            placename="Desert"
          />{" "}
          <CategoriesCard
            image="/img/cards-img/categories-card-img-4.png"
            placename="Flower"
          />{" "}
          <CategoriesCard
            image="/img/cards-img/categories-card-img-5.png"
            placename="Beach"
          />{" "}
          <CategoriesCard
            image="/img/cards-img/categories-card-img-6.png"
            placename="Temple"
          />{" "}
          <CategoriesCard
            image="/img/cards-img/categories-card-img-7.png"
            placename="Yacht"
          />
          <CategoriesCard
            image="/img/cards-img/categories-card-img-7.png"
            placename="Valley"
          />
        </div>
      </div>
      <div className=" flex flex-row justify-center items-center pt-16 pb-15 sm:pb-24 ">
        <PromoCards />
      </div>

      <TopRatedHotels />
      <div className="flex xl:flex-row justify-center items-center pt-15 pb-12 md:pb-20 ">
        <ImagesLayoutPage />
      </div>
      <div className="w-full flex flex-row justify-center items-center">
        <WhyTravel />
      </div>

      <div className="flex xl:flex-row justify-center items-center pt-10 md:pt-15 pb-0 ">
        <Features />
      </div>
      <RecentLaunchedCar />
      <div className="flex flex-row items-center justify-center">
        <Testimonials />
      </div>
      <div className="w-full flex flex-row justify-center items-center">
        <CategoriesHeadline
          header="News, Tips & Guides"
          dis="Favorite destinations based on customer reviews"
          button="View More"
        />
      </div>
      <div className=" flex flex-row justify-center items-center pt-10 md:pt-15 pb-0 md:pb-20">
        <TravelingNews />
      </div>

      <Footer />
    </div>
  );
};

export default HomeMain;
