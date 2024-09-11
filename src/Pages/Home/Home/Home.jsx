import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import TabCategories from "../TabCategories/TabCategories";
import HowItWorks from "../HowItWorks/HowItWorks";

const Home = () => {
  return (
    <>
      {" "}
      <Helmet>
        <title>Job Wave | Home</title>
      </Helmet>
      <div className="min-h-[calc(100vh-286px)]">
        <Banner></Banner>
        <TabCategories></TabCategories>
        <HowItWorks></HowItWorks>
      </div>
    </>
  );
};

export default Home;
