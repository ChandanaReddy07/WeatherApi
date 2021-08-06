import React from "react";
import "../App.css";

import { useSelector } from 'react-redux'
const WeatherCard = () => {
    const placeData=useSelector(state=>state.placeData)
    console.log("hi",placeData)
  return (
    <div className="container">
      <div className="row">
        <div className="card">
          {placeData.location ? (
            <div>
              <img src={placeData.current.condition.icon} alt="" />
              <div className="temp">{placeData.current.temp_c}°</div>
              <div className="desc">{placeData.current.condition.text}</div>
              <div className="place">{placeData.location.name}</div>
              <div className="container">
                <div className="row whp">
                  <div className="col">
                    <div className="title">Wind now</div>
                    <div className="data">
                      {placeData.current.wind_kph}
                      <span className="unit">KM</span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="title">Humidity</div>
                    <div className="data">
                      {placeData.current.humidity}
                      <span className="unit">%</span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="title">Precipitation</div>
                    <div className="data">
                      {placeData.current.precip_in}
                      <span className="unit">%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3"></div>
              <div className="col-3"></div>
            </div>
          ) : (
            <h2>Place not found</h2>
          )}
        </div>
      </div>
    </div>
  );
};
export default WeatherCard;
