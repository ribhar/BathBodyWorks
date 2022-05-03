import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import PageNotFound from "../Components/PageNotFound";

const ArpitMainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* page not found */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default ArpitMainRoutes;
