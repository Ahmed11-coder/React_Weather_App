
// For Search About Cities, It Get Cities Add Information About It
// It Has namePrefix Which Will Be Very Useful When Search , and more .. 
export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

export const geoApiOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'ebd1a78d91msh7cb9a642764959fp121ddajsnfe0b6c34bdd2',
		'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
	}
};

// API To Get Current User IP
export const IPINFO_API_URL = "https://ipinfo.io/json";

// Weather API ( Get Weather Data Based On Location )
const WEATHER_API_KEY = "6a6672e6e55047b5a3690358252701";
export const WEATHER_API_FORECAST = `http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&days=3&aqi=yes&alerts=yes`;
export const WEATHER_API_HISTORY = `http://api.weatherapi.com/v1/history.json?key=${WEATHER_API_KEY}`;