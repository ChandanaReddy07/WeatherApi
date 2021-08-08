import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/form";
import WeatherCard from "./components/WeatherCard";
import ThemeToggle from "./components/ThemeToggle";
import { useSelector } from 'react-redux'

const App = () => {
  const theme=useSelector(state=>state.theme)
  return (
    <div className={theme?"App":"App dark"} >
      <ThemeToggle/>
      <Form/>
      <WeatherCard/>
    </div>
  );
};

export default App;
