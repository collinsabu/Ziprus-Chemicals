"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Importing framer-motion
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
      console.log("Today's Weather Data: ", todayData);

      if (todayData && todayData.coord) {
        setTodayWeather(todayData);

        const { lat, lon } = todayData.coord;
        console.log(`Latitude: ${lat}, Longitude: ${lon}`);

        // Fetch 3-hour forecast using lat and lon
        const forecastData = await fetch3HourForecast(lat, lon);
        console.log("3-hour Forecast Data: ", forecastData);

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
    return (
      <div className="text-2xl text-center py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Loading...
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base_color px-8 pt-36 mb-10">
      <motion.div
        className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-3xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Auchi Weather Report
        </motion.h1>

        {/* Today's Weather Section */}
        {todayWeather ? (
          <motion.div
            className="mb-8 bg-base_two p-6 text-white rounded-lg shadow-lg text-center sm:text-block"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-center sm:text-left sm:text-3xl">
              Today's Weather
            </h2>
            <div className="flex flex-col items-center md:items-start md:flex-row md:justify-between">
              <div className="text-center md:text-left">
                <p className="text-xl font-medium">
                  Weather: {todayWeather.weather[0].description}
                </p>
                <p className="sm:text-xl text-md font-medium">
                  Temperature: {todayWeather.main.temp}°C
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <p className="text-md sm:text-lg">
                  Humidity: {todayWeather.main.humidity}%
                </p>
                <p className="text-md sm:text-lg">
                  Wind Speed: {todayWeather.wind.speed} m/s
                </p>
              </div>
            </div>
          </motion.div>
        ) : (
          <p>Unable to fetch today's weather.</p>
        )}

        {/* 5-Day Forecast Section */}
        {forecast.length > 0 ? (
          <motion.div
            className="mt-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center">
              5-Day Weather Forecast (3-hour intervals)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {forecast.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-base_text p-4 rounded-lg shadow-md text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <p className="font-semibold">
                    {new Date(item.dt * 1000).toLocaleString()}
                  </p>
                  <p>Temp: {item.main.temp}°C</p>
                  <p>Weather: {item.weather[0].description}</p>
                  <p>Humidity: {item.main.humidity}%</p>
                  <p>Wind Speed: {item.wind.speed} m/s</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <p>Unable to fetch 5-day forecast.</p>
        )}
      </motion.div>
    </div>
  );
};

export default WeatherReport;
