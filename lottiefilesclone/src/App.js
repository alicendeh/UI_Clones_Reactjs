import React from "react";
import Header from "./components/Header/Header";
import Comp2 from "./components/Comp2/Comp2";
import Comp2Logo from "./components/Comp2/Comp2Logo";
import Comp3 from "./components/Comp3/Comp3";

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
      </div>
    </div>
  );
}

export default App;
