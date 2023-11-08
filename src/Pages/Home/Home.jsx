import React from "react";
import Banner from "./Banner/Banner";
import FeaturedJob from "./FeaturedJob/FeaturedJob";
import NewsLetter from "./NewsLetter/NewsLetter";
import Extrasection from "./Extrasection/Extrasection";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <FeaturedJob></FeaturedJob>
      <Extrasection></Extrasection>
      <NewsLetter></NewsLetter>
    </>
  );
};

export default Home;
