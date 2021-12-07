import React from "react";

function RCircle({ img }) {
  return (
    <div
      style={{
        width: "50px",
        height: "50px",
        borderRadius: 35,
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={img} width="20" height="20" />
    </div>
  );
}

export default RCircle;
