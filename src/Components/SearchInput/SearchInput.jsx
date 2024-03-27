import React, { useEffect } from "react";
import { Divider } from "@mui/material";
import styles from "./SearchInput.module.css";
import { useNavigate } from "react-router-dom";
const SearchInput = () => {
  const [location, setLocation] = React.useState("");
  const [error, setError] = React.useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (location.trim() === "") {
      setError("Please enter a city name");
    } else {
      setError("");
      navigate(`/weather/${location}`);
    }
  };
  return (
    <div className={styles["search-container"]}>
      <form className={styles["search-form"]} onSubmit={handleSubmit}>
        <h5>Weather App</h5>
        <hr style={{ marginBottom: "10px", color: "#525252", width: "100%" }} />
        <input
          type="text"
          className={styles["search-input"]}
          placeholder="Enter city name"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        ></input>
        <Divider style={{ marginBottom: "10px" }}>
          <span style={{ color: "#6a6666" }}>or</span>
        </Divider>
        <button className={styles["search-btn"]} type="submit">
          Get Weather
        </button>
        {error && <p className={styles["error-message"]}>{error}</p>}
      </form>
    </div>
  );
};

export default SearchInput;
