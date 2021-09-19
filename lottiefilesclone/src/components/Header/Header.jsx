// import React from "react";
// import Logo from "../../assets/logo.svg";

// function Header() {
//   return (
//     <div
//       className="row pt-5 pb-4 "
//       style={{
//         // display: "flex",
//         // backgroundColor: "red",
//         backgroundColor: "#FAFAFA",
//         width: "100vw",
//         justifyContent: "center",
//       }}
//     >
//       <img src={Logo} width="150px" />

//       <div className="d-flex pr-5 pl-3 pt-4 align-items-center justify-content-center">
//         <p
//           style={{
//             color: "#606f7b",
//           }}
//         >
//           Discover
//         </p>
//         <divfontSize
//           className="pt-1 pl-1"
//           style={{
//             height: "100%",
//           }}
//         >
//           <i className="fab fa-facebook"></i>
//         </divfontSize>
//       </div>
//       <div className="d-flex pr-5 pl-5 pt-3 align-items-center justify-content-center">
//         <p
//           style={{
//             color: "#606f7b",
//           }}
//         >
//           Design
//         </p>
//         <div
//           className="pt-1 pl-1"
//           style={{
//             height: "100%",
//           }}
//         >
//           <i className="fab fa-facebook"></i>
//         </div>
//       </div>
//       <div className="d-flex pr-5 pl-5 pt-3 align-items-center justify-content-center">
//         <p
//           style={{
//             color: "#606f7b",
//           }}
//         >
//           Code
//         </p>
//         <div
//           className="pt-1 pl-1"
//           style={{
//             height: "100%",
//           }}
//         >
//           <i className="fab fa-facebook"></i>
//         </div>
//       </div>
//       <div className="d-flex pr-5 pl-5 pt-3 align-items-center justify-content-center">
//         <p
//           style={{
//             color: "#606f7b",
//           }}
//         >
//           Learn
//         </p>
//         <div
//           className="pt-1 pl-1"
//           style={{
//             height: "100%",
//           }}
//         >
//           <i className="fab fa-facebook"></i>
//         </div>
//       </div>
//       <div
//         className="d-flex align-items-center justify-content-center"
//         style={{
//           border: "1px solid #EEF0F2",
//           // borderWidth: "1px",
//           width: 280,
//           display: "flex",
//           borderRadius: 4,
//           boxShadow: " 0 5px 20px -5px rgb(0 0 0 / 7%)",
//         }}
//       >
//         <i className="fab fa-facebook p-2"></i>
//         <input
//           type="text"
//           placeholder="Search for annimations"
//           style={{
//             border: "none",
//             width: "100%",
//             outline: "none",
//             borderRadius: 4,
//             backgroundColor: "#FAFAFA",
//           }}
//         />
//       </div>
//       <div className="mr-5 d-flex align-items-center ml-5">
//         <p
//           style={{
//             color: "#0fccce",
//             fontWeight: "bold",
//           }}
//         >
//           Login
//         </p>
//       </div>
//       <div>
//         <button
//           className="btn text-white "
//           style={{
//             backgroundColor: "#0fccce",
//             width: 85,
//             fontSize: 15,
//           }}
//         >
//           Sign up
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Header;

import React from "react";
import Logo from "../../assets/logo.svg";

function Header() {
  return (
    <div
      className="row pt-5 pb-4 pl-0"
      style={{
        // display: "flex",
        // backgroundColor: "red",
        width: "100vw",
        justifyContent: "center",
      }}
    >
      <img src={Logo} width="170px" />

      <div className="d-flex pr-4 pl-5 pt-4 align-items-center justify-content-center">
        <p
          style={{
            color: "#606f7b",
          }}
        >
          Discover
        </p>
        <div
          className="pt-2 pl-1"
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <i
            class=" pl-2 fas fa-chevron-down"
            style={{
              color: "#606f7b",
              fontSize: 10,
            }}
          ></i>
        </div>
      </div>
      <div className="d-flex pr-5 pl-3 pt-4 align-items-center justify-content-center">
        {" "}
        <p
          style={{
            color: "#606f7b",
          }}
        >
          Design
        </p>
        <div
          className="pt-2 pl-1 "
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <i
            class=" pl-2 fas fa-chevron-down"
            style={{
              color: "#606f7b",
              fontSize: 10,
            }}
          ></i>
        </div>
      </div>
      <div className="d-flex pr-5 pl-3 pt-4 align-items-center justify-content-center">
        {" "}
        <p
          style={{
            color: "#606f7b",
          }}
        >
          Code
        </p>
        <div
          className="pt-2 pl-1"
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <i
            class=" pl-2 fas fa-chevron-down"
            style={{
              color: "#606f7b",
              fontSize: 10,
            }}
          ></i>
        </div>
      </div>
      <div className="d-flex pr-5 pl-3 pt-4 align-items-center justify-content-center">
        <p
          style={{
            color: "#606f7b",
          }}
        >
          Learn
        </p>
        <div
          className="pt-2 pl-1"
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <i
            class=" pl-2 fas fa-chevron-down"
            style={{
              color: "#606f7b",
              fontSize: 10,
            }}
          ></i>
        </div>
      </div>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{
          border: "1px solid #EEF0F2",
          // borderWidth: "1px",
          width: 280,
          display: "flex",
          borderRadius: 4,
          boxShadow: " 0 5px 20px -5px rgb(0 0 0 / 7%)",
        }}
      >
        <i className="fab fa-facebook p-2"></i>
        <input
          type="text"
          placeholder="Search for annimations"
          style={{
            border: "none",
            width: "100%",
            outline: "none",
            borderRadius: 4,
            backgroundColor: "#FAFAFA",
          }}
        />
      </div>
      <div className="mr-5 d-flex align-items-center ml-5">
        <p
          style={{
            color: "#0fccce",
            fontWeight: "bold",
          }}
        >
          Login
        </p>
      </div>
      <div>
        <button
          className="btn text-white "
          style={{
            backgroundColor: "#0fccce",
            width: 85,
            fontSize: 15,
          }}
        >
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Header;
