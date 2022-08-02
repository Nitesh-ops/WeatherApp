import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaRegSun } from "react-icons/fa";
import "./stylesheets/stylesheets.css";

function WeatherApp1() {
  const [loading, setLoading] = useState(true) // Loading state
  const [weatherData2, setWeatherData2] = useState({});

  const API_endpoint2 = `https://api.openweathermap.org/data/2.5/onecall?`;
  const API_key = `2a63c27d8ba0b0d14c9e5d59f39ee1ba`;

  useEffect(() => {
    async function getSecondObject() {
      const response = await axios.get(
        `${API_endpoint2}lat=28.4360704&lon=77.021184&units=metric&appid=${API_key}`
      );
      setWeatherData2(response.data);
      setLoading(false) // Setting the loading state to false after data is set.
    }
    getSecondObject();
  }, []);

  return (
    <div className="mainDiv">
      <div className="heading">
        <h1>
          <FaRegSun /> Weather
        </h1>
      </div>
       {/* Checking for loading state before rendering the data */}
      {loading ? (
         <p>Loading...</p>
      ) : (
         weatherData2.current.temp            
      )}
    </div>
  );
}

export default WeatherApp1;  