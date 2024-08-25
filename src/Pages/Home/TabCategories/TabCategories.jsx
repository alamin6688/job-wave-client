import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCards from "./JobCards";
import { useEffect, useState } from "react";
import axios from "axios";

const TabCategories = () => {
  const [jobs, setJobs] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(`${import.meta.env.VITE_API_URL}/jobs`)
  //     .then((res) => {
  //       setJobs(res.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching jobs:", error);
  //     });
  // }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs`);
        setJobs(data);
      } catch (error) {
        console.log("Error in fetching!", error);
      }
    };
    getData();
  }, []); // Empty dependency array means this effect runs once on mount

  // Utility function to filter jobs based on category
  const filterJobsByCategory = (category) => {
    return jobs.filter((job) => job.category === category);
  };

  return (
    <div className="max-w-screen-2xl mx-auto mt-4 mb-8 pb-6 px-4">
      <h1 className="text-2xl font-bold text-center capitalize lg:text-3xl pt-4">
        Browse Jobs By Categories
      </h1>

      <p className="w-full md:w-3/4 mx-auto my-6 text-center text-gray-500">
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
            {filterJobsByCategory("Web Development").map((job) => (
              <JobCards key={job._id} job={job} />
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filterJobsByCategory("Graphics Design").map((job) => (
              <JobCards key={job._id} job={job} />
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filterJobsByCategory("Digital Marketing").map((job) => (
              <JobCards key={job._id} job={job} />
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filterJobsByCategory("Data Analyst").map((job) => (
              <JobCards key={job._id} job={job} />
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filterJobsByCategory("Content Writer").map((job) => (
              <JobCards key={job._id} job={job} />
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filterJobsByCategory("UI/UX Design").map((job) => (
              <JobCards key={job._id} job={job} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabCategories;
