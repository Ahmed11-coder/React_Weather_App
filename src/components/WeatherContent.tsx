import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { tempData } from '../utils/tempData.ts';
import './content.css';

const currDay = tempData.find((day) => day.status);

export default function WeatherContent() {
  return (
    <div id='content'>
      <p>
        <LocationOnIcon />
        Brooklyn, New York, USA <span>( {currDay!.day}, January 4 )</span>
      </p>
      <div className="content--info">
        <div className='left-side'>
          <div className="temp-info">
            <div className='curr-temp'>{currDay!.temp}&deg;</div>
            <div className="curr-temp-info">
              <div className="hight-temp">H <span>{currDay!.temp+3}&deg;</span></div>
              <div className="lower-temp">L <span>{currDay!.temp-4}&deg;</span></div>
            </div>
          </div>

          <div className="temp-desc">
            <h1>Stormy<br/>with partly cloudy</h1>
          </div>
        </div>
        <div className='right-side'>
          <div className="text-info">
            <p>With real time data and advanced technology, we provide reliable forecasts for any location around the world.</p>
          </div>
          <div className="searched--section">
            <div className='searched--section-header'>
              <h6>Recently Searched</h6>
              <button type='button'>See All <KeyboardArrowRightIcon /></button>
            </div>
            <div className='searched--section-content'>
              <div className="box">
                <div className='temp-info'>
                  <img src={require('../assents/sunny.svg').default} alt="sunny" />
                  <span>16&deg;</span>
                </div>
                <div className='location-info'>
                  <p>Liverpool, UK</p>
                  <span>Partly Cloudy</span>
                </div>
              </div>
              <div className="box">
                <div className='temp-info'>
                  <img src={require('../assents/rainning.svg').default} alt="running" />
                  <span>-2&deg;</span>
                </div>
                <div className='location-info'>
                  <p>Palermo, Italy</p>
                  <span>Rain Thunder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
