/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Plus,
  FileText,
  Send,
  Inbox,
  TrendingUp,
} from "lucide-react";
import useAuth from "../../Hooks/UseAuth";

const DashboardHome = () => {
  const { user } = useAuth();

  const quickActions = [
    {
      label: "Post a Job",
      icon: Plus,
      path: "/dashboard/add-job",
      color: "bg-blue-50 text-blue-600 hover:bg-blue-100",
      description: "Create a new job posting",
    },
    {
      label: "My Jobs",
      icon: FileText,
      path: "/dashboard/my-posted-jobs",
      color: "bg-purple-50 text-purple-600 hover:bg-purple-100",
      description: "Manage your job posts",
    },
    {
      label: "My Bids",
      icon: Send,
      path: "/dashboard/my-bids",
      color: "bg-green-50 text-green-600 hover:bg-green-100",
      description: "View your submitted bids",
    },
    {
      label: "Bid Requests",
      icon: Inbox,
      path: "/dashboard/bid-requests",
      color: "bg-orange-50 text-orange-600 hover:bg-orange-100",
      description: "Incoming bid requests",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Dashboard Home | Job Wave</title>
      </Helmet>

      <div className="w-full">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 md:p-8 border border-blue-100 mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Welcome back, {user?.displayName?.split(" ")[0]}! 👋
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
            Manage your jobs, track bids, and grow your freelance business all
            in one place.
          </p>
        </motion.div>

        {/* Quick Actions Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Link
                    to={action.path}
                    className={`${action.color} rounded-2xl p-6 text-center cursor-pointer transition-all border border-gray-200 hover:shadow-lg block group`}
                  >
                    <Icon className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <p className="font-semibold text-gray-900 mb-1">
                      {action.label}
                    </p>
                    <p className="text-xs text-gray-600">
                      {action.description}
                    </p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { label: "Total Jobs Posted", value: "0", icon: FileText },
            { label: "Active Bids", value: "0", icon: Send },
            { label: "Pending Requests", value: "0", icon: Inbox },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm mb-2">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900">
                      {stat.value}
                    </p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-full">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div> */}

        {/* Getting Started Guide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-100 rounded-full flex-shrink-0">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Getting Started
              </h3>
              <p className="text-gray-600 mb-4">
                Here's what you can do on Job Wave:
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-blue-600 font-bold">→</span>
                  Post a new job and set your budget
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600 font-bold">→</span>
                  Browse and bid on available jobs
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600 font-bold">→</span>
                  Track all your bids and their status in real-time
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600 font-bold">→</span>
                  Manage incoming bid requests from freelancers
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default DashboardHome;
