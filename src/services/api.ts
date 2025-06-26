
// For Search About Cities, It Get Cities Add Information About It
// It Has namePrefix Which Will Be Very Useful When Search , and more .. 
export const GEO_API_URL = (process.env.REACT_APP_GEO_API_BASE_URL as string);

export const geoApiOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': (process.env.REACT_APP_GEO_API_KEY as string),
		'x-rapidapi-host': (process.env.REACT_APP_GEO_API_HOST as string),
	}
};

// API To Get Current User IP
export const IPINFO_API_URL = (process.env.REACT_APP_IPINFO_API_BASE_URL as string);

// Weather API ( Get Weather Data Based On Location )
export const WEATHER_API_FORECAST = (process.env.REACT_APP_WEATHER_API_FORECAST_BASE_URL as string);
export const WEATHER_API_HISTORY = (process.env.REACT_APP_WEATHER_API_HISTORY_BASE_URL as string);

// Pexels API
export const PEXELS_API_URL_DESKTOP = (process.env.REACT_APP_PEXELS_API_BASE_URL_DESKTOP as string);
export const PEXELS_API_URL_MOBILE = (process.env.REACT_APP_PEXELS_API_BASE_URL_MOBILE as string);

export const pexelsApiOptions = {
	method: 'GET',
	headers: {
		Authorization: "M2UdQKOPRqhNonk0Gi79SG1voSTnUdO9tnHu09jl0ozm731QpV72ktD4"
	}
}