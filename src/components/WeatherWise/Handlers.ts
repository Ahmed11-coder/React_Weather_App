import { GEO_API_URL, geoApiOptions } from "../../services/api.ts";
import { setLocation, userLocation } from "../../store/slices/locationSlice.ts";
import { ChangeBulletsProp, SwiperEarthChange, LocationState } from "../../types/types";
import { getRandomCountry, getRandomIndex } from "../../utils/HelperFuncs.ts";
import { ContinentIndex } from "../../utils/LocalData.ts";
// import { RANDOM_CITY_API } from "../../services/api";
// Handle Click Event When Swip From Image To Image ( Make It Active & Unactive The Last One )

export const setRandomCountryInfo = async ({ index, dispatch }: SwiperEarthChange) : Promise<void> => {
    if (!userLocation.isSearch && userLocation.activeIndex === index) {
        dispatch(setLocation(userLocation));
        return ;
    } else if (userLocation.isSearch && userLocation.activeIndex === index) {
        userLocation.isSearch = false;
        return;
    }
    const Continent = ContinentIndex[index]; // Get Possible Continents Using Index (Index Represent to the Earth Regions)
    const RandomIndex = getRandomIndex(Continent.length); // Get Random index (That Mean Choose Random Continent In This Region)
    const { capital, continentName, countryCode } = getRandomCountry(Continent[RandomIndex]); // Get Random Country
    let locate , cityRegion;

    try{
        const response = await fetch(`${GEO_API_URL}/cities?namePrefix=${capital}`, geoApiOptions)
        const result = await response.json();
        locate = `${result.data[0].latitude},${result.data[0].longitude}`;
        cityRegion = result.data[0]["region"];
        const RandomCity: LocationState = { city: capital, country: countryCode, locate: locate, region: cityRegion, continent: continentName, activeIndex: index};
        console.log(RandomCity, '-');
        dispatch(setLocation(RandomCity));
    } catch (e) {
        console.log(e);
    }
}


export const setActiveBullets = async ({index, dispatch ,swiperRef}: ChangeBulletsProp): Promise<void> => {
    try{
        await setRandomCountryInfo({index, dispatch});
        if (swiperRef.current) swiperRef.current.slideTo(index, 1200);
    } catch (e) {
        console.log(e);
    }
}