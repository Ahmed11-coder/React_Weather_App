import React from 'react'
import "./dang.css";
export default function DangerousRate({ percent = 0.85 }) {
    const radius = 80;
    const circumference = Math.PI * radius;
    const offset = circumference * (1- percent);
    return (
        <div className='dang-rate'>
            <svg>
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
                    d={`M20 120 Q 230 110 280 10`}
                    stroke="url(#dang-lvl)"
                    strokeWidth="8"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    fill="none"
                    strokeLinecap="round"
                />
                <circle r='1' cx="20" cy="120" fill="black" stroke="white" stroke-width="8">
                    <animateMotion 
                        path="M0 0 Q 155 -7.5 220 -62"
                        begin="0s"
                        dur="1.25s"
                        calcMode="spline"
                        keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                        keyTimes="0;0.5;1"
                        fill="freeze"
                        repeatCount="1"
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
                    />
                </circle>
                {/* <circle className="circle" r='7' cx="250" cy="50" fill="black" stroke="white" stroke-width="8" /> */}
            </svg>
            <div className="dang-text">Dangerous</div>
        </div>
    )
}
