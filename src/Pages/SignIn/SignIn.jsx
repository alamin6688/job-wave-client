import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth";
import SocialLogin from "../../Components/SocialLogin";
import logo from "../../assets/logo.png";
import toast from "react-hot-toast";
import axios from "axios";
import {
  motion,
  useReducedMotion,
  LazyMotion,
  domAnimation,
} from "framer-motion";

const SignIn = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const shouldReduceMotion = useReducedMotion();

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;

    try {
      const result = await signIn(email, pass);

      await axios.post(
        `${import.meta.env.VITE_API_URL}/jwt`,
        { email: result?.user?.email },
        { withCredentials: true }
      );

      navigate(from, { replace: true });
      toast.success("Sign In Successful");
    } catch (err) {
      console.log(err);
      toast.error(err?.message || "Sign In Failed");
    }
  };

  return (
    <>
      <Helmet>
        <title>Job Wave | Sign In</title>
      </Helmet>

      <LazyMotion features={domAnimation}>
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 90,
            damping: 18,
            mass: 0.8,
          }}
          style={{ willChange: "transform, opacity" }}
          className="flex justify-center items-center min-h-[calc(100vh-286px)] p-2 md:px-0"
        >
          <motion.div
            layout
            className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-xl shadow-2xl lg:max-w-4xl"
          >
            {/* Left image */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="hidden bg-cover bg-center lg:block lg:w-1/2"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?auto=format&fit=crop&w=1575&q=80')",
                willChange: "opacity",
              }}
            />

            {/* Right form */}
            <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
              <div className="flex justify-center items-center gap-1 mx-auto">
                <img className="h-10 rounded-md" src={logo} alt="Job Wave" />
              </div>

              <p className="mt-3 text-xl text-center text-gray-600">
                Welcome back!
              </p>

              <SocialLogin />

              <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b lg:w-1/4" />
                <span className="text-xs text-gray-700 uppercase">
                  or login with email
                </span>
                <span className="w-1/5 border-b lg:w-1/4" />
              </div>

              <form onSubmit={handleLogin}>
                <div className="mt-4">
                  <label className="block mb-2 text-sm font-medium text-gray-600">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                  />
                </div>

                <div className="mt-4">
                  <label className="block mb-2 text-sm font-medium text-gray-600">
                    Password
                  </label>
                  <input
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  type="submit"
                  className="w-full mt-6 px-6 py-3 text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-700"
                >
                  Sign In
                </motion.button>
              </form>

              <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b md:w-1/4" />
                <Link
                  to="/sign-up"
                  className="text-xs font-bold text-gray-600 uppercase hover:underline"
                >
                  or sign up
                </Link>
                <span className="w-1/5 border-b md:w-1/4" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </LazyMotion>
    </>
  );
};

export default SignIn;
