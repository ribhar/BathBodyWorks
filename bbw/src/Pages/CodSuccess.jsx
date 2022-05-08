import React from "react";
import NavBar from "../Components/NavBar";
import requiredfileds from "../Images/requiredfileds.png";
import box from "../Images/box.PNG";

const CodSuccess = () => {
  let cD = JSON.parse(localStorage.getItem("customerDetails"));
//   console.log("cD:", cD);

  if (
    cD.mobile == "" ||
    cD.name == "" ||
    cD.email == "" ||
    cD.address == "" ||
    cD.city == "" ||
    cD.country == "" ||
    cD.state == "" ||
    cD.zip == ""
  ) {
    return (
      <div>
        <NavBar />
        <br />
        <section>
          <img className="m-auto" src={requiredfileds} alt="" />
        </section>
      </div>
    );
  } else {
    return (
      <div>
        <NavBar />
        <section className="m-auto border h-[500px] bg-[#ccf0d2]">
          <div className="flex border w-fit m-auto justify-center bg-[#ccf0d2] mt-20">
            <div>
              <img src={box} alt="" />
            </div>
            <div className="border border-red-500 h-fit w-[300px] mt-6 rounded-[20px] p-5 bg-white">
              <h1>
                Hello, {cD.name}. Thanks for purchasing from Bath & Body Works.
                Your Order has been Created Successfully.
              </h1>
              <br />
              <h1>and will be delieverd in 7 working days</h1>
            </div>
          </div>
        </section>
      </div>
    );
  }
};

export default CodSuccess;
