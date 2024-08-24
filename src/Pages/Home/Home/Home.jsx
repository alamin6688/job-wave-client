import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import TabCategories from "../TabCategories/TabCategories";


const Home = () => {
    const jobs = useLoaderData()
    console.log(jobs);
    return (
        <div className="min-h-[calc(100vh-286px)]">
            <Banner></Banner>
            <TabCategories jobs={jobs}></TabCategories>
        </div>
    );
};

export default Home;