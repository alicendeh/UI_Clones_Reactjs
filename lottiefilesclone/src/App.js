import React from "react";
import Header from "./components/Header/Header";
import Comp2 from "./components/Comp2/Comp2";
import Comp2Logo from "./components/Comp2/Comp2Logo";
import Comp3 from "./components/Comp3/Comp3";
import Comp4 from "./components/Comp4/Comp4";
import Comp5 from "./components/Comp5/Comp5";
import Comp6 from "./components/Comp6/Comp6";
import Comp7 from "./components/Comp7/Comp7";
import Comp8 from "./components/Comp8/Comp8";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#FAFAFA",
      }}
    >
      <Header />
      <div className="container">
        <Comp2 />
        <Comp2Logo />
        <Comp3 />
        <Comp4 />
        <Comp5 />
        <Comp6 />
        <Comp7 />
      </div>
      <Comp8 />
      <div
        style={{
          height: "50vh",
        }}
      ></div>
    </div>
  );
}

export default App;
