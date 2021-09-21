import React from "react";
import "../../App.css";
function MiddleComp() {
  return (
    <div>
      <div
        className="bg-danger item "
        style={{
          width: "180px",
          borderRadius: 100,
          height: "170px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <h5 className=" item1 pr-2">al</h5>
        <h5 className=" item2 pr-2">fr</h5>
        <h5 className=" item3 pr-2">ya</h5>
        <h5 className=" item4 pr-2">mi</h5>
        <h5 className=" item5 pr-2">ob</h5>
        <h5 className=" item6 pr-2">sa</h5>
      </div>
    </div>
  );
}

export default MiddleComp;
