import { Helmet } from "react-helmet-async";
// import Banner from "../Banner/Banner";
import TabCategories from "../TabCategories/TabCategories";
import HowItWorks from "../HowItWorks/HowItWorks";
import FAQ from "../FAQ/FAQ";
import Portfolio from "../Portfolio/Portfolio";
// import Stats from "../Stats/Stats";
import Trust from "../Trust/Trust";
import CTA from "../CTA/CTA";
import Testimonials from "../Testimonials/Testimonials";
import Hero from "../Hero/Hero";

const Home = () => {
  return (
    <>
      {" "}
      <Helmet>
        <title>Home | Job Wave</title>
      </Helmet>
      <div className="min-h-[calc(100vh-286px)]">
        <Hero/>
        {/* <Banner /> */}
        {/* <Stats /> */}
        <TabCategories />
        <HowItWorks />
        <Trust />
        <Portfolio />
        <FAQ />
        <Testimonials />
        <CTA />
      </div>
    </>
  );
};

export default Home;
