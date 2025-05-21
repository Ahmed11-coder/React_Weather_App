import { IPINFO_API_URL } from "../services/api.ts";
import { LocationState } from "../types/types";
import { ContinentIndex, countries } from "./LocalData.ts";

export const getYesterday = () => {
    const curDate = new Date();
    curDate.setDate(curDate.getDate() - 1);
    const Yesterday = curDate.toLocaleDateString().split("/").map((el)=> el.length === 1 ? "0"+el : el);
    return (Yesterday.join("-"));
}

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
export const getRandomIndex = (ArraySize: number): number => {
    return Math.floor(Math.random() * ArraySize);
}
export const getRandomCountry = (continent: string) => {
    const possibleCountries = countries.filter((country) => country["continentName"] === continent && country["population"] >= 21000000);
    const result = possibleCountries[getRandomIndex(possibleCountries.length)];
    return result;
}
export const getContinentIndex = (continent: string) : number => {
    const data = ContinentIndex.filter((con) => con.includes(continent))[0];
    return ContinentIndex.indexOf(data);
}