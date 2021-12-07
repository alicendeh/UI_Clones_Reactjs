import React from "react";
import FooterLottie from "../../src/lotties/Fotter.json";
import Lottie from "react-lottie";

function Trail() {
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: FooterLottie,
  };

  return (
    <div className="container ">
      <div className="row">
        <div className="col-md-6 col-12">
          <p className="display-3 font-weight-bold">
            A trending Place for Shopping
          </p>
          <div className="d-md-block d-none ">
            <p className="mt-5  d-md-block d-none ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              doloribus! Quibusdam quo iste debitis similique soluta ad ex ut
              unde facere amet, cupiditate maiores. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Nihil, doloribus! Quibusdam quo iste
              debitis similique soluta ad ex ut unde facere amet, cupiditate
              maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nihil, doloribus! Quibusdam quo iste debitis similique soluta ad
              ex ut unde facere amet, cupiditate maiores.
            </p>
            <button className="btn btn-danger mt-5">click Me</button>
          </div>
        </div>

        <div className="col-md-6 col-12">
          <Lottie width={"100%"} height={"100%"} options={defaultOptions1} />

          <div className=" d-md-none d-block">
            <p className="mt-5 d-md-none d-block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              doloribus! Quibusdam quo iste debitis similique soluta ad ex ut
              unde facere amet, cupiditate maiores. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Nihil, doloribus! Quibusdam quo iste
              debitis similique soluta ad ex ut unde facere amet, cupiditate
              maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nihil, doloribus! Quibusdam quo iste debitis similique soluta ad
              ex ut unde facere amet, cupiditate maiores.
            </p>
            <button className="btn btn-danger mt-5">click Me</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trail;
