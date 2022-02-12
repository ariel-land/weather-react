import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showF(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showC(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="temperature">
        <div className="col-11">
          <h3 className="temp-celsius-today" id="tempToday">
            {Math.round(props.celsius)}
          </h3>
        </div>
        <div className="celsius-fahrenheit">
          °C |{" "}
          <a href="/" onClick={showF}>
            °F
          </a>
        </div>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="temperature">
        <div className="col-11">
          <h3 className="temp-celsius-today" id="tempToday">
            {Math.round(fahrenheit)}
          </h3>
        </div>
        <div className="celsius-fahrenheit">
          <a href="/" onClick={showC}>
            °C
          </a>{" "}
          | °F
        </div>
      </div>
    );
  }
}
