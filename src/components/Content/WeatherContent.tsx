// Import Utilities
import { LocationState, SearchedItemPros, WeatherInfo } from 'types/types';

// Import Redux Store Utilities
import { useAppSelector } from '@store/hooks';
import { selectLocation } from '@store/slices/locationSlice';
import { selectWeather } from '@store/slices/weatherSlice';

// Import Icons
import { MapPin , ArrowRight } from 'lucide-react';
import { WeatherIcons } from '@utils/LocalData';

// Import Stlyes
import './WeatherContent.css';
import { useEffect, useState } from 'react';
import SearchedItem from './components/SearchedItem/SearchedItem';

export default function WeatherContent() {
  const currentLocation: LocationState = useAppSelector(selectLocation);
  const currentWeather: WeatherInfo = useAppSelector(selectWeather);
  const [searchItems, setSearchItems] = useState<SearchedItemPros[]>([])

  useEffect(() => {
    const Item : SearchedItemPros = {
      temp: currentWeather.feelslike_temp,
      icon: WeatherIcons[1],
      location: `${currentLocation.city}, ${currentLocation.country}`,
      text: currentWeather.condition.text
    }
    
    if (searchItems.length < 2) setSearchItems([Item, ...searchItems]);
    else setSearchItems([Item, searchItems[0]]);

    console.log(searchItems);
  }, [currentLocation.city])

  return (
    <div id='content'>
      <p className='flex-center'>
        <MapPin strokeWidth={1} className='icon'/>
        <div className='info flex-bet-center'>
          {`${currentLocation.city}, ${currentLocation.region}, ${currentLocation.country}`} <span>{currentWeather.date}</span>
        </div>
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
