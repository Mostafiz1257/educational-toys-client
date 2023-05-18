import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../assets/Pages/Home";
import ErrorPage from "../assets/Pages/ErrorPage";
import AllToys from "../assets/Pages/AllToys";
import MyToys from "../assets/Pages/MyToys";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'allToys',
          element:<AllToys></AllToys>
        },
        {
          path:'myToys',
          element:<MyToys></MyToys>
        }
      ]
    },
  ]);

  export default router;