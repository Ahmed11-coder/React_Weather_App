// Import Utilities
import { LocationState, SearchedItemPros, WeatherInfo } from 'types/types';

// Import Redux Store Utilities
import { useAppSelector } from '@store/hooks';
import { selectLocation } from '@store/slices/locationSlice';
import { selectWeather } from '@store/slices/weatherSlice';

// Import Icons
import { MapPin , ArrowRight } from 'lucide-react';
import { WeatherCodes, WeatherIcons } from '@utils/LocalData';

// Import Stlyes
import './WeatherContent.css';
import { useEffect, useRef, useState } from 'react';
import SearchedItem from './components/SearchedItem/SearchedItem';

export default function WeatherContent() {
  const currentLocation: LocationState = useAppSelector(selectLocation);
  const currentWeather: WeatherInfo = useAppSelector(selectWeather);
  const [searchItems, setSearchItems] = useState<SearchedItemPros[]>([])

  const prevWeatherRef = useRef(0);
  const prevLocationRef = useRef("");
  useEffect(() => {

    const weatherChanged = prevWeatherRef.current !== currentWeather?.feelslike_temp;
    const locationChanged = prevLocationRef.current !== currentLocation?.locate;

    if (weatherChanged && locationChanged) {
      const Item : SearchedItemPros = {  
        temp: currentWeather.feelslike_temp,
        icon: WeatherIcons.find((icon: { codes: number[]; }) => icon.codes.includes(currentWeather.condition.iconCode))?.icon,
        location: `${currentLocation.city}, ${currentLocation.country}`,
        text: currentWeather.condition.text
      }

      if (searchItems.length == 0) setSearchItems([Item]);
      else setSearchItems([Item, searchItems[0]]);

      prevWeatherRef.current = currentWeather?.feelslike_temp;
      prevLocationRef.current = currentLocation?.locate;
    }
    
  }, [currentWeather?.feelslike_temp, currentLocation?.locate])

  return (
    <div id='content'>
      <p className='flex-center'>
        <MapPin strokeWidth={1} className='icon'/>
        <span className='info flex-bet-center'>
          {`${currentLocation.city}, ${currentLocation.region}, ${currentLocation.country}`} <span>{currentWeather.date}</span>
        </span>
      </p>
      <div className="content--info flex-bet-center">
        <div className='left-side'>
          <div className="temp-info flex-center">
            <div className='curr-temp'>{currentWeather.current_temp}&deg;</div>
            <div className="curr-temp-info flex-bet-center flex-col">
              <div className="hight-temp flex-bet-center border-w2 background-blur-3 arounded-40">H <span>{currentWeather.max_temp}&deg;</span></div>
              <div className="lower-temp flex-bet-center border-w2 background-blur-3 arounded-40">L <span>{currentWeather.min_temp}&deg;</span></div>
            </div>
          </div>

          <div className="temp-desc">
            <h1>{currentWeather.condition.text}</h1>
          </div>
        </div>
        <div className='right-side flex-bet-center flex-col'>
          <div className="text-info">
            <p>With real time data and advanced technology, we provide reliable forecasts for any location around the world.</p>
          </div>
          <div className="searched--section flex-col">
            <div className='searched--section-header flex-bet-center'>
              <h6>Recently Searched</h6>
              <button type='button' className='flex-center'>See All <ArrowRight strokeWidth={1} className='icon'/></button>
            </div>
            <div className='searched--section-content flex-center'>
              {searchItems?.map((item, key) => (
                <SearchedItem  key={key} temp={item.temp} icon={item.icon} location={item.location} text={item.text}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
