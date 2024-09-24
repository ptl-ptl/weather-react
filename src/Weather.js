import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div class="weather-app">
      <header>
        <form class="search-form">
          <input
            type="search"
            placeholder="Enter a city..."
            required
            class="search-form-input"
            id="search-form-input"
          />
          <input type="submit" value="Search" class="search-form-button" />
        </form>
      </header>
      <main>
        <div class="weather-app-data">
          <div>
            <h1 class="weather-app-city">Antwerp</h1>
            <p class="weather-app-details">
              <span>Tuesday 11:28</span>, <span>scattered clouds</span>
              <br />
              Humidity: <strong>82%</strong>, Wind:
              <strong>5km/h</strong>
            </p>
          </div>
          <div class="weather-app-temperature-container">
            <div></div>
            <div class="weather-app-temperature">17</div>
            <div class="weather-app-unit">°C</div>
          </div>
        </div>
        <div class="weather-forecast"></div>
      </main>
      <footer>
        This project was coded by{" "}
        <a href="https://github.com/ptl-ptl" target="_blank" rel="noreferrer">
          Priyal Patel
        </a>
        , is
        <a
          href="https://github.com/ptl-ptl/weather"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          open-sourced on GitHub{" "}
        </a>
        and{" "}
        <a
          href="https://main--weather-app-ptl.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
