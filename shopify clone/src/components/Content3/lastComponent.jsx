import React from "react";

function lastComponent() {
  return (
    <div
      className="mt-5 pt-5 row"
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <div
        className="col-lg-4 col-md-11 col-xs-10"
        style={
          {
            // width: "40%",
          }
        }
      >
        <h4
          style={{
            lineHeight: "2",
            justifyContent: "center",
          }}
        >
          “Shopify is the perfect solution for my ecommerce website, which both
          easy to build and easy to maintain.”
        </h4>
        <h5
          style={{
            textAlign: "center",
          }}
        >
          RIMJHIM HADA, FOUNDER OF AACHHO
        </h5>
        <div
          className="mt-5"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button
            className="text-white p-4 mt-5"
            style={{
              color: "white",
              backgroundColor: "#008060",
              border: "none",
              borderRadius: 4,
              width: 185,
              fontSize: 19,
            }}
          >
            Start free trial
          </button>
        </div>
      </div>
    </div>
  );
}

export default lastComponent;
