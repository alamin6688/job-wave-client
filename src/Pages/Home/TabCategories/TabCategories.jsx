import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCards from "./JobCards";

const TabCategories = ({ jobs }) => {
  return (
    <div className="max-w-screen-2xl mx-auto mt-4 mb-12 pb-8 px-4">
      <h1 className="text-2xl font-bold text-center capitalize lg:text-3xl pt-4">
        Browse Jobs By Categories
      </h1>

      <p className="w-full md:w-3/4 mx-auto my-6 text-center text-gray-500 ">
        Explore a wide range of job opportunities tailored to your skills and
        interests. Start browsing today and find your next big project! Connect
        with top professionals and elevate your career.
      </p>
      <Tabs>
        <div className="container mx-auto flex items-center justify-center font-semibold">
          <TabList>
            <Tab>Web Development</Tab>
            <Tab>Graphics Design</Tab>
            <Tab>Digital Marketing</Tab>
            <Tab>Data Analyst</Tab>
            <Tab>Content Writer</Tab>
            <Tab>UI/UX Design</Tab>
          </TabList>
        </div>
        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {jobs
              // .filter((j) => j.category === "Web Development")
              .map((job) => (
                <JobCards key={job._id} job={job} />
              ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {jobs
              // .filter((j) => j.category === "Graphics Design")
              .map((job) => (
                <JobCards key={job._id} job={job} />
              ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {jobs
              // .filter((j) => j.category === "Digital Marketing")
              .map((job) => (
                <JobCards key={job._id} job={job} />
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {jobs
              // .filter((j) => j.category === "Digital Marketing")
              .map((job) => (
                <JobCards key={job._id} job={job} />
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {jobs
              // .filter((j) => j.category === "UI/UX Design")
              .map((job) => (
                <JobCards key={job._id} job={job} />
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {jobs
              // .filter((j) => j.category === "UI/UX Design")
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
