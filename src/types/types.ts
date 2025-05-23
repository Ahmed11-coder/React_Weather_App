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

export interface WeatherInfo {
    current_temp: number; // ( Current Temperature )
    condition: {
        text: string;
        code: number;
        icon: string;
    };
    humidity: number;
    feelslike_temp: number; // ( Feels Like Temperature )
    wind_chill: number; // ( Wind Chill )
    wind_kph: number; // ( Wind speed in kilometer per hour)
    gust_kph: number; // ( Wind gust in kilometer per hour )
    uv: number; // ( High UV levels pose sunburn or skin damage risks )
    air_quality: {
        us_epa_index: number;
        gb_defra_index: number;
    };
    precip_mm: number; // ( Precipitation amount in millimeters )
    vis_km: number; // ( Visibility in kilometer )
    nextDays: number[];
    previousDays: number[];
}