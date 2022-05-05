import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Search from "../Pages/Search";
import SignUPSignIn from "../Pages/Ritik/SignUpSignIn";
import PageNotFound from "../Components/PageNotFound";

const ArpitMainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/account" element={<SignUPSignIn />} />

        {/* page not found */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default ArpitMainRoutes;