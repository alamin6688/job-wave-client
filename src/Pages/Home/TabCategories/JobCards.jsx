import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

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
    <motion.div variants={cardVariants}>
      <Link
        to={`/job/${_id}`}
        className="block rounded-lg border border-gray-300 bg-gray-100 p-4 shadow-md sm:p-6 hover:shadow-lg hover:scale-105 duration-300 hover:shadow-blue-200 transition-all"
      >
        {/* Header row */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <CalendarDays className="w-4 h-4" />
            <span>{new Date(deadline).toLocaleDateString("en-GB")}</span>
          </div>

          <span
            className={`px-3 py-1 text-xs font-semibold rounded-full
              ${category === "Web Development" && "text-blue-600 bg-blue-100"}
              ${
                category === "Graphics Design" &&
                "text-emerald-600 bg-emerald-100"
              }
              ${
                category === "Digital Marketing" &&
                "text-yellow-600 bg-yellow-100"
              }
              ${category === "Data Analyst" && "text-cyan-600 bg-cyan-100"}
              ${
                category === "Content Writer" && "text-orange-600 bg-orange-100"
              }
              ${category === "UI/UX Design" && "text-teal-600 bg-teal-100"}
            `}
          >
            {category}
          </span>
        </div>

        {/* Main content */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-900 leading-snug">
            {job_title}
          </h3>

          <p
            className="mt-2 text-sm text-gray-600 line-clamp-2"
            title={description}
          >
            {description}
          </p>
        </div>

        {/* Footer meta */}
        <div className="mt-6 flex items-center gap-2 text-sm font-medium text-gray-700">
          <p>Price:</p>
          <span>
            ${minimum_price} – ${maximum_price}
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default JobCards;
