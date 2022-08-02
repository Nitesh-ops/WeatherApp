import React from "react";
import "./stylesheets/stylesheets.css";
import Slider from "react-slick";

function Weather({ weatherInfo }) {
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
  const time = new Date().toLocaleTimeString();
  function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var today = [];
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    today.push(date + " " + month);
    today.push(hour + ": 00");
    return today;
  }
  return (
    <>
      <div>
        {Math.round(weatherInfo.current.temp)}
        <span>&#176;</span> || {Math.round(weatherInfo.current.temp) - 2}
        <span>&#176;</span>
        <br />
        <span className="temp">
          {Math.round(weatherInfo.current.temp)}
          &#8451;
        </span>
        <br />
        <div className="grid-container">
          <div className="grid-item1">
            <img
              // src={weatherImage(weatherInfo.current.weather[0].icon)}
              src={"http://openweathermap.org/img/wn/"
                .concat(weatherInfo.current.weather[0].icon)
                .concat("@2x.png")}
              alt="weatherImage"
            />
          </div>
          <div className="grid-item2">
            {weatherInfo.current.weather[0].main}
          </div>
        </div>
        <p>Updated as of {time}</p>
      </div>
      {/* ****************************** Daily Weather****************************** */}
      <div className="dailyInfo">
        <h5> Daily </h5>
        <div className="slide">
          <Slider {...settings} style={{ maxWidth: "350px" }}>
            {weatherInfo.daily.map((dd) => (
              <div key={dd.dt}>
                <p>{timeConverter(dd.dt)[0]}</p>
                <img
                  src={"http://openweathermap.org/img/wn/"
                    .concat(dd.weather[0].icon)
                    .concat("@2x.png")}
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
                <p>{dd.weather[0].description}</p>
              </div>
            ))}
          </Slider>
        </div>
        {/* ****************************** Hourly Weather****************************** */}
        <div className="hourlyInfo">
          <h5> Hourly </h5>
          <div className="slide">
            <Slider {...settings} style={{ maxWidth: "350px" }}>
              {weatherInfo.hourly.slice(0, 23).map((hh) => (
                <div key={hh.dt}>
                  <p>{timeConverter(hh.dt)[1]}</p>
                  <img
                    src={"http://openweathermap.org/img/wn/"
                      .concat(hh.weather[0].icon)
                      .concat("@2x.png")}
                    alt="weatherImage"
                  />
                  <p>
                    {Math.round(hh.temp)}
                    <span>&#176;</span>
                  </p>
                  <p>{hh.weather[0].description}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Weather;
