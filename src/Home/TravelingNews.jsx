import React from "react";
import NewsCard from "../Common/NewsCard";

const TravelingNews = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center justify-center w-full lg:w-[90%] xl:w-[66%] px-6 md:px-9 lg:px-0 xl:px-0">
      <NewsCard
        img="/img/news-img/news.png.png"
        news="Cultural"
        newsheading="Ultimate Travel Planning Guide:
10 Tips for a Seamless Journey"
      />
      <NewsCard img="/img/news-img/news2.png.png" />
      <NewsCard img="/img/news-img/news3.png.png" />
    </div>
  );
};

export default TravelingNews;
