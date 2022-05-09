import React from "react";
import styles from "./ProAt.module.css";

const ProItemAt = (props) => {
  const { id, name, pImg, category,category1, Amount, Rating, height, width } = props;
  return (
    <div key={id}>
      <div style={{ textAlign: "center" }}>
        <img
          style={{ height: `${height}px`, width: `${width}px`, margin: "auto" }}
          src={pImg}
          alt={name}
        />
        <h3 style={{ fontSize: "16px", fontWeight: "bold", color: "rgb(42, 196, 243)", marginBottom:"-15px" }}>
          {category}
        </h3>
        <h4 style={{ fontSize: "16px", fontWeight: "bold", marginTop: "10px" }}>
          {name}
        </h4>
        <p>{category1}</p>
        <h3 style={{ fontSize: "16px", fontWeight: "bold", color: "red" }}>
          ${Amount}
        </h3>
        <p>⭐⭐⭐⭐({Rating})</p>
      </div>
      <button className={styles.addToBAt}>VIEW</button>
    </div>
  );
};

export default ProItemAt;
