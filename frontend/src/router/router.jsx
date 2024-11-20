
import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Login from "../components/Login";
import Signup from "../components/SignUp";
import Home from "../pages/Home";
import JobDetails from "../pages/Jobdetails";
import MyJobs from "../pages/Myjobs";


const router = createBrowserRouter([
    {
      path: "/",
      element:<App/>,
      children : [
        {path : "/",
          element:<Home/>
          },
          {
            path:"/job/:id",
            element:<JobDetails />,
           },
           {
            path:"/applied-job",
            element:<MyJobs/>
          },
      ]
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/sign-up",
      element:<Signup/>
    },

  ]);

  export default router;