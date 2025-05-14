const baseURL =
  "https://api.weatherapi.com/v1/current.json?key=c5723b847d9d4ed2ad840312251405";

export const getWaetherDataForCity = async (city) => {
  const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
  return await response.json();
  //Here &q => query ... like the ones on YouTube
};

export const getWaetherDataForLocation = async (lat, lon) => {
  const response = await fetch(`${baseURL}&q=${lat},%20${lon}&aqi=yes`);
  //&q=23.0293504,%2072.548352&aqi=no
  console.log(lat, lon);
  return await response.json();

  //Here &q => query ... like the ones on YouTube
};
