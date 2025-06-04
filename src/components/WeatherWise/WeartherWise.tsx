import React, { useEffect, useState } from "react";

import './WeatherWise.css';

// Import Icons
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import DangerousRate from "./components/Dangerous Rate/DangerousRate";

// Import Utilities 
import { ModeOptionProp , LocationState, WeatherInfo } from "../../types/types";

// Import Redux Store Utilities
import { useAppSelector } from "@store/hooks";
import { selectLocation } from "@store/slices/locationSlice";
import { selectWeather } from "@store/slices/weatherSlice";

// Swiper Library
import { Swiper as SwiperType } from 'swiper'; // Import Swiper Type

// Components
import EarthSwiper from "./components/Earth Swiper/EarthSwiper";
import EarthBullets from "./components/Bullets/EarthBullets";

export default function WeatherWise(props: ModeOptionProp) {
    const currLocation: LocationState = useAppSelector(selectLocation);
    const currWeather: WeatherInfo = useAppSelector(selectWeather);
    const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);
    

    useEffect(() => {
        if (swiperRef) swiperRef.slideTo(currLocation.activeIndex, 1200);
    }, [currLocation.activeIndex])

    return (
        <div className="sidebar background-blur-8 arounded-40 border-w2">
            <h2>WeatherWise</h2>
            <div className="status">
                <h5 className="side-h">Status</h5>
                <div className="screen background-blur-8">
                    <div className="info flex-bet-center">
                        <div className="percentage arounded-40 flex-center" title="Progress">
                            {currWeather.status.percentage > 0 ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
                            {currWeather.status.percentage}%
                        </div>
                        <div title={`Current: ${currWeather.status.value}`}><InfoOutlinedIcon/></div>
                    </div>
                    <div className="dan-curve">
                        <DangerousRate />
                    </div>
                    <span className="dan-parameter">{currWeather.status.parameter}</span>
                </div>
                <a href="" className="more flex-center m-auto-t15">See More Details {<KeyboardArrowRightIcon />}</a>
            </div>
            <div className="area">
                <div className="area-h flex-bet-center">
                    <h5 className="side-h">Select Area</h5>
                    <EarthBullets swiperRef={swiperRef}/>
                </div>
            </div>
            <EarthSwiper setSwiper={setSwiperRef} mode={props.mode}/>
            <div className="contries">
                <p className="background-blur-8 arounded-40 m-auto-t15 border-w2">{`${currLocation.city}, ${currLocation.region}, ${currLocation.country}`}</p>
            </div>
        </div>
    );
}