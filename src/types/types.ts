import { RefObject } from "react";
import { Swiper } from "swiper/types";
import type {} from 'react-select/base';
import { AppDispatch } from "../store/store";

export interface ModeOptionProp {
    mode: boolean;
}
export interface SetModeOptionProp {
    setMode: (val: boolean) => void;
    mode: boolean;
}
export interface SwiperEarthChange {
    index: number,
    dispatch: AppDispatch,
}
export interface ChangeBulletsProp extends SwiperEarthChange {
    swiperRef: RefObject<Swiper | null>,
}
export interface SearchProp {
    isOpen: boolean
}
export interface LocationState {
    locate: string;
    country: string;
    region: string;
    city: string;
    continent: string;
    activeIndex: number
}

export interface isSearchedLocationState extends LocationState {
    isSearch: boolean;
}
export interface IP {
    ip: string;
}
export interface WeatherParameters {
    feelslike_temp: number; // ( Feels Like Temperature )
    humidity: number;
    wind_kph: number; // ( Wind speed in kilometer per hour)
    gust_kph: number; // ( Wind gust in kilometer per hour )
    uv: number; // ( High UV levels pose sunburn or skin damage risks )
    air_quality: number;
    precip_mm: number; // ( Precipitation amount in millimeters )
    vis_km: number; // ( Visibility in kilometer )
}

export interface WeatherParameter {
    parameter: string;
    value: number;
    minValue: number;
    maxValue: number;
    percentage: number;
}

export interface Status {
    good: {
        min: number;
        max: number;
    };
    moderate: {
        min: number;
        max: number;
    }
}
export interface WeatherChartTable {
    temp: number;
    day: string;
    status?: string;
}

export interface WeatherStatus {
    parameter: string;
    value: number;
    minValue: number;
    maxValue: number;
    parcentage: number;
    text: 'Good' | 'Moderate' | 'Dangerous';
}
export interface WeatherInfo extends WeatherParameters {
    current_temp: number; // ( Current Temperature )
    wind_chill: number; // ( Wind Chill )
    date: string;
    max_temp: number;
    min_temp: number;
    condition: {
        text: string;
        code: number;
        icon: string;
    };
    Current7Days: WeatherChartTable[];
    status: WeatherStatus;
}