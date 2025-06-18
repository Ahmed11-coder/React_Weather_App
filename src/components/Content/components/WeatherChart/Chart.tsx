import { useRef } from 'react';

import { ResponsiveContainer , LineChart , Line , YAxis, CartesianGrid, XAxis } from 'recharts'
import { CustomizedDot } from './Customize';
import { WeatherInfo } from 'types/types';

// Import Redux Store Utilities
import { useAppSelector } from '@store/hooks';
import { selectWeather } from '@store/slices/weatherSlice';
import useElementSize from 'hooks/useElementSize';

export default function Chart() {
    const currentWeather: WeatherInfo = useAppSelector(selectWeather);
    const ref = useRef<HTMLElement>(document.documentElement);
    const [windowWidth, windowHeight]= useElementSize(ref);

    return (
        <ResponsiveContainer width='100%' height='100%'>
            <LineChart  className='chart' data={currentWeather.Current7Days}>
                <CartesianGrid strokeDasharray="3" vertical={false} className='grid-charts mobile-ds' style={{opacity: 0.3}} />
                <defs>
                    <linearGradient id="colorUv">
                        <stop offset='5%' stopColor='white' stopOpacity={0.1}/>
                        <stop offset='20%' stopColor='white'/>
                        <stop offset='90%' stopColor='white'/>
                        <stop offset='95%' stopColor='white' stopOpacity={0.1}/>
                    </linearGradient>
                </defs>
                <YAxis hide={!(windowWidth < 1024)} type='number' domain={[Math.min(...currentWeather.Current7Days.map(day => Math.round(day.temp))) - 5 , Math.max(...currentWeather.Current7Days.map(day => Math.round(day.temp))) + 5]} unit={'°'} tick={{ fill: 'white'}} tickLine={{ stroke: 'transparent' }} axisLine={false}/>
                <XAxis hide={!(windowWidth < 1024)} dataKey="day" type='category' tick={{ fill: 'white'}} tickLine={{ stroke: 'transparent' }} axisLine={false} tickFormatter={(value: string) => value.slice(0, 3)}/>
                <Line type="monotone" dataKey="temp" dot={<CustomizedDot />} activeDot={false} stroke='url(#colorUv)' strokeWidth={1.5} animationBegin={100}/>
            </LineChart>
        </ResponsiveContainer>
    )
}
