import React from 'react'
import { tempData } from '../../utils/LocalData.ts';
import Chart  from './Chart.tsx';
import './WeatherChart.css';

export default function WeatherChart() {
    return (
        <div className='chart--container'>
            <div className="chart--box">
                <Chart />
                <div className="labels flex-bet-center">
                    {tempData.map((day, index) => (
                        <div key={index} className={`info flex-bet-center flex-col` + (day.status ? ' active' : "")}>
                            <span className='day'>{day.day}</span>
                            <span className='temp'>{day.temp}&deg;</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
