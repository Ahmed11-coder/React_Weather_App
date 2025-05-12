import { RefObject } from "react";
import { Swiper } from "swiper/types";
import type {} from 'react-select/base';
import { GroupBase } from "react-select";

export interface ModeOptionProp {
    mode: boolean;
}

export interface SetModeOptionProp {
    setMode: (val: boolean) => void;
    mode: boolean;
}

export interface BulletsProp {
    index: number,
    setActiveIndex: (index: number) => void,
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
}

export interface IP {
    ip: string;
}