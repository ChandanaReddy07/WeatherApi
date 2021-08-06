import React, { useEffect, useState,useSelector } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/form";
import WeatherCard from "./components/WeatherCard";
import ThemeToggle from "./components/ThemeToggle";




const App = () => {

  return (
    <div className="App">
      <ThemeToggle/>
      <Form/>
      <WeatherCard/>
    </div>
  );
};

export default App;
