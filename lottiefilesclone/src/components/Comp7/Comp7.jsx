import React from "react";
import Color from "../../assets/Colors";
import duolingocard from "../../assets/duolingo-card.png";
// import DisneyText from "../../assets/showcase-disneynow-logo.svg";
import DisneyNow from "../../assets/showcase-disneynow-logo.svg";
import Disney from "../../assets/disneynow.png";
import headspace from "../../assets/headspace.png";

function Comp7() {
  return (
    <div>
      <div className=" d-flex flex-column align-items-center mt-5 pt-5">
        <p
          className="alignment pb-3"
          style={{
            color: Color.headings,
            fontSize: "4.3rem",
            fontWeight: "bold",
          }}
        >
          Lottie is everywhere
        </p>
        <div className="callW ">
          <p
            className="alignment pb-4"
            style={{
              color: Color.secondary,
              lineHeight: 1.5,
              fontSize: 18,
              fontFamily: "averta_stdregular,Helvetica Neue,Helvetica",
            }}
          >
            Read user stories from the individuals and teams that use Lottie to
            boost conversions and engage users with powerful motion design
            experiences.
          </p>
        </div>
        <p
          style={{
            color: Color.main,
          }}
        >
          View showcases
          <i className="fas fa-arrow-right mt-3  ml-2  "></i>
        </p>
      </div>
      <div className="row ">
        <div className="col-md-4 col-sm-12  mt-4">
          <div
            className=" pr-4 "
            style={{
              width: "95%",
              backgroundColor: "rgb(36, 88, 192)",
              borderRadius: 21,
              height: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row-reverse",
              }}
            >
              <img src={DisneyNow} alt="" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <img src={Disney} height="" width="120vw" />
            </div>
            <div>
              <p
                className=" pl-4 pt-4"
                style={{
                  fontWeight: "bold",
                  color: "white",
                  fontSize: 19,
                }}
              >
                "By leveraging Lottie animations, we can provide a whole
                experience"
              </p>
            </div>
            <div
              className="mt-3"
              style={{
                display: "flex",
                flexDirection: "row-reverse",
              }}
            >
              <p
                style={{
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                View showcase
                <span>
                  <i className="fas fa-arrow-right mt-2  ml-2  "></i>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-md-7  col-sm-12 mt-4"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className="row pl-3">
            <div className="col-md-6 col-sm-12">
              <img
                src={duolingocard}
                height="180px "
                width="95%"
                className="mb-2 mt-2"
                style={{
                  boxShadow:
                    "0 4px 8px 0 rgb(0 0 0 / 12%), 0 2px 4px 0 rgb(0 0 0 / 8%)",
                }}
              />
            </div>
            <div className="col-md-6 col-sm-12 mt-5 ">
              <p
                className="font-weight-bold"
                style={{
                  fontSize: 17,
                  color: "#3d4852",
                }}
              >
                "Lottie annimations help us keep users emgaged, delighted, and
                always learning"
              </p>
              <p
                style={{
                  color: Color.secondary,
                }}
              >
                View showcases
                <i className="fas fa-arrow-right mt-3  ml-2  "></i>
              </p>
            </div>
          </div>
          <div className="row mt-5 pl-3">
            <div className="col-md-6 col-sm-12">
              <img
                src={headspace}
                height="180px "
                width="95%"
                className="mb-2 mt-2"
                style={{
                  borderRadius: 11,
                  boxShadow:
                    "0 4px 8px 0 rgb(0 0 0 / 12%), 0 2px 4px 0 rgb(0 0 0 / 8%)",
                }}
              />
            </div>
            <div className="col-md-6 col-sm-12 mt-5 ">
              <p
                className="font-weight-bold"
                style={{
                  fontSize: 17,
                  color: "#3d4852",
                }}
              >
                "Embracing Lottie animations allows me to deepen otherwise
                static graphics into moments of joy."
              </p>
              <p
                style={{
                  color: Color.secondary,
                }}
              >
                View showcases
                <i className="fas fa-arrow-right mt-3  ml-2  "></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comp7;
