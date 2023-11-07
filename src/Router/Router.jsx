import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Ragister/Register";
import JobDetails from "../Pages/JobDetails/JobDetails";
import MyBids from "../Pages/MyBids/MyBids";
import Addjob from "../Pages/Addjob/Addjob";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
      {
        path: "/mybids",
        element: <MyBids></MyBids>,
      },
      {
        path: "/addjob",
        element: <Addjob></Addjob>,
      },
    ],
  },
]);

export default router;
