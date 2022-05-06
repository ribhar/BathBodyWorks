import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import SignUPSignIn from "../Pages/Ritik/SignUpSignIn";
import Contact from "../Pages/Contact";
import Description from "../Pages/Description";
import AllHandSoaps from "../Pages/Ankur/Hand/Hand";
import Cart from "../Pages/Cart";
import PageNotFound from "../Components/PageNotFound";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<SignUPSignIn />} />
        <Route path="/all-hand-soaps" element={<AllHandSoaps />} />
        <Route path="/productDetail" element={<Description />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />

        {/* page not found */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
