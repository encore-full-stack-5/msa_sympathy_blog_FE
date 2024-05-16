import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import BlogMain from "./pages/BlogMain.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import CreatePost from "./pages/CreatePost.jsx";
import CommentList from "./pages/CommentList.jsx";
import CreateComment from "./pages/CreateComment.jsx";
<<<<<<< HEAD

import CommentFullExample from "./pages/CommentFullExample.jsx";

=======
import Neighbor from "./components/NeighborPost.jsx";
import Today from "./components/TodayPost.jsx";
import Visitor from "./components/VisitorPost.jsx";
import BlogHome from "./pages/BlogHome.jsx";
>>>>>>> 380167189f0ec445e08b8a0b49fcbff5b292bd48
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <BlogMain /> },
      { path: "/createPost", element: <CreatePost /> },
      { path: "/commentList", element: <CommentList /> },
      { path: "/createComment", element: <CreateComment /> },
<<<<<<< HEAD
      { path: "/commentEx", element: <CommentFullExample /> },
=======
      { path: "/Neighbor", element: <Neighbor /> },
      { path: "/Today", element: <Today /> },
      { path: "/Visitor", element: <Visitor /> },
      { path: "/home", element: <BlogHome /> },
>>>>>>> 380167189f0ec445e08b8a0b49fcbff5b292bd48
      ,
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
