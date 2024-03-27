import React from "react";
import { Route, Routes } from "react-router-dom";
import SearchInput from "./Components/SearchInput/SearchInput";
import WeatherInfo from "./Components/WeatherInfo/WeatherInfo";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SearchInput />} />
        <Route path="/weather/:location" element={<WeatherInfo />} />
      </Routes>
    </div>
  );
};

export default App;
