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
import Neighbor from "./components/NeighborPost.jsx";
import Today from "./components/TodayPost.jsx";
import Visitor from "./components/VisitorPost.jsx";
import BlogHome from "./pages/BlogHome.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <BlogMain /> },
      { path: "/createPost", element: <CreatePost /> },
      { path: "/commentList", element: <CommentList /> },
      { path: "/createComment", element: <CreateComment /> },
      { path: "/Neighbor", element: <Neighbor /> },
      { path: "/Today", element: <Today /> },
      { path: "/Visitor", element: <Visitor /> },
      { path: "/home", element: <BlogHome /> },
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
