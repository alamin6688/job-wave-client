import { Link } from "react-router-dom";

const JobCards = ({ job }) => {
  const {
    _id,
    job_title,
    description,
    minimum_price,
    maximum_price,
    category,
    deadline,
  } = job || {};
  return (
    <Link
      to={`/job/${_id}`}
      className="w-full px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-gray-700">
          Deadline: {new Date(deadline).toLocaleDateString("en-GB")}
        </span>
        <span className="text-[8px] uppercase rounded-full font-semibold">
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
              job.category === "Data Analyst" && "text-cyan-500 bg-cyan-100/60"
            } ${
              job.category === "Content Writer" &&
              "text-orange-500 bg-orange-100/60"
            } ${
              job.category === "UI/UX Design" && "text-teal-500 bg-teal-100/60"
            } text-xs rounded-full`}
          >
            {category}
          </p>
        </span>
      </div>

      <div>
        <h1 className="mt-2 text-xl font-bold text-gray-800">{job_title}</h1>

        <p title={description} className="mt-2 text-lg text-gray-600 ">
          {description.substring(0, 70)}...
        </p>
        <p className="mt-6 text-lg font-bold text-gray-700">
          Range: ${minimum_price} - ${maximum_price}
        </p>
      </div>
    </Link>
  );
};

export default JobCards;
