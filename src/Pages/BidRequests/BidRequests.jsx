import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/UseAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const BidRequests = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  // const queryClient = useQueryClient();

  const {
    data: bids = [],
    isLoading,
    refetch,
  } = useQuery({
    queryFn: () => getData(),
    queryKey: ["bids", user?.email],
  });

  const getData = async () => {
    try {
      const { data } = await axiosSecure.get(`/bid-requests/${user?.email}`);
      return data;
    } catch (error) {
      console.error("Error fetching bid requests:", error);
    }
  };

  const { mutateAsync } = useMutation({
    mutationFn: async ({ id, status }) => {
      const { data } = await axiosSecure.patch(`/bid/${id}`, { status });
      console.log(data);
      return data;
    },
    onSuccess: () => {
      console.log("Updated!");
      toast.success("Data Updated Successfully!");

      // Refresh UI For latest Data
      refetch();

      // Refetch Er Kothin Niom Jate All Web a Data Refech Hoi
      // queryClient.invalidateQueries({ queryKey: ["bids"] });
    },
  });

  // Handle Status
  const handleStatus = async (id, prevStatus, status) => {
    if (prevStatus === status)
      return console.log("Action not permitted! Already In Progress.");

    await mutateAsync({ id, status });
  };

  if (isLoading) {
    return (
      <div className="min-h-[calc(100vh-304px)] flex items-center justify-center">
        <div>
          <span className="loading loading-bars loading-lg"></span>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Job Wave | Bid Requests</title>
      </Helmet>
      <section className="min-h-[calc(100vh-304px)] max-w-screen-2xl mx-auto px-4 py-12">
        <div className="flex items-center gap-x-3">
          <h2 className="text-xl font-bold text-gray-700">Bid Requests</h2>

          <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
            {bids.length} Requests
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
                        className="py-3.5 px-4 text-sm font-semibold text-left rtl:text-right text-gray-500"
                      >
                        <div className="flex items-center gap-x-3">
                          <span>Email</span>
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
                          <span>Price</span>
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
                        Status
                      </th>

                      <th className="px-4 py-3.5 text-sm font-semibold text-left rtl:text-right text-gray-500">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 ">
                    {bids.map((bid, idx) => (
                      <tr key={bid._id}>
                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          {idx + 1}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          {bid.job_title}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          {bid.email}
                        </td>

                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          {new Date(bid.deadline).toLocaleDateString()}
                        </td>

                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          ${bid.price}
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-2">
                            <p
                              className={`px-3 py-1 ${
                                bid.category === "Web Development" &&
                                "text-blue-500 bg-blue-100/60"
                              } ${
                                bid.category === "Graphics Design" &&
                                "text-emerald-500 bg-emerald-100/60"
                              } ${
                                bid.category === "Digital Marketing" &&
                                "text-yellow-500 bg-yellow-100/60"
                              } ${
                                bid.category === "Data Analyst" &&
                                "text-cyan-500 bg-cyan-100/60"
                              } ${
                                bid.category === "Content Writer" &&
                                "text-orange-500 bg-orange-100/60"
                              } ${
                                bid.category === "UI/UX Design" &&
                                "text-teal-500 bg-teal-100/60"
                              } text-xs rounded-full`}
                            >
                              {bid.category}
                            </p>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div
                            className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${
                              bid.status === "Pending" &&
                              "bg-yellow-100/60 text-yellow-500"
                            } ${
                              bid.status === "In Progress" &&
                              "bg-blue-100/60 text-blue-500"
                            } ${
                              bid.status === "Complete" &&
                              "bg-emerald-100/60 text-emerald-500"
                            } ${
                              bid.status === "Rejected" &&
                              "bg-red-100/60 text-red-500"
                            }`}
                          >
                            <span
                              className={`h-1.5 w-1.5 rounded-full ${
                                bid.status === "Pending" && "bg-yellow-500"
                              } ${
                                bid.status === "In Progress" && "bg-blue-500"
                              } ${
                                bid.status === "Complete" && "bg-green-500"
                              } ${
                                bid.status === "Complete" && "bg-green-500"
                              } ${bid.status === "Rejected" && "bg-red-500"} `}
                            ></span>
                            <h2 className="text-sm font-normal ">
                              {bid.status}
                            </h2>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-6">
                            {/* Accept Button */}
                            <button
                              onClick={() =>
                                handleStatus(bid._id, bid.status, "In Progress")
                              }
                              disabled={bid.status === "Complete"}
                              className="btn text-gray-500 transition-colors duration-200   hover:bg-green-600 bg-green-500 focus:outline-none border-none"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="3.0"
                                stroke="currentColor"
                                className="w-6 h-6 text-white"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m4.5 12.75 6 6 9-13.5"
                                />
                              </svg>
                            </button>
                            {/* Rejected Button */}
                            <button
                              onClick={() =>
                                handleStatus(bid._id, bid.status, "Rejected")
                              }
                              disabled={bid.status === "Complete"}
                              className="btn transition-colors duration-200 hover:bg-red-600 *:focus:outline-none bg-red-500 border-none"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="3.0"
                                stroke="currentColor"
                                className="w-6 h-6 text-white"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
                                />
                              </svg>
                            </button>
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

export default BidRequests;
