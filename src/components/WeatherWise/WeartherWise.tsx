import React, { JSX, Dispatch as RDispatch, SetStateAction, useEffect, useState } from "react";

import './WeatherWise.css';

// Import Icons
import { ChevronRight, Info, ArrowUp, ArrowDown, ChevronLeft } from "lucide-react"
import DangerousRate from "./components/Dangerous Rate/DangerousRate";

// Import Utilities 
import { ModeOptionProp , LocationState, WeatherInfo } from "types/types";

// Import Redux Store Utilities
import { useAppSelector } from "@store/hooks";
import { selectLocation } from "@store/slices/locationSlice";
import { selectWeather } from "@store/slices/weatherSlice";

// Swiper Library
import { Swiper as SwiperType } from 'swiper'; // Import Swiper Type

// Components
import EarthSwiper from "./components/Earth Swiper/EarthSwiper";
import EarthBullets from "./components/Bullets/EarthBullets";
import Status from "./components/Status/Status";

export default function WeatherWise(props: ModeOptionProp) {
    const currLocation: LocationState = useAppSelector(selectLocation);
    const currWeather: WeatherInfo = useAppSelector(selectWeather);
    const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);
    const [statusSwiper, setStatusSwiper] = useState<boolean>(false);
    
    useEffect(() => {
        if (swiperRef) swiperRef.slideTo(currLocation.activeIndex, 1200);
    }, [currLocation.activeIndex])

    return (
        <div className="sidebar background-blur-8 arounded-40">
            <h2 className="desktop-ds">WeatherWise</h2>
            <h3 className="especial-header mobile-ds">Status: </h3>
            <div className="status">
                <h3 className="side-h desktop-ds section-header">Status</h3>
                <div className="status-container flex-col flex-bet-center">
                    <Status swipe={statusSwiper}/>
                    <div className={`screen background-blur-8 ${statusSwiper ? "switch-status" : ""}`}>
                        <div className="info flex-bet-center">
                            <div className="percentage arounded-40 flex-center" title="Progress">
                                {currWeather.status.percentage > 0 ? <ArrowUp strokeWidth={1}/> : <ArrowDown strokeWidth={1}/>}
                                {currWeather.status.percentage}%
                            </div>
                            <div title={`Current: ${currWeather.status.value}`}><Info strokeWidth={1}/></div>
                        </div>
                        <div className="dan-curve">
                            <DangerousRate />
                        </div>
                        <span className="dan-parameter">{currWeather.status.parameter}</span>
                    </div>
                </div>
                <button onClick={() => setStatusSwiper(!statusSwiper)} className="desktop-ds more flex-center m-auto-t15 ">
                    {statusSwiper ? <><ChevronLeft className="icon" strokeWidth={1}/> See Less Details</> : <>See More Details <ChevronRight className="icon" strokeWidth={1}/></>}
                </button> 
            </div>
            <div className="area">
                <div className="area-h flex-bet-center">
                    <h3 className="side-h desktop-ds section-header">Select Area</h3>
                    <h3 className="especial-header mobile-ds">Select Area: </h3>
                    <EarthBullets swiperRef={swiperRef}/>
                </div>
            </div>
            <EarthSwiper setSwiper={setSwiperRef} mode={props.mode}/>
            <div className="contries">
                <p className="background-blur-8 arounded-40 m-auto-t15">{`${currLocation.city}, ${currLocation.region}, ${currLocation.country}`}</p>
            </div>
        </div>
    );
}