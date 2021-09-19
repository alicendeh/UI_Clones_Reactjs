import React from "react";
import Content1 from "./components/Content1/Main";
import Shape from "./components/Content1/Shape";
import Card from "./components/Content2/Card";
import Brands from "./components/Content2/Brands";
import LastComponent from "./components/Content3/lastComponent";
import Footer from "./components/Content3/Footer";
function App() {
  return (
    <div>
      <Content1 />
      <Shape />
      <Card />
      <Brands />
      <LastComponent />
      <Footer />
    </div>
  );
}

export default App;
