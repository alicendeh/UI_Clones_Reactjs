import React from "react";
import "../../App.css";
import RCircle from "./RCircle";
import aLogo from "../../assets/app_android.svg";
import apple from "../../assets/app_apple.svg";
import w from "../../assets/app_desktop.svg";
import logo from "../../assets/logoCircle.svg";

function MiddleComp() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        className="item"
        style={{
          width: "650px",
          borderRadius: 350,
          height: "600px",
          display: "flex",
          flexDirection: "row",
          position: "relative",
          justifyContent: "center",
          backgroundColor: "#DAE1E770",
          border: "1px solid #ccc",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
            width: "650px",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: -36,
              // zIndex: 99,
            }}
          >
            <RCircle img={aLogo} />
          </div>
          <div
            style={{
              position: "absolute",
              right: -36,
            }}
          >
            <RCircle img={apple} />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            position: "absolute",
            width: "450px",
            height: "70%",
            borderRadius: 350,
            marginTop: 90,
            backgroundColor: "#DAE1E780",
            border: "1px solid #ccc",
            overflowY: "hidden",
          }}
        >
          <div
            style={{
              padding: 12,
              position: "relative",
              left: -45,
            }}
          >
            <RCircle img={w} />
          </div>
          <div
            style={{
              transform: "translateY(-120px) translateX(-55px)",
              // padding: 12,
            }}
          >
            <RCircle img={w} />
          </div>
          <div
            style={{
              transform: "translateY(120px) translateX(-100px)",
              // padding: 12,
            }}
          >
            <RCircle img={w} />
          </div>
          <div
            style={{
              position: "relative",
              top: -210,
              paddingRight: 12,
            }}
          >
            <RCircle img={w} />
          </div>
          <div
            style={{
              transform: "translateY(200px) translateX(-35px)",
              paddingRight: 25,
            }}
          >
            <RCircle img={w} />
          </div>
          <div
            style={{
              transform: "translateY(-120px) translateX(75px)",
            }}
          >
            <RCircle img={w} />
          </div>
          <div
            style={{
              transform: "translateY(120px) translateX(30px)",
            }}
          >
            <RCircle img={w} />
          </div>
          <div
            style={{
              position: "relative",
              right: -20,
            }}
          >
            <RCircle img={w} />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            position: "absolute",
            width: "15%",
            height: "20%",
            borderRadius: 50,
            marginTop: 220,
            backgroundColor: "#DAE1E770",
            overflowY: "hidden",
          }}
        >
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default MiddleComp;
