import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import SignUPSignIn from "../Pages/Ritik/SignUpSignIn";
import Contact from "../Pages/Contact";
import Description from "../Pages/Description";
import AllHandSoaps from "../Pages/Ankur/Hand/Hand";
import Aroma from "../Pages/Ankur/Aroma/Aroma";
import Cart from "../Pages/Cart";
import Gift from "../Pages/Ankur/Gift/Gift";
import PaypalShippingDetais from "../Pages/PaypalShippingDetais";
import Codshippingdetails from "../Pages/Codshippingdetails";
import PaymentSuccess from "../Pages/payPalPaymentSuccess";
import CodSuccess from "../Pages/CodSuccess";
import PageNotFound from "../Components/PageNotFound";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<SignUPSignIn />} />
        <Route path="/all-hand-soaps" element={<AllHandSoaps />} />
        <Route path="/aromatherapy" element={<Aroma />} />
        <Route path="/gift-sets" element={<Gift />} />
        <Route path="/productDetail" element={<Description />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/paypal" element={<PaypalShippingDetais />} />
        <Route path="/paypal-success" element={<PaymentSuccess />} />
        <Route path="/cod" element={<Codshippingdetails />} />
        <Route path="/cod-success" element={<CodSuccess />} />
        <Route path="/contact" element={<Contact />} />

        {/* page not found */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
