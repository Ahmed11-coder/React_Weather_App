import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import '@assents/styles/global.css';
import Header from "@components/Header/Header";
import WeatherWise from '@components/WeatherWise/WeartherWise';
import WeatherChart from '@components/Content/components/WeatherChart/WeatherChart';
import WeatherContent from '@components/Content/WeatherContent';
import { getWeatherInfo } from '@utils/HelperFuncs';

// Redux Store Utilities
import { useAppSelector } from '@store/hooks';
import { selectLocation } from '@store/slices/locationSlice';
import HourlyForest from '@components/Content/components/HourlyForecast/HourlyForecast';
import useElementSize from 'hooks/useElementSize';


function App() {

  // Get Weather Details
  const [photo, setPhoto] = useState("");
  const [mode, setMode] = useState(true);

  const windowRef = useRef<HTMLElement>(document.documentElement);
  const [wWidth, wHeight] = useElementSize(windowRef);

  // Redux Store
  const Locationselector = useAppSelector(selectLocation)

  async function getData(URL :string) {
    let myObject = await fetch(URL);
    let myData = await myObject.json();
    console.log(myData); // Show Weather Details In Console
    return myData;
  }

  // Get Wallpaper URL From Pexels And Sava It In Photo Const Variable
  async function getWall(URL: string) {
    let myObject = await fetch(URL, {
      method: 'GET',
      headers: {
        Authorization: "M2UdQKOPRqhNonk0Gi79SG1voSTnUdO9tnHu09jl0ozm731QpV72ktD4"
      }
    })
    let data = await myObject.json();
    // Set Photo Value Using setPhoto With Random Wallpaper URL
    setPhoto(data["photos"][`${Math.round(Math.random() * data["photos"].length)}`]["src"]["original"]);
  }
  
// For Night Cloud Write (Dark Clouds)

  // Fetch Data When Page Load
  //useEffect(() => {
    // Fetch Weather Details From ( weatherapi )
    // getWall(`https://api.pexels.com/v1/search?query=Clouds&per_page=30&orientation=landscape`);
    /*
    const WeatherData = getData("http://api.weatherapi.com/v1/forecast.json?key=6a6672e6e55047b5a3690358252701&q=cairo&days=3&aqi=yes&alerts=yes");
    const prevDay = getData("http://api.weatherapi.com/v1/history.json?key=6a6672e6e55047b5a3690358252701&q=cairo&dt=2025-02-05");
    WeatherData.then((result) => {
      // Get Wallpaper That Has Weather Discription From Pexels API
      getWall(`https://api.pexels.com/v1/search?query=${result["current"]["condition"]["text"]} sky&per_page=30&orientation=landscape`);
    });
    */
  //}, [])

// console.log(store.getState()["location"]);
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
