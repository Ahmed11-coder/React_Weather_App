import { RefObject } from "react";
import { Swiper } from "swiper/types";

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