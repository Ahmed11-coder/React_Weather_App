
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

// API To Get Continent From Country Code
export const FIRST_API_URL = "https://api.first.org/data/v1/countries";