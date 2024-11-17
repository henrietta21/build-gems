import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import Mentors from "./Mentors";
import MentorProfile from "./MentorProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/mentors",
    element: <Mentors />,
  },
  {
    path: "/mentors/:id",
    element: <MentorProfile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
