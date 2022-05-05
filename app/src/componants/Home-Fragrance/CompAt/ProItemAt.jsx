import React from "react";

const ProItemAt = (props) => {
  const { id, pName, pImg, pCat, Amount, Rating } = props;
  return (
    <div>
      <div>
        <img src={pImg} />
        <h4>{pName}</h4>
        <p>{pCat}</p>
        <h3>${Amount}</h3>
        <p>⭐⭐⭐⭐({Rating})</p>
      </div>
    </div>
  );
};

export default ProItemAt;
