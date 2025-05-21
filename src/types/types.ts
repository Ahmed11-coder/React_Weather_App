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