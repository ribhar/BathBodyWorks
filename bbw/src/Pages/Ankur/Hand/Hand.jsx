import React, { useState } from "react";
import NavBar from "../../../Components/NavBar";
import "../Hand/Hand.css";
import { shop_hand_soap } from "./hand_soap";
import Footer2 from "../../../Components/Footer/Footer2";
import { useNavigate } from "react-router-dom";

const AllHandSoaps = () => {
  let navigate = useNavigate();
  const handleClick = (e) => {
    localStorage.setItem("proDesc", JSON.stringify(e));
    navigate("/productDetail");
  };
  
  const [data, setData] = useState(shop_hand_soap);

  const handleChange = (e) => {
    const newData = data.sort((a, b) => {
      if (e.target.value === "lth") {
        return a.Amount - b.Amount;
      } else if (e.target.value === "htl") {
        return b.Amount - a.Amount;
      } else {
        return b.Rating - a.Rating;
      }
    });
    setData([...newData]);
    // console.log('newData:', newData)
  };

  return (
    <div>
      <NavBar />
      {/* Top of the page */}
      <div
        className="flex h-fit justify-between"
        style={{
          border: "2px solid black",
          borderTop: "none",
          borderRight: "none",
          borderLeft: "none",
        }}
      >
        <div className="anTop">
          <h1 className="anTit">6/$27 or 4/$20 Hand Soaps</h1>
        </div>
        <div className="w-[200px] h-fit mt-[20px]">
          <h1 className="text-black font-sans font-semibold text-[18px]">
            Total Products: ({shop_hand_soap.length})
          </h1>
        </div>
      </div>

      {/* Sorting and Filteration */}
      <div className="anSort">
        <select className="anSortBox cursor-pointer" onChange={handleChange}>
          <option value="sortby">SORT BY</option>
          <option value="top">Top Seller</option>
          <option value="lth">Price Low to High</option>
          <option value="htl">Price High to Low</option>
        </select>
        {/* onClick={handelClick} */}
      </div>

      {/* Cards */}
      <div className="anMainCard">
        {data.map((item) => {
          return (
            <div className="anCard" key={item.id}>
              <center>
                <img style={{ height: "200px" }} src={item.pImg} alt="Image" />
                <b className="anBold">{item.category}</b>
                <br />
                <b>{item.name}</b>
                <h4 className="anCat1">{item.category1}</h4>
                <br />
                <h2 className="anAmount">${item.Amount}</h2>
                <button onClick={() => handleClick(item)} className="anButn">
                  VIEW
                </button>
                <h2>⭐⭐⭐⭐ ({item.Rating})</h2>
              </center>
            </div>
          );
        })}
      </div>
      <Footer2 />
    </div>
  );
};

export default AllHandSoaps;
