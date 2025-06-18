import Chart  from './Chart';
import { WeatherInfo } from 'types/types';

// Import Redux Store Utilities
import { useAppSelector } from '@store/hooks';
import { selectWeather } from '@store/slices/weatherSlice';

// Import Stlyes
import './WeatherChart.css';

export default function WeatherChart() {
    const currentWeather: WeatherInfo = useAppSelector(selectWeather);

    return (
        <div className='chart--container'>
            <h1 className='especial-header mobile-ds'>Day forecast:</h1>
            <div className="chart--box">
                <Chart />
                <div className="labels flex-bet-center">
                    {currentWeather.Current7Days.map((day, index) => (
                        <div key={index} className={`info flex-bet-center flex-col` + (day.status ? ' active' : "")}>
                            <span className='day'>{day.day}</span>
                            <span className='temp'>{Math.round(day.temp)}&deg;</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
