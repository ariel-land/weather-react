import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="h1-shadow" id="currentCity">
        {props.data.city}
      </h1>
      <h2 id="dateTime">
        <FormattedDate date={props.data.date} />
      </h2>
      <div className="circle-wrapper">
        <div className="row">
          <div className="col-12">
            <div className="today-wrapper">
              <div className="temp-circle-today shadow-sm"></div>
              <div className="row">
                <div className="col-12 text-center">
                  <div className="icon-today">
                    <WeatherIcon code={props.data.icon} />
                  </div>
                </div>
                <WeatherTemperature celsius={props.data.temperature} />
                <div className="col-12">
                  <h4 className="today-condition" id="todayCondition">
                    {props.data.description}
                  </h4>
                </div>
                <div className="humidity col-12" id="humidityElement">
                  Humidity: {props.data.humidity}%
                </div>
                <div className="wind col-12" id="windElement">
                  Wind: {props.data.wind}km/hr
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
