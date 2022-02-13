import axios from "axios";
import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="weather-forecast" id="forecast">
        <div className="row forecast">
          <div className="col-2 forecastDay">
            <WeatherForecastDay data={forecast[0]} />
          </div>
          <footer>
            <a
              href="https://github.com/ariel-land/weather-react"
              rel="noopener noreferrer"
            >
              Open-source code
            </a>{" "}
            by Ariel Lee{" "}
          </footer>
        </div>
      </div>
    );
  } else {
    let apiKey = "2ece6a19f73aa87559a80d60d1245843";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}

{
  /* <div className="col-2 forecastDay">
          <div className="weather-forecast-date">Wed</div>
          <img
            src="http://openweathermap.org/img/wn/03d@2x.png"
            alt="temp icon"
            width="42"
          ></img>
          <div className="weather-forecast-tempereatures" id="foreast-temp">
            <span className="weather-foredast-temperature-max">14°</span>
            <span className="weather-forecast-temperature-min">11°</span>
          </div>
        </div>
        <div className="col-2 forecastDay">
          <div className="weather-forecast-date">Thu</div>
          <img
            src="http://openweathermap.org/img/wn/03d@2x.png"
            alt="temp icon"
            width="42"
          ></img>
          <div className="weather-forecast-tempereatures" id="foreast-temp">
            <span className="weather-foredast-temperature-max">15°</span>
            <span className="weather-forecast-temperature-min">12°</span>
          </div>
        </div>
        <div className="col-2 forecastDay">
          <div className="weather-forecast-date">Fri</div>
          <img
            src="http://openweathermap.org/img/wn/03d@2x.png"
            alt="temp icon"
            width="42"
          ></img>
          <div className="weather-forecast-tempereatures" id="foreast-temp">
            <span className="weather-foredast-temperature-max">14°</span>
            <span className="weather-forecast-temperature-min">11°</span>
          </div>
        </div>
        <div className="col-2 forecastDay">
          <div className="weather-forecast-date">Sat</div>
          <img
            src="http://openweathermap.org/img/wn/03d@2x.png"
            alt="temp icon"
            width="42"
          ></img>
          <div className="weather-forecast-tempereatures" id="foreast-temp">
            <span className="weather-foredast-temperature-max">13°</span>
            <span className="weather-forecast-temperature-min">10°</span>
          </div>
        </div> */
}
