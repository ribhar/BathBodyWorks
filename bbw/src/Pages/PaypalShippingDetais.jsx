import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import Footer2 from "../Components/Footer/Footer2";
import MultipleItemsTwo from "../Components/Carousel/TopSliderTwo";
import fontimg from "../Images/fontimg.png";
import { useNavigate } from "react-router-dom";
const PaypalShippingDetais = () => {
  const navigate = useNavigate();
  let finalAmount = JSON.parse(localStorage.getItem("totalAmountKey"));
  //   console.log("finalAmount:", finalAmount);

  const [data, setData] = useState({
    name: "",
    email: "",
    mobile: "",
    country: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    bank: "",
    cardno: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const inputName = e.target.name;
    setData({
      ...data,
      [inputName]: e.target.value,
    });
  };

  const handeSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("customerDetails", JSON.stringify(data));
    navigate("/paypal-success");
    //
    // console.log(document.getElementsById("fname"))

    data.name = "";
    data.email = "";
    data.mobile = "";
    data.country = "";
    data.address = "";
    data.city = "";
    data.state = "";
    data.zip = "";
    data.bank = "";
    data.cardno = "";
    data.expiry = "";
    data.cvv = "";
    setData({
      ...data,
    });
    // console.log(data);
  };

  return (
    <>
      <NavBar />
      <section className="h-[fit-content] m-auto">
        <div>
          <div className="h-[fit-content] p-2">
            <h1 className="text-center font-bold text-[25px] text-[#666666] underline">
              ADD SHIPPING DETAILS
            </h1>
          </div>
        </div>
        <div className="h-[fit-content] w-[955px] m-auto p-3">
          <form>
            <label className="text-[20px] text-[#3075ac] font-semibold">
              Name
            </label>
            <input
              value={data.name}
              onChange={handleChange}
              name="name"
              type="text"
              className="border border-black w-[300px] h-[40px] p-[10px] rounded-[8px] outline-none"
              required
            />
            <br />
            <br />
            <label className="text-[20px] text-[#3075ac] font-semibold">
              Email Address
            </label>
            <input
              value={data.email}
              onChange={handleChange}
              name="email"
              type="email"
              className="border border-black w-[300px] h-[40px] p-[10px] rounded-[8px] outline-none"
              required
            />
            <br />
            <br />
            <label className="text-[20px] text-[#3075ac] font-semibold">
              Mobile Number
            </label>
            <input
              value={data.mobile}
              onChange={handleChange}
              name="mobile"
              type="number"
              className="border border-black w-[300px] h-[40px] p-[10px] rounded-[8px] outline-none"
              required
            />
            <br />
            <br />
            <label className="text-[20px] text-[#3075ac] font-semibold">
              Country
            </label>
            <select
              required
              className="border border-black w-[300px] h-[40px] p-2 rounded-[8px] outline-none"
              onChange={handleChange}
              name="country"
            >
              <option value={data.country}>Select Country</option>
              <option value="in">India</option>
              <option value="us">United States</option>
              <option value="ca">Canada</option>
              <option value="mx">Mexico</option>
            </select>
            <br />
            <br />
            <label className="text-[20px] text-[#3075ac] font-semibold">
              Street Address
            </label>
            <input
              required
              value={data.address}
              onChange={handleChange}
              name="address"
              type="text"
              className="border border-black w-[700px] h-[40px] p-2 rounded-[8px] outline-none"
            />
            <br />
            <br />
            <div className="h-fit flex justify-between">
              <label className="text-[20px] text-[#3075ac] font-semibold">
                City
              </label>
              <label className="text-[20px] text-[#3075ac] font-semibold">
                State / Province
              </label>
              <label className="text-[20px] text-[#3075ac] font-semibold">
                ZIP / Postal code
              </label>
            </div>
            <div className="flex justify-between h-[50px]">
              <input
                required
                value={data.city}
                onChange={handleChange}
                name="city"
                type="text"
                className="border border-black w-[230px] h-[40px] p-[10px] rounded-[8px] outline-none"
              />
              <input
                required
                value={data.state}
                onChange={handleChange}
                name="state"
                type="text"
                className="border border-black w-[260px] h-[40px] p-[10px] rounded-[8px] outline-none"
              />
              <input
                required
                value={data.zip}
                onChange={handleChange}
                name="zip"
                type="text"
                className="border border-black w-[250px] h-[40px] p-[10px] rounded-[8px] outline-none"
              />
            </div>
            <br />
            <br />
            <label className="text-center font-bold text-[25px] text-[#666666] underline">
              CARD DETAILS
            </label>
            <br />
            <label className="text-[20px] text-[#3075ac] font-semibold">
              Bank Name
            </label>
            <input
              required
              value={data.bank}
              onChange={handleChange}
              name="bank"
              type="text"
              className="border border-black w-[300px] h-[40px] p-[10px] rounded-[8px] outline-none"
            />
            <br />
            <br />
            <label className="text-[20px] text-[#3075ac] font-semibold">
              Card Number
            </label>
            <input
              required
              value={data.cardno}
              onChange={handleChange}
              maxLength={"16"}
              name="cardno"
              type="text"
              className="border border-black w-[300px] h-[40px] p-[10px] rounded-[8px] outline-none"
            />
            <br />
            <br />
            <label className="text-[20px] text-[#3075ac] font-semibold">
              Expiry
            </label>
            <input
              required
              value={data.expiry}
              onChange={handleChange}
              name="expiry"
              type="date"
              className="border border-black w-[300px] h-[40px] p-[10px] rounded-[8px] outline-none"
            />
            <br />
            <br />
            <label className="text-[20px] text-[#3075ac] font-semibold">
              CVV
            </label>
            <input
              required
              value={data.cvv}
              onChange={handleChange}
              name="cvv"
              type="password"
              maxLength={"3"}
              className="border border-black w-[300px] h-[40px] p-[10px] rounded-[8px] outline-none"
            />
          </form>
        </div>
      </section>
      <br />
      <br />
      <section className="w-[1196px] h-[308px] m-auto">
        <div>
          <img src={fontimg} alt="" />
        </div>
        <div className="h-[225px]">
          <MultipleItemsTwo></MultipleItemsTwo>
        </div>
      </section>
      {/* section 9 ends */}
      <br />
      {/* section 10 */}
      <section className="w-[1164px] m-auto">
        <div className="p-[20px]">
          <h1 className="text-[28px] text-[#333333] text-center">
            Bath & Body Works
          </h1>
        </div>
        <div className="w-[800px] h-[fit-content] m-auto">
          <p className="text-center text-[16px] text-[#666666] leading-7">
            Bath and Body Works is your go-to place for gifts & goodies that
            surprise & delight. From fresh fragrances to soothing skin care, we
            make finding your perfect something special a happy-memory-making
            experience. Searching for new seasonal creations or your favorite
            discontinued scents? We’ve got you covered there, too. Oh! And while
            you're browsing, shop our latest & greatest selection of lotions,
            soaps and candles!
          </p>
        </div>
      </section>
      <Footer2 />
      <div className="h-[fit-content] w-[fit-content] m-auto absolute top-[1180px] right-[600px] rounded-[20px] p-3">
        <div className="rounded-[20px] h-[fit-content] w-fit m-auto">
          <h1 className="text-center font-bold text-[20px] text-[white]">
            <button
              onClick={handeSubmit}
              className="rounded-[20px] bg-[#3075ac] p-4 font-bold"
            >
              PAY: <span className="text-[white]">${finalAmount}</span>
            </button>
          </h1>
        </div>
      </div>
    </>
  );
};

export default PaypalShippingDetais;
