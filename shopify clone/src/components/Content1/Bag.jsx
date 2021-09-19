import React from "react";
import Bagpack from "../../assets/bagpack.jpg";

function Bag() {
  return (
    <div
      className="pt-5 "
      style={{
        display: "flex",
        justifyContent: "center",
        position: "absolute",
        width: "100%",
      }}
    >
      <img src={Bagpack} width="50%" height="50%" />
    </div>
  );
}

export default Bag;
