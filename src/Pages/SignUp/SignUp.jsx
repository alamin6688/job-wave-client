import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../../Components/SocialLogin";
import logo from "../../assets/logo.png";
import toast from "react-hot-toast";
import axios from "axios";
import {
  motion,
  LazyMotion,
  domAnimation,
  useReducedMotion,
} from "framer-motion";

const SignUp = () => {
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  const validatePassword = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
    return regex.test(password);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    if (!validatePassword(password)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Password!",
        text:
          "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.",
      });
      return;
    }

    try {
      const result = await createUser(email, password);
      await updateUserProfile(name, photoURL);

      await axios.post(
        `${import.meta.env.VITE_API_URL}/jwt`,
        { email: result?.user?.email },
        { withCredentials: true },
      );

      toast.success("Sign Up successful!");
      navigate("/", { replace: true });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Sign Up failed!",
        text: error.message,
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Job Wave | Sign Up</title>
      </Helmet>

      <LazyMotion features={domAnimation}>
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : { opacity: 0, y: 30, scale: 0.97 }
          }
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 90,
            damping: 18,
            mass: 0.8,
          }}
          style={{ willChange: "transform, opacity" }}
          className="flex justify-center items-center min-h-[calc(100vh-286px)] my-4 px-2 md:my-12"
        >
          <motion.div
            layout
            className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-xl shadow-2xl lg:max-w-4xl"
          >
            {/* Left Form */}
            <div className="w-full px-6 py-6 md:px-8 lg:w-1/2">
              <div className="flex justify-center items-center gap-1 mx-auto">
                <img className="h-10 rounded-md" src={logo} alt="Job Wave" />
              </div>

              <p className="mt-3 text-xl text-center text-gray-600">
                Get Your Free Account Now!
              </p>

              <SocialLogin />

              <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b lg:w-1/4" />
                <span className="text-xs text-gray-700 uppercase">
                  or register with email
                </span>
                <span className="w-1/5 border-b lg:w-1/4" />
              </div>

              <form onSubmit={handleSignUp}>
                {[
                  { label: "User Name", name: "name", type: "text" },
                  { label: "Photo URL", name: "photoURL", type: "text" },
                  { label: "Email Address", name: "email", type: "email" },
                  { label: "Password", name: "password", type: "password" },
                ].map((field) => (
                  <div key={field.name} className="mt-4">
                    <label className="block mb-2 text-sm font-medium text-gray-600">
                      {field.label}
                    </label>
                    <input
                      name={field.name}
                      type={field.type}
                      required
                      autoComplete={field.name}
                      className="block w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                    />
                  </div>
                ))}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  type="submit"
                  className="w-full mt-6 px-6 py-3 text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-700"
                >
                  Sign Up
                </motion.button>
              </form>

              <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b md:w-1/4" />
                <Link
                  to="/sign-in"
                  className="text-xs font-bold text-gray-600 uppercase hover:underline"
                >
                  or sign in
                </Link>
                <span className="w-1/5 border-b md:w-1/4" />
              </div>
            </div>

            {/* Right Image */}
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
          </motion.div>
        </motion.div>
      </LazyMotion>
    </>
  );
};

export default SignUp;
