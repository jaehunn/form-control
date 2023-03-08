import { Routes as ReactRouterRoutes, Route, Navigate } from "react-router-dom";

import Login from "~/pages/Login.page";
import SignUp from "~/pages/SignUp.page";

const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />

      <Route path="*" element={<Navigate replace to="/sign-up" />} />
    </ReactRouterRoutes>
  );
};

export default Routes;
