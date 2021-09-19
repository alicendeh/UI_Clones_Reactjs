import React from "react";
import Logo from "../../assets/Logo.png";

function Header() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img src={Logo} width="200px" height="10%" />
    </div>
  );
}

export default Header;
