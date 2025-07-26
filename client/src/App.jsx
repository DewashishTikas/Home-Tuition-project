import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import "./App.css";
import Layout from "./Components/Layout";
import { UsersProfile } from "./pages/UsersProfile";
import UserFormSubmitDetails from "./pages/UserFormSubmitDetails";
import AdminMainPage from "./pages/AdminMainPage";

const About = lazy(()=>import("./pages/About"));
const Contact = lazy(()=>import("./pages/Contact"));
const ErrorPage = lazy(()=>import("./Components/ErrorPage"));
const Vacancies = lazy(() => import("./pages/Vacancies"));
const Form = lazy(() => import("./Components/Form"));
const Services = lazy(()=>import("./pages/Services"));
const Career = lazy(()=>import("./pages/Career"));
const Terms = lazy(()=>import("./Components/Terms"));
const AdminLogin = lazy(() => import("./pages/AdminLogin"));
const AdminPost = lazy(() => import("./pages/AdminPost"));


function App() {

 
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/about",
            element: <About />,
          },
          {
            path: "/career",
            element: <Career />,
          },
          {
            path: "/services",
            element: <Services />,
          },
          {
            path: "/contact",
            element: <Contact />,
          },
          {
            path: "/terms&conditons",
            element: <Terms />,
          },
        ],
      },
      {
        path: "/form",
        element: <Form />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/vacancies",
        element: <Vacancies />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/adminLogin",
        element: <AdminLogin />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/adminPost",
        element: <AdminPost />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/usersProfile",
        element: <UsersProfile />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/usersFormDetails",
        element: <UserFormSubmitDetails />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/admin",
        element: <AdminMainPage />,
        errorElement: <ErrorPage />,
      },
    ]); 
    return (
    <RouterProvider router={router}/>
    
  );
}

export default App;
