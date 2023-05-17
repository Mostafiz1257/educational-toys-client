import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../assets/Pages/Home";
import ErrorPage from "../assets/Pages/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
      ]
    },
  ]);

  export default router;