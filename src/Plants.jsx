import React from "react";
import Slider from "react-slick";
import Vertical from "./Vertical";
import Blooming from "./Images/plants/blooming plants.jpg";
import Green from "./Images/plants/green plants.jpg";
import Orchid from "./Images/plants/orchid plants.jpg";

const Plants = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: "unslick",
      },
    ],
  };

  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-11 mx-auto">
              <div className="row">
                <div className="col-md-2 pt-5 pt-lg-0 order-1 order-lg-1">
                  <Vertical />
                </div>
                <div className="col-md-10 pt-2 pt-lg-0 order-2 order-lg-2">
                  <Slider {...settings}>
                    <div className="box">
                      <img
                        src={Green}
                        className="img-fluid"
                        alt="Green Plant"
                      />
                      <div className="text">
                        <h1>Green Plant</h1>
                      </div>
                    </div>
                    <div className="box">
                      <img
                        src={Orchid}
                        className="img-fluid"
                        alt="Orchid Plant"
                      />
                      <div className="text">
                        <h1>Orchid Plant</h1>
                      </div>
                    </div>
                    <div className="box">
                      <img
                        src={Blooming}
                        className="img-fluid"
                        alt="Blooming Plant"
                      />
                      <div className="text">
                        <h1>Blooming Plant</h1>
                      </div>
                    </div>
                    <div className="box">
                      <img
                        src={Green}
                        className="img-fluid"
                        alt="Green Plant"
                      />
                      <div className="text">
                        <h1>Green Plant</h1>
                      </div>
                    </div>
                    <div className="box">
                      <img
                        src={Orchid}
                        className="img-fluid"
                        alt="Orchid Plant"
                      />
                      <div className="text">
                        <h1>Orchid Plant</h1>
                      </div>
                    </div>
                    <div className="box">
                      <img
                        src={Blooming}
                        className="img-fluid"
                        alt="Blooming Plant"
                      />
                      <div className="text">
                        <h1>Blooming Plant</h1>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Plants;
