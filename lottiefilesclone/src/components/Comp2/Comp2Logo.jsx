import React from "react";
import img1 from "../../assets/1.svg";
import img2 from "../../assets/2.svg";
import img3 from "../../assets/3.svg";
import img4 from "../../assets/4.svg";
import img5 from "../../assets/5.svg";
import img6 from "../../assets/6.svg";
import img7 from "../../assets/7.svg";
import img8 from "../../assets/8.svg";
import img10 from "../../assets/10.svg";
import img11 from "../../assets/11.svg";
import img12 from "../../assets/12.svg";
import img13 from "../../assets/13.svg";
import img14 from "../../assets/14.svg";
import img15 from "../../assets/15.svg";
import img16 from "../../assets/16.svg";
import img17 from "../../assets/17.svg";
import img18 from "../../assets/18.svg";
import nike from "../../assets/nike.svg";
import "../../App.css";
function Comp2Logo() {
  const data = [
    {
      name: img1,
    },
    {
      name: img2,
    },
    {
      name: nike,
    },
    {
      name: img3,
    },
    {
      name: img4,
    },
    {
      name: img5,
    },
    {
      name: img6,
    },
    {
      name: img7,
    },
    {
      name: img8,
    },

    {
      name: img10,
    },
    {
      name: img11,
    },
    {
      name: img12,
    },
    {
      name: img13,
    },
    {
      name: img14,
    },
    {
      name: img15,
    },
    {
      name: img16,
    },
    {
      name: img17,
    },
    {
      name: img18,
    },
  ];
  return (
    <div className="pb-5 ">
      <div className="">
        <p
          style={{
            textAlign: "center",
            color: "#606f7b",
          }}
        >
          Used by designers and developers from
          <span className="font-weight-bold ">70,000+ companies </span>
          worldwide
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          // backgroundColor: "red",
        }}
      >
        {data.map((anImg) => (
          <img
            src={anImg.name}
            style={{
              textAlign: "center",
            }}
            className=" mr-5 mt-5 "
            width="80px"
          />
        ))}
      </div>
    </div>
  );
}

export default Comp2Logo;
