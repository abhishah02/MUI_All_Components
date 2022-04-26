import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AdminComponent = () => {
  const authAdmin = localStorage.getItem("Admin-info");

  return authAdmin ? <Outlet /> : <Navigate to="/login" />;
};

export default AdminComponent;
