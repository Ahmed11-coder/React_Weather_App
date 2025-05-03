import React from "react";
import { useState, useRef } from "react";

import './WeatherWise.css';

// Import Icons
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import NearMeIcon from '@mui/icons-material/NearMe';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import DangerousRate from "./DangerousRate.tsx";

// Import Utilities 
import { DarkEarthImgs, LightEarthImgs } from "../../utils/LocalData.ts";
import { ModeOptionProp } from "../../types/types.ts";
import { setActiveBullets } from './Handlers.ts';

// Swiper Library
import {Swiper, SwiperSlide} from 'swiper/react'; // Import Swiper Components
import { Swiper as SwiperType } from 'swiper'; // Import Swiper Type

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export default function WeatherWise(props: ModeOptionProp) {
    const [activeIndex, setActiveIndex] = useState<number | null>(0); // Active Img
    const swiperRef = useRef<SwiperType | null>(null);
    const currModeImgs = (props.mode) ? DarkEarthImgs : LightEarthImgs;
    
    return (
        <div className="sidebar">
            <h2>WeatherWise</h2>
            <div className="status">
                <h5 className="side-h">Status</h5>
                <div className="screen">
                    <div className="info">
                        <div className="percentage" title="Porgress"><ArrowUpwardIcon />23.8%</div>
                        <div title="How?"><InfoOutlinedIcon/></div>
                    </div>
                    <div className="dan-curve">
                        <DangerousRate />
                    </div>
                </div>
                <a href="" className="more">See More Details {<KeyboardArrowRightIcon />}</a>
            </div>
            <div className="area">
                <div className="area-h">
                    <h5 className="side-h">Select Area</h5>
                    <ul className="areas-state">
                        {
                            [0, 1, 2, 3].map((_, index)=> (
                                <li key={index} className={activeIndex === index ? "active" : ""} onClick={() => setActiveBullets({index, setActiveIndex, swiperRef})}>
                                    {activeIndex === index && <NearMeIcon />}
                                    {activeIndex !== index && <FiberManualRecordOutlinedIcon /> }
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
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(ind)=> setActiveIndex(ind.activeIndex)}
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
                <p>Brooklyn, New York, USA</p>
            </div>
        </div>
    );
}