import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCards from "./JobCards";

const TabCategories = ({ jobs }) => {
  return (
    <div className="max-w-screen-xl mx-auto mt-4 mb-16">
      <h1 className="text-2xl font-bold text-center capitalize lg:text-3xl">
        Browse Jobs By Categories
      </h1>

      <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 ">
        Three categories available for the time being. They are Web Development,
        Graphics Design and Digital Marketing. Browse them by clicking on the
        tabs below.
      </p>
      <Tabs>
        <div className="container mx-auto flex items-center justify-center font-semibold">
          <TabList>
            <Tab>Web Development</Tab>
            <Tab>Graphics Design</Tab>
            <Tab>Digital Marketing</Tab>
          </TabList>
        </div>
        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {jobs
              // .filter((j) => j.category === "Web Development")
              .map((job) => (
                <JobCards key={job._id} job={job} />
              ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {jobs
              // .filter((j) => j.category === "Graphics Design")
              .map((job) => (
                <JobCards key={job._id} job={job} />
              ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {jobs
              // .filter((j) => j.category === "Digital Marketing")
              .map((job) => (
                <JobCards key={job._id} job={job} />
              ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};
export default TabCategories;
