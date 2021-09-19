import React from "react";
import Color from "../../assets/Colors";
import RBtn from "../../ReusableCompent/Btn";
import "../../App.css";
function Comp2() {
  return (
    <div
      className="mt-5 ml-4 row "
      style={{
        paddingTop: "20px",
        // display: "",
      }}
    >
      <div className="col-md-6 col-sm-12 row general">
        <p
          // className="col"
          style={{
            fontWeight: "bold",
            fontSize: "calc(100% + 1.5vw + 1vh)",
            // width: "70%",
          }}
        >
          Lightweight, scalable animations
          <span
            className="pl-4"
            style={{
              color: "#8795a1",
            }}
          >
            for your website and apps
          </span>
        </p>
        <p
          className="row col-12 general"
          style={{
            color: "#8795a1",
            width: "76%",
            fontSize: "calc(100% + 0vw + 0.3vh)",

            // backgroundColor: "red",
          }}
        >
          LottieFiles provides all the tools that you need to create, edit, test
          and display Lottie animations.
        </p>
        <div
          className=" general"
          style={{
            width: "100%",
          }}
        >
          <RBtn size={17} className="p-4 btn " w={220}>
            <span className="font-weight-bold">Sign up</span> for free{" "}
            <span>
              <i className="fas fa-arrow-right ml-2 "></i>
            </span>
          </RBtn>
        </div>
      </div>
      <div className=" col-md-6 col-sm-12">annim</div>
    </div>
  );
}

export default Comp2;
