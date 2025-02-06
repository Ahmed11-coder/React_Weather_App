import React from "react";
import { useState, useRef } from "react";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import NearMeIcon from '@mui/icons-material/NearMe';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import {Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export interface Props {
    mode: boolean;
}

export default function WeatherWise(props: Props) {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const swiperRef = useRef(null);
    function handleClick(index: number) {
        setActiveIndex(index);
        swiperRef.current!.swiper.slideTo(index, 1200);
    }
    const DarkEarthImgs = [require("../assents/dark/Earth1.svg").default ,require("../assents/dark/Earth2.svg").default, require("../assents/dark/Earth3.svg").default, require("../assents/dark/Earth6.svg").default];
    const LightEarthImgs = [require("../assents/light/Earth1.svg").default ,require("../assents/light/Earth2.svg").default, require("../assents/light/Earth3.svg").default, require("../assents/light/Earth6.svg").default];
    return (
        <div className="sidebar">
            <h2>WeatherWise</h2>
            <div className="status">
                <h5 className="side-h">Status</h5>
                <div className="screen">
                    <div className="info">
                        <div className="percentage"><ArrowUpwardIcon />23.8%</div>
                        <InfoOutlinedIcon />
                    </div>
                    <div className="dan-curve">

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
                                <li key={index} className={activeIndex === index ? "active" : ""} onClick={() => handleClick(index)}>
                                    {activeIndex === index && <NearMeIcon />}
                                    {activeIndex !== index && <FiberManualRecordOutlinedIcon /> }
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <Swiper 
                spaceBetween={60}
                slidesPerView={2}
                centeredSlides={true}
                grabCursor={true}
                ref={swiperRef}
                onSlideChange={(ind)=> setActiveIndex(ind.activeIndex)}
                className="slideArea"
                >
                {props.mode && DarkEarthImgs.map((value, index)=> (
                    <SwiperSlide>
                        {({isActive}) => (
                            <img src={value} className={isActive ? "active" : "imgSlide"} loading="lazy" key={index} alt="Earth" />
                        )}
                    </SwiperSlide>
                ))}
                {!props.mode && LightEarthImgs.map((value, index)=> (
                    <SwiperSlide>
                        {({isActive}) => (
                            <img src={value} className={isActive ? "active" : "imgSlide"} loading="lazy" key={index} alt="Earth" />
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="contries">
                <p>Brooklyn,New York,USA</p>
            </div>
        </div>
    );
}