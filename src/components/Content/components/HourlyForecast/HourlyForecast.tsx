import React from 'react'
import './HourlyForecast.css';
import { WeatherInfo } from 'types/types';
import { useAppSelector } from '@store/hooks';
import { selectWeather } from '@store/slices/weatherSlice';
import { WeatherIcons } from '@utils/LocalData';

export default function HourlyForest() {
    const currentWeather: WeatherInfo = useAppSelector(selectWeather);

    return (
        <div className='hourly-forest'>
            <h3 className='especial-header'>Hourly Forecast: </h3>
            <div className='hourly-temp'>
                {
                    currentWeather.HourlyForest.map((hourInfo, key) => (
                        <div className='item flex-col flex-center' key={key}>
                            <span className='hour'>{key == 0 ? "Now" : (hourInfo.hour % 12)||12}<span>{key == 0 ? "": (hourInfo.hour >= 0 && hourInfo.hour <= 12 ? "AM" : "PM")}</span></span>
                            <img src={WeatherIcons.find((icon: { codes: number[]; }) => icon.codes.includes(currentWeather.condition.iconCode))?.icon} alt="icon" />
                            <span className='deg'>{Math.round(hourInfo.temp)}&deg;</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
