import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import JobCards from "../Home/TabCategories/JobCards";

const AllJobs = () => {
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios(
          `${
            import.meta.env.VITE_API_URL
          }/all-jobs?page=${currentPage}&size=${itemsPerPage}&filter=${filter}&sort=${sort}&search=${search}`
        );
        setJobs(data);
      } catch (error) {
        console.log("Error in fetching!", error);
      }
    };
    getData();
  }, [currentPage, filter, itemsPerPage, search, sort]);

  // Pagination Page Count Data Count
  useEffect(() => {
    const getCount = async () => {
      try {
        const { data } = await axios(
          `${
            import.meta.env.VITE_API_URL
          }/all-jobs-count?&filter=${filter}&search=${search}`
        );
        setCount(data.count);
      } catch (error) {
        console.log("Error in data length count!", error);
      }
    };
    getCount();
  }, [filter, search]);

  // Pagination Page Count
  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()].map((element) => element + 1);

  //  Handle Pagination Button
  const handlePaginationButton = (value) => {
    console.log(value);
    setCurrentPage(value);
  };

  // Handle Reset
  const handleReset = () => {
    setFilter("");
    setSort("");
    setSearch("");
    setSearchText("");
  };

  // Handle Search
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchText);
  };
  console.log(searchText);

  return (
    <>
      <Helmet>
        <title>All Jobs | Job Wave</title>
      </Helmet>
      <div className="container px-6 py-10 mx-auto min-h-[calc(100vh-304px)] flex flex-col justify-between">
        <div>
          <div className="flex flex-col md:flex-col lg:flex-row justify-center items-center gap-5 animate__animated animate__slideInDown">
            <div>
              <select
                onChange={(e) => {
                  setFilter(e.target.value);
                  setCurrentPage(1);
                }}
                value={filter}
                name="category"
                id="category"
                className="border p-4 rounded-lg"
              >
                <option value="">Filter By Category</option>
                <option value="Web Development">Web Development</option>
                <option value="Graphics Design">Graphics Design</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option>Data Analyst</option>
                <option>Content Writer</option>
                <option>UI/UX Design</option>
              </select>
            </div>

            <form onSubmit={handleSearch}>
              <div className="flex p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                <input
                  className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
                  type="text"
                  onChange={(e) => setSearchText(e.target.value)}
                  value={searchText}
                  name="search"
                  placeholder="Enter Job Title"
                  aria-label="Enter Job Title"
                />

                <button className="px-6 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                  Search
                </button>
              </div>
            </form>
            <div>
              <select
                onChange={(e) => {
                  setSort(e.target.value);
                  setCurrentPage(1);
                }}
                value={sort}
                name="sort"
                id="sort"
                className="border p-4 rounded-md"
              >
                <option value="">Sort By Deadline</option>
                <option value="dsc">Descending Order</option>
                <option value="asc">Ascending Order</option>
              </select>
            </div>
            <button
              onClick={handleReset}
              className="btn text-[16px] leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Reset
            </button>
          </div>
          <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-8 mt-8 lg:mt-16 animate__animated animate__slideInUp">
            {jobs.map((job) => (
              <JobCards key={job._id} job={job} />
            ))}
          </div>
        </div>

        {/* Pagination Section */}
        <div className="flex justify-center mt-12">
          {/* Previous Button */}
          <button
            disabled={currentPage === 1}
            onClick={() => handlePaginationButton(currentPage - 1)}
            className="px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white"
          >
            <div className="flex items-center -mx-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-1 rtl:-scale-x-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>

              <span className="mx-1">Previous</span>
            </div>
          </button>
          {/* Numbers */}
          {pages.map((btnNum) => (
            <button
              onClick={() => handlePaginationButton(btnNum)}
              key={btnNum}
              className={`hidden ${
                currentPage === btnNum ? "bg-blue-500 text-white" : ""
              } px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500  hover:text-white`}
            >
              {btnNum}
            </button>
          ))}

          {/* Next Button */}
          <button
            disabled={currentPage === numberOfPages}
            onClick={() => handlePaginationButton(currentPage + 1)}
            className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500"
          >
            <div className="flex items-center -mx-1">
              <span className="mx-1">Next</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-1 rtl:-scale-x-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default AllJobs;
