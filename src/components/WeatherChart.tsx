import React from 'react'
import { LineChart , Line , YAxis } from 'recharts'
import { tempData } from '../utils/tempData.ts';


const CustomizedDot = (props: any ) => {
    const {cx, cy, stroke, payload, value} = props;
    const ActivePoint = tempData.find((day) => day.status == 'active')?.temp;
    if (value === ActivePoint) {
        return (
            <svg x={cx - 50} y={cy - 50} width="300" height="300" >
                <defs>
                    <radialGradient id='lighting'>
                        <stop offset="0%" stop-color="white"/>
                        <stop offset="15%" stop-color="white"/>
                        <stop offset="50%" stopColor='white' stopOpacity={0.3}/>
                        <stop offset="90%" stop-color="white" stopOpacity={0.05}/>
                        <stop offset="100%" stop-color="white" stopOpacity={0.0}/>
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
            <line x1='50' y1="45" x2="50" y2="45" stroke='white' stroke-dasharray="3 3" strokeOpacity={0.45}>
                <animate
                    attributeType='XML'
                    attributeName='y2'
                    begin='0.5s'
                    dur='1s'
                    values='45;100%'
                    fill='freeze'
                />
            </line>
        </svg>
        );
    }else {
        return "";
    }
}

export default function WeatherChart() {
    return (
        <div className='chart--container'>
            <div className="chart--box">
                <LineChart className='chart' width={1300} height={300} data={tempData}>
                    <defs>
                        <linearGradient id="colorUv">
                            <stop offset='0%' stopColor='white' stopOpacity={0.1}/>
                            <stop offset='20%' stopColor='white'/>
                            <stop offset='95%' stopColor='white'/>
                            <stop offset='100%' stopColor='white' stopOpacity={0.1}/>
                        </linearGradient>
                    </defs>
                    {/* <CartesianGrid strokeDasharray="3 3"/> */}
                    <YAxis hide={true} type='number' domain={[Math.min(...tempData.map(day => day.temp)) - 5 , Math.max(...tempData.map(day => day.temp)) + 5]}/>
                    <Line type="monotone" dataKey="temp" dot={<CustomizedDot />} activeDot={false} stroke='url(#colorUv)'/>
                </LineChart>
                <div className="labels">
                    {tempData.map((day, index) => (
                        <div key={index} className={`info` + (day.status ? ' active' : "")}>
                            <span className='day'>{day.day}</span>
                            <span className='temp'>{day.temp}&deg;</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
