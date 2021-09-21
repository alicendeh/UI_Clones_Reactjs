import React from "react";
import Color from "../../assets/Colors";
import "../../App.css";
import MiddleComp from "./MiddleComp";

function Comp6() {
  return (
    <div>
      <div className=" d-flex flex-column align-items-center mt-5 pt-5">
        <p
          className="alignment pb-3"
          style={{
            color: Color.headings,
            fontSize: "3.7rem",
            fontWeight: "bold",
          }}
        >
          Extraordinary performance, epic integrations
        </p>
        <div className="callW ">
          <p
            className="alignment pb-4"
            style={{
              color: Color.secondary,
              lineHeight: 1.5,
              fontSize: 18,
              fontFamily: "averta_stdregular,Helvetica Neue,Helvetica",
            }}
          >
            Lottie works on any device and easily integrates with the tools you
            already use. Do your best work in less time with less hassle.
          </p>
        </div>
        <p
          style={{
            color: Color.main,
          }}
        >
          View all integrations
          <i className="fas fa-arrow-right mt-3  ml-2  "></i>
        </p>
      </div>
      <MiddleComp />
    </div>
  );
}

export default Comp6;
