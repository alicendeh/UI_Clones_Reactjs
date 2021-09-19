import React from "react";
import image from "../../assets/imoji1.svg";
import image2 from "../../assets/imoji2.svg";
import image3 from "../../assets/imoji3.svg";

function Card() {
  const data = [
    {
      img: image2,
      title: "① Choose & customise a theme ",
      body: "Customize the design of your shop from over thousands of themes. No design experience or programming skills required.",
    },
    {
      img: image,
      title: "② Add products",
      body: "Add your products to the shop. List your eye-catching products with the best photos, price and descriptions.",
    },
    {
      img: image3,
      title: "③ Start selling",
      body: "Set up payments and shipping, and start selling.",
    },
  ];
  return (
    <div
      className="mt-5 pt-5 "
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: 95,
        marginTop: 22,
      }}
    >
      <div
        className="pt-5 mt-5 row"
        style={{
          width: "70%",
          display: "flex",
        }}
      >
        {data.map((aData) => (
          <div
            className="mr-5 mt-5  col-sm-12 col-md-3 col-xs-12"
            style={{
              width: "100%",
              paddingTop: "7%",
            }}
          >
            {/* <h1>logo</h1> */}
            <img src={aData.img} alt="" />
            <h4 style={{}}>{aData.title}</h4>
            <p style={{ color: "#6b7177", lineHeight: 1.5 }}>{aData.body} </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
