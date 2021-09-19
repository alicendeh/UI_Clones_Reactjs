import React from "react";
import Color from "../../assets/Colors";
import RBtn from "../../ReusableCompent/Btn";
import "../../App.css";
import Lottie from "react-lottie";
import animationData from "../../lotties/landingPageAnnim.json";

function Comp2() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      // preserveAspectRatio: "xMidYMid slice"
    },
  };
  return (
    <div
      className="mt-5 ml-4 row "
      style={{
        paddingTop: "20px",
      }}
    >
      <div className="col-md-6 col-sm-12 row general">
        <p
          style={{
            fontWeight: "bold",
            fontSize: "calc(100% + 1.5vw + 1vh)",
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
      <div className=" col-md-6 col-sm-12  ">
        <Lottie width={"100%"} height={"90%"} options={defaultOptions} />
      </div>
    </div>
  );
}

export default Comp2;
