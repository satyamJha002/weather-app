import React, { useEffect } from "react";
import styles from "./WeatherInfo.module.css";
import { Divider } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ThermostatAutoIcon from "@mui/icons-material/ThermostatAuto";
import AirIcon from "@mui/icons-material/Air";
import { Link, useParams } from "react-router-dom";

const WeatherInfo = (props) => {
  const { location } = useParams();
  const [data, setData] = React.useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch weather data based on location using API
      const apiKey = "3e6e6857ee05491a970134049242703";

      const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;
      // Update state with fetched data
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      setData(data);
      console.log(data);
    };
    fetchData();
  }, [location]);

  return (
    <div className={styles["weather-display-container"]}>
      <div className={styles["weather"]}>
        <div className={styles["icon-with-title"]}>
          {" "}
          <Link to="/">
            <ArrowBackIcon className={styles["back-icon"]} />
          </Link>
          <h4 className={styles["weather-title"]}>Weather App</h4>
        </div>
        <Divider style={{ color: "#6a6666", width: "100%" }}></Divider>
        <div className={styles["icon-img"]}>
          <img
            className={styles["weather-icon"]}
            src={`http:${data?.current?.condition?.icon}`}
            alt="Weather Icon"
          />
        </div>
        <div className={styles["weather-info"]}>
          <div className={styles["weather-temp"]}>
            {Math.round(data?.current?.temp_c)}°C
          </div>
          <div className={styles["weather-desc"]}>
            {data?.current?.condition?.text}
          </div>
        </div>
        <div className={styles["location-container"]}>
          <LocationOnIcon className={styles["location-icon"]} />
          <div className={styles["location"]}>{data?.location?.name}</div>
        </div>

        <Divider
          style={{ color: "#585454", width: "100%", marginTop: "10px" }}
        ></Divider>
        <div className={styles["data-container"]}>
          <div className={styles["element"]}>
            <div className={styles["left-icon"]}>
              <ThermostatAutoIcon className={styles["icon"]} />
            </div>
            <div className={styles["data"]}>
              <p className={styles["value"]}>
                {Math.round(data?.current?.feelslike_c)} °C
              </p>
              <span className={styles["title"]}>Feels Like</span>
            </div>
          </div>
          <Divider orientation="vertical" variant="middle" flexItem></Divider>
          <div className={styles["element"]}>
            <div className={styles["left-icon"]}>
              <AirIcon className={styles["icon"]} />
            </div>
            <div className={styles["data"]}>
              <p className={styles["value2"]}>{data?.current?.humidity}%</p>
              <p className={styles["title2"]}>Humidity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
