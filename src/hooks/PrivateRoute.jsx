import React from "react";
import { Navigate, Route } from "react-router-dom";

const isAdmin = true; // 這個變數應根據你的權限系統來確定是否是管理員

const PrivateRoute = ({ element, ...props }) => {
  if (isAdmin) {
    return <Route {...props} element={element} />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
