import axios from "axios";
import useAuth from "./UseAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

let interceptorsAdded = false;

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Only add interceptors once
    if (!interceptorsAdded) {
      interceptorsAdded = true;

      // Request Interceptor
      axiosSecure.interceptors.request.use(
        (config) => {
          config.withCredentials = true;
          return config;
        },
        (error) => Promise.reject(error),
      );

      // Response Interceptor
      axiosSecure.interceptors.response.use(
        (res) => res,
        async (error) => {
          if (
            error.response?.status === 401 ||
            error.response?.status === 403
          ) {
            try {
              await logOut();
            } catch (logoutError) {
              console.error("Logout error:", logoutError);
            }
            navigate("/sign-in");
          }
          return Promise.reject(error);
        },
      );
    }
  }, [logOut, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
