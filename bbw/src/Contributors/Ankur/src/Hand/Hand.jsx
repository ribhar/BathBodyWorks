import { style } from "@mui/system";
import React, { useEffect, useState } from "react";
import styles from "./hand.module.css";
import { shop_hand_soap } from "./hand_soap";
const Gift = () => {
  const [soap, setSoap] = useState(shop_hand_soap);

  // Sorting : --
  //  useEffect(() => {
  const selectChang = (e) => {
    console.log(e.target.value);
    if (e.target.value === "lth") {
      shop_hand_soap.sort((a, b) => {
        return a.Amount - b.Amount;
      }); // (a.Amount>b.Amount ? -1 :1)
      setSoap(shop_hand_soap);
    }
  };
  //  },[]);

  return (
    <>
      {/* Top of the page */}
      <div className={styles.anTop}>
        <h1>Hand Soap</h1>
      </div>

      {/* Sorting and Filteration */}
      <div className={styles.anSort}>
        SORT BY
        <select className={styles.anSortBox} onChange={selectChang}>
          <option value="">Best Matches</option>
          <option value="lth">Price Low to High</option>
          <option value="htl">Price High to Low</option>
          <option value="pop">Most Popular</option>
          <option value="top">Top Seller</option>
        </select>
        {/* onClick={handelClick} */}
      </div>

      {/* Cards */}
      <div className={styles.anMainCard}>
        {shop_hand_soap.map((item) => {
          return (
            <div className={styles.anCard} key={item.id}>
              <center>
                <img style={{ height: "200px" }} src={item.pImg} alt="Image" />
                <b  className={styles.anBold}>{item.category}</b><br/>
                <b>{item.name}</b>
                <h4 className={styles.anCat1}>{item.category1}</h4><br/>
                <h2 className={styles.anAmount}>${item.Amount}</h2>
                <button>ADD TO BAG</button>
                <h2>{item.Rating}</h2>
                
              </center>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gift;
