import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import TabCategories from "../TabCategories/TabCategories";
import HowItWorks from "../HowItWorks/HowItWorks";
import FAQ from "../FAQ/FAQ";
import Portfolio from "../Portfolio/Portfolio";
import Stats from "../Stats/Stats";

const Home = () => {
  return (
    <>
      {" "}
      <Helmet>
        <title>Home | Job Wave</title>
      </Helmet>
      <div className="min-h-[calc(100vh-286px)]">
        <Banner></Banner>
        <Stats></Stats>
        <TabCategories></TabCategories>
        <HowItWorks></HowItWorks>
        <FAQ></FAQ>
        <Portfolio></Portfolio>
      </div>
    </>
  );
};

export default Home;
