import { useAppSelector } from '@store/hooks';
import { selectWeather } from '@store/slices/weatherSlice';
import { CircleGauge, Droplet, Eye, SunDim, Thermometer, Wind } from 'lucide-react';
import './status.css'
import React from 'react'

export default function Status(prop: {swipe: boolean}) {
    const {uv, feelslike_temp, humidity, wind_kph, precip_mm, vis_km} = useAppSelector(selectWeather);
    const content = [
        {title: "UV", text: uv, icon: <SunDim />},
        {title: "Feels like", text: `${feelslike_temp}°`, icon: <Thermometer />},
        {title: "Humidity", text: `${humidity}%`, icon: <Droplet />},
        {title: "NNW wind", text: `${wind_kph} km/h`, icon: <Wind />},
        {title: "Air pressure", text: `${precip_mm} hPa`, icon: <CircleGauge />},
        {title: "Visibility", text: `${vis_km} km`, icon: <Eye />}
    ]
    return (
        <div className={`mobile-ds status-info ${prop.swipe ? "switch-status" : ""}`}>
            {
                content.map((data, key) => (
                    <div key={key} className='item-info flex-col flex-bet-center'>
                        {data.icon}
                        <span className='item-title'>{data.title}</span>
                        <span>{data.text}</span>
                    </div>
                ))
            }
        </div>
    )
}
