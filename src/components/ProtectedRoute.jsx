import { useAuth } from "../Contexts/Auth";
import React from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";

const ProtectedRoute = () => {
  const { session, user } = useAuth();
  const location = useLocation();
  console.log(user);
  console.log(session);
  return session ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
export default ProtectedRoute;
