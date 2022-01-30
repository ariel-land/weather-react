import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Tokyo",
    date: "Jan 10",
    day: "Mon",
    time: "22:00",
    description: "Clear",
    currentLow: "5",
    currentHigh: "12",
  };

  return (
    <div className="Weather">
      <div className="card-body>">
        <div className="row city">
          <div className="col-7 locationCurrent">
            <h2>
              <span>{weatherData.city}</span>, <span>JP</span>
            </h2>
          </div>
          <div className="col-5 search-bar text-center">
            <form>
              <i className="far fa-compass current-button"></i>
              <input type="search" placeholder="Enter City" autofocus="on" />
              <button
                type="submit"
                value="search-button"
                className="search-button"
              ></button>
              <i class="fas fa-search"></i>
            </form>
          </div>
        </div>
        <div className="row dateTime">
          <div className="col-4 dateTime">
            {weatherData.date}, {weatherData.day} {weatherData.time}
          </div>
          <div className="col-8 dateTime"></div>
        </div>

        <div className="row weatherToday">
          <div className="col-3 todayIcon">🌤</div>

          <div className="col-3 todayTemp">
            <span className="tempNow">19</span>
            <a href="#" className="tempUnit">
              °C
            </a>
            <span className="divider">|</span>
            <a href="#" className="tempUnit">
              °F{" "}
            </a>
          </div>
          <div className="col-5"></div>
        </div>
        <p className="todayWeather">
          <span className="currentWeatherDescription">
            {weatherData.description}
          </span>{" "}
          <br />
          <span className="currentLow">{weatherData.currentLow}°C</span> |{" "}
          <span class="currentHigh">{weatherData.currentHigh}°C</span>
        </p>
      </div>
    </div>
  );
}
