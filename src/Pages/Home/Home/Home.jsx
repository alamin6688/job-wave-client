import Banner from "../Banner/Banner";
import TabCategories from "../TabCategories/TabCategories";


const Home = () => {

    return (
        <div className="min-h-[calc(100vh-286px)]">
            <Banner></Banner>
            <TabCategories></TabCategories>
        </div>
    );
};

export default Home;