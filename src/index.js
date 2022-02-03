import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import "./App.css";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

function App() {
  let styles = {
    maxWidth: "40rem",
  };

  return (
    <div className="App">
      <div className="container" style={styles}>
        <Weather />
        <div className="card forecast">
          <div className="card-body>">
            <div className="row">
              <div className="col weekForecast">
                <strong>Sun</strong> <br />
                <i className="fas fa-cloud weatherIcons"></i> <br />
                <span className="weeklyTemp">18/24°C</span>
              </div>
              <div className="col weekForecast">
                <strong>Mon</strong> <br />
                <i className="fas fa-cloud-showers-heavy weatherIcons"></i>{" "}
                <br />
                <span className="weeklyTemp">18/24°C</span>
              </div>
              <div className="col weekForecast">
                <strong>Tue</strong> <br />
                <i className="fas fa-cloud weatherIcons"></i> <br />
                <span className="weeklyTemp">18/24°C</span>
              </div>
              <div className="col weekForecast">
                <strong>Wed</strong> <br />
                <i className="fas fa-cloud-sun weatherIcons"></i> <br />
                <span className="weeklyTemp">18/24°C</span>
              </div>
              <div className="col weekForecast">
                <strong>Thu</strong> <br />
                <i className="far fa-sun weatherIcons"></i> <br />
                <span className="weeklyTemp">18/24°C</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="footer">
        <a href="https://github.com/ariel-land/weather-react">
          Open-source code by Ariel Lee{" "}
        </a>{" "}
      </p>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
