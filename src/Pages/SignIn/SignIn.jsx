// import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin";

const SignIn = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Signed In successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
    });
  };

  return (
    <>
      <Helmet>
        <title>Job Wave | Sign In</title>
      </Helmet>
      <div className="min-h-[calc(100vh-285px)] flex items-center justify-center bg-base-200 py-10 px-4 md:py-16">
        <div className="hero-content w-full">
          <div className="card w-full max-w-sm shadow-2xl bg-base-100">
            <div className="text-center pt-6">
              <h3 className="text-4xl font-bold">Sign In</h3>
            </div>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt font-semibold link link-hover"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn btn-ghost bg-green-500 hover:bg-green-600 text-xl font-bold text-white"
                  type="submit"
                  value="Sign In"
                />
              </div>
              <div className="text-center mt-4">
                <p className="font-bold text-red-400">
                  <small>
                    Don&apos;t have any account?{" "}
                    <Link to="/sign-up">
                      <span className="underline text-red-600">
                        Sign Up Now
                      </span>
                    </Link>{" "}
                  </small>
                </p>
              </div>
              <SocialLogin></SocialLogin>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
