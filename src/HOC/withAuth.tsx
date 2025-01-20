import { ComponentType, useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
export const withAuth = (Component: ComponentType) => (props:any) => {
  const { user } = useContext(AuthContext);

  if (!user) return <p>You are not authorized to view this page</p>;
  return <Component {...props} />;
};
