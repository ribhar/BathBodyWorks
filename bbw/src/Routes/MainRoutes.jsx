import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import SignUPSignIn from "../Pages/Ritik/SignUpSignIn";
import Contact from "../Pages/Contact";
import Description from "../Pages/Description";
import AllHandSoaps from "../Pages/Ankur/Hand/Hand";
import Aroma from "../Pages/Ankur/Aroma/Aroma";
import { Can } from "../Pages/Shivani/Candles/Can";
import Cart from "../Pages/Cart";
import Gift from "../Pages/Ankur/Gift/Gift";
import { ALLShop_body } from "../Pages/Shivani/ShopBody/Shop_body";
import { ShopWallFlowers } from "../Pages/Shivani/WallFlowers/Wall";
import PaypalShippingDetais from "../Pages/PaypalShippingDetais";
import Codshippingdetails from "../Pages/Codshippingdetails";
import PaymentSuccess from "../Pages/payPalPaymentSuccess";
import CodSuccess from "../Pages/CodSuccess";
import F_Q from "../Pages/Atanu/About and FAQ/FAQ";
import About from "../Pages/Atanu/About and FAQ/About";
import TopOffer from "../Pages/Atanu/Top Offers/TopOffers";
import CandlesAt from "../Pages/Atanu/Home fragrance/Componant-Home/CandlesAt";
import WallFlowersAt from "../Pages/Atanu/Home fragrance/Componant-Home/WallFlowersAt";
import CarFragAt from "../Pages/Atanu/Home fragrance/Componant-Home/CarFragrance";
import NewHoFragAt from "../Pages/Atanu/Home fragrance/Componant-Home/NewHomeFragranceAt";
import RoomSpraysAt from "../Pages/Atanu/Home fragrance/Componant-Home/RoomSpraysAt";
import HomeFragrance from "../Pages/Atanu/Home fragrance/HomeFragrance";
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
        <Route path="/all-candles" element={<Can />} />
        <Route path="/body-care" element={<ALLShop_body />} />
        <Route path="/all-wallflowers" element={<ShopWallFlowers />} />
        <Route path="/productDetail" element={<Description />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/paypal" element={<PaypalShippingDetais />} />
        <Route path="/paypal-success" element={<PaymentSuccess />} />
        <Route path="/cod" element={<Codshippingdetails />} />
        <Route path="/cod-success" element={<CodSuccess />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/faq" element={<F_Q />} />
        <Route path="/topoffers" element={<TopOffer />} />
        <Route path="/wallflowersAt" element={<WallFlowersAt />} />
        <Route path="/carfragranceAt" element={<CarFragAt />} />
        <Route path="/allcandlesAt" element={<CandlesAt />} />
        <Route path="/newhomefrag" element={<NewHoFragAt />} />
        <Route path="/roomsprays" element={<RoomSpraysAt />} />
        <Route path="/homefragrance_At" element={<HomeFragrance />} />
        <Route path="/contact" element={<Contact />} />

        {/* page not found */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
