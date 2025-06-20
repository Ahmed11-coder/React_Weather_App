import { Status } from "types/types";


export const tempData = [
    { day: "Sunday", temp: 28 },
    { day: "Monday", temp: 26 },
    { day: "Tuesday", temp: 27 },
    { day: "Wedensday", temp: 30, status: 'active' },
    { day: "Thursday", temp: 24},
    { day: "Friday", temp: 25 },
]

export const DarkEarthImgs = [
    require('@assents/images/dark/Earth1.svg').default,
    require('@assents/images/dark/Earth2.svg').default,
    require('@assents/images/dark/Earth3.svg').default,
    require('@assents/images/dark/Earth6.svg').default
];
export const LightEarthImgs = [
    require('@assents/images/light/Earth1.svg').default,
    require('@assents/images/light/Earth2.svg').default,
    require('@assents/images/light/Earth3.svg').default,
    require('@assents/images/light/Earth6.svg').default
];

export const WeatherIcons = [
    { codes: [1000], icon: require('@assents/Icons/Colored-Weather-Icons/Clear.svg').default },
    { codes: [1003], icon: require('@assents/Icons/Colored-Weather-Icons/Partly-Cloudy.svg').default },
    { codes: [1006], icon: require('@assents/Icons/Colored-Weather-Icons/Cloudy.svg').default },
    { codes: [1009], icon: require('@assents/Icons/Colored-Weather-Icons/Very-Cloudy.svg').default },
    { codes: [1240, 1243, 1246], icon: require('@assents/Icons/Colored-Weather-Icons/Shower-Rain.svg').default },
    { codes: [1063, 1150, 1153, 1168, 1171, 1180, 1183, 1186, 1189, 1192, 1195, 1198, 1201], icon: require('@assents/Icons/Colored-Weather-Icons/Rain.svg').default },
    { codes: [1087, 1273, 1276, 1279, 1282], icon: require('@assents/Icons/Colored-Weather-Icons/Thunderstorm.svg').default },
    { codes: [1066, 1114, 1117, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258], icon: require('@assents/Icons/Colored-Weather-Icons/Snow.svg').default },
    { codes: [1030, 1135, 1147], icon: require('@assents/Icons/Colored-Weather-Icons/Fog.svg').default }
]

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