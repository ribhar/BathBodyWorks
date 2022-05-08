import React from "react";
import { v4 as uuidv4 } from "uuid";
import paymentsucces from "../Images/paymentsuccess.PNG";
import "../CSS/success.css";

const PaymentSuccess = () => {
  let cD = JSON.parse(localStorage.getItem("customerDetails"));
  // console.log("cD:", cD);
  let amount = JSON.parse(localStorage.getItem("totalAmountKey"));

  if (
    cD.bank == "" ||
    cD.mobile == "" ||
    cD.name == "" ||
    cD.email == "" ||
    cD.address == "" ||
    cD.cardno == "" ||
    cD.city == "" ||
    cD.country == "" ||
    cD.cvv == "" ||
    cD.expiry == "" ||
    cD.state == "" ||
    cD.zip == ""
  ) {
    return (
      <>
        <img
          className="m-auto"
          src="https://www.thecable.ng/wp-content/uploads/2020/11/Transaction-1280x720.jpeg"
          alt="error"
        />
      </>
    );
  } else {
    return (
      <div id="back">
        <section className="w-[500px] h-[720px] m-auto back">
          <div className="h-[fit-content]">
            <img className="h-[130px] m-auto" src={paymentsucces} alt="" />
          </div>
          <div className="h-[30px] mt-[25px] p-6 flex justify-between">
            <div className="w-[fit-content]">
              <h1>Payment Gateway</h1>
            </div>
            <div className="w-[fit-content]">
              <h1>PayPal</h1>
            </div>
          </div>
          <div className="h-[30px] p-6 flex justify-between">
            <div className="w-[fit-content]">
              <h1>Bank</h1>
            </div>
            <div className="w-[fit-content]">
              <h1>{cD.bank}</h1>
            </div>
          </div>
          <div className="h-[30px] p-6 flex justify-between">
            <div className="w-[fit-content]">
              <h1>Name</h1>
            </div>
            <div className="w-[fit-content]">
              <h1>{cD.name}</h1>
            </div>
          </div>
          <div className="h-[30px] p-6 flex justify-between">
            <div className="w-[fit-content]">
              <h1>Mobile</h1>
            </div>
            <div className="w-[fit-content]">
              <h1>{cD.mobile}</h1>
            </div>
          </div>
          <div className="h-[30px] p-6 flex justify-between">
            <div className="w-[fit-content]">
              <h1>Email</h1>
            </div>
            <div className="w-[fit-content]">
              <h1>{cD.email}</h1>
            </div>
          </div>
          <br />
          <br />
          <div className="h-[30px] p-6 flex justify-between">
            <div className="w-[fit-content]">
              <h1 className="text-[#666666] font-bold">Amount Paid</h1>
            </div>
            <div className="w-[fit-content]">
              <h1 className="text-[#666666] font-bold">${amount}</h1>
            </div>
          </div>
          <div className="h-[30px] p-6 flex justify-between">
            <div className="w-[fit-content]">
              <h1>Transaction Id</h1>
            </div>
            <div className="w-[fit-content]">
              <h1>{uuidv4()}</h1>
            </div>
          </div>
        </section>
      </div>
    );
  }
};

export default PaymentSuccess;
