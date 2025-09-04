import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div>
        <h3 className="text-center mx-auto">Loading data.........</h3>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/signIn" state={{ from: location }} replace />;
};

export default PrivateRoute;
