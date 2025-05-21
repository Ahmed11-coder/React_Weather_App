// Import Icons
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { WeatherIcons } from '../../utils/LocalData.ts';
import { tempData } from '../../utils/LocalData.ts';
import './WeatherContent.css';

import { useAppSelector } from '../../store/hooks.ts';
import { LocationState } from '../../types/types.ts';
import { selectLocation } from '../../store/slices/locationSlice.ts';

const currDay = tempData.find((day) => day.status);

export default function WeatherContent() {
  const currentLocation: LocationState = useAppSelector(selectLocation);

  return (
    <div id='content'>
      <p className='flex-center'>
        <LocationOnIcon />
        {`${currentLocation.city}, ${currentLocation.region}, ${currentLocation.country}`} <span>( {currDay!.day}, January 4 )</span>
      </p>
      <div className="content--info">
        <div className='left-side'>
          <div className="temp-info flex-center">
            <div className='curr-temp'>{currDay!.temp}&deg;</div>
            <div className="curr-temp-info flex-bet-center flex-col">
              <div className="hight-temp flex-bet-center border-w2 background-blur-3 arounded-40">H <span>{currDay!.temp+3}&deg;</span></div>
              <div className="lower-temp flex-bet-center border-w2 background-blur-3 arounded-40">L <span>{currDay!.temp-4}&deg;</span></div>
            </div>
          </div>

          <div className="temp-desc">
            <h1>Stormy<br/>with partly cloudy</h1>
          </div>
        </div>
        <div className='right-side flex-bet-center flex-col'>
          <div className="text-info">
            <p>With real time data and advanced technology, we provide reliable forecasts for any location around the world.</p>
          </div>
          <div className="searched--section flex-col">
            <div className='searched--section-header flex-bet-center'>
              <h6>Recently Searched</h6>
              <button type='button' className='flex-center'>See All <KeyboardArrowRightIcon /></button>
            </div>
            <div className='searched--section-content flex-bet-center'>
              <div className="box flex-bet-center background-blur-8 flex-col arounded-40 border-w2">
                <div className='temp-info flex-center'>
                  <img src={WeatherIcons[1]} alt="sunny" />
                  <span>16&deg;</span>
                </div>
                <div className='location-info'>
                  <p>Liverpool, UK</p>
                  <span>Partly Cloudy</span>
                </div>
              </div>
              <div className="box flex-bet-center background-blur-8 flex-col arounded-40 border-w2">
                <div className='temp-info flex-center'>
                  <img src={WeatherIcons[0]} alt="running" />
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
