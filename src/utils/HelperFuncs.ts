import { IPINFO_API_URL } from "../services/api.ts";
import { LocationState } from "../types/types";
import { FIRST_API_URL } from "../services/api.ts";

export const getYesterday = () => {
    const curDate = new Date();
    curDate.setDate(curDate.getDate() - 1);
    const Yesterday = curDate.toLocaleDateString().split("/").map((el)=> el.length === 1 ? "0"+el : el);
    return (Yesterday.join("-"));
}


export const getContinent = async (country: string) => {
    const response = await fetch(`${FIRST_API_URL}?q=${country}`);
    const continent = await response.json();
    return continent['data'][country]['region'];
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
        continent: ip.timezone.split('/')[0]
    }
    return locationData;
}