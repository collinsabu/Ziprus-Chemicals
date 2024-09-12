// src/components/fetch3HourForecast.js
export const fetch3HourForecast = async (lat, lon) => {
  const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  try {
    if (!lat || !lon) {
      console.error("Latitude and longitude are missing for 3-hour forecast.");
      return null;
    }

    console.log(`Fetching 3-hour forecast for lat: ${lat}, lon: ${lon}`);
    console.log("API URL: ", apiUrl);

    const response = await fetch(apiUrl);
    console.log("3-hour forecast response status:", response.status);

    if (response.status === 401) {
      console.error("Invalid API key. Check the API key and access permissions.");
      return null;
    }

    if (!response.ok) throw new Error(`Error fetching 3-hour forecast: ${response.status}`);

    const data = await response.json();
    console.log("Full 3-hour forecast data:", data);

    if (data.list) {
      return data.list; // Return 3-hourly forecast data
    } else {
      console.error("No forecast data found in response.");
      return null;
    }
  } catch (error) {
    console.error("Error fetching 3-hour forecast:", error.message);
    return null;
  }
};
