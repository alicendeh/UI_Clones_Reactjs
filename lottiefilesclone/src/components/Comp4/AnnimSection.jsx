import React from "react";
import Lottie from "react-lottie";
import elem1 from "../../lotties/Comp4a.json";
import elem2 from "../../lotties/Comp4b.json";
import elem3 from "../../lotties/Comp4c.json";
import elem4 from "../../lotties/Comp4d.json";
import elem5 from "../../lotties/Comp4e.json";
import elem6 from "../../lotties/Comp4f.json";
import elem7 from "../../lotties/Comp4g.json";
import A1 from "../../assets/Avater1.jpg";
import A2 from "../../assets/Avater2.jpg";
import A3 from "../../assets/Avater3.jpg";
import A4 from "../../assets/A4.jpg";
import A6 from "../../assets/A6.jpg";
import A7 from "../../assets/A7.jpg";
import Colors from "../../assets/Colors";
import "../../App.css";

function AnnimSection() {
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: elem1,
  };
  const defaultOptionsb = {
    loop: true,
    autoplay: true,
    animationData: elem2,
  };
  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: elem3,
  };
  const defaultOptions4 = {
    loop: true,
    autoplay: true,
    animationData: elem4,
  };
  const defaultOptions5 = {
    loop: true,
    autoplay: true,
    animationData: elem5,
  };
  const defaultOptions6 = {
    loop: true,
    autoplay: true,
    animationData: elem6,
  };
  const defaultOptions7 = {
    loop: true,
    autoplay: true,
    animationData: elem7,
  };
  return (
    <div
      className="  p-5 AllAnim"
      style={{
        display: "flex",
      }}
    >
      <div className="mr-3 AllAnim  ">
        <div
          className="p-3 mb-3 custom"
          style={{
            backgroundColor: "white",
            borderRadius: 10,
          }}
        >
          <Lottie width={150} height={150} options={defaultOptions1} />
          <div
            style={{
              borderRadius: 50,
              width: "30px",
              height: "30px",
            }}
          >
            <img src={A1} width="30" height="30" />
          </div>
        </div>
        <div
          className="p-3 custom"
          style={{
            backgroundColor: "white",
            borderRadius: 10,
          }}
        >
          <Lottie width={150} height={150} options={defaultOptionsb} />
          <div
            style={{
              borderRadius: 50,
              width: "30px",
              height: "30px",
            }}
          >
            <img src={A2} width="30" height="30" />
          </div>
        </div>
      </div>
      <div
        className="mr-3 div "
        style={{
          display: "row",
        }}
      >
        <div
          className="p-3 mb-3 custom"
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            // height: 410,
            // width: 350,
          }}
        >
          <div
            style={{
              backgroundColor: "#b8c2cc",
              width: "130px",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p className="text-white ">PICK OF THE DAY</p>
          </div>
          <Lottie width={350} height={320} options={defaultOptions3} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  borderRadius: 50,
                  width: "30px",
                  height: "30px",
                }}
              >
                <img src={A3} width="30" height="30" />
              </div>
              <p className="pt-3 pl-2">Alice Ndeh</p>
            </div>
            <p
              style={{
                color: Colors.secondary,
              }}
            >
              26.59kB
            </p>
          </div>
        </div>
      </div>
      <div
        className="mr-3 AllAnim"
        style={{
          display: "row",
        }}
      >
        <div
          className="p-3 mb-3 AllAnim custom"
          style={{
            backgroundColor: "white",
            borderRadius: 10,
          }}
        >
          <Lottie width={150} height={150} options={defaultOptions4} />
          <div
            style={{
              borderRadius: 50,
              width: "30px",
              height: "30px",
            }}
          >
            <img src={A4} width="30" height="30" />
          </div>
        </div>
        <div
          className="p-3 "
          style={{
            // backgroundColor: "red",
            borderRadius: 10,
            // width: "100%",
          }}
        >
          <Lottie width={150} height={150} options={defaultOptions5} />
          <div
            style={{
              borderRadius: 50,
              width: "30px",
              height: "30px",
            }}
          >
            <img src={A6} width="30" height="30" />
          </div>
        </div>
      </div>
      <div
        className=""
        style={{
          display: "row",
        }}
      >
        <div
          className="p-3 mb-3"
          style={{
            backgroundColor: "white",
            borderRadius: 10,
          }}
        >
          <Lottie width={150} height={150} options={defaultOptions6} />
          <div
            style={{
              borderRadius: 50,
              width: "30px",
              height: "30px",
            }}
          >
            <img src={A3} width="30" height="30" />
          </div>
        </div>
        <div
          className="p-3"
          style={{
            backgroundColor: "white",
            borderRadius: 10,
          }}
        >
          <Lottie width={150} height={150} options={defaultOptions7} />
          <div
            style={{
              borderRadius: 50,
              width: "30px",
              height: "30px",
            }}
          >
            <img src={A7} width="30" height="30" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnnimSection;
