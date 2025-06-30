// Import APIs
import { IPINFO_API_URL, REACT_APP_UNSPLASH_API_BASE_URL, WEATHER_API_FORECAST, WEATHER_API_HISTORY } from "@services/api";

// Import Utlities
import { userLocation } from "@store/slices/locationSlice";
import { HourlyTemp, LocationState, Status, WeatherChartTable, WeatherInfo, WeatherParameter, WeatherParameters, WeatherStatus } from "types/types";
import { ContinentIndex, countries, WEATHER_STATUS_CASES, WeatherStateImgs } from "./LocalData";

export const getPreviousDays = (dayIndex: number, curDate: Date):string => {
    curDate.setDate(curDate.getDate() - dayIndex);
    const previousDay = curDate.toISOString().split('T')[0].split("/").map((el)=> el.length === 1 ? "0"+el : el);
    return (previousDay.join("-"));
}

// Get Info About Specific City ( like continent and etc... )
export const getCityInfo = (countryCode: string) => {
    return countries.filter((country: any) => country["countryCode"] === countryCode);
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
    const possibleCountries = countries.filter((country:any) => country["continentName"] === continent && country["population"] >= 21000000);
    return possibleCountries[getRandomIndex(possibleCountries.length)];
}

// Convert Continent To Index
export const getContinentIndex = (continent: string) : number => {
    const data = ContinentIndex.filter((con) => con.includes(continent))[0];
    return ContinentIndex.indexOf(data);
}

// Convert Date To Day, Month Date Fromate
const convertDateToDMD = (date: string): string => {
    const WEEKDAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const dateObj = new Date(date);
    return `${WEEKDAYS[dateObj.getDay()]}, ${MONTHS[dateObj.getMonth()]} ${dateObj.getDate()}`;
}

const getChangePercentage = (current: number, before: number): number => {
    return +(((current - before) / before) * 100).toFixed(1);
}

// Determine Status and Dangrous Level
export const getDangerousStatus = (parameters: WeatherParameters, dayBefore: any): WeatherStatus => {
    const goodStat:any = [] , modStat:any = [] ,danStat:any  = [];
    const {feelslike_temp , wind_kph, gust_kph, air_quality, humidity, vis_km, precip_mm, uv} = parameters;

    const WeahterParams: WeatherParameter[] = [
        {parameter: "Temperature", value: feelslike_temp,minValue: -50,maxValue: 65, percentage: getChangePercentage(feelslike_temp, dayBefore["feelslike_c"])},
        {parameter: "Wind Speed", value: wind_kph, minValue: 0,maxValue: 60,percentage: getChangePercentage(wind_kph, dayBefore["wind_kph"])},
        {parameter: "Wind Gust", value: gust_kph,minValue: 0,maxValue: 80, percentage: getChangePercentage(gust_kph, dayBefore["gust_kph"])},
        {parameter: "Air Quality", value: air_quality,minValue: 1,maxValue: 10, percentage: 0},
        {parameter: "Humidity", value: humidity,minValue: 0,maxValue: 100, percentage: getChangePercentage(humidity, dayBefore["humidity"])},
        {parameter: "Visibility", value: vis_km,minValue: 0,maxValue: 12, percentage: getChangePercentage(vis_km, dayBefore["vis_km"])},
        {parameter: "Precipitation", value: precip_mm, minValue: 0,maxValue: 15, percentage: getChangePercentage(precip_mm, dayBefore["precip_mm"])},
        {parameter: "UV", value: uv , minValue: 0,maxValue: 20, percentage: getChangePercentage(uv, dayBefore["uv"])}
        
    ]

    // Helper function to categorize parameters
    const categorizeParameter = (param: WeatherParameter): void => {
        const key:string = param.parameter.toLowerCase().replace(' ', '_');
        const statusCases: Status = WEATHER_STATUS_CASES[key];

        param.value >= statusCases.good.min && param.value <= statusCases.good.max
            ? goodStat.push(param)
            : (param.value >= statusCases.moderate.min && param.value <= statusCases.moderate.max)
            ? modStat.push(param)
            : danStat.push(param);
    }
    
    WeahterParams.forEach(categorizeParameter);
        
    const result = (danStat.length) ? {...danStat[0], text: "Dangerous"} : (modStat.length ? {...modStat[0], text: "Modeate"} : {...goodStat[0], text: "Good"});
    return result;
}

