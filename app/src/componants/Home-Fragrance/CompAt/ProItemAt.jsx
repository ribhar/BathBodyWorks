import React from "react";
import styles from "./ProAt.module.css";

const ProItemAt = (props) => {
  const { id, pName, pImg, pCat, Amount, Rating } = props;
  return (
    <div>
      <div style={{ textAlign: "center"}}>
        <img
          style={{ height: "350px", width: "240px", margin: "auto" }}
          src={pImg}
          alt={pName}
        />
        <h4 style={{ fontSize: "16px", fontWeight: "bold", marginTop: "10px" }}>
          {pName}
        </h4>
        <p>{pCat}</p>
        <h3 style={{ fontSize: "16px", fontWeight: "bold", color: "red" }}>
          ${Amount}
        </h3>
        <p>⭐⭐⭐⭐({Rating})</p>
      </div>
      <button className={styles.addToBAt}>ADD TO BAG</button>
    </div>
  );
};

export default ProItemAt;
