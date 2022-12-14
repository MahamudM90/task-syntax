import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../../Pages/Home/Home/Home";
import LogIn from "../../Pages/LogIn/LogIn";
import SignUp from "../../Pages/SignUp/SignUp";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import PrivateRoute from './../PrivateRoute/PrivateRoute';
import DashboardLayout from './../../layouts/DashboardLayout';
import Dashboard from "../../Pages/Dashboard/Dashboard";
import AdminRoute from './../AdminRoute/AdminRoute';
import Error from "../../Pages/Error/Error";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/",
        element: <PrivateRoute><Home /></PrivateRoute>,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "*",
        element: <Error />,
      } 
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/dashboard",
        element: <AdminRoute><Dashboard></Dashboard></AdminRoute>,
      }
    ]
  }
]);

export default router;
