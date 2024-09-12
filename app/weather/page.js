// src/app/weather/page.js
"use client";

import { useState, useEffect } from "react";
import { fetchTodayWeather } from "../components/fetchTodayWeather";
import { fetch3HourForecast } from "../components/fetch3HourForecast";

const WeatherReport = () => {
  const [todayWeather, setTodayWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      setLoading(true);

      // Fetch today's weather
      const todayData = await fetchTodayWeather();
      console.log("Today's Weather Data: ", todayData); // Log today's weather data

      if (todayData && todayData.coord) {
        setTodayWeather(todayData);

        const { lat, lon } = todayData.coord;
        console.log(`Latitude: ${lat}, Longitude: ${lon}`);

        // Fetch 3-hour forecast using lat and lon
        const forecastData = await fetch3HourForecast(lat, lon);
        console.log("3-hour Forecast Data: ", forecastData); // Log 3-hour forecast data

        // Check if forecast data is valid
        if (forecastData && forecastData.length > 0) {
          setForecast(forecastData);
        } else {
          console.error("Failed to retrieve valid forecast data.");
        }
      } else {
        console.error(
          "Failed to fetch today's weather or coordinates missing."
        );
      }

      setLoading(false);
    };

    fetchWeatherData();
  }, []);

  if (loading) {
    return <div className="text-2xl text-center py-20">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-base_color p-8 my-10">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Auchi Weather Report
        </h1>

        {/* Today's Weather Section */}
        {todayWeather ? (
          <div className="mb-8 bg-base_two p-6 text-white rounded-lg shadow-lg text-center sm:text-block">
            <h2 className="text-2xl font-bold mb-4 text-center sm:text-left sm:text-3xl">
              Today's Weather
            </h2>
            <div className="flex flex-col items-center md:items-start md:flex-row md:justify-between">
              {/* Left Section: Main Weather Info */}
              <div className="text-center md:text-left">
                <p className="text-xl  font-medium">
                Weather: {todayWeather.weather[0].description}
                  
                </p>
                <p className="sm:text-xl text-md font-medium">
                  Temperature: {todayWeather.main.temp}°C
                </p>
              </div>
              {/* Right Section: Additional Info */}
              <div className="mt-4 md:mt-0">
                <p className="text-md sm:text-lg">
                  Humidity: {todayWeather.main.humidity}%
                </p>
                <p className="text-md sm:text-lg">
                  Wind Speed: {todayWeather.wind.speed} m/s
                </p>
              </div>
            </div>
          </div>
        ) : (
          <p>Unable to fetch today's weather.</p>
        )}

        {/* 5-Day Forecast Section */}
        {forecast.length > 0 ? (
          <div className="mt-14">
            <h2 className=" text-xl sm:text-2xl font-semibold mb-4 text-center">
              5-Day Weather Forecast 3-hour intervals
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {forecast.map((item, index) => (
                <div
                  key={index}
                  className="bg-base_text p-4 rounded-lg shadow-md text-center"
                >
                  <p className="font-semibold">
                    {new Date(item.dt * 1000).toLocaleString()}
                  </p>
                  <p>Temp: {item.main.temp}°C</p>
                  <p>Weather: {item.weather[0].description}</p>
                  <p>Humidity: {item.main.humidity}%</p>
                  <p>Wind Speed: {item.wind.speed} m/s</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p>Unable to fetch 5-day forecast.</p>
        )}
      </div>
    </div>
  );
};

export default WeatherReport;
