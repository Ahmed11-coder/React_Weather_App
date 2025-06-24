import { Status, BaseData } from "types/types";

const importAll = (r: any, base?: BaseData) => {
    return r.keys().map((fileName: any) => {
        if (!base) return r(fileName);
        else {
            const cleanFileName = fileName.slice(2, fileName.length - 4);
            const item = base.array.find((ele) => ele[base.property] === cleanFileName);

            return {
                codes: item[base.targetProperty],
                icon: r(fileName),
            }
        }
    });
}

const WeatherIconsNames = [
    { codes: [1000], icon: 'Clear'},
    { codes: [1003], icon: 'Partly-Cloudy'},
    { codes: [1006], icon: 'Cloudy'},
    { codes: [1009], icon: 'Very-Cloudy'},
    { codes: [1240, 1243, 1246], icon: 'Shower-Rain'},
    { codes: [1063, 1150, 1153, 1168, 1171, 1180, 1183, 1186, 1189, 1192, 1195, 1198, 1201], icon: 'Rain'},
    { codes: [1087, 1273, 1276, 1279, 1282], icon: 'Thunderstorm'},
    { codes: [1066, 1114, 1117, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258], icon: 'Snow'},
    { codes: [1030, 1135, 1147], icon: 'Fog'}
]

export const DarkEarthImgs = importAll(require.context('../assets/images/dark', true, /\.svg$/));
export const LightEarthImgs = importAll(require.context('../assets/images/light', true, /\.svg$/));
export const WeatherIcons = importAll(require.context('../assets/Icons/Colored-Weather-Icons', true, /\.svg$/), {property: "icon", targetProperty: "codes" , array: WeatherIconsNames});

export const countries = require('@data/countries.json')['countries'];

export const ContinentIndex = [["North America", "South America"], ["Europe", "Middle East", "Africa"], ["Asia"], ["Oceania"]]

export const WEATHER_STATUS_CASES: Record<string, Status> = {
    "temperature": {good: {min: 10, max: 25}, moderate: {min: 0, max: 32}},
    "air_quality": {good: {min: 1, max: 3}, moderate: {min: 4, max: 6}},
    "wind_speed": {good: {min: 0, max: 20}, moderate: {min: 20, max: 40}},
    "wind_gust": {good: {min: 0, max: 30}, moderate: {min: 30, max: 60}},
    "precipitation": {good: {min: 0, max: 2}, moderate: {min: 2, max: 10}},
    "visibility": {good: {min: 8, max: 100}, moderate: {min: 4, max: 8}},
    "humidity": {good: {min: 0, max: 60}, moderate: {min: 30, max: 80}},
    "uv": {good: {min: 0, max: 2}, moderate: {min: 3, max: 7}},
}