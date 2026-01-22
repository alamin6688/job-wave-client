/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Plus,
  FileText,
  Send,
  Inbox,
  LayoutDashboard,
  Home,
} from "lucide-react";
import useAuth from "../../Hooks/UseAuth";

const Dashboard = () => {
  const { user } = useAuth();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      const large = window.innerWidth >= 1024;
      setIsLargeScreen(large);
      // On large screens, always keep sidebar open
      if (large) {
        setIsSidebarOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // On mobile, close sidebar after navigation
  useEffect(() => {
    if (!isLargeScreen) {
      setIsSidebarOpen(false);
    }
  }, [location.pathname, isLargeScreen]);

  const dashboardMenus = [
    {
      label: "Home",
      path: "/",
      icon: Home,
      description: "Back to Home Page",
    },
    {
      label: "Dashboard Home",
      path: "/dashboard",
      icon: LayoutDashboard,
      description: "Overview and stats",
    },
    {
      label: "Add Job",
      path: "/dashboard/add-job",
      icon: Plus,
      description: "Post a new job",
    },
    {
      label: "My Posted Jobs",
      path: "/dashboard/my-posted-jobs",
      icon: FileText,
      description: "Manage your jobs",
    },
    {
      label: "My Bids",
      path: "/dashboard/my-bids",
      icon: Send,
      description: "View your bids",
    },
    {
      label: "Bid Requests",
      path: "/dashboard/bid-requests",
      icon: Inbox,
      description: "Incoming bids",
    },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <Helmet>
        <title>Dashboard | Job Wave</title>
      </Helmet>

      <div className="min-h-[calc(100vh-286px)] flex bg-gray-50 relative w-full">
        {/* Mobile Header with Toggle - Only on Mobile */}
        {!isLargeScreen && (
          <div className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 px-4 py-3 z-50 flex items-center justify-between">
            <h1 className="text-lg font-bold text-gray-900">
              Job Wave Dashboard
            </h1>
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isSidebarOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        )}

        {/* Sidebar - Always visible on desktop, toggleable on mobile */}
        <motion.aside
          initial={isLargeScreen ? {} : { x: -280 }}
          animate={isLargeScreen ? {} : { x: isSidebarOpen ? 0 : -280 }}
          transition={{ duration: 0.3 }}
          className={`${
            isLargeScreen ? "w-72 shrink-0" : "fixed top-0 left-0 w-72"
          } bg-white border-r border-gray-200 z-40 h-screen overflow-y-auto ${
            isLargeScreen ? "pt-0" : "pt-20"
          }`}
        >
          <div className="p-4 md:p-6 h-full flex flex-col">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 hidden lg:block">
              Dashboard
            </h2>

            {/* Navigation Menu */}
            <nav className="space-y-3 flex-1">
              {dashboardMenus.map((menu, index) => {
                const Icon = menu.icon;
                const active = isActive(menu.path);

                return (
                  <motion.div
                    key={index}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to={menu.path}
                      className={`flex items-center gap-3 px-3 md:px-4 py-2 md:py-3 rounded-xl transition-all text-sm md:text-base ${
                        active
                          ? "bg-blue-600 text-white shadow-lg"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      <Icon className="w-4 md:w-5 h-4 md:h-5 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="font-medium text-xs md:text-sm">
                          {menu.label}
                        </p>
                        {!active && (
                          <p className="text-xs text-gray-500 hidden md:block">
                            {menu.description}
                          </p>
                        )}
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* User Info Card - At Bottom */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-4 mt-8 border border-blue-100">
              <div className="flex items-center gap-3 mb-3">
                {user?.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt={user.displayName}
                    className="w-10 md:w-12 h-10 md:h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm md:text-base">
                    {user?.displayName?.charAt(0) || "U"}
                  </div>
                )}
                <div>
                  <p className="font-semibold text-gray-900 text-xs md:text-sm">
                    {user?.displayName || "User"}
                  </p>
                  <p className="text-xs text-gray-600">{user?.email}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.aside>

        {/* Main Content - Beside sidebar */}
        <main className="flex-1 w-full min-w-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full w-full overflow-y-auto overflow-x-hidden"
          >
            <div className="w-full p-3 md:p-6 lg:p-8 min-h-screen">
              {/* Outlet for nested routes */}
              <Outlet />
            </div>
          </motion.div>
        </main>

        {/* Mobile Overlay */}
        {!isLargeScreen && isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </div>
    </>
  );
};

export default Dashboard;
