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
import ToyDetails from "../assets/Pages/ToyDetails";
import PrivateRoute from "./PrivateRoute";
import UpdateToyDetails from "../assets/Pages/UpdateToyDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'allToys',
        element: <AllToys></AllToys>
      },
      {
        path: 'myToys',
        element: <MyToys></MyToys>
      },
      {
        path: 'addToy',
        element: <AddToys></AddToys>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: '/toyDetails/:id',
        element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://b7a11-toy-marketplace-server-side-mostafiz1257.vercel.app/toys/${params.id}`)
      },
      {
        path: '/updateDetails/:id',
        element: <UpdateToyDetails></UpdateToyDetails>,
        loader: ({ params }) => fetch(`https://b7a11-toy-marketplace-server-side-mostafiz1257.vercel.app/toys/${params.id}`)
      }
    ]
  },
]);

export default router;