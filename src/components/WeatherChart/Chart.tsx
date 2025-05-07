import React from 'react'
import { ResponsiveContainer , LineChart , Line , YAxis } from 'recharts'
import { CustomizedDot } from './Customize.tsx';
import { tempData } from '../../utils/LocalData.ts';

export default function Chart() {
    return (
        <ResponsiveContainer width='100%' height='100%'>
            <LineChart className='chart' data={tempData}>
                <defs>
                    <linearGradient id="colorUv">
                        <stop offset='0%' stopColor='white' stopOpacity={0.1}/>
                        <stop offset='20%' stopColor='white'/>
                        <stop offset='95%' stopColor='white'/>
                        <stop offset='100%' stopColor='white' stopOpacity={0.1}/>
                    </linearGradient>
                </defs>
                <YAxis hide={true} type='number' domain={[Math.min(...tempData.map(day => day.temp)) - 5 , Math.max(...tempData.map(day => day.temp)) + 5]}/>
                <Line type="monotone" dataKey="temp" dot={<CustomizedDot />} activeDot={false} stroke='url(#colorUv)'/>
            </LineChart>
        </ResponsiveContainer>
    )
}
