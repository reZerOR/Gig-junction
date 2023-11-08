import React from "react";
import Banner from "./Banner/Banner";
import FeaturedJob from "./FeaturedJob/FeaturedJob";
import NewsLetter from "./NewsLetter/NewsLetter";
import Extrasection from "./Extrasection/Extrasection";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <div>
        <Helmet>
          <title>Gig Junk | Home</title>
        </Helmet>
        <Banner></Banner>
        <FeaturedJob></FeaturedJob>
        <Extrasection></Extrasection>
        <NewsLetter></NewsLetter>
      </div>
    </>
  );
};

export default Home;
