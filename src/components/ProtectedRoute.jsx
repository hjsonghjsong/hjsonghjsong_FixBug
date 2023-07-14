import React from "react";
import { Route, Router, Navigate } from "react-router-dom";
import { useAuth } from "../Contexts/Auth";

// function ProtectedRoute({ component: Component, ...rest }) {
//   const { session } = useAuth();
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         session ? (
//           <Component {...props} />
//         ) : (
//           <Navigate to="/login" replace={true} />
//         )
//       }
//     />
//   );
// }

function ProtectedRoute({ children }) {
  const { session } = useAuth();
  return session ? children : <Navigate to="/login" replace={true} />;
}

export default ProtectedRoute;
