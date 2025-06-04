import React from 'react'

// Import Icons
import NearMeIcon from '@mui/icons-material/NearMe';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';

// Import Utilities 
import { setActiveBullets } from '../Handlers';

// Import Redux Store Utilities
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { LocationState } from '../../../../types/types';
import { selectLocation } from '../../../../store/slices/locationSlice';

// Swiper Library
import { Swiper as SwiperType } from 'swiper'; // Import Swiper Type

export default function EarthBullets({swiperRef}: {swiperRef: SwiperType | null}) {
    const currLocation: LocationState = useAppSelector(selectLocation);
    const dispatch = useAppDispatch();

    return (
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
    )
}
