import { ResponsiveContainer , LineChart , Line , YAxis } from 'recharts'
import { CustomizedDot } from './Customize.tsx';
import { WeatherInfo } from '../../types/types.ts';

// Import Redux Store Utilities
import { useAppSelector } from '../../store/hooks.ts';
import { selectWeather } from '../../store/slices/weatherSlice.ts';

export default function Chart() {
    const currentWeather: WeatherInfo = useAppSelector(selectWeather);

    return (
        <ResponsiveContainer width='100%' height='100%'>
            <LineChart className='chart' data={currentWeather.Current7Days}>
                <defs>
                    <linearGradient id="colorUv">
                        <stop offset='0%' stopColor='white' stopOpacity={0.1}/>
                        <stop offset='20%' stopColor='white'/>
                        <stop offset='95%' stopColor='white'/>
                        <stop offset='100%' stopColor='white' stopOpacity={0.1}/>
                    </linearGradient>
                </defs>
                <YAxis hide={true} type='number' domain={[Math.min(...currentWeather.Current7Days.map(day => day.temp)) - 5 , Math.max(...currentWeather.Current7Days.map(day => day.temp)) + 5]}/>
                <Line type="monotone" dataKey="temp" dot={<CustomizedDot />} activeDot={false} stroke='url(#colorUv)'/>
            </LineChart>
        </ResponsiveContainer>
    )
}
