// src/components/fetchTodayWeather.js
export const fetchTodayWeather = async () => {
  const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;
  const city = "Auchi";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error(`Error fetching today's weather: ${response.status}`);
    const data = await response.json();
    console.log("Today's Weather Data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching today's weather:", error.message);
    return null;
  }
};
