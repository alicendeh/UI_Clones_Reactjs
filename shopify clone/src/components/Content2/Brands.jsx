import React from "react";
import image1 from "../../assets/1.png";
import image2 from "../../assets/2.png";
import image3 from "../../assets/3.png";
import image4 from "../../assets/4.png";
import image5 from "../../assets/5.png";
import image6 from "../../assets/6.png";
import image7 from "../../assets/7.png";
import image8 from "../../assets/8.png";

function Brands() {
  return (
    <div
      className="row container-fluid mt-5 pb-5 "
      style={{
        justifyContent: "center",
      }}
    >
      <div
        style={{
          // display: "flex",
          borderTop: "1px solid #d2d5d9",
          borderBottom: "1px solid #d2d5d9",
          paddingTop: 30,
          paddingBottom: 30,
          // width: "70%",
        }}
      >
        <img src={image1} className="pr-5 pt-5 " />
        <img src={image2} className="pr-5 pt-5" />
        <img src={image3} className="pr-5 pt-5" />
        <img src={image4} className="pr-5 pt-5" />
        <img src={image5} className="pr-5 pt-5" />
        <img src={image6} className="pr-3 pt-5" />
        <img src={image7} className="pr-3 pt-5" />
        <img src={image8} />
      </div>
    </div>
  );
}

export default Brands;
