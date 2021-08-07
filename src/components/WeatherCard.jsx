import React from "react";
import "../App.css";

import { useSelector } from 'react-redux'
const WeatherCard = () => {
    const placeData=useSelector(state=>state.placeData)
    console.log("hi",placeData)
  return (
    <div className="container2" >
      <div className="row">
        <div className=" offset-md-4 col-4 offset-md-4 card">
          {placeData.location ? (
            <div className="row whp">
              <div className="col-md-6">
              <div className="place">{placeData.location.name}</div>
              <img style={{width:"200px",height:"150px"}} src={placeData.current.condition.icon} alt="" />
              <div className="desc">{placeData.current.condition.text}</div>
              </div>
              <div className="col-md-6">
              <div className="temp">{placeData.current.temp_c}°C</div>
              </div>
              <div className="container">
              <p style={{fontSize:"20px" , marginTop:"0px"}}>
            <span >Humidity: {placeData.current.humidity}%</span>&nbsp;&nbsp;&nbsp;&nbsp;
            <span >Wind speed: {placeData.current.wind_kph}kmph</span>
            </p>
                <div className="row whp">
                  <div className="col">
                  <img className="time_img" src={placeData.forecast.forecastday[0].hour[1].condition.icon} alt="" />
                  <p style={{marginTop:"-5px"}} >{placeData.forecast.forecastday[0].hour[1].temp_c}°C</p>
                  </div>
                  <div className="col">
                  <img className="time_img" src={placeData.forecast.forecastday[0].hour[6].condition.icon} alt="" />
                  <p style={{marginTop:"-5px"}} >{placeData.forecast.forecastday[0].hour[6].temp_c}°C</p>
                  </div>
                  <div className="col">
                  <img className="time_img" src={placeData.forecast.forecastday[0].hour[11].condition.icon} alt="" />
                  <p style={{marginTop:"-5px"}} >{placeData.forecast.forecastday[0].hour[11].temp_c}°C</p>
                  </div>
                  <div className="col">
                  <img className="time_img" src={placeData.forecast.forecastday[0].hour[16].condition.icon} alt="" />
                  <p style={{marginTop:"-5px"}} >{placeData.forecast.forecastday[0].hour[16].temp_c}°C</p>
                  </div>
                  <div className="col">
                  <img className="time_img" src={placeData.forecast.forecastday[0].hour[21].condition.icon} alt="" />
                  <p style={{marginTop:"-5px"}} >{placeData.forecast.forecastday[0].hour[16].temp_c}°C</p>
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
