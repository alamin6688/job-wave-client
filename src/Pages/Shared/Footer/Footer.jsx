/* eslint-disable react/no-unescaped-entities */
import { Waves } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            {/* Logo */}
            <NavLink to="/" className="flex items-center space-x-2 group mb-3">
              <div className="p-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg text-white group-hover:shadow-lg transition-shadow">
                <Waves className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-white">
                Job Wave
              </span>
            </NavLink>
            <p className="text-gray-400 text-sm leading-relaxed">
              Connecting the world's best talent with forward-thinking
              companies.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link
                  to="/all-jobs"
                  className="hover:text-white transition-colors"
                >
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link
                  to="/whats-new"
                  className="hover:text-white transition-colors"
                >
                  What's New
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>© 2024 Job Wave Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
