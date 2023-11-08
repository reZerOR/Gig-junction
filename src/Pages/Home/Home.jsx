import React from "react";
import Banner from "./Banner/Banner";
import FeaturedJob from "./FeaturedJob/FeaturedJob";
import NewsLetter from "./NewsLetter/NewsLetter";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <FeaturedJob></FeaturedJob>
      <NewsLetter></NewsLetter>
    </>
  );
};

export default Home;
