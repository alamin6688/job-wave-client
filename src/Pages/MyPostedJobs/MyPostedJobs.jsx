import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/UseAuth";

const MyPostedJobs = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getData();
  }, [user]);

  const getData = async () => {
    const { data } = await axiosSecure(`/jobs/${user?.email}`);
    setJobs(data);
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const { data } = await axiosSecure.delete(`/job/${id}`);
          console.log(data);

          // Display Success Toast
          toast.success("Delete Successful!");

          // Refresh UI
          getData();
        } catch (err) {
          console.log(err.message);
          toast.error(err.message);
        }
      } else {
        toast.info("Delete canceled.");
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Posted Jobs | Job Wave</title>
      </Helmet>
      <section className="min-h-[calc(100vh-304px)] max-w-screen-2xl mx-auto px-4 py-12">
        <div className="flex items-center gap-x-3">
          <h2 className="text-xl font-bold text-gray-700">My Posted Jobs</h2>

          <span className="px-3 py-1 text-[14px] text-blue-600 bg-blue-100 rounded-full">
            {jobs.length}
          </span>
        </div>

        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-semibold text-left rtl:text-right text-gray-500"
                      >
                        <div className="flex items-center gap-x-3">
                          <span>No.</span>
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-semibold text-left rtl:text-right text-gray-500"
                      >
                        <div className="flex items-center gap-x-3">
                          <span>Title</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-semibold text-left rtl:text-right text-gray-500"
                      >
                        <span>Deadline</span>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-semibold text-left rtl:text-right text-gray-500"
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Price Range</span>
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-semibold text-left rtl:text-right text-gray-500"
                      >
                        Category
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-semibold text-left rtl:text-right text-gray-500"
                      >
                        Description
                      </th>

                      <th className="px-4 py-3.5 text-sm font-semibold text-left rtl:text-right text-gray-500">
                        Edit
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 ">
                    {jobs.map((job, idx) => (
                      <tr key={job._id}>
                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          {idx + 1}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          {job.job_title}
                        </td>

                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          {new Date(job.deadline).toLocaleDateString()}
                        </td>

                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          ${job.minimum_price} - ${job.maximum_price}
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-2">
                            <p
                              className={`px-3 py-1 ${
                                job.category === "Web Development" &&
                                "text-blue-500 bg-blue-100/60"
                              } ${
                                job.category === "Graphics Design" &&
                                "text-emerald-500 bg-emerald-100/60"
                              } ${
                                job.category === "Digital Marketing" &&
                                "text-yellow-500 bg-yellow-100/60"
                              } ${
                                job.category === "Data Analyst" &&
                                "text-cyan-500 bg-cyan-100/60"
                              } ${
                                job.category === "Content Writer" &&
                                "text-orange-500 bg-orange-100/60"
                              } ${
                                job.category === "UI/UX Design" &&
                                "text-teal-500 bg-teal-100/60"
                              } text-xs rounded-full`}
                            >
                              {job.category}
                            </p>
                          </div>
                        </td>
                        <td
                          title={job.description}
                          className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap"
                        >
                          {job.description.substring(0, 18)}...
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-6">
                            {/* Delete Button */}
                            <button
                              onClick={() => handleDelete(job._id)}
                              className="btn border-none text-white hover:bg-red-600 bg-red-500 transition-colors duration-200   hover:text-white focus:outline-none"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                              </svg>
                            </button>
                            {/* Update */}
                            <Link
                              to={`/update/${job._id}`}
                              className="btn border-none text-white hover:bg-blue-600 bg-blue-500 transition-colors duration-200  hover:text-white focus:outline-none"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                />
                              </svg>
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyPostedJobs;
