import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@components/layout/Layout";

const HomePage = React.lazy(() => import("../views/Home.page"));
const NoMatchPage = React.lazy(() => import("../views/NoMatch.page"));

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NoMatchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
