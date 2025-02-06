import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Header from "./components/header.tsx";
import WeatherWise from './components/wearthwise.tsx';
import { getYesterday } from './utils/index.ts';
function App() {

  // Get Weather Details
  const [photo, setPhoto] = useState("");
  const [mode, setMode] = useState(true);
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
  useEffect(() => {
    // Fetch Weather Details From ( weatherapi )
    getWall(`https://api.pexels.com/v1/search?query=Clouds&per_page=30&orientation=landscape`);
    /*
    const WeatherData = getData("http://api.weatherapi.com/v1/forecast.json?key=6a6672e6e55047b5a3690358252701&q=cairo&days=3&aqi=yes&alerts=yes");
    const prevDay = getData("http://api.weatherapi.com/v1/history.json?key=6a6672e6e55047b5a3690358252701&q=cairo&dt=2025-02-05");
    WeatherData.then((result) => {
      // Get Wallpaper That Has Weather Discription From Pexels API
      getWall(`https://api.pexels.com/v1/search?query=${result["current"]["condition"]["text"]} sky&per_page=30&orientation=landscape`);
    });
    */
  }, [])

  // Style Of Background Image
  const myStyle = {
    backgroundImage: `url(${photo})`,
    // Make Image Full Screen
    backgroundSize: 'cover',
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  }

  return (
    <div style={myStyle}>
      <div className="overlay"></div>
      <div className="container">
        <Header setMode={setMode} mode={mode}/>
        <WeatherWise mode={mode}/>
      </div>
    </div>
  );
}

export default App;
