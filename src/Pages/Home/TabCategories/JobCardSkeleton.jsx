import { motion } from "framer-motion";

const JobCardSkeleton = () => {
  const shimmer = {
    initial: { backgroundPosition: "-1000px 0" },
    animate: { backgroundPosition: "1000px 0" },
  };

  return (
    <motion.div
      variants={shimmer}
      initial="initial"
      animate="animate"
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      className="rounded-lg border border-gray-300 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 p-4 sm:p-6 shadow-md"
      style={{
        backgroundSize: "1000px 100%",
      }}
    >
      {/* Header skeleton */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <motion.div
            className="w-4 h-4 bg-gray-300 rounded"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <motion.div
            className="w-20 h-4 bg-gray-300 rounded"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>

        <motion.div
          className="w-24 h-6 bg-gray-300 rounded-full"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </div>

      {/* Title skeleton */}
      <div className="mt-4 space-y-2">
        <motion.div
          className="w-3/4 h-6 bg-gray-300 rounded"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.1 }}
        />
        <motion.div
          className="w-full h-4 bg-gray-300 rounded"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
        />
        <motion.div
          className="w-5/6 h-4 bg-gray-300 rounded"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
        />
      </div>

      {/* Price skeleton */}
      <div className="mt-6">
        <motion.div
          className="w-40 h-5 bg-gray-300 rounded"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
        />
      </div>
    </motion.div>
  );
};

export default JobCardSkeleton;
