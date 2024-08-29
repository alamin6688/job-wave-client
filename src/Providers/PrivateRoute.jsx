import { Navigate, useLocation } from "react-router";
import useAuth from "../Hooks/UseAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div>
          <span className="loading loading-bars loading-lg"></span>
        </div>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/sign-in" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
