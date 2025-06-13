import React, { useEffect, useRef, useState } from 'react'
import './DangerousRateStyle.css';
import { useAppSelector } from '@store/hooks';
import { selectWeather } from '@store/slices/weatherSlice';
import { Point, WeatherInfo } from 'types/types';
import { getDangPoint } from './Handler';
import useElementSize from 'hooks/useElementSize';

export default function DangerousRate({ percent = 0.85 }) {
    const dangPointRef = useRef(null);
    const dangBox = useRef(null);
    const rateBox = useRef(null);
    const [widthDangBox, setWidthDangBox] = useState<number>(0);
    const [heightDangBox, setHeightDangBox] = useState<number>(0);

    const [rateBoxWidth, rateBoxHeight]= useElementSize(rateBox);
    
    const currWeather: WeatherInfo = useAppSelector(selectWeather);
    const radius = 80;
    const circumference = Math.PI * radius;
    const offset = circumference * (1 - percent);
    
    const POINTS: Point[] = [
        {x: 10, y: rateBoxHeight - (rateBoxHeight/10)},
        {x: rateBoxWidth-50, y: rateBoxHeight- (rateBoxHeight*2/10)},
        {x: rateBoxWidth-10, y: 10}
    ];
    const {maxValue , minValue, value} = currWeather.status;
    const t = (value / (maxValue - minValue));
    let [dangPoint, controller]: Point[] = getDangPoint(t, POINTS);
    
    const dangBoxPos = {
        arrowRight: {left: (POINTS[0].x + dangPoint.x - widthDangBox - 25), top: (POINTS[0].y + dangPoint.y - heightDangBox + 10)},
        arrowBottom: {left: (POINTS[0].x + dangPoint.x - (widthDangBox/2)), top: (POINTS[0].y + dangPoint.y - heightDangBox - 20)}
    };

    useEffect(() => {
        [dangPoint, controller] = getDangPoint(t, POINTS);
        [...dangPointRef.current!["children"]].forEach((ele: (SVGAnimateElement | SVGAnimationElement)) => {
            ele.beginElement();
        });

        setWidthDangBox(dangBox.current!["offsetWidth"]);
        setHeightDangBox(dangBox.current!["offsetHeight"]);
    }, [t]);

    return (
        <div className='dang-rate' ref={rateBox}>
            <svg style={{width: "100%", height: "100%"}}>
                <defs>
                    <linearGradient id="dang-lvl">
                        <stop offset="0%" stopColor="#00bfff" />
                        <stop offset="70%" stopColor="#fff" />
                        <stop offset="75%" stopColor="#fff" />
                        <stop offset="100%" stopColor="#ec9c2a" />
                    </linearGradient>
                </defs>
                <path
                    className={"path"}
                    d={`M${POINTS[0].x} ${POINTS[0].y} Q ${POINTS[1].x} ${POINTS[1].y} ${POINTS[2].x} ${POINTS[2].y}`}
                    stroke="url(#dang-lvl)"
                    strokeWidth="8"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    fill="none"
                    strokeLinecap="round"
                />
                <circle r='1' cx={`${POINTS[0].x}`} cy={`${POINTS[0].y}`} fill="black" stroke="white" stroke-width="8" ref={dangPointRef}>
                    <animateMotion 
                        path={`M0 0 Q ${controller.x} ${controller.y} ${dangPoint.x} ${dangPoint.y}`} // 62.67 -0.69 77.6 -7.6 at 20%
                        begin="0s"
                        dur="1.25s"
                        calcMode="spline"
                        keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                        keyTimes="0;0.5;1"
                        fill="freeze"
                        repeatCount="1"
                        restart="always"
                    />
                    <animate
                        attributeType="XML"
                        attributeName="r"
                        calcMode="spline"
                        keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                        keyTimes="0;0.5;1"
                        begin="0.5s"
                        dur="1s"
                        to="7"
                        fill="freeze"
                        restart="always"
                    />
                    <animate
                        attributeType="XML"
                        attributeName="r"
                        calcMode="spline"
                        keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                        keyTimes="0;0.5;1"
                        begin="2s"
                        dur="3s"
                        values='7;5;7'
                        repeatCount="indefinite"
                        restart="always"
                    />
                </circle>
                <rect>

                </rect>
            </svg>
            <div className="dang-text" ref={dangBox} style={t >= 0.65 ? dangBoxPos.arrowRight : dangBoxPos.arrowBottom}>
                <div className="box">
                    <span className="t-label">{currWeather.status.text}</span>
                    {(t >= 0.65) ? <span className="arrow-right"></span> : <span className="arrow-down"></span>}
                </div>
            </div>
        </div>
    )
}
