import { Navigate, useRoutes } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import NotFound from "./layouts/NotFound";
import Create from "./create/Create";
import Places from "./places/Places";
import Edit from "./edit/Edit";

const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { path: "", element: <Places /> },
        { path: "/create", element: <Create /> },
        { path: "/edit/:id", element: <Edit /> },
      ],
    },
    { path: "/404", element: <NotFound /> },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
};

export default Routes;
