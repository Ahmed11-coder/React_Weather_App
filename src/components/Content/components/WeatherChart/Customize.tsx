import { WeatherInfo } from 'types/types';

// Import Redux Store Utilities
import { useAppSelector } from '@store/hooks';
import { selectWeather } from '@store/slices/weatherSlice';

export const CustomizedDot = (props: any ) => {
    const currentWeather: WeatherInfo = useAppSelector(selectWeather);
    const {cx, cy, stroke, payload, value, height} = props;
    const ActivePoint = currentWeather.Current7Days.find((day) => day.status == 'active')?.temp;
    if (value === ActivePoint && payload.status) {
        return (
            <svg x={cx - 50} y={cy - 50} width="100%" height="100%">
                <defs>
                    <radialGradient id='lighting'>
                        <stop offset="0%" stopColor="white"/>
                        <stop offset="15%" stopColor="white"/>
                        <stop offset="50%" stopColor='white' stopOpacity={0.3}/>
                        <stop offset="90%" stopColor="white" stopOpacity={0.05}/>
                        <stop offset="100%" stopColor="white" stopOpacity={0.0}/>
                    </radialGradient>
                </defs>
            <circle r="0" cx="50" cy="50" fill="url(#lighting)">
                <animate
                    attributeType="XML"
                    attributeName="r"
                    calcMode="spline"
                    keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                    keyTimes="0;0.5;1"
                    begin="0s"
                    dur="0.3s"
                    to="40"
                    from="0"
                    fill="freeze"
                />
                <animate
                    attributeType="XML"
                    attributeName="r"
                    calcMode="spline"
                    keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                    keyTimes="0;0.5;1"
                    begin="1s"
                    dur="4s"
                    values='40;35;40'
                    repeatCount="indefinite"
                />
            </circle>
            <line x1='50' y1="45" x2="50" y2="45" stroke='white' strokeDasharray="3 3" strokeOpacity={0.45} >
                <animate
                    attributeType='XML'
                    attributeName='y2'
                    begin='0.5s'
                    dur='1s'
                    from="45"
                    to={height - cy + 55}
                    fill='freeze'
                />
            </line>
        </svg>
        );
    }else {
        return <></>;
    }
}