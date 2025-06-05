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
    require('@assents/images/rain.svg').default,
    require('@assents/images/sunny.svg').default
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