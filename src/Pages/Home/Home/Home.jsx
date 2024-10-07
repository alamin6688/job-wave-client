import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import TabCategories from "../TabCategories/TabCategories";
import HowItWorks from "../HowItWorks/HowItWorks";
import FAQ from "../FAQ/FAQ";

const Home = () => {
  return (
    <>
      {" "}
      <Helmet>
        <title>Home | Job Wave</title>
      </Helmet>
      <div className="min-h-[calc(100vh-286px)]">
        <Banner></Banner>
        <TabCategories></TabCategories>
        <HowItWorks></HowItWorks>
        <FAQ></FAQ>
      </div>
    </>
  );
};

export default Home;
