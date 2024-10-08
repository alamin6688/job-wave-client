import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import useAuth from "../../Hooks/UseAuth";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const AddJob = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [startDate, setStartDate] = useState(new Date());
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const job_title = form.job_title.value;
    const email = form.email.value;
    const deadline = startDate;
    const category = form.category.value;
    const minimum_price = parseFloat(form.min_price.value);
    const maximum_price = parseFloat(form.max_price.value);
    const description = form.description.value;
    const jobData = {
      job_title,
      deadline,
      category,
      minimum_price,
      maximum_price,
      description,
      email,
      buyer: {
        email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
    };
    console.log(jobData);
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/job`,
        jobData
      );
      console.log(data);
      toast.success("Job Data Updated Successfully!");
      navigate("/my-posted-jobs");
    } catch (err) {
      console.log(err, err.message);
    }
  };
  return (
    <>
      <Helmet>
        <title>Add Job | Job Wave</title>
      </Helmet>
      <div className="max-w-screen-2xl mx-auto flex justify-center items-center min-h-[calc(100vh-306px)] mt-4 md:mt-10 mb-12 animate__animated animate__zoomIn">
        <section className="w-full md:w-3/4 lg:w-1/2 p-4 pb-6 md:p-6 mx-auto bg-white rounded-md shadow-2xl">
          <h2 className="text-center text-2xl font-extrabold text-gray-700 capitalize">
            Post a Job
          </h2>
          <hr className="mt-2" />

          <form onSubmit={handleFormSubmit}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label className="text-gray-700 " htmlFor="job_title">
                  Job Title
                </label>
                <input
                  id="job_title"
                  name="job_title"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-gray-700 " htmlFor="emailAddress">
                  Email Address
                </label>
                <input
                  id="emailAddress"
                  type="email"
                  name="email"
                  disabled
                  defaultValue={user?.email}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-gray-700">Deadline</label>

                {/* Date Picker Input Field */}
                <DatePicker
                  className="border w-full p-2 rounded-md"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-gray-700" htmlFor="category">
                  Category
                </label>
                <select
                  name="category"
                  id="category"
                  className="border p-2 rounded-md"
                >
                  <option value="Web Development">Web Development</option>
                  <option value="Graphics Design">Graphics Design</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option>Data Analyst</option>
                  <option>Content Writer</option>
                  <option>UI/UX Design</option>
                </select>
              </div>
              <div>
                <label className="text-gray-700 " htmlFor="min_price">
                  Minimum Price
                </label>
                <input
                  id="min_price"
                  name="min_price"
                  type="number"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-gray-700 " htmlFor="max_price">
                  Maximum Price
                </label>
                <input
                  id="max_price"
                  name="max_price"
                  type="number"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <label className="text-gray-700 " htmlFor="description">
                Description
              </label>
              <textarea
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                name="description"
                id="description"
              ></textarea>
            </div>
            <div className="flex justify-end mt-6">
              <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Save
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default AddJob;
