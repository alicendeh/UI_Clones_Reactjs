import React from "react";
import "../../App.css";
import Color from "../../assets/Colors";
import AnnimSection from "./AnnimSection";
import LastComp from "./LastComp";
function Comp4() {
  return (
    <div
      className=" d-flex flex-column align-items-center pb-5 mb-5"
      style={{
        paddingTop: "75px",
      }}
    >
      <p
        className="alignment"
        style={{
          color: Color.headings,
          fontSize: "4.5rem",
          fontWeight: "bold",
        }}
      >
        Legendary creators and their creations
      </p>
      <div className="callW">
        <p
          className="alignment"
          style={{
            color: Color.secondary,
            lineHeight: 1.5,
            fontSize: 20,
            fontFamily: "averta_stdregular,Helvetica Neue,Helvetica",
          }}
        >
          Welcome to the largest community of designers and developers using
          Lottie. An extensive, curated library of free assets awaits you.
        </p>
      </div>
      <AnnimSection />
      <LastComp />
    </div>
  );
}

export default Comp4;
