import React, { useEffect } from "react";
import { useState, useRef } from "react";

import './WeatherWise.css';

// Import Icons
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import NearMeIcon from '@mui/icons-material/NearMe';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import DangerousRate from "./components/Dangerous Rate/DangerousRate.tsx";

// Import Utilities 
import { DarkEarthImgs, LightEarthImgs } from "../../utils/LocalData.ts";
import { ModeOptionProp , LocationState, WeatherInfo } from "../../types/types.ts";
import { setActiveBullets, setRandomCountryInfo } from './Handlers.ts';

// Import Redux Store Utilities
import { useAppDispatch, useAppSelector } from "../../store/hooks.ts";
import { selectLocation } from "../../store/slices/locationSlice.ts";
import { selectWeather } from "../../store/slices/weatherSlice.ts";

// Swiper Library
import {Swiper, SwiperSlide} from 'swiper/react'; // Import Swiper Components
import { Swiper as SwiperType } from 'swiper'; // Import Swiper Type

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export default function WeatherWise(props: ModeOptionProp) {
    const currLocation: LocationState = useAppSelector(selectLocation);
    const currWeather: WeatherInfo = useAppSelector(selectWeather);
    const swiperRef = useRef<SwiperType | null>(null);
    const dispatch = useAppDispatch();
    const currModeImgs = (props.mode) ? DarkEarthImgs : LightEarthImgs;

    useEffect(() => {
        if (swiperRef.current) swiperRef.current.slideTo(currLocation.activeIndex, 1200);
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
                    <ul className="areas-state flex-bet-center">
                        {
                            [0, 1, 2, 3].map((_, index)=> (
                                <li key={index} className={currLocation.activeIndex === index ? "active" : ""} onClick={() => setActiveBullets({index,dispatch, swiperRef})}>
                                    {currLocation.activeIndex === index && <NearMeIcon />}
                                    {currLocation.activeIndex !== index && <FiberManualRecordOutlinedIcon /> }
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <Swiper
                spaceBetween={80}
                slidesPerView={2}
                centeredSlides={true}
                grabCursor={true}
                initialSlide={currLocation.activeIndex}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(ind)=> setRandomCountryInfo({index: ind.activeIndex, dispatch})}
                className="slideArea"
                >
                {currModeImgs.map((value, index)=> (
                    <SwiperSlide>
                        {({isActive}) => (
                            <img src={value}  className={isActive ? "active" : "imgSlide"} loading="lazy" key={index} alt="Earth" />
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="contries">
                <p className="background-blur-8 arounded-40 m-auto-t15 border-w2">{`${currLocation.city}, ${currLocation.region}, ${currLocation.country}`}</p>
            </div>
        </div>
    );
}