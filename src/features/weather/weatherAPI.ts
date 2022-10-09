export function fetchWeather() {
  return fetch('https://localhost:44341/WeatherForecast')
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
      return responseData;
    })
    .catch((error) => console.warn(error));
}
