import { Navigate, useNavigate } from "react-router-dom";
import { store } from "./app/store";
import { useEffect } from "react";

const ProtectedRoute = ({ children }: any) => {
  const navigate = useNavigate()
  const authenticated = store.getState().auth?.activeUser;

  if (!authenticated) {
    return <Navigate to="/login" />
  }



  return children;
};

export default ProtectedRoute;
