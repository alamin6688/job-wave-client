import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutDashboard, Waves } from "lucide-react";
import useAuth from "../../../Hooks/UseAuth";
import { Button } from "../../../Components/Button";
// import { Button } from "../../Components/Button";

const Navbar = () => {
  const { user, logOut } = useAuth();
  // const storedTheme = localStorage.getItem("theme") || "light";
  // const [theme, setTheme] = useState(storedTheme);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [avatarOpen, setAvatarOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };

  // const handleToggleTheme = () => {
  //   setTheme((prev) => (prev === "light" ? "dark" : "light"));
  // };

  // useEffect(() => {
  //   localStorage.setItem("theme", theme);
  //   document.querySelector("html").setAttribute("data-theme", theme);
  // }, [theme]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "All Jobs", path: "/all-jobs" },
    { name: "Contact Us", path: "/contact" },
    { name: "Pricing", path: "/pricing" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
    >
      <div className="px-4 sm:px-6 lg:px-8 shadow-md">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg text-white group-hover:shadow-lg transition-shadow">
              <Waves className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
              Job Wave
            </span>
          </NavLink>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className="text-gray-600 hover:text-blue-600 font-medium relative group transition-colors"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full" />
              </NavLink>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            {/* <label className="swap swap-rotate cursor-pointer">
              <input
                type="checkbox"
                checked={theme === "dark"}
                onChange={handleToggleTheme}
              />

              <svg
                className={`swap-off h-8 w-8 fill-current ${
                  theme === "dark" ? "opacity-30" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              <svg
                className={`swap-on h-8 w-8 fill-current ${
                  theme === "light" ? "opacity-30" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label> */}

            {/* Auth Links */}
            {/* Auth Links */}
            {!user && (
              <Link to="/sign-in">
                <Button size="sm">Sign In</Button>
              </Link>
            )}
            {user && (
              <>
                {/* Dashboard Button with Icon */}
                <NavLink to="/dashboard" title="Dashboard">
                  <Button size="sm" className="flex items-center gap-1">
                    <LayoutDashboard className="w-5 h-5" />
                    Dashboard
                  </Button>
                </NavLink>

                {/* Avatar Dropdown */}
                <div className="relative">
                  <div
                    className="w-10 h-10 rounded-full overflow-hidden cursor-pointer"
                    onClick={() => setAvatarOpen((prev) => !prev)}
                  >
                    <img
                      src={
                        user.photoURL ||
                        "https://i.postimg.cc/wM5cB69C/istockphoto-1300845620-612x612.jpg"
                      }
                      alt={user.displayName || "Avatar"}
                    />
                  </div>
                  <AnimatePresence>
                    {avatarOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-2xl shadow-lg z-50 flex flex-col space-y-1 p-2"
                      >
                        {/* <NavLink
                          to="/dashboard/add-job"
                          className="p-2 hover:bg-gray-100 rounded"
                        >
                          Add Job
                        </NavLink>
                        <NavLink
                          to="/dashboard/my-posted-jobs"
                          className="p-2 hover:bg-gray-100 rounded"
                        >
                          My Posted Jobs
                        </NavLink>
                        <NavLink
                          to="/dashboard/my-bids"
                          className="p-2 hover:bg-gray-100 rounded"
                        >
                          My Bids
                        </NavLink>
                        <NavLink
                          to="/dashboard/bid-requests"
                          className="p-2 hover:bg-gray-100 rounded"
                        >
                          Bid Requests
                        </NavLink> */}
                        <button
                          onClick={handleLogout}
                          className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-2xl"
                        >
                          Sign Out
                        </button>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              </>
            )}

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden ml-2">
              <button
                onClick={() => setMobileOpen((prev) => !prev)}
                className="p-2 rounded-md border border-gray-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      mobileOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-gray-200 shadow-md"
          >
            <div className="flex flex-col p-4 space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className="p-2 text-gray-700 hover:bg-gray-100 rounded"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
