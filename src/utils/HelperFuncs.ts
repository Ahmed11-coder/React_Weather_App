import { IPINFO_API_URL, WEATHER_API_FORECAST, WEATHER_API_HISTORY } from "../services/api.ts";
import { useAppSelector } from "../store/hooks.ts";
import { selectLocation, userLocation } from "../store/slices/locationSlice.ts";
import { LocationState, WeatherInfo } from "../types/types";
import { ContinentIndex, countries } from "./LocalData.ts";

export const getPreviousDays = (dayIndex: number):string => {
    const curDate = new Date();
    curDate.setDate(curDate.getDate() - dayIndex);
    const previousDay = curDate.toISOString().split('T')[0].split("/").map((el)=> el.length === 1 ? "0"+el : el);
    return (previousDay.join("-"));
}

// Get Info About Specific City ( like continent and etc... )
export const getCityInfo = (countryCode: string) => {
    return countries.filter((country) => country["countryCode"] === countryCode);
}

// Get User Location Info Using ipinfo API
export const getLocationInfo = async (): Promise<LocationState> => {
    const response = await fetch(IPINFO_API_URL);
    const ip= await response.json();

    const locationData: LocationState = {
        locate: ip.loc,
        country: ip.country,
        city: ip.city,
        region: ip.region,
        continent: ip.timezone.split('/')[0],
        activeIndex: getContinentIndex(ip.timezone.split('/')[0])
    }
    return locationData;
}

// Get Random Number At Specific Range
export const getRandomIndex = (ArraySize: number): number => {
    return Math.floor(Math.random() * ArraySize);
}

// Get Random Country In Specific Continent
export const getRandomCountry = (continent: string) => {
    const possibleCountries = countries.filter((country) => country["continentName"] === continent && country["population"] >= 21000000);
    return possibleCountries[getRandomIndex(possibleCountries.length)];
}

// Convert Continent To Index
export const getContinentIndex = (continent: string) : number => {
    const data = ContinentIndex.filter((con) => con.includes(continent))[0];
    return ContinentIndex.indexOf(data);
}

// Get Weather Data
export const getWeatherInfo = async (location?:LocationState) : Promise<WeatherInfo> => {
    const locationSelector: LocationState = location ? location : userLocation; // Get Current Location From Redux Store
    
    // Get Weather Forecest
    const weatherRes = await fetch(`${WEATHER_API_FORECAST}&q=${locationSelector.locate}`);
    const weatherResponse = await weatherRes.json();

    const historyWeatherLast3Days:number[] = [];
    
    for(let i = 1; i <= 3; i++) {
        // Get Weather Histroy
        const histroyRes = await fetch(`${WEATHER_API_HISTORY}&q=${locationSelector.locate}&dt=${getPreviousDays(i)}`);
        const historyResponse = await histroyRes.json();
        historyWeatherLast3Days.push(historyResponse["forecast"]['forecastday'][0]["hour"][0]["temp_c"]);
    }

    const {temp_c, condition, humidity, feelslike_c, windchill_c, wind_kph, gust_kph, uv, air_quality, precip_mm, vis_km} = weatherResponse["current"];
    const nextDays = weatherResponse["forecast"]["forecastday"];

    const weatherInfoResult: WeatherInfo = {
        current_temp: temp_c,
        condition: condition,
        humidity: humidity,
        feelslike_temp: feelslike_c,
        wind_chill: windchill_c,
        wind_kph: wind_kph,
        gust_kph: gust_kph,
        uv: uv,
        air_quality: {
            us_epa_index: air_quality["us-epa-index"],
            gb_defra_index: air_quality["gb-defra-index"]
        },
        precip_mm: precip_mm,
        vis_km: vis_km,
        nextDays: [nextDays[0]["hour"][0]["temp_c"], nextDays[1]["hour"][0]["temp_c"]],
        previousDays: historyWeatherLast3Days
    }
    
    return weatherInfoResult;
}