import React from "react";
import Posts from "../pages/Posts";
import Auth from "../pages/Auth";
import NotFound from "../pages/NotFound";
import { Route, Routes } from "react-router-dom";
import PostPage from "../pages/PostPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Auth />} />
      <Route exact path="/posts" element={<Posts />} />
      <Route exact path="/posts/:id" element={<PostPage />} />
    </Routes>
  );
};

export default AppRouter;
