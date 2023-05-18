import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../assets/Pages/Home";
import ErrorPage from "../assets/Pages/ErrorPage";
import AllToys from "../assets/Pages/AllToys";
import MyToys from "../assets/Pages/MyToys";
import AddToys from "../assets/Pages/AddToys";
import Blog from "../assets/Pages/Blog";
import Login from "../assets/Pages/Login";
import Register from "../assets/Pages/Register";

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
        },
        {
          path:'addToy',
          element:<AddToys></AddToys>
        },
        {
          path:'blog',
          element:<Blog></Blog>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'register',
          element:<Register></Register>
        }
      ]
    },
  ]);

  export default router;