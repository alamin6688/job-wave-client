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
        <span className="text-xs font-light text-gray-800 ">
          Deadline: {new Date(deadline).toLocaleDateString("en-GB")}
        </span>
        <span className="px-3 py-1 text-[8px] text-blue-800 uppercase bg-blue-200 rounded-full ">
          {category}
        </span>
      </div>

      <div>
        <h1 className="mt-2 text-lg font-semibold text-gray-800 ">
          {job_title}
        </h1>

        <p title={description} className="mt-2 text-sm text-gray-600 ">
          {description.substring(0, 70)}...
        </p>
        <p className="mt-2 text-sm font-bold text-gray-600 ">
          Range: ${minimum_price} - ${maximum_price}
        </p>
      </div>
    </Link>
  );
};

export default JobCards;
