import React from "react";
import Slider from "react-slick";
import Vertical from "./Vertical";
import Roses from "./Images/flowers/roses.jpg";
import Tulips from "./Images/flowers/tulips.jpg";
import Orchids from "./Images/flowers/orchids.jpg";

const Flowers = () => {
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
                      <img src={Roses} className="img-fluid" alt="Roses" />
                      <div className="text">
                        <h1>Roses</h1>
                      </div>
                    </div>
                    <div className="box">
                      <img src={Tulips} className="img-fluid" alt="Tulips" />
                      <div className="text">
                        <h1>Tulips</h1>
                      </div>
                    </div>

                    <div className="box">
                      <img src={Orchids} className="img-fluid" alt="Orchids" />
                      <div className="text">
                        <h1>Orchids</h1>
                      </div>
                    </div>
                    <div className="box">
                      <img src={Roses} className="img-fluid" alt="Roses" />
                      <div className="text">
                        <h1>Roses</h1>
                      </div>
                    </div>
                    <div className="box">
                      <img src={Tulips} className="img-fluid" alt="Tulips" />
                      <div className="text">
                        <h1>Tulips</h1>
                      </div>
                    </div>
                    <div className="box">
                      <img src={Orchids} className="img-fluid" alt="Orchids" />
                      <div className="text">
                        <h1>Orchids</h1>
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

export default Flowers;