// Get Weather Data
export const getWeatherInfo = async (location?:LocationState) : Promise<WeatherInfo> => {
    // Get Current Location From Redux Store
    const locationSelector: LocationState = location ? location : userLocation; 
    
    // Get Weather Forecast
    const weatherRes = await fetch(`${WEATHER_API_FORECAST}&q=${locationSelector.locate}`);
    const weatherResponse = await weatherRes.json();
    
    const historyWeatherLast3Days:WeatherChartTable[] = [];
    const hourIndex = +weatherResponse["location"]["localtime"].split(' ')[1].slice(0, 2); // Get Time Index
    let dayBefore;
    
    // Get Weather Histroy Last Three Days
    for(let i = 1; i <= 3; i++) {
        const previousDate = getPreviousDays(i, new Date(weatherResponse["location"]["localtime"])); // Get Dates The Previous Days
        const histroyRes = await fetch(`${WEATHER_API_HISTORY}&q=${locationSelector.locate}&dt=${previousDate}`);
        const historyResponse = await histroyRes.json();

        if (i == 1) dayBefore = historyResponse["forecast"]['forecastday'][0]["hour"][hourIndex];
        const previousDay = convertDateToDMD(previousDate).split(',')[0]; // Get Day Name
        historyWeatherLast3Days.unshift({day: previousDay, temp: historyResponse["forecast"]['forecastday'][0]["hour"][0]["temp_c"]});
    }

    const {temp_c, condition, humidity, feelslike_c, windchill_c, wind_kph, gust_kph, uv, air_quality, precip_mm, vis_km} = weatherResponse["current"];
    const nextDays = weatherResponse["forecast"]["forecastday"];


    const HourlyForest: HourlyTemp[] = [];
    const hoursInfo = nextDays[0]['hour'];
    const curHour = new Date().getHours();
    for(let i = 0; i < 6; i++) {
        HourlyForest.push({
            temp: hoursInfo[(curHour + i) % 24]['feelslike_c'],
            hour: (curHour + i) % 24,
            iconCode: hoursInfo[(curHour + i) % 24]['condition']['code'],
        })
    }

    const currentDateFormatDay_Month_Date = convertDateToDMD(weatherResponse["location"]["localtime"]);
    const current7Days = [
        ...historyWeatherLast3Days,
        {temp: temp_c ,day: currentDateFormatDay_Month_Date.split(',')[0], status: 'active'},
        {temp: nextDays[1]["hour"][hourIndex]["temp_c"], day: convertDateToDMD(nextDays[1]["date"]).split(',')[0]},
        {temp: nextDays[2]["hour"][hourIndex]["temp_c"], day: convertDateToDMD(nextDays[2]["date"]).split(',')[0]}
    ];

    const parameters: WeatherParameters = {
        feelslike_temp: feelslike_c,
        humidity: humidity,
        wind_kph: wind_kph,
        gust_kph: gust_kph,
        uv: uv,
        air_quality: air_quality["us-epa-index"],
        precip_mm: precip_mm,
        vis_km: vis_km,
    }
    
    const status: WeatherStatus = getDangerousStatus(parameters, dayBefore);
    
    const weatherInfoResult: WeatherInfo = {
        ...parameters,
        current_temp: temp_c,
        wind_chill: windchill_c,
        date: currentDateFormatDay_Month_Date,
        condition: {
            text: condition.text,
            iconCode: condition.code,
        },
        Current7Days: current7Days,
        max_temp: nextDays[0]["day"]["maxtemp_c"],
        min_temp: nextDays[0]["day"]["mintemp_c"],
        status: status,
        HourlyForest: HourlyForest,
    }
    return weatherInfoResult;
}

// Get Random Local Images Based On Weather State
export const getLocalBackground = (weatherStatus: string) => {
    const imgs = WeatherStateImgs.filter((img: {category: string, img: string}) => img.category === weatherStatus);
    const randomBackgroundIndex = getRandomIndex(imgs.length);
    return imgs[randomBackgroundIndex].img;
}

// Get Random External Image From Unsplash Based On Weather State
export const getExternalBackground = (weatherState: string) => {
    const img = fetch(`${REACT_APP_UNSPLASH_API_BASE_URL}&query=${weatherState} sky`).then((response) => response.json().then(data => {
        return ((response.status === 200) ? `${data['urls']['raw']}&fit=max&auto=format&fm=webp&q=50` : getLocalBackground(weatherState));
    }))
    return img;
}