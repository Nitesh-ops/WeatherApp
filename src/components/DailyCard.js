import React from "react";
import Slider from "react-slick";

function DailyCard(dailyInfo) {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
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
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
      console.log(dailyInfo)
  return (
    <div className="dailyInfo">
        <h5> Daily </h5>
        <Slider {...settings} style={{ maxWidth: "350px" }}>
          {dailyInfo.daily.map((dd) => (
            <div key={dd.dt}>
              <img
                src="http://openweathermap.org/img/wn/50d@2x.png"
                alt="weatherImage"
              />
              <div className="grid-container">
                <div className="grid-item3">
                  {Math.round(dd.temp.min)}
                  <span>&#176;</span>
                </div>
                <div className="grid-item4">
                  &nbsp;&nbsp;{Math.round(dd.temp.max)}
                  <span>&#176;</span>
                </div>
              </div>
              <p>{dd.weather[0].main}</p>
            </div>
          ))}
        </Slider>
    </div>
  );
}

export default DailyCard;
