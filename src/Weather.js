import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "2ece6a19f73aa87559a80d60d1245843";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container shadow">
          <div className="app-wrapper">
            <div className="weather app">
              <i className="far fa-compass locator" id="currentLocation"></i>
              <form onSubmit={handleSubmit} id="search-city-form">
                <input
                  type="search"
                  id="input-city"
                  placeholder=" "
                  className="shadow-sm"
                  onChange={handleCityChange}
                />
                <input
                  type="submit"
                  id="submit-city"
                  value="Search"
                  className="shadow-sm"
                />
              </form>
              <WeatherInfo data={weatherData} />

              <div className="weather-forecast" id="forecast">
                <div className="row forecast">
                  <div className="col-2 forecastDay">
                    <div className="weather-forecast-date">Tue</div>
                    <img
                      src="http://openweathermap.org/img/wn/03d@2x.png"
                      alt="temp icon"
                      width="42"
                    ></img>
                    <div
                      className="weather-forecast-tempereatures"
                      id="foreast-temp"
                    >
                      <span className="weather-foredast-temperature-max">
                        13°
                      </span>
                      <span className="weather-forecast-temperature-min">
                        10°
                      </span>
                    </div>
                  </div>
                  <div className="col-2 forecastDay">
                    <div className="weather-forecast-date">Wed</div>
                    <img
                      src="http://openweathermap.org/img/wn/03d@2x.png"
                      alt="temp icon"
                      width="42"
                    ></img>
                    <div
                      className="weather-forecast-tempereatures"
                      id="foreast-temp"
                    >
                      <span className="weather-foredast-temperature-max">
                        14°
                      </span>
                      <span className="weather-forecast-temperature-min">
                        11°
                      </span>
                    </div>
                  </div>
                  <div className="col-2 forecastDay">
                    <div className="weather-forecast-date">Thu</div>
                    <img
                      src="http://openweathermap.org/img/wn/03d@2x.png"
                      alt="temp icon"
                      width="42"
                    ></img>
                    <div
                      className="weather-forecast-tempereatures"
                      id="foreast-temp"
                    >
                      <span className="weather-foredast-temperature-max">
                        15°
                      </span>
                      <span className="weather-forecast-temperature-min">
                        12°
                      </span>
                    </div>
                  </div>
                  <div className="col-2 forecastDay">
                    <div className="weather-forecast-date">Fri</div>
                    <img
                      src="http://openweathermap.org/img/wn/03d@2x.png"
                      alt="temp icon"
                      width="42"
                    ></img>
                    <div
                      className="weather-forecast-tempereatures"
                      id="foreast-temp"
                    >
                      <span className="weather-foredast-temperature-max">
                        14°
                      </span>
                      <span className="weather-forecast-temperature-min">
                        11°
                      </span>
                    </div>
                  </div>
                  <div className="col-2 forecastDay">
                    <div className="weather-forecast-date">Sat</div>
                    <img
                      src="http://openweathermap.org/img/wn/03d@2x.png"
                      alt="temp icon"
                      width="42"
                    ></img>
                    <div
                      className="weather-forecast-tempereatures"
                      id="foreast-temp"
                    >
                      <span className="weather-foredast-temperature-max">
                        13°
                      </span>
                      <span className="weather-forecast-temperature-min">
                        10°
                      </span>
                    </div>
                  </div>
                  <footer>
                    Open-source code by Ariel Lee{" "}
                    <a
                      href="https://github.com/ariel-land/weather-react"
                      target="_blank"
                    ></a>{" "}
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}

//<div className="card-body>">
//   <div className="row city">
//     <div className="col-7 locationCurrent">
//       <h2>
//         <span>{weatherData.city}</span>, <span>JP</span>
//       </h2>
//     </div>
//     <div className="col-5 search-bar text-center">
//       <form>
//         <i className="far fa-compass current-button"></i>
//         <input type="search" placeholder="Enter City" autofocus="on" />
//         <button
//           type="submit"
//           value="search-button"
//           className="search-button"
//         ></button>
//         <i class="fas fa-search"></i>
//       </form>
//     </div>
//   </div>
//   <div className="row dateTime">
//     <div className="col-4 dateTime">
//       {weatherData.date}, {weatherData.day} {weatherData.time}
//     </div>
//     <div className="col-8 dateTime"></div>
//   </div>

//   <div className="row weatherToday">
//     <div className="col-3 todayIcon">🌤</div>

//     <div className="col-3 todayTemp">
//       <span className="tempNow">19</span>
//       °C
//       <span className="divider">|</span>
//       °F
//     </div>
//     <div className="col-5"></div>
//   </div>
//   <p className="todayWeather">
//     <span className="currentWeatherDescription">
//       {weatherData.description}
//     </span>{" "}
//     <br />
//     <span className="currentLow">{weatherData.currentLow}°C</span> |{" "}
//     <span class="currentHigh">{weatherData.currentHigh}°C</span>
//   </p>
// </div>
// <div className="App">
//   <div className="container">
//     <div className="card forecast">
//       <div className="card-body>">
//         <div className="row">
//           <div className="col weekForecast">
//             <strong>Sun</strong> <br />
//             <i className="fas fa-cloud weatherIcons"></i> <br />
//             <span className="weeklyTemp">18/24°C</span>
//           </div>
//           <div className="col weekForecast">
//             <strong>Mon</strong> <br />
//             <i className="fas fa-cloud-showers-heavy weatherIcons"></i>{" "}
//             <br />
//             <span className="weeklyTemp">18/24°C</span>
//           </div>
//           <div className="col weekForecast">
//             <strong>Tue</strong> <br />
//             <i className="fas fa-cloud weatherIcons"></i> <br />
//             <span className="weeklyTemp">18/24°C</span>
//           </div>
//           <div className="col weekForecast">
//             <strong>Wed</strong> <br />
//             <i className="fas fa-cloud-sun weatherIcons"></i> <br />
//             <span className="weeklyTemp">18/24°C</span>
//           </div>
//           <div className="col weekForecast">
//             <strong>Thu</strong> <br />
//             <i className="far fa-sun weatherIcons"></i> <br />
//             <span className="weeklyTemp">18/24°C</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
