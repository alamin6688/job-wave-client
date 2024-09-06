import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../Hooks/UseAuth";
import toast from "react-hot-toast";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const JobDetails = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();
  const job = useLoaderData();
  const {
    _id,
    job_title,
    description,
    minimum_price,
    maximum_price,
    category,
    deadline,
    buyer,
  } = job || {};

  const handleFormSubmission = async (e) => {
    e.preventDefault();
    if (user?.email === buyer?.email)
      return toast.error("Action not permitted!");
    const form = e.target;
    const jobId = _id;
    const price = parseFloat(form.price.value);
    // Check if price is not provided
    if (!price) {
      return toast.error("Please enter a valid price to place your bid.");
    }
    // Validation for price within range
    if (
      price < parseFloat(minimum_price) ||
      price > parseFloat(maximum_price)
    ) {
      return toast.error(
        `Price must be within the range of ${minimum_price} to ${maximum_price}.`
      );
    }
    const comment = form.comment.value;
    const deadline = startDate;
    const email = user?.email;
    const status = "Pending";

    const bidData = {
      jobId,
      price,
      deadline,
      comment,
      job_title,
      category,
      email,
      buyer_email: buyer?.email,
      status,
      buyer,
    };
    console.log(bidData);
    try {
      const { data } = await axiosSecure.post(`/bid`, bidData);
      console.log(data);
      if (data.insertedId) {
        toast.success("Bid Placed Successfully!");
        navigate("/my-bids");
      }
    } catch (error) {
      toast.error("Bid Already Placed!");
      console.log("error.response.data", error);
      e.target.reset();
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-around gap-4  items-center min-h-[calc(100vh-304px)] max-w-screen-2xl mx-auto p-4">
      {/* Job Details */}
      <div className="w-full flex-1 p-4 py-6 bg-white rounded-md shadow-xl md:min-h-[350px]">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-gray-700 ">
            Deadline: {new Date(deadline).toLocaleDateString()}
          </span>
          <span className="px-4 py-1 font-semibold pt-1 text-blue-800 uppercase bg-blue-200 rounded-full">
            {category}
          </span>
        </div>

        <div className="space-y-3">
          <h1 className="mt-2 text-3xl font-bold text-gray-800 ">
            {job_title}
          </h1>

          <p className="mt-2 text-lg text-gray-600 ">{description}</p>
          <p className="mt-6 text-lg font-bold text-gray-600 ">
            Buyer Details:
          </p>
          <div className="flex items-center justify-between gap-5">
            <div>
              <p className="mt-2 text-sm  text-gray-600 ">
                Name: {buyer?.name}
              </p>
              <p className="mt-2 text-sm  text-gray-600 ">
                Email: {buyer?.email}
              </p>
            </div>
            <div className="rounded-xl object-cover overflow-hidden w-14 h-14">
              <img src={buyer?.photo} alt="" />
            </div>
          </div>
          <p className="mt-6 text-lg font-bold text-gray-700 ">
            Range: ${minimum_price} - ${maximum_price}
          </p>
        </div>
      </div>
      {/* Place A Bid Form */}
      <section className="p-4 py-6 w-full bg-white rounded-md shadow-xl flex-1 md:min-h-[350px]">
        <h2 className="text-2xl font-semibold text-gray-700 capitalize">
          Place A Bid
        </h2>
        <hr className="mt-2" />
        <form onSubmit={handleFormSubmission}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 " htmlFor="price">
                Price
              </label>
              <input
                id="price"
                type="text"
                name="price"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                required
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
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="comment">
                Comment
              </label>
              <input
                id="comment"
                name="comment"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-gray-700">
                Deadline
                <span className="text-xs">(MM/DD/YYYY)</span>
              </label>

              {/* Date Picker Input Field */}
              <DatePicker
                className="border p-2 rounded-md w-full"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="w-full px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Place A Bid
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default JobDetails;
