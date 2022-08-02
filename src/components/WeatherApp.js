import React, { useState, useEffect } from "react";
import GetLocation from "./GetLocation";
import axios from "axios";
import { FaRegSun } from "react-icons/fa";
import "./stylesheets/stylesheets.css";
import Weather from "./Weather";

function WeatherApp() {
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
  const location = GetLocation();
  // const { latitude, longitude } = location.coordinates;
  const [loading, setLoading] = useState(true); // Loading state
  const [weatherData1, setWeatherData1] = useState({});
  const [weatherData2, setWeatherData2] = useState({});

  const API_endpoint1 = `https://api.openweathermap.org/data/2.5/weather?`;
  const API_endpoint2 = `https://api.openweathermap.org/data/2.5/onecall?`;
  const API_key = `2a63c27d8ba0b0d14c9e5d59f39ee1ba`;

  useEffect(() => {
    async function getFirstObject() {
      const response = await axios.get(
        `${API_endpoint1}lat=28.4966788&lon=77.0922375&units=metric&appid=${API_key}`
      );
      setWeatherData1(response.data);
    }

    async function getSecondObject() {
      const response = await axios.get(
        `${API_endpoint2}lat=28.4966788&lon=77.0922375&units=metric&appid=${API_key}`
      );
      setWeatherData2(response.data);
      setLoading(false); // Setting the loading state to false after data is set.
      console.log(`${API_endpoint2}lat=28.4966788&lon=77.0922375&units=metric&appid=${API_key}`)
    }
    getFirstObject();
    getSecondObject();
  }, []);

  return (
    <div className="mainDiv">
      <div className="heading">
        <h1>
          <FaRegSun /> Weather
        </h1>
      </div>
      <div>
      {loading ? <p>Loading...</p> :
      (<>
      <div className="weatherInfo">
        {weatherData1.name}
        <br />
         <Weather weatherInfo={weatherData2} />
      </div>
      </>
      )}
      </div>
    </div>
  );
}

export default WeatherApp;
