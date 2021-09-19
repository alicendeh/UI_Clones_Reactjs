import React from "react";

function Footer() {
  return (
    <div
      className="pt-5 pb-3 row d-flex  flex-row-reverse"
      style={{
        color: "#008060",
        // display: "flex",
        // justifyContent: "flex-end",
        width: "85%",
        // backgroundColor: "red",
      }}
    >
      <p
        className="pr-5 col-md-2 col-12 "
        style={{
          fontSize: 16,
        }}
      >
        Terms of Service
      </p>
      <p
        className="col-md-2 col-12   "
        style={{
          fontSize: 16,
        }}
      >
        Privacy Policy
      </p>
    </div>
  );
}

export default Footer;
