import { Routes as ReactRouterRoutes, Route, Navigate } from "react-router-dom";

import Login from "~/pages/Login.page";

const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/login" element={<Login />} />

      <Route path="*" element={<Navigate replace to="/login" />} />
    </ReactRouterRoutes>
  );
};

export default Routes;
