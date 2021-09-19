import React from "react";
import Header from "./Header";
import MiddleContent from "./MiddleContent";
import BagPack from "./Bag";
function Main() {
  return (
    <div
      style={{
        backgroundColor: "#358160",
        width: "100%",
      }}
    >
      <Header />
      <MiddleContent />
      <BagPack />
    </div>
  );
}

export default Main;
