// Swiper Library
import {Swiper, SwiperSlide} from 'swiper/react'; // Import Swiper Components

// Import Utilities
import { LocationState, CustomSwiperProps } from '../../../../types/types.ts';
import { DarkEarthImgs, LightEarthImgs } from '../../../../utils/LocalData.ts';
import { setRandomCountryInfo } from '../Handlers.ts';

// Import Redux Store Utilities
import { useAppDispatch, useAppSelector } from '../../../../store/hooks.ts';
import { selectLocation } from '../../../../store/slices/locationSlice.ts';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


export default function EarthSwiper({setSwiper, mode}: CustomSwiperProps) {
    const currLocation: LocationState = useAppSelector(selectLocation);

    const dispatch = useAppDispatch();
    const currModeImgs = mode ? DarkEarthImgs : LightEarthImgs;

    return (
        <Swiper
            spaceBetween={80}
            slidesPerView={2}
            centeredSlides={true}
            grabCursor={true}
            initialSlide={currLocation.activeIndex}
            onSwiper={(swiper) => setSwiper(swiper)}
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
    )
}
