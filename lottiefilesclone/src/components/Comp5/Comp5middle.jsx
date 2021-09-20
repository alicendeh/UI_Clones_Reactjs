import React from "react";
import C5a1 from "../../assets/C5a.json";
import C5b1 from "../../assets/C5b.json";
import C5c1 from "../../assets/C5c.json";
import Lottie from "react-lottie";
import RBtn from "../../ReusableCompent/Btn";
import Color from "../../assets/Colors";
import Colors from "../../assets/Colors";
function Comp5middle() {
  const C5a = {
    loop: true,
    autoplay: true,
    animationData: C5a1,
  };
  const C5b = {
    loop: true,
    autoplay: true,
    animationData: C5b1,
  };
  const C5c = {
    loop: true,
    autoplay: true,
    animationData: C5c1,
  };
  const DataSet = [
    {
      options: C5a,
      title: "Edit Lottie animations online without a line of code",
      body: "With our drag & drop online editor, you can customize any Lottie animation and download a ready-to-publish file.",
      btnTitle: "Lottie Editor",
    },
    {
      options: C5b,
      title: "Render, share and test right from within Adobe After Effects",
      body: "The LottieFiles plugin for Adobe After Effects lets you go with the flow without leaving the interface, so you can stay in the zone.",
      btnTitle: "Get the plugin",
    },
    {
      options: C5c,
      title: "Integrate Lottie animations in your websites",
      body: "No matter what platform you’re using, it’s easy to embed animations into your website with just a few clicks.",
      btnTitle: "Open Web Player",
    },
  ];
  return (
    <div>
      <div
        className=" row mt-5 pt-5 ml-5 pl-5"
        style={{
          display: "flex",
          borderRadius: 12,
          marginLeft: 15,
        }}
      >
        {DataSet.map((data) => (
          <div
            className="ml-5 col-3 pb-5"
            style={{
              backgroundColor: "white",
              height: 550,
              borderRadius: 18,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              boxShadow: " 0 5px 20px -5px rgb(0 0 0 / 7%)",
            }}
          >
            <Lottie width={100} height={100} options={data.options} />
            <p
              style={{
                color: Colors.heading,
                fontWeight: "bold",
                fontSize: "21px",
                textAlign: "center",
              }}
            >
              {data.title}{" "}
            </p>
            <p
              style={{
                color: Colors.secondary,
                textAlign: "center",
                fontSize: "15px",
              }}
            >
              {data.body}{" "}
            </p>
            <RBtn size={17} bg={Color.headings} className="p-4 btn " w={220}>
              <span className="font-weight-bold">{data.btnTitle} </span>
              <span>
                <i className="fas fa-arrow-right ml-2 "></i>
              </span>
            </RBtn>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comp5middle;
