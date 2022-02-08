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
      <div className="container shadow">
        <div className="app-wrapper">
          <div className="weather app">
            <i className="far fa-compass locator" id="currentLocation"></i>
            <form id="search-city-form">
              <input
                type="search"
                id="input-city"
                placeholder=" "
                className="shadow-sm"
                autocomplete="off"
              />
              <input
                type="submit"
                id="submit-city"
                value="Search"
                className="shadow-sm"
              />
            </form>
            <h1 className="h1-shadow" id="currentCity">
              Tokyo
            </h1>
            <h2 id="dateTime">Tue, Feb 8, 2022 15:56</h2>
            <div className="circle-wrapper">
              <div className="row">
                <div className="col-12">
                  <div className="today-wrapper">
                    <div className="temp-circle-today shadow-sm"></div>
                    <div className="row">
                      <div className="col-12 text-center">
                        <img
                          className="icon-today mx-auto"
                          id="iconToday"
                          src="http://openweathermap.org/img/wn/04n@2x.png"
                        ></img>
                      </div>
                      <div className="col-11">
                        <h3 className="temp-celsius-today" id="tempToday">
                          10
                        </h3>
                      </div>
                      <div className="celsius-fahrenheit">°C | °F</div>
                      <div className="col-12">
                        <h4 className="today-condition" id="todayCondition">
                          Cloudy
                        </h4>
                      </div>
                      <div className="humidity col-12" id="humidityElement">
                        Humidity: 76%
                      </div>
                      <div className="wind col-12" id="windElement">
                        Wind: 7km/hr
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                    <span class="weather-foredast-temperature-max">13°</span>
                    <span class="weather-forecast-temperature-min">10°</span>
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
                    <span class="weather-foredast-temperature-max">14°</span>
                    <span class="weather-forecast-temperature-min">11°</span>
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
                    <span class="weather-foredast-temperature-max">15°</span>
                    <span class="weather-forecast-temperature-min">12°</span>
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
                    <span class="weather-foredast-temperature-max">14°</span>
                    <span class="weather-forecast-temperature-min">11°</span>
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
                    <span class="weather-foredast-temperature-max">13°</span>
                    <span class="weather-forecast-temperature-min">10°</span>
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
