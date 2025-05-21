import React , { useEffect, useState } from 'react'

// Import AsyncPaginate Library
import { AsyncPaginate } from 'react-select-async-paginate';

// Import APIs
import { GEO_API_URL, geoApiOptions } from '../../services/api.ts';

// Import Redux Store Utilities
import { useAppDispatch } from '../../store/hooks.ts';
import { setLocation, userLocation } from '../../store/slices/locationSlice.ts';

// Import Utilities 
import { SearchProp, LocationState } from '../../types/types.ts';
import { getCityInfo, getContinentIndex } from '../../utils/HelperFuncs.ts';

export default function Search({isOpen} : SearchProp) {
    const [search, setSearch] = useState<string|null>(null);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(!isOpen) setSearch(null);
    }, [isOpen])

    const colorStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: "transparent",
            color: "white",
            transition: "0.5s",
            opacity: `${isOpen? 1 : 0}`,
            fontSize: '1.25rem',
            border: 'none',
            outline: 'none',
            boxShadow: "none",
            casetColor: "white",
            cursor: 'text',
        }),
        
        singleValue: (styles: any) => ({
            ...styles,
            color: "white",
        }),
        
        menuPortal: (styles : any) => ({
            ...styles,
            zIndex: 1,
        }),
        input: (styles: any) => ({
            ...styles,
            color: "white",

        }),
        menu: (styles: any) => ({
            ...styles,
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            backdropFilter: 'blur(6px)',
            border: "1px solid black",
        }),
        option: (styles: any) => ({
            ...styles,
            backgroundColor: "",
            color: "white",
        })
    }

    const loadOptions = (inputValue: string)  =>  {
        return fetch(`${GEO_API_URL}/cities?minPopulation=500000&namePrefix=${inputValue}`, geoApiOptions)
        .then((response) => response.json())
        .then((response) => {
            return {
                options: response.data.map((city) => {
                    return {label: `${city.name}, ${city.countryCode}`, value: `${city.latitude},${city.longitude}`, country: city.countryCode, city: city.name, region: city.region}
                })
            }
        })
    }

    const handleChange = async (searchData) => {
        setSearch(searchData);
        const { city, country, value, region } = searchData;
        const continent = getCityInfo(country)[0]; 
        const data: LocationState = { city: city, country: country, locate: value, region: region, continent: continent["continentName"], activeIndex: getContinentIndex(continent["continentName"])};
        if (userLocation.activeIndex === data.activeIndex) userLocation.isSearch = true;
        dispatch(setLocation(data));
    } 

    return (
        <AsyncPaginate
            placeholder="Search for city"
            loadOptions={loadOptions}
            debounceTimeout={600}
            components={{
                IndicatorSeparator: () => null,
                DropdownIndicator: () => null
            }}
            value={search}
            menuPortalTarget={document.body}
            onChange={handleChange}
            styles={colorStyles}
            className='search-bar'/>
    )
}
