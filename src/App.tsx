import { useRef } from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import '@assets/styles/global.css';
import Header from "@components/Header/Header";
import WeatherWise from '@components/WeatherWise/WeartherWise';
import WeatherChart from '@components/Content/components/WeatherChart/WeatherChart';
import WeatherContent from '@components/Content/WeatherContent';
import { getWeatherInfo } from '@utils/HelperFuncs';

// Redux Store Utilities
import { useAppSelector } from '@store/hooks';
import { selectLocation } from '@store/slices/locationSlice';
import HourlyForest from '@components/Content/components/HourlyForecast/HourlyForecast';
import useElementSize from '@hooks/useElementSize';


function App() {

  // Get Weather Details
  
  const [mode, setMode] = useState(true);

  const windowRef = useRef<HTMLElement>(document.documentElement);
  const [wWidth, wHeight] = useElementSize(windowRef);

  // Redux Store
  const Locationselector = useAppSelector(selectLocation)

  useEffect(() => {
    getWeatherInfo(Locationselector).then((res) => console.log(res));

    // Update Weather Data Every 15 Min
    // setInterval(async ():Promise<void> => {
    //   const weatherInfo = await fetch(`${WEATHER_API}&q=${Locationselector.city}`);
    //   const response = await weatherInfo.json();
    // }, 900000) 
  }, [Locationselector.city])

  return (
    <div>
      <div className="overlay"></div>
      <div className="container">
        <Header setMode={setMode} mode={mode}/>
        {wWidth >= 1024 ? <div className='sec-container desktop-ds'>
          <WeatherWise mode={mode}/>
          <div className='content-container flex-col'>
            <WeatherContent />
            <WeatherChart />
          </div>
        </div>
          :
        <div className="sec-container mobile-ds">
          <WeatherContent />
          <div className='content-container flex-col'>
            <HourlyForest />
            <WeatherChart />
            <WeatherWise mode={mode}/>
          </div>
        </div>
        }
      </div>
    </div>
  );
}

export default App;
