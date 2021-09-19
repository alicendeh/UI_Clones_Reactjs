import React from "react";
import Header from "./components/Header/Header";
import Comp2 from "./components/Comp2/Comp2";

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
      </div>
    </div>
  );
}

export default App;
