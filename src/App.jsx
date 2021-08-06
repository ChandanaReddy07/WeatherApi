import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/form";
import WeatherCard from "./components/WeatherCard";

const App = () => {

  return (
    <div className="App">
      <Form/>
      <WeatherCard/>
    </div>
  );
};

export default App;
