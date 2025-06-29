import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Components/Home";
import "./App.css";
import Layout from "./Components/Layout";

const About = lazy(()=>import("./Components/About"));
const Contact = lazy(()=>import("./Components/Contact"));
const ErrorPage = lazy(()=>import("./Components/ErrorPage"));
const Form = lazy(()=>import("./Components/Form"));
const Services = lazy(()=>import("./Components/Services"));
const Career = lazy(()=>import("./Components/Career"));
const Terms = lazy(()=>import("./Components/Terms"));


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
    ]); 
    return (
    <RouterProvider router={router}/>
    
  );
}

export default App;
