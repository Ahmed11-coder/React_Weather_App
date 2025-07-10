import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { WeatherInfo } from "types/types";
import { getWeatherInfo } from "@utils/HelperFuncs";
import { RootState } from "@store/store";

const initialState: WeatherInfo = await getWeatherInfo();

export const weatherSlice = createSlice({
    name: "weather",
    initialState,

    reducers: {
        setWeatherInfo: (state, action: PayloadAction<WeatherInfo>) => {
            state.air_quality = action.payload.air_quality;
            state.condition = action.payload.condition;
            state.date = action.payload.date;
            state.current_temp = action.payload.current_temp;
            state.feelslike_temp = action.payload.feelslike_temp;
            state.gust_kph = action.payload.gust_kph;
            state.humidity = action.payload.humidity;
            state.Current7Days = action.payload.Current7Days;
            state.precip_mm = action.payload.precip_mm;
            state.uv = action.payload.uv;
            state.vis_km = action.payload.vis_km;
            state.status = action.payload.status;
            state.wind_chill = action.payload.wind_chill;
            state.wind_kph = action.payload.wind_kph;
            state.max_temp = action.payload.max_temp;
            state.min_temp = action.payload.min_temp;
            state.HourlyForest = action.payload.HourlyForest;
            state.recommendation = action.payload.recommendation;
        }
    }
})

export const { setWeatherInfo } = weatherSlice.actions;
export default weatherSlice.reducer;
export const selectWeather = (state: RootState) => state.weather;