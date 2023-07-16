import { useAuth } from "../Contexts/Auth";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { session } = useAuth();

  return session ? <Outlet /> : <Navigate to="/login" />;
};
export default ProtectedRoute;
