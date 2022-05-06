import React from "react";
import NavBar from "../Components/NavBar";
import Footer2 from "../Components/Footer/Footer2";
import { Link } from "react-router-dom";
import paypal from "../Images/paypal.png";
import shippingpick from "../Images/shippingpick.PNG";
import close from "../Images/close.png";

const Cart = () => {
  let cartItems = JSON.parse(localStorage.getItem("cartProducts"));
  console.log("cartItems:", cartItems);
  if (cartItems == null) {
    return (
      <>
        <NavBar />
        <div className="p-[20px]">
          <Link to={"/"}>
            <h1>
              <i
                className="bx bx-left-arrow-alt"
                style={{ color: "#7a7575", fontSize: "12px" }}
              ></i>{" "}
              <span className="text-[#7a7575] underline text-[12px]">
                CONTINUE SHOPPING
              </span>
            </h1>
          </Link>
        </div>
        <section className="h-[fit-content] w-[955px] m-auto">
          <div className="h-[42px]" style={{ borderBottom: "2px solid black" }}>
            <h1 className="text-center text-[22px] text-[#333333]">
              Your Shopping Bag is Empty
            </h1>
          </div>
          <div className="mt-[35px] h-[35px] w-[200px] m-auto">
            <Link to={"/"}>
              <button
                className="h-full w-full bg-[#333333] text-[14px] text-white hover:bg-[#e5e5e5] hover:text-black"
                style={{ transition: ".3s ease-in" }}
              >
                CONTINUE SHOPPING
              </button>
            </Link>
          </div>
        </section>
        <Footer2 />
      </>
    );
  } else {
    return (
      <>
        <NavBar />
        <div className="p-[20px]">
          <Link to={"/"}>
            <h1>
              <i
                className="bx bx-left-arrow-alt"
                style={{ color: "#7a7575", fontSize: "12px" }}
              ></i>{" "}
              <span className="text-[#7a7575] underline text-[12px]">
                CONTINUE SHOPPING
              </span>
            </h1>
          </Link>
        </div>
        <section className="h-[fit-content] w-[955px] m-auto">
          <div className="h-[42px]" style={{ borderBottom: "2px solid black" }}>
            <h1 className=" text-[22px] text-[#333333]">Shopping Bag</h1>
          </div>
        </section>
        <section className="w-[955px] h-[fit-content] m-auto mt-5">
          <div className="h-[55px] flex justify-between">
            <div className="w-[200px] p-[8px]">
              <h1 className="text-[16px] text-[#333333]">
                ITEMS IN SHOPPING BAG
              </h1>
            </div>
            <div
              className="w-[180px] h-[40px] ml-[340px] mt-1"
              style={{ borderRadius: "6px" }}
            >
              <Link to={"/paypal"}>
                <button
                  className="h-full w-full bg-yellow-400 hover:bg-[#e5e5e5]"
                  style={{ borderRadius: "6px", transition: ".2s ease-in" }}
                >
                  <img className="h-[20px] m-auto" src={paypal} alt="paypal" />
                </button>
              </Link>
            </div>
            <div
              className="w-[180px] h-[40px] mt-1"
              style={{ borderRadius: "6px" }}
            >
              <Link to={"/paymnetform"}>
                <button
                  className="h-full w-full"
                  style={{
                    borderRadius: "6px",
                    transition: ".2s ease-in",
                    backgroundColor: "green",
                  }}
                >
                  <i className="bx bxs-lock " style={{ color: "#ffff" }}></i>{" "}
                  <span className="text-white font-semibold">CHECKOUT</span>
                </button>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-[955px] m-auto mt-2 h-[fit-content] p-1 bg-[whitesmoke]">
          <div className="w-fit m-auto">
            <h1 className="text-black text-center font-bold">
              YOUR SHIPPING AND PICKUP CHOICES
            </h1>
          </div>
        </section>
        <section
          className="w-[955px] m-auto h-[90px] flex items-center justify-center"
          style={{ borderBottom: "3px solid #e5e5e5" }}
        >
          <div className="w-[200px] h-[70px]">
            <div className="w-fit flex">
              <div className="h-fit mt-[25px]">
                <span className="text-center">
                  <img
                    src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1651830360721/images/svg-icons/bopis-shipping.svg?yocs=o_s_"
                    alt="shipping icon"
                  />
                </span>
              </div>
              <div className="ml-[5px] h-fit w-fit mt-[20px]">
                <span className="text-[13.5px] text-[#005699]">
                  <span className="font-bold">{cartItems.length}</span> Item
                  added for <span className="font-bold">Shipping</span>
                </span>
              </div>
            </div>
          </div>
          <div
            className="w-[220px] h-[70px]"
            style={{ borderLeft: "3px solid #e5e5e5" }}
          >
            <img className="h-full w-full" src={shippingpick} alt="" />
          </div>
        </section>
        <section className="w-[955px] m-auto mt-4 h-[fit-content] p-1 bg-[whitesmoke] flex justify-between">
          <div className="w-fit">
            <h1 className="text-black text-center font-semibold">ITEM</h1>
          </div>
          <div className="w-fit">
            <h1 className="text-black text-center font-semibold">PRICE</h1>
          </div>
          <div className="w-fit">
            <h1 className="text-black text-center font-semibold">QTY</h1>
          </div>
          <div className="w-fit">
            <h1 className="text-black text-center font-semibold">
              TOTAL PRICE
            </h1>
          </div>
        </section>
        {cartItems.map((items) => {
          return (
            <section
              key={items.id}
              className="w-[955px] m-auto h-[fit-content] flex p-5"
              style={{ borderBottom: "1.5px solid black" }}
            >
              <div className="h-[170px] w-[150px]">
                <img
                  className="h-[170px] w-[150px] p-2"
                  src={items.pImg}
                  alt=""
                />
              </div>
              <div className="w-[150px] h-[fit-content]">
                <div className="h-[fit-content] p-2">
                  <h1 className="text-[#333333] text-[16px]">{items.name}</h1>
                </div>
                <div className="h-[fit-content] p-1">
                  <h1 className="text-[#666666] text-[10px]">
                    {items.category1}
                  </h1>
                </div>
              </div>
              <div className="w-[86px] h-[fit-content] p-2">
                <h1 className="text-center">$ {items.Amount}</h1>
              </div>
              <div className="border border-red-600 h-[65px] w-[130px] ml-[140px]"></div>
              <div className="w-[70px]  h-[fit-content] ml-[220px]">
                <h1 className="text-center">$ {items.Amount}</h1>
              </div>
              <div className="mt-1 w-[15px] ml-[5px] h-[15px]">
                <img className="cursor-pointer" src={close} alt="" />
              </div>
            </section>
          );
        })}
        <section
          className="w-[955px] m-auto mt-20 h-[fit-content] flex justify-end p-4"
          style={{ borderTop: "1px solid #e5e5e5" }}
        >
          <div className="w-[500px] h-[300px] bg-[whitesmoke]"></div>
        </section>
        <Footer2 />
      </>
    );
  }
};

export default Cart;
