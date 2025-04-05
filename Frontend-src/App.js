
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./Components/Header"
import Register from "./Components/Register";
import Login from "./Components/Login";
import Post from "./Components/Post";
import GetData from "./Components/GetData";
import Update from "./Components/Update";
import Delete from "./Components/Delete";
import Error from "./Components/Error";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, 
    errorElement: <Error />,
    children: [
      { path: "/getData", element: <GetData /> }, // GET /getData to show all blogs
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "/Post", element: <Post /> }, // POST /post to create blog
      { path: "/update/:id", element: <Update /> }, // PUT /update/:id
      { path: "/delete/:id", element: <Delete /> }, // DELETE /delete/:id
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
